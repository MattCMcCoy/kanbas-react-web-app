import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	message: 'Hello From Reducer'
};
const helloSlice = createSlice({
	name: 'hello',
	initialState,
	reducers: {}
});
export default helloSlice.reducer;
