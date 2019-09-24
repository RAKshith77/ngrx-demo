import { ShoppingItem} from '../models/shoppingItem.model';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

const initilState: Array<ShoppingItem> = [
    {
        id: 1,
        name: 'Diet-Coke'
    }
];
export function shoppingReducer(state: Array<ShoppingItem> = initilState, action: ShoppingAction) {
    switch (action.type) {
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        case ShoppingActionTypes.DELETE_ITEM:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}
