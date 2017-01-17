import { NavigationEnd, UrlSerializer } from '@angular/router';
import { Headers } from '@angular/http';
import { Component, Input, style } from '@angular/core';

//import model

import { User } from './shared/models/user'

@Component({
    selector: 'my-App',
    templateUrl: './app/app.component.html',
    styleUrls: [`./app/app.component.css`]

})

export class AppComponent {
    message: string = 'halo'
    users: User[] = [
        { id: 23, name: 'yayan', username: 'yayanbachtiar' },
        { id: 25, name: 'novi', username: 'yayanbachtiar2' },
        { id: 24, name: 'wening', username: 'yayanbachtia3r' }
    ]
    activeUser: User

    selectUser(user) {
        this.activeUser = user
        console.log(user);
    }

    onUserCreated(event) {
        this.users.push(event.user)
    }
}