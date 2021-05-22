import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.state';
import { Order } from '../../model/order';
import { Store } from '@ngrx/store';
import { Item } from '../../model/item';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  current: Order;
  editing = false;

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.subscribe(state => {
      this.orders = state.orders;
    });
  }
  edit(o: Order) {
    this.editing = true;
    this.current = this.cloneOrder(o);
  }
  remove(d: Order) {
    if (d) {
      this.store.dispatch({
        type: 'REMOVE_ORDER',
        payload: d
      });
    }
  }

  cloneOrder(o: Order): Order {
    return {
      id: o.id,
      time: o.time,
      items: this.cloneItems(o.items)
    } as Order;
  }
  cloneItems(is: Item[]): Item[] {
    const newArray = [] as Item[];
    is.forEach(i =>
      newArray.push({
        amount: i.amount,
        dealer: i.dealer,
        name: i.name
      } as Item)
    );
    return newArray;
  }
}
