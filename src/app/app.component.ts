import { Component, OnInit } from '@angular/core';
import { AppState } from './store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shoppingItem.model';
import * as shoppingActions from './store/actions/shopping.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'effects-demo';
  newItem: ShoppingItem;
  newId = 2;
  newName: string;
  shoppingItems$: Observable<Array<ShoppingItem>>;
  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);
  }

  addItem() {
    this.newItem = {
      id: this.newId,
      name: this.newName
    };
    this.store.dispatch(new shoppingActions.AddItemAction(this.newItem));
  }

  remove(index) {
    this.store.dispatch(new shoppingActions.DeleteItemAction(index));
  }
}
