// import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navigation.css'

const Navigation = () => {
    return (
        <div className="sidebar">
            <h3 className="text-center" style={{ paddingTop: '15px', color: '#ff6300' }}>MENU</h3>

            <hr style={{ color: 'white' }} />

            <NavLink to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            <NavLink to="/products"><i className="fa fa-fw fa-wrench"></i> Products</NavLink>

            <NavLink to="/customers"><i className="fa fa-fw fa-user"></i> Customers</NavLink>

            <NavLink to="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</NavLink>


        </div >


    )
}

export default Navigation;