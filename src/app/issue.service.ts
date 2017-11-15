import { Injectable } from '@angular/core';
import { Issue } from "./issue";

@Injectable()
export class IssueService {

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

  constructor() { }

  getIssues() {
    return this.issues;
  }

  getIssue(id) {
    return this.issues.find(issue => issue.id === id);
  }

  addIssue() {

  }

}
