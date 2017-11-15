import { Component, OnInit, Input, Output, OnChanges,
  EventEmitter } from '@angular/core';
import { Issue } from "../issue";

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnChanges {

  @Input() issue: Issue;
  model: Issue = null;
  @Output() onSubmit = new EventEmitter<Issue>();

  constructor() { }

  ngOnChanges() {
    this.model = Object.assign({}, this.issue);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }
}
