import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrans } from './add-trans';

describe('AddTrans', () => {
  let component: AddTrans;
  let fixture: ComponentFixture<AddTrans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTrans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
