import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isLogedSelector } from "../../store/user/selectors";

interface Props {
  component:React.ComponentType<any>;
  path:string
  exact:boolean
}

const PrivateRoute = ({component: Component, ...Rest}: Props) => {
  const login = useSelector(isLogedSelector);
  console.log(login);
  const isLogin = login;
  return isLogin ? <Route {...Rest} render={routeProps=><Component {...routeProps}/>}  /> : <Redirect to="/" />;
};

export default PrivateRoute;