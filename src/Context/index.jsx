import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    /* Product detail visible or not */
    const [productDetailVisible, setProductDetailVisible] = useState(false)
    const openProductDetail = () => setProductDetailVisible(true)
    const closeProductDetail = () => setProductDetailVisible(false)

    /* Product visibility */
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                productDetailVisible,
                productToShow,
                setProductToShow
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}