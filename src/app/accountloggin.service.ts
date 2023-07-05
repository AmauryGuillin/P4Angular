import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountLoggin } from './models/accountLoggin.model';

@Injectable({
  providedIn: 'root',
})
export class AccountlogginService {
  private allAccountLogginUrl = 'http://localhost:8080/api/account/all';

  constructor(private http: HttpClient) {}

  getAllAccountLoggin() {
    return this.http.get<any[]>(this.allAccountLogginUrl);
  }

  deleteAccountLoggin(accountId: number) {
    const url = `http://localhost:8080/api/account/remove/${accountId}`;
    return this.http.delete(url);
  }

  createAccountLogin(account: AccountLoggin): Observable<AccountLoggin> {
    const url = 'http://localhost:8080/api/account/create';
    return this.http.post<AccountLoggin>(url, account);
  }
}
