import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import App from '../App'
import Login from '../pages/Login';
import ForgotPassWord from '../pages/ForgotPassword'
import SignUp from '../pages/SignUp';
import AdminPanel from '../pages/AdminPanel';

import AllProducts from '../pages/AllProducts';
import AllUsers from '../pages/AllUsers';
import CategoryProduct from '../pages/CategoryProduct';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';
import SuccessPayment from '../pages/SuccessPayment';
import CancelPayment from '../pages/CancelPayment';
import OrderPage from '../pages/OrderPage';
import AllOrder from '../pages/AllOrder';

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassWord/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : "cart",
                element : <Cart/>
            },
            { 
                path : "success",
                element : <SuccessPayment/>
            },
            {
                path : "cancel",
                element : <CancelPayment/>
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "order",
                element : <OrderPage/>
            },
            {
                    path : "admin-panel",
                    element : <AdminPanel/>,
                    children : [
                        {
                            path : "all-users",
                            element : <AllUsers/>
                        },
                        {
                            path : "all-products",
                            element : <AllProducts/>
                        },
                        {
                            path : "all-orders",
                            element : <AllOrder/>
                        }
                    ]
            },
        ]
    }
])
export default router;