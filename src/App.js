import React, { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Admin from './pages/Admin';
import Public from './pages/Public';
import { socketInit } from './store/actions/socket';

function App() {
  const dispatch = useDispatch();
  const token = '21321321313';
  useEffect(() => {
    if (token) {
      dispatch(socketInit({ token }));
    }
  }, [token]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/public" />} />
        <Route path="/public" element={<Public />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
