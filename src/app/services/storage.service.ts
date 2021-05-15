import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class StorageService {
  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      console.log('saving state:');
      console.log(JSON.stringify(state));
      if (
        state.dealerNames.length &&
        state.productNames.length &&
        state.orders.length
      )
        localStorage.setItem('dataSource', JSON.stringify(state));
    });
  }

  SetStateFromStorage() {
    var dataSource = JSON.parse(localStorage.getItem('dataSource')) as AppState;
    console.log('loading state:');
    console.log(dataSource);
    this.store.dispatch({
      type: 'SET_PRODUCTS',
      payload: dataSource.productNames
    });
    this.store.dispatch({
      type: 'SET_DEALERS',
      payload: dataSource.dealerNames
    });
    this.store.dispatch({
      type: 'SET_ORDERS',
      payload: dataSource.orders
    });
  }
}
