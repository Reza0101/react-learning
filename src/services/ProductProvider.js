import React from 'react';
import { data } from './Couses';
export const ProductContext = React.createContext();

const ProductProvider = ({children}) => {
    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;