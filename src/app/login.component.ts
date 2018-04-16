import { Component, Injectable } from '@angular/core';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html'
})
@Injectable()
export class LoginComponent {
    userName: string;
    passWord: string;
    loginChecked() {
        console.log(`this.userName : ${this.userName}`);
        console.log(`this.passWord : ${this.passWord}`);
    }
}
