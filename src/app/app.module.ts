import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ItemComponent } from './components/item/item.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { reducers } from './app.state';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DealerListComponent } from './components/dealer-list/dealer-list.component';
import { ShareService } from './services/share.service';
import { StorageService } from './services/storage.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ItemComponent,
    OrderListComponent,
    NewOrderComponent,
    ProductListComponent,
    DealerListComponent
  ],
  bootstrap: [AppComponent],
  providers: [ShareService, StorageService]
})
export class AppModule {}
