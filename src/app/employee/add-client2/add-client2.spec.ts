import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClient2 } from './add-client2';

describe('AddClient2', () => {
  let component: AddClient2;
  let fixture: ComponentFixture<AddClient2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClient2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClient2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
