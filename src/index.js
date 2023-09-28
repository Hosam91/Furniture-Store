import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min'

const root = ReactDOM.createRoot(document.getElementById('root'))

//dev-htquh8u08a1x0m6f.us.auth0.com
//4scS164idWNia3d0X81jbvpenBAjr3Hx
//4scS164idWNia3d0X81jbvpenBAjr3Hx
root.render(
  <Auth0Provider
    domain="dev-htquh8u08a1x0m6f.us.auth0.com"
    clientId='4scS164idWNia3d0X81jbvpenBAjr3Hx'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <HashRouter>

              <App />
            </HashRouter>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
)
