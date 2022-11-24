import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { ConfirmService } from '@services/confirm.service';
import { Observable, of } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  constructor(private confirmService: ConfirmService) {}

  canDeactivate(
    component: MemberEditComponent): Observable<boolean> {
    if (component.editForm.dirty) {
      return this.confirmService.confirm();
    }
    return of(true);
  }

}
