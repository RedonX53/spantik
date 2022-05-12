import React, {createContext, useState, useContext, useEffect} from 'react';
import {storeData, getData} from '../utilities/asyn_storage';
import axios from 'axios';
import {baseUrl} from '../utilities/api';
export const GlobalContext = createContext({});

const GlobalContextProvider = props => {
  const [firstRun, setFirstRun] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState('');
  const [cartData, setCartData] = useState(false);
  const [trigger, setTrigger] = useState(true);
  const [ordersData, setOrdersData] = useState(null);

  function triggerGlobalEffect() {
    if (trigger == true) {
      setTrigger(false);
    } else if (trigger == false) {
      setTrigger(true);
    }
  }

  const fetchOrders = async () => {
    const orderRes = await axios.get(baseUrl + `/orders?user_id=53102`);
    setOrdersData(orderRes.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const orderRes = await axios.get(baseUrl + `/orders?user_id=53102`);
      setOrdersData(orderRes.data);
      // const cartRes = await axios.get(baseUrl + `/carts`);
      // setCartData(cartRes.data);
    };
    fetchData();
    console.log('Global Contex  Mounted');
  }, [trigger]);

  return (
    <>
      {ordersData && (
        <GlobalContext.Provider
          value={{
            user,
            setUser,
            firstRun,
            setFirstRun,
            isLoggedIn,
            setIsLoggedIn,
            cartData,
            setCartData,
            triggerGlobalEffect,
            ordersData,
            fetchOrders,
          }}>
          {props.children}
        </GlobalContext.Provider>
      )}
    </>
  );
};

export default GlobalContextProvider;
