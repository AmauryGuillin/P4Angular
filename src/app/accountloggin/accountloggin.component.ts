import { Component, OnInit } from '@angular/core';
import { AccountlogginService } from '../accountloggin.service';
import { HttpClient } from '@angular/common/http';
import { AccountLoggin } from '../models/accountLoggin.model';

@Component({
  selector: 'app-accountloggin',
  templateUrl: './accountloggin.component.html',
  styleUrls: ['./accountloggin.component.scss'],
})
export class AccountlogginComponent implements OnInit {
  accountLoggins!: any[];
  account: AccountLoggin = new AccountLoggin();

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
        console.log('User deleted with success');
        this.fetchAccountLoggins();
      },
      error: (error) => {
        console.log(
          `There was a problem when deleteting a user (id = ${accountId}) : ${error}`
        );
      },
    });
  }

  createAccount() {
    this.accountLogginService.createAccountLogin(this.account).subscribe({
      next: () => {
        console.log('account created with succcess');
        this.fetchAccountLoggins();
      },
      error: (error) => {
        console.log(`There was a problem when creating a user : ${error}`);
      },
    });
  }
}
