import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-habit-list',
  template: `
    <h2>Habits</h2>
    <form>
      <input type="text" placeholder="Add habit"/>
      <button type="submit">Add</button>
    </form>
    <ul>
      <app-habit-item *ngFor="let habit of habits" 
      [habit]="habit"
      ></app-habit-item>
    </ul>
  `,
  styles: [
  ]
})
export class HabitListComponent implements OnInit {
  habitForm;
  habits = [
    {
      id: 1,
      title: 'Check in with parents once a week'
    },
    {
      id: 2,
      title: 'Study BDD'
    },
    {
      id: 3,
      title: 'Study Frontend Developement'
    }
  ]

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title:'',
    })
   }

  ngOnInit(): void {
  }

}
