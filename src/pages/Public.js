import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import dataCount from '../data/doorsCount.json'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Public() {
  const openDoors = useSelector(state => state.doors.openDoors);

  return (
    <div>
      <div className="door-row">
        {dataCount.map(i => (
          <div className="room" key={i.id}>
            <div className="square"></div>
            <div
              className="door"
              style={{ backgroundColor: openDoors.includes(i.id) ? 'green' : 'red' }}>
              <div className="knob"></div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/admin">admin</Link>
    </div>
  );
}

export default Public;
