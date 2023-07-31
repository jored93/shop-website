import { AiOutlineCloseCircle } from 'react-icons/ai'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  console.log('cart count:', context.cartProducts);
  return (
    <aside 
      className={`${context.checkoutSideMenuVisible ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <AiOutlineCloseCircle 
              onClick={context.closeCheckoutSideMenu}
            />
        </div>
        <div className='px-6'>
          {
            context.cartProducts.map((product) => (
              <OrderCard 
                key = {product.id}
                title = {product.title}
                imageUrl = {product.images[0]}
                price = {product.price}
              />
            ))
          }
        </div>
    </aside>
  )
}

export default CheckoutSideMenu