import { createReducer } from '@reduxjs/toolkit';
import { sendDoorChange, socketDoorsChange } from '../actions/socket';

const initialState = {
  openDoors: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(socketDoorsChange, (state, action) => {
      state.openDoors = action.payload.openDoors;
    })
    .addCase(sendDoorChange.pending, (state, action) => {
      state.openDoors = action.meta.arg.openDoors;
    });
});
