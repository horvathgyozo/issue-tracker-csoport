import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from "./routing/routing.module";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
          MatFormFieldModule, MatInputModule,
          MatButtonToggleModule
} from "@angular/material";

import { IssueService } from "./issue.service";
import { AuthService } from "./auth.service";
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent,
    StatusFilterComponent,
    IssueEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule,
    MatButtonToggleModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IssueService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
