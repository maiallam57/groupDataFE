import { ResponseBody } from './../../interfaces/ResponseBody';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UploadFileService } from '../../services/uploadFile/upload-file.service';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.css'
})
export class FileInputComponent {

  uploadForm: FormGroup;
  file!: any;

  @Output() responseList = new EventEmitter<ResponseBody>();

  constructor(private _formBuilder: FormBuilder, private _uploadFileService: UploadFileService) {
    this.uploadForm = this._formBuilder.group({
      file: [null]
    });
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.uploadForm.patchValue({
        file: this.file
      });
      this.onSubmit();
    }
  }

  onSubmit() {
    console.log('onSubmit', this.uploadForm);

    if (this.uploadForm.valid) {
      const formData = new FormData();
      formData.append('file', this.uploadForm.get('file')?.value);

      this._uploadFileService.uploadFile(formData).subscribe({
        next: (res) => {
          this.responseList.emit(res);
        },
        error: (err) => {
          console.error('Upload failed', err);
        }
      })
    }
  }

}
