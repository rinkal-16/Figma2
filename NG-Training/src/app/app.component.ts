import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NG-Training';
  constructor(private route: Router) {
  }

 ngOnInit(): void {
   console.log('');
 }

  btnClick(): void {
    console.log('Clicked');
    this.route.navigate(['/directive']);
  }
}
