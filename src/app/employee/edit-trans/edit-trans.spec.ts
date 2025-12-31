import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrans } from './edit-trans';

describe('EditTrans', () => {
  let component: EditTrans;
  let fixture: ComponentFixture<EditTrans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTrans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
