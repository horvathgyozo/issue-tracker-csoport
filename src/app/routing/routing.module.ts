import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';

import { MainPageComponent } from "../main-page/main-page.component";
import { IssueListComponent } from "../issue-list/issue-list.component";
import { IssueDetailComponent } from "../issue-detail/issue-detail.component";
import { IssueFormComponent } from "../issue-form/issue-form.component";
import { IssueEditComponent } from "../issue-edit/issue-edit.component";
import { LoginComponent } from "../login/login.component";
import { AuthGuard } from "../auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: MainPageComponent
  },
  {
    path: 'issues',
    component: IssueListComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'issues/new',
    component: IssueEditComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent,
    canActivate: [AuthGuard],
    data: {roles: ['USER', 'ADMIN']}
  },
  {
    path: 'issues/:id/edit',
    component: IssueEditComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
