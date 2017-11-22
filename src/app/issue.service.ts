import { Injectable } from '@angular/core';
import { Issue } from "./issue";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

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

  constructor(
    private http: HttpClient
  ) { }

  getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>('api/issue').toPromise();
  }

  getIssuesSlowly(): Promise<Issue[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.issues);
      }, 4000)
    });
  }

  getIssue(id) {
    return this.issues.find(issue => issue.id === id);
  }

  addIssue(issue: Issue) {
    const iss = Object.assign(issue, {
      id: this.issues.length+1,
      status: 'ADDED'
    });
    this.issues.push(iss);
  }

  updateIssue(id: number, issue: Issue) {
    const iss = this.getIssue(id);
    iss.location = issue.location;
    iss.description = issue.description;
  }

}
