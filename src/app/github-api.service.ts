import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubUser } from './github-user';
import { Observable } from 'rxjs';
import { GithubRepo } from './github-repo';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private httpSrv : HttpClient) { }

  public getUserResponse(url: string): Observable<GithubUser>{
    return this.httpSrv.get<GithubUser>(url);
  }

  public getProjectResponse(url: string): Observable<GithubRepo[]>{
    return this.httpSrv.get<GithubRepo[]>(url);
  }
}
