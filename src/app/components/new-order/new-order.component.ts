import {
  Component,
  VERSION,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
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
  @Input() currentOrder: Order;
  @Input() editing = false;
  @Output() closed = new EventEmitter<boolean>();
  constructor(
    private store: Store<AppState>,
    private shareService: ShareService
  ) {}

  ngOnInit() {
    if (!this.currentOrder) {
      this.currentOrder = {
        id: `${new Date().toLocaleDateString()}_${new Date().valueOf()}`,
        items: [],
        time: new Date()
      };
    }
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
      if (item.name) {
        this.store.dispatch({
          type: 'ADD_PRODUCT',
          payload: item.name
        });
      }
      if (item.dealer) {
        this.store.dispatch({
          type: 'ADD_DEALER',
          payload: item.dealer
        });
      }
    });
  }
  saveOrder() {
    this.currentOrder.items = this.currentOrder.items.filter(i => i.name);
      const newO = this.cloneOrder(this.currentOrder);
    if (this.currentOrder.items.length) {
      newO.items.forEach(item => {
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
    if (this.editing) {
       this.store.dispatch({
        type: 'UPDATE_ORDER',
        payload: newO
      });
      this.closed.emit();
    } else {
       this.store.dispatch({
        type: 'ADD_ORDER',
        payload: newO
      });
      this.currentOrder = {
        id: `${new Date().toLocaleDateString()}_${new Date().valueOf()}`,
        items: [],
        time: new Date()
      };
    }
  }
  closeOrder() {
    if (this.editing) {
      this.closed.emit();
    } else {
      this.currentOrder = {
        id: `${new Date().toLocaleDateString()}_${new Date().valueOf()}`,
        items: [],
        time: new Date()
      };
    }
  }

  sendOrder() {
    const newO = this.cloneOrder(this.currentOrder);
    this.saveOrder();
    this.shareService.shareOrder(newO);
  }

  cloneOrder(o: Order): Order {
    return {
      id: o.id,
      time: o.time,
      items: [...o.items]
    } as Order;
  }
}
