
import { Component } from '@angular/core';
import { AccountSummary } from '../../shared/account-summary.type';
import { AccountType } from '../../shared/account-type.enum';

@Component({
    selector: 'account-list',
    templateUrl: './account-list.component.html'
})
export class AccountListComponent {

    cashAccounts: AccountSummary[];
    creditAccounts: AccountSummary[];

    constructor() {
        this.cashAccounts = [
            { accountNumber: '123-234-4567', balance: 1234.56, name: 'Checking', type: AccountType.Checking },
            { accountNumber: '123-234-4567', balance: 2134.56, name: 'Saving', type: AccountType.Savings }
        ];

        this.creditAccounts = [
            { accountNumber: '1111-2222-3333-4444', balance: 1234.56, name: 'Credit', type: AccountType.Credit }
        ]
    }
}
