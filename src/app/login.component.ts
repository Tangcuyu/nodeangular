import { Component, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html'
})
@Injectable()
export class LoginComponent {
    userName: string;
    passWord: string;

    constructor (private http: Http) {
    }

    loginChecked() {
        console.log(`this.userName : ${this.userName}`);
        console.log(`this.passWord : ${this.passWord}`);

        const headers = new Headers();
       // headers.append('Content-Type', 'application/json');

        const options = new RequestOptions({ headers: headers });

        const jsonPacket = {
            userName: this.userName,
            passWord: this.passWord
        };

        this.http.post('/login', 'jsonPacket', options)
        .map(res => res.text())
        .subscribe(
            (data) => {
                data = JSON.parse(data);
            },
            err => {
                console.log(`login component error: ${err}`);
            },
            () => {
                console.log(`login component success`);
            }
        );
    }
}
