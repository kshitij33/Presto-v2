import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPortal } from './login-portal';

describe('LoginPortal', () => {
  let component: LoginPortal;
  let fixture: ComponentFixture<LoginPortal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPortal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPortal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
