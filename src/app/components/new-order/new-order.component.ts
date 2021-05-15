import { Component, VERSION, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.state';
import { Item } from '../../model/item';
import { Order } from '../../model/order';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  currentOrder: Order;
  editing = false;
  constructor(
    private store: Store<AppState>,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    this.currentOrder = {
      id: `${new Date().toLocaleDateString()}_${new Date().valueOf()}`,
      items: [],
      time: new Date()
    };
  }

  newItem() {
    this.currentOrder.items.push({} as Item);
  }
  removeItem(i: number) {
    this.currentOrder.items.splice(i, 1);
  }
  updateOrder() {
    this.store.dispatch({
      type: 'UPDATE_ORDER',
      payload: this.currentOrder
    });
    this.currentOrder.items.forEach(item => {
      this.store.dispatch({
        type: 'ADD_PRODUCT',
        payload: item.name
      });
      this.store.dispatch({
        type: 'ADD_DEALER',
        payload: item.dealer
      });
    });
  }
  saveOrder() {
    this.editing = true;
    this.store.dispatch({
      type: 'ADD_ORDER',
      payload: this.currentOrder
    });
    this.currentOrder.items.forEach(item => {
      this.store.dispatch({
        type: 'ADD_PRODUCT',
        payload: item.name
      });
      this.store.dispatch({
        type: 'ADD_DEALER',
        payload: item.dealer
      });
    });
  }
  closeOrder() {
    this.saveOrder();
    this.currentOrder = {
      id: `${new Date().toLocaleDateString()}_${new Date().valueOf()}`,
      items: [],
      time: new Date()
    };
  }

  sendOrder() {
    this.shareService.shareOrder(this.currentOrder);
  }
}
