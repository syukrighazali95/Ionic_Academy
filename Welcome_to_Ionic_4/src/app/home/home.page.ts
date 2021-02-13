import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  test = "This is just a test";

  constructor(private route: Router) {}

  openPage() {
    this.route.navigateByUrl("/details");
  }

  test_function() {
    return "This is function test";
  }
}
