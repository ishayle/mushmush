import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../model/item';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  products: string[];
  dealers: string[];
  @Input() item: Item;
  @Output() removeItem = new EventEmitter<Item>();

  nameControl = new FormControl();
  amountControl = new FormControl();
  dealerControl = new FormControl();
  productsFiltered: string[];
  dealersFiltered: string[];

  constructor(
    private store: Store<AppState>,
    private changeDetector: ChangeDetectorRef
  ) {
    this.store.subscribe(state => {
      this.products = state.productNames;
      this.dealers = state.dealerNames;
    });
  }
  ngOnInit() {}

  getProduct() {
    this.productsFiltered = this.products.filter(option =>
      option.toLowerCase().includes(this.item.name.toLowerCase())
    );
    this.changeDetector.detectChanges();
  }
  getDealer() {
    this.dealersFiltered = this.dealers.filter(option =>
      option.toLowerCase().includes(this.item.dealer.toLowerCase())
    );
  }
}
