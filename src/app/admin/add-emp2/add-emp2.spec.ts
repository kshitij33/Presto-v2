import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmp2 } from './add-emp2';

describe('AddEmp2', () => {
  let component: AddEmp2;
  let fixture: ComponentFixture<AddEmp2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmp2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmp2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
