import React from 'react';
import {AuthNav, TabNav} from "./MainNav"
import { NavigationContainer } from '@react-navigation/native';
import {useSelector} from "react-redux"

/////////REDUCERS


 const SwitchNav = () => {
  
  const isAuth = useSelector(state => !!state.auth.loggedIn)

  return(
    <NavigationContainer>
       {!isAuth && <AuthNav />}
      {isAuth && <TabNav />} 
  </NavigationContainer>
  )
}

export default SwitchNav

