import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

interface IButtonName {
    ButtonName: string;
}

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.component.html'
})
@Injectable()
export class NavbarComponent {
    menuItems: IButtonName [];

    constructor (private http: Http) {
        console.log('navbar component constructor');
        this.http.get('/menuItems')
        .map(res => res.text())
        .subscribe(
            (data) => {
                const jsonResponse = JSON.parse(data);
                this.menuItems = jsonResponse.menuItems;
            },
            err => {
                console.log(`error: ${err}`);
            },
            () => {
                console.log(`navbar success`);
            }
        );
    }
}
