import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedDataComponent } from './grouped-data.component';

describe('AccordionComponent', () => {
  let component: GroupedDataComponent;
  let fixture: ComponentFixture<GroupedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupedDataComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GroupedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
