
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import NotFound from './containers/not-found/NotFound';
import Menu from "./containers/menu/Menu";
import Banner from './containers/banner/Banner';
import './app.css';
import ProductList from './components/productList/ProductList ';
import ProductDetail from './components/productDetail/ProductDetail ';
import ProductCreate from './components/productCreate/ProductCreate ';
import ProductUpdate from './components/productUpdate/ProductUpdate ';
import Login from './containers/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';
import ProductDetalle from './components/productDetalle/ProductDetalle ';

function App() {
  return (
    <div >
      <Provider store={store}>
        <Router>
          <Banner />
          <div className="row container mx-auto appCont">
            <div className="col-3">
              <Menu />
            </div>
            <div className="col-9">
              <Switch>
                <Route path="/" exact>
                  <Login />
                </Route>
                <Route path="/products" exact>
                  <ProductList />
                </Route>
                <Route path="/products/detail/:id" exact>
                  <PrivateRoute path="/products/detail/:id" exact component={ProductDetail} />
                </Route>
                <Route path="/products/detalle" exact>
                  <PrivateRoute path="/products/detalle" exact component={ProductDetalle} />
                </Route>
                <Route path="/products/create" exact>
                  <PrivateRoute path="/products/create" exact component={ProductCreate} />
                </Route>
                <Route path="/products/update/:id" exact>
                  <PrivateRoute path="/products/update/:id" exact component={ProductUpdate} />
                </Route>
                <Route path="*" exact>
                  <NotFound />
                </Route>
              </Switch>

            </div>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
