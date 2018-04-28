import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

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

    constructor (private http: HttpClient) {
        this.http.get('/menuItems')
        .subscribe(
            (data) => {
                this.menuItems = data['menuItems'];
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
