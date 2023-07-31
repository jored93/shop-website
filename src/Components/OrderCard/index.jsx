import './styles.css'
import { BsTrash } from 'react-icons/bs'
import PropTypes from 'prop-types'

const OrderCard = props => {
    OrderCard.propTypes = {
        title: PropTypes.node.isRequired,
        imageUrl: PropTypes.node.isRequired,
        price: PropTypes.node.isRequired,
    }
    const {title, imageUrl, price} = props
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}/>
                </figure>
                <p className='text-sm font-light'>
                    {title}
                </p>
            </div>

            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>
                    {price}
                </p>
                <BsTrash />
            </div>
        </div>
    )
}

export default OrderCard