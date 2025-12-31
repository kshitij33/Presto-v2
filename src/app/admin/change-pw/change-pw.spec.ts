import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePw } from './change-pw';

describe('ChangePw', () => {
  let component: ChangePw;
  let fixture: ComponentFixture<ChangePw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangePw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
