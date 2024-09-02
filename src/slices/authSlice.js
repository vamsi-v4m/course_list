import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logInfo: {
        isLoggedIn: false,
        tokenDetails: {}
    }
}
const AuthSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {
        setAuthDetails: (state, action) => {
            state.logInfo = action.payload
        }
    }
})

export const { setAuthDetails } = AuthSlice.actions;

export default AuthSlice.reducer;