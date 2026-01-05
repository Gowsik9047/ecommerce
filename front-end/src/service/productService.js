import api from "../api/axios";

export const getProductsByCategory = async (category) => {
    const response = await api.get(`/products/category/${category}`);
    return response.data.products;
}

export const getHomeProducts = async () => {
    const response = await api.get('/products/homepage');
    return response.data;
}