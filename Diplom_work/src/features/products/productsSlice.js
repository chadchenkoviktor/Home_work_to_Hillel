import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => (await api.get('/products')).data
);


export const addProduct = createAsyncThunk(
    'products/add',
    async (product) => (await api.post('/products', product)).data
);

const productsSlice = createSlice({
    name: 'products',
    initialState: { items: [], loading: false },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
            state.items.push(action.payload);
        });
    },
});

export default productsSlice.reducer;