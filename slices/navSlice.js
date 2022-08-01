import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    vehicle: null,
    trip: null,
    travelTimeInformation: null,
    newVehicle: null
}


export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setVehicle: (state, action) => {
            state.vehicle = action.payload
        },
        setTrip: (state, action) => {
            state.trip = action.payload
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        },
        setNewVehicle: (state, action) => {
            state.newVehicle = action.payload
        },

    }
})


export const { setOrigin, setDestination, setTrip, setVehicle, setTravelTimeInformation, setNewVehicle } = navSlice.actions

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectVehicle = (state) => state.nav.vehicle;
export const selectTrip = (state) => state.nav.trip;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectNewVehicle = (state) => state.nav.newVehicle;

export default navSlice.reducer