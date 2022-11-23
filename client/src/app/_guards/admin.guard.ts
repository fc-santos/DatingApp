import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AccountService } from '@services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (!user) return false;
        if (user.roles.includes('Amin') || user.roles.includes('Moderator')) {
          return true;
        } else {
          this.toastr.error('You cannot enter this area');
          return false;
        }
      })
    )
  }

}
