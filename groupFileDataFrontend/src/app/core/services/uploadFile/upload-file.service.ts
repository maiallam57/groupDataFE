import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private readonly _httpClient = inject(HttpClient);

  uploadFile(file: any): Observable<any> {
    return this._httpClient.post(environment.baseUrl + environment.uploadFile, file);
  }

}
