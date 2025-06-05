import axios from "axios";

const authInstance = axios.create({
    // baseURL: "https://right-cars-backend-production.up.railway.app/api/cars",
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/users`,
    // withCredentials: true,
})

//@ts-expect-error
export const register = async payload => {
    const {data} = await authInstance.post("/register", payload);
    return data;
}

//@ts-expect-error
export const login = async payload => {
    const {data} = await authInstance.post("/login", payload);
    return data;
}

export const getCurrentUser = async () => {
    const res = await authInstance.get('/current');
    return res.data.user;
};

export const logout = async () => {
    return authInstance.post('/logout');
};
