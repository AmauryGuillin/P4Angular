import { Component, OnInit } from '@angular/core';
import { AccountlogginService } from '../accountloggin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accountloggin',
  templateUrl: './accountloggin.component.html',
  styleUrls: ['./accountloggin.component.scss'],
})
export class AccountlogginComponent implements OnInit {
  accountLoggins!: any[];

  constructor(private accountLogginService: AccountlogginService) {}

  ngOnInit(): void {
    this.fetchAccountLoggins();
  }

  fetchAccountLoggins() {
    this.accountLogginService.getAllAccountLoggin().subscribe({
      next: (data) => {
        this.accountLoggins = data;
      },
      error: (error) => {
        throw new Error(
          `Erreur lors de la récupération des données : ${error}`
        );
      },
    });
  }

  deleteAccountById(accountId: number) {
    this.accountLogginService.deleteAccountLoggin(accountId).subscribe({
      next: () => {
        console.log('OK');
        this.fetchAccountLoggins();
      },
      error: (error) => {
        console.log(`KO : ${error}`);
      },
    });
  }
}
