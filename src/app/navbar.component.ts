import { Component, Injectable } from '@angular/core';

interface IButtonName {
    ButtonName: string;
}

@Component({
    selector: 'app-navbar-component',
    templateUrl: './navbar.component.html'
})
@Injectable()
export class NavbarComponent {
    menuItems: IButtonName [] = [
        { ButtonName: 'About'},
        { ButtonName: 'Contact'}
    ];
}
