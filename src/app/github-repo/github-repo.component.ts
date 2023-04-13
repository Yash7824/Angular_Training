import { Component } from '@angular/core';
import { GithubRepo } from '../github-repo';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.css'],
})
export class GithubRepoComponent {
  constructor(private githubApiService: GithubApiService) {}
  repos: GithubRepo[] = [];

  toggleDisplay: boolean = true;
  buttonName: string = 'Display';

  fetchProjectResponse() {
    if (this.buttonName == 'Display') {
      this.buttonName = 'Hide';
      this.toggleDisplay = false;
    } else if (this.buttonName == 'Hide') {
      this.buttonName = 'Display';
      this.toggleDisplay = true;
    }

    let url = 'https://api.github.com/users/fabpot/repos';
    this.githubApiService.getProjectResponse(url).subscribe({
      next: (response: GithubRepo[]) => {
        // for(let obj of response){
        //   this.repos.push(obj);
        // }

        response.forEach((obj: GithubRepo) => this.repos.push(obj));
      },
    });

    console.log(this.repos);
  }
}
