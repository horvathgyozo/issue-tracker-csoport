import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from "./routing/routing.module";

import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
          MatFormFieldModule, MatInputModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
