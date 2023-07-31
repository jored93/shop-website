import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    const [count, setCount] = useState(0)

    /* Product detail visible or not */
    const [productDetailVisible, setProductDetailVisible] = useState(false)
    const openProductDetail = () => setProductDetailVisible(true)
    const closeProductDetail = () => setProductDetailVisible(false)

    /* checkot side menu visible or not */
    const [checkoutSideMenuVisible, setCheckoutSideMenuVisible] = useState(false)
    const openCheckoutSideMenu = () => setCheckoutSideMenuVisible(true)
    const closeCheckoutSideMenu = () => setCheckoutSideMenuVisible(false)

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
                setCartProducts,
                checkoutSideMenuVisible,
                openCheckoutSideMenu,
                closeCheckoutSideMenu
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}