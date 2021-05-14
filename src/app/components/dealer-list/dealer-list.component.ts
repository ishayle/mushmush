import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.css']
})
export class DealerListComponent implements OnInit {
 dealers: string[];

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.subscribe(state => {
      this.dealers = state.dealerNames;
    });
  }
}