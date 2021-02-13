import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  test = "This is just a test";
  toDo = ['milk', 'test', 'what'];
  newToDos = '';

  constructor(private route: Router) {}

  openPage() {
    this.route.navigateByUrl("/details");
  }

  addToDo() {
    this.toDo.push(this.newToDos);
    this.newToDos = "";
    console.log("To Do: ",this.toDo);
  }

  test_function() {
    return "This is function test";
  }
}
