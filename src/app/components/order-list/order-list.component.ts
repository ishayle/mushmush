import { Component, OnInit } from "@angular/core";
import { AppState } from "../../app.state";
import { Order } from "../../model/order";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"]
})
export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.subscribe(state => {
      this.orders = state.orders;
    });
  }
}
