import { ShoppingItem } from './shoppingItem.model';

export interface AppState {
    readonly shopping: Array<ShoppingItem>;
}
