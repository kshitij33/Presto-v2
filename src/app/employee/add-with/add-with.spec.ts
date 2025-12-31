import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWith } from './add-with';

describe('AddWith', () => {
  let component: AddWith;
  let fixture: ComponentFixture<AddWith>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWith]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWith);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
