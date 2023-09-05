import React, { useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import dataCount from '../data/doorsCount.json';
import { sendDoorChange, socketDoorsChange } from '../store/actions/socket';

function Admin() {
  const openDoors = useSelector((state) => state.doors.openDoors);

  const dispatch = useDispatch();
  const handleToggle = useCallback((id) => {
    const i = openDoors.indexOf(id);
    const doors = [...openDoors];
    if (i > -1) {
      doors.splice(i, 1);
    } else {
      doors.push(id);
    }
    dispatch(sendDoorChange({ openDoors: doors }));
  }, [openDoors]);

  return (
    <div className="buttons_table">
      {dataCount.map((i) => (
        <button
          key={i.id}
          className={openDoors.includes(i.id) ? 'button_active' : 'button-85'}
          onClick={() => handleToggle(i.id)}
        >
          {'Door '}
          {i.id}
          s
        </button>
      ))}
    </div>
  );
}

export default Admin;
