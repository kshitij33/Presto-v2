import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeBankingTips } from './safe-banking-tips';

describe('SafeBankingTips', () => {
  let component: SafeBankingTips;
  let fixture: ComponentFixture<SafeBankingTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SafeBankingTips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeBankingTips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
