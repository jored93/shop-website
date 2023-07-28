import { BsCartPlus } from 'react-icons/bs' 
import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const NavBar = () => {
    NavBar.propTypes = {
        to: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        activeStyle: PropTypes.node.isRequired,
    }
    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'
    const NavItem = ({ to, children, activeStyle }) => {
        return (
            <NavLink
                to={to}
                className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                {children}
            </NavLink>
        );
    };

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-emerald-300'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavItem to="/" activeStyle={activeStyle}>
                        Shoppi
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/" activeStyle={activeStyle}>
                        All
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/clothes" activeStyle={activeStyle}>
                        Clothes
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/electronics" activeStyle={activeStyle}>
                        Electronics
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/furnitures" activeStyle={activeStyle}>
                    Furnitures
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/toys" activeStyle={activeStyle}>
                        Toys
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/others" activeStyle={activeStyle}>
                        Others
                    </NavItem>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li className="text-black/60">
                    user@example.com
                </li>
                <li>
                    <NavItem to="/my-orders" activeStyle={activeStyle}>
                        My Orders
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/my-account" activeStyle={activeStyle}>
                        My Account
                    </NavItem>
                </li>
                <li>
                    <NavItem to="/signin" activeStyle={activeStyle}>
                        Signin
                    </NavItem>
                </li>
                <li className='flex items-center'>
                    <BsCartPlus />
                    <div className='bg-white rounded'>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar