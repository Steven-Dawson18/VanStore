import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/catalog/ProductDetails";
import Catalog from "../../features/catalog/catalog";
import HomePage from "../../features/home/HomePage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        { path: '', element: <HomePage /> },
        { path: 'catalog', element: <Catalog /> },
        { path: 'catalog/:id', element: <ProductDetails /> },
        { path: 'about', element: <AboutPage /> },
        {path: 'contact', element: <ContactPage />},
    ]
}])