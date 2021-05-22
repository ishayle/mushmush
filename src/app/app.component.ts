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
  showOrderList = true;
  showdealerList = false;
  showproductList = false;

  constructor(
    private store: Store<AppState>,
    private storageService: StorageService
  ) {}
  ngOnInit() {
    this.storageService.SetStateFromStorage();
  }
  
  showOrderListScreen() {
    this.showOrderList = true;
    this.showdealerList = false;
    this.showproductList = false;
  }
  showproductListScreen() {
    this.showOrderList = false;
    this.showdealerList = false;
    this.showproductList = true;
  }
  showdealerListScreen() {
    this.showOrderList = false;
    this.showdealerList = true;
    this.showproductList = false;
  }
}
