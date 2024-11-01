
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchCarts = async () => {
    const response = await axios.get(`${API_URL}/carts`);
    return response.data;
};

export const addCart = async (cartData) => {
    const response = await axios.post(`${API_URL}/carts`, cartData);
    return response.data;
};
