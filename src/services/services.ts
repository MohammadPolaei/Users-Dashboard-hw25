import axios from "axios";

const BASE_URL = "https://6996ff6b7d1786436575fffb.mockapi.io/user";

const api = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
});

export const getUsers = async () => {
	const response = await api.get("/users");
	return response.data;
};
