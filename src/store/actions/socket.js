import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import io from "socket.io-client";

let socket

export const socketDoorsChange = createAction('socketDoorsChange');

export const socketInit = createAsyncThunk('socket/init', (arg, thunkAPI) => {
  if (socket) {
    return;
  }
  const { dispatch } = thunkAPI;
  socket = io('http://localhost:4000', {
    extraHeaders: {
      authorization: `Bearer ${arg.token}`
    }
  });
  socket.on("doors-change", (data) => {
    dispatch(socketDoorsChange(data))
  });
});

export const sendDoorChange = createAsyncThunk('send/doorChange', (arg) => {
  socket.emit('doors-change', arg)
})

