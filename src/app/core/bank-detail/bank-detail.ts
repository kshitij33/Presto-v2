import { Component } from '@angular/core';

interface DetailList {
  id: number;
  bankId: number;
  bankBranchName: string;
  bankBranchAdd: string;
  bankBranchCity: string;
  bankBranchPhone: string;
  message: string | null;
}
@Component({
  selector: 'app-bank-detail',
  imports: [],
  templateUrl: './bank-detail.html',
  styleUrl: './bank-detail.css',
})
export class BankDetail {
  detailList: DetailList[] = [
    {
      id: 1,
      bankId: 12,
      bankBranchName: "First",
      bankBranchAdd: "test",
      bankBranchCity: "test",
      bankBranchPhone: "987898789",
      message: null
    }
];
}
