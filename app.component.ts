import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  title = 'EmpolyeeApp';
  Submit(login:any) {
    console.log("Form Submitted",login);
 }
}

