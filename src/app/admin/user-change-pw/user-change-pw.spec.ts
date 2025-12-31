import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangePw } from './user-change-pw';

describe('UserChangePw', () => {
  let component: UserChangePw;
  let fixture: ComponentFixture<UserChangePw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserChangePw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserChangePw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
