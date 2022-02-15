import { Route, Routes } from "react-router-dom";
import { Navigation } from "../components";
import { Contact, Customers, Home, Products, ErrorPage, Profile } from '../pages';


const Routing = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='products' element={<Products />} />
                <Route path='customers' element={<Customers />} />
                <Route path='customers/:username' element={<Profile />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}

export default Routing;