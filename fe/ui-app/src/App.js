import React, { Fragment, useEffect } from 'react'
// import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './routes/';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { isJsonString } from './utils';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import * as UserService from './services/UserService';
import { updateUser } from './redux/slices/userSlice';
import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';

function App() {
  const dispatch = useDispatch();

  //khi reload lại trang sẽ phải get token lưu trong local và set lại trong store
  useEffect(() => {
    let {storageData, decoded} = handleDecoded();
    if(decoded?.id) {
      handleGetDetailUser(decoded?.id, storageData);
    }
  }, []);

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({...res.data, access_token: token}));  
  }

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token');
    let decoded = {}
    if(storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData)
      if(decoded?.id) {
        handleGetDetailUser(decoded?.id, storageData);
      }
      return { decoded, storageData }; 
    }
    console.log(storageData)
  }


  UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date();
    const { storageData, decoded } = handleDecoded();
    if(decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken();
      config.headers['token'] = `Bearer ${data.access_token}`
    }
    return config;
  }, function(err) {
    return Promise.reject(err);
  })

  return (
    <div>
      <Router>
        <Routes>
          {routes.map(route => {
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return <Route key={route.path} path={route.path} element={
                      <Layout>
                        {route.page}
                      </Layout>
                    }/>
                    
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App;