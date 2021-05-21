import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: string[];

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.subscribe(state => {
      this.products = state.productNames;
    });
  }
remove(d: string) {
    if (d) {
      this.store.dispatch({
        type: 'REMOVE_PRODUCT',
        payload: d
      });
    }
  }
}