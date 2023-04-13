import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoBackService } from './go-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first';

  constructor(private router: Router, private gb: GoBackService) {}
  isReady: boolean = false;
  goBackVariable: boolean = false;

  ngDoCheck() {
    if (this.router.url == '/') {
      this.goBackVariable = true;
      console.log('Route', this.router.url);
    } else if (this.router.url != '/') {
      console.log('Route', this.router.url);
      this.goBackVariable = false;
    }
  }
}
