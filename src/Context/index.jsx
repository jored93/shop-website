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

    /* Shopping cart */
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                productDetailVisible,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}