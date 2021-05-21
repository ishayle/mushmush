import { Component, OnInit, VERSION } from '@angular/core';
import { Order } from './model/order';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNew = false;
  showOrderList = false;
  showdealerList = true;
  showproductList = false;

  constructor(
    private store: Store<AppState>,
    private storageService: StorageService
  ) {}
  ngOnInit() {
    this.storageService.SetStateFromStorage();
  }

  showNewScreen() {
    this.showNew = true;
    this.showOrderList = false;
    this.showdealerList = false;
    this.showproductList = false;
  }
  showOrderListScreen() {
    this.showNew = false;
    this.showOrderList = true;
    this.showdealerList = false;
    this.showproductList = false;
  }
  showproductListScreen() {
    this.showNew = false;
    this.showOrderList = false;
    this.showdealerList = false;
    this.showproductList = true;
  }
  showdealerListScreen() {
    this.showNew = false;
    this.showOrderList = false;
    this.showdealerList = true;
    this.showproductList = false;
  }
}
