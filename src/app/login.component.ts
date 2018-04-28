import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-login-component',
    templateUrl: './login.component.html'
})
@Injectable()
export class LoginComponent {
    username: string;
    password: string;
    constructor(private http: Http) {
    }

    loginClicked() {
        console.log(`this.username : ${this.username}`);
        console.log(`this.password : ${this.password}`);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const jsonPacket = {
            username: this.username,
            password: this.password
        };

        this.http.post('/login', jsonPacket, {
            headers: headers
        })
            .map(res => res.text())
            .subscribe(
                data => data,
                err => {
                    console.log(`error : ${err}`);
                },
                () => {
                    console.log(`success`);
                }
            );
    }

}
