import { Component, OnInit } from '@angular/core';
import { Issue } from "../issue";
import { IssueService } from "../issue.service";

@Component({
  selector: 'issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  selectedStatus: string = '';
  issues: Issue[] = [];
  filteredIssues: Issue[];

  constructor(
    private issueService: IssueService
  ) { }

  async ngOnInit() {
    this.issues = await this.issueService.getIssues();
    this.filterIssues();
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

}
