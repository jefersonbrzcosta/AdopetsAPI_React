import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  let signed = false;

  const getToken = localStorage.getItem('token');

  if(getToken){
  signed = true;
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/main" />;
  }

  return <Route {...rest} component={Component} />;
}
