import { Injectable } from '@angular/core';
import Bugsnag from '@bugsnag/js';

@Injectable({
  providedIn: 'root'
})
export class BugsnagService {

  constructor() {
  }

  error(message: string): void {
    Bugsnag.notify(new Error(message));
  }
}
