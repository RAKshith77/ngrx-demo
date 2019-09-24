import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shoppingItem.model';

export enum ShoppingActionTypes {
    LOAD_SHOPPING = '[Shopping] Load Shopping',
    LOAD_SHOPPING_SUCCESS = '[Shopping] Load Shopping Success',
    LOAD_SHOPPING_FAILURE = '[Shopping] Load Shopping Failure',
    ADD_ITEM = '[Shopping] Add Item',
    ADD_ITEM_SUCCESS = '[Shopping] Add Item Success',
    ADD_ITEM_FAILURE = '[Shopping] Add Item Failure',
    DELETE_ITEM = '[Shopping] Delete Item',
    DELETE_ITEM_SUCCESS = '[Shopping] Delete Item Success',
    DELETE_ITEM_FAILURE = '[Shopping] Delete Item Failure'
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;

    constructor(public payload: ShoppingItem) {}
}

export class LoadAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadSuccessAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;

    constructor(public payload: Array<ShoppingItem>) {}
}

export class LoadFailureAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;

    constructor(public payload: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM;

    constructor(public payload: number) {}
}

export type ShoppingAction =
| AddItemAction
| DeleteItemAction
| LoadSuccessAction
| LoadFailureAction
| LoadAction;
