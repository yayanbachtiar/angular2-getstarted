import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user'


@Component({
    selector: 'user-form',
    template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">
        <div class="form-group" [ngClass]="{'has-error':name.invalid && name.touched}">
            <input type="text" name="name" 
            class="form-control" required
            [(ngModel)]="newUser.name" #name="ngModel">
            <span class="help-block" *ngIf="name.invalid && name.touched">name is required</span>
        </div>

        <div class="form-group" [ngClass]="{'has-error':username.invalid && username.touched}">
            <input type="text" name="username"
             class="form-control" required
             [(ngModel)]="newUser.username" #username="ngModel">
            <span class="help-block" *ngIf="username.invalid && username.touched">username is required</span>
             
        </div>

        <div class="form-group">
        <button class="btn-btn btn-block btn-primary" type="submit" [disabled]="form.invalid">sumbit</button>
        </div>

    </form>
    `,
})

export class UserFormComponent {
    @Output() usercreated = new EventEmitter();
    newUser: User = new User()
    active: boolean = true
    onSubmit() {
        this.usercreated.emit({user: this.newUser})
        console.log(this.newUser);
        this.newUser = new User()
        this.active = false
        setTimeout(() => this.active = true, 0)
    }
}