import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BugsnagService } from '../../services/bugsnag/bugsnag.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private title: Title, private bugsnag: BugsnagService) {
  }

  ngOnInit(): void {
    this.title.setTitle('About');
  }

  error(): void {
    this.bugsnag.error('Error from about');
  }

}
