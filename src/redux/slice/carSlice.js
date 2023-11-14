import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const carSlice = createSlice ({
    name:'carSlice',
    initialState,
    reducers:{}
});
const {reducer: carReducer ,actions} = carSlice;

const carActions = {
    ...actions
}


export {
    carReducer,
    carActions
}