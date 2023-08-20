import React, {useReducer} from 'react';
const initioalState = {
    selectedItems : [],
    total: '',
}

const sumPrice = items => {
    let itemCounter = items.reduce((total, product) => total += product.quantity , 0)
    let total = items.reduce((total, product) => total + product.price ,0)
    return {total, itemCounter}
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD-ITEM' : 
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumPrice(state.selectedItems)
            }
        case 'REMOVE-ITEM' : 
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                selectedItems: [...newSelectedItems],
                ...sumPrice(newSelectedItems),
            }
        case 'CHEK-OUT' : 
            return {
                selectedItems: [],
                total: 0,

            }
        default :
        return state
    }
}

export const cartContext = React.createContext();

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initioalState);

    return (
        <cartContext.Provider value={{state, dispatch}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;