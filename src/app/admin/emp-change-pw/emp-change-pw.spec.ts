import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpChangePw } from './emp-change-pw';

describe('EmpChangePw', () => {
  let component: EmpChangePw;
  let fixture: ComponentFixture<EmpChangePw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpChangePw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpChangePw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
