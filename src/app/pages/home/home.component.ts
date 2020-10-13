import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BugsnagService } from '../../services/bugsnag/bugsnag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private bugsnag: BugsnagService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Home');
  }

  error(): void {
    this.bugsnag.error('Error from home');
  }

}
