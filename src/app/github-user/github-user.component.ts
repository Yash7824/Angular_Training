import { Component } from '@angular/core';
import { GithubApiService } from '../github-api.service';
import { GithubUser } from '../github-user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css'],
})
export class GithubUserComponent {
  constructor(
    private githubApiService: GithubApiService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let queryData = this.activeRoute.queryParamMap.subscribe((params) => {
      console.log(params);
      let value = params.get('githubUser');

      if (value != null) {
        this.githubUser = value;
      } else {
        this.githubUser = 'fabpot';
      }
    });
  }

  url = 'https://api.github.com/users/fabpot';

  githubUserData: GithubUser = {
    id: '',
    location: '',
    bio: '',
    name: '',
    company: '',
  };

  statusButton = 'Show Data';

  isReady: boolean = false;
  fetchData() {
    if (this.statusButton == 'Show Data') {
      this.isReady = false;
      this.statusButton = 'Hide Data';
    } else if (this.statusButton == 'Hide Data') {
      this.isReady = true;
      this.statusButton = 'Show Data';
    }

    this.githubApiService.getUserResponse(this.url).subscribe({
      next: (response: GithubUser) => {
        this.githubUserData = response;
      },
      error: (err: Error) => {
        console.log(err);
      },
      complete: () => console.log('info'),
    });
  }

  githubUser = '';
  showButton = 'Show';
  showContent = true;
  Result: any;
  showResult() {
    if (this.showButton == 'Show') {
      this.showButton = 'Hide';
      this.showContent = false;
    } else if (this.showButton == 'Hide') {
      this.showButton = 'Show';
      this.showContent = true;
    }
    let url = `https://api.github.com/users/${this.githubUser}`;
    this.githubApiService.getUserResponse(url).subscribe({
      next: (response) => {
        this.Result = response;
      },
    });
  }
}
