import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserRepository } from '@api/user/user.repository';
import { User } from '@api/user/user.types'



@Component({
    selector:'admin',
    templateUrl:'admin.component.html'
})
export class AdminComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserRepository) {
     }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}