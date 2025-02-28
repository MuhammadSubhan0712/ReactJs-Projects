
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Config/store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home } from './Pages/Home.jsx'
import About from './Pages/about.jsx'
import Cart from './Pages/cart.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import Products from './Pages/Products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,

    children:[
    {
      path: "",
      element:<Home/>,
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path: "services",
      element:<Services/>,
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"products",
      element:<Products/>
    },
    {
      path:"cart",
      element: <Cart/>
    },
    {
      path:"*",
      element: <h2 className='text-2xl text-red-500 p-2 mt-44 flex justify-center border-2 rounded'>404 | Not found</h2>
    },
  ]
}
])


createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <RouterProvider router={router}>
     <App />
    </RouterProvider>
   </Provider>

)
