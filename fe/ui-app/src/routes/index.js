import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

export const routes = [
    {
        path: '/',
        page: <HomePage />,
        isShowHeader: true
    },
    {
        path: '/order',
        page: <OrderPage />,
        isShowHeader: true
    },
    {
        path: '/products',
        page: <ProductsPage />,
        isShowHeader: true
    },
    {
        path: '/:type',
        page: <TypeProductPage />,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: <SignInPage />,
        isShowHeader: false
    },
    {
        path: '/sign-up',
        page: <SignUpPage />,
        isShowHeader: false
    },
    {
        path: '/product-details',
        page: <ProductDetailPage />,
        isShowHeader: true
    },
    {
        path: '/profile-user',
        page: <ProfilePage />,
        isShowHeader: true
    },
    {
        path: '*',
        page: <NotFoundPage />
    }
]