import { Component, OnInit } from '@angular/core';
import { Issue } from "../issue";

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  selectedStatus: string = '';
  selectedIssue: Issue;
  issues: Issue[] = [
    {
      id: 1,
      location: 'PC5',
      description: 'Bad',
      status: 'ADDED',
    },
    {
      id: 2,
      location: 'PC3',
      description: 'Very bad',
      status: 'DONE'
    },
  ];
  filteredIssues: Issue[];

  constructor() {
    this.filterIssues();
  }

  ngOnInit() {
  }

  onFilterChange(status: string) {
    this.selectedStatus = status;
    this.filterIssues();
  }

  filterIssues() {
    this.filteredIssues = this.selectedStatus === '' 
      ? this.issues  
      : this.issues.filter(
          issue => issue.status === this.selectedStatus)
  }

  onSelectIssue(issue) {
    this.selectedIssue = issue;
  }

}
