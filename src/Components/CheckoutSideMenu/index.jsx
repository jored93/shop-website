import { AiOutlineCloseCircle } from 'react-icons/ai'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context';

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside className='checkout-side-menu flex flex-col fixed right-0 border bg-white border-black rounded-lg'>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <AiOutlineCloseCircle 
              onClick={context.closeProductDetail}
            />
        </div>
    </aside>
  )
}

export default CheckoutSideMenu