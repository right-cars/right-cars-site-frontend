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
    localStorage.setItem("token", data.accessToken);
    return data;
}

//@ts-expect-error
export const resendConfirmEmail = async payload => {
    const {data} = await authInstance.post("/resend-confirmation", payload);
    return data;
}

//@ts-expect-error
export const verifyEmail = async token => {
    const {data} = await authInstance.get(`/confirm?token=${token}`);
    return data;
}

//@ts-expect-error
export const forgotPassword = async payload => {
    const {data} = await authInstance.post(`/forgot`, payload);
    return data;
}

//@ts-expect-error
export const resetPassword = async payload => {
    const {data} = await authInstance.post(`/reset`, payload);
    return data;
}

//@ts-expect-error
export const getCurrentUser = async (token) => {
    const {data} = await authInstance.get('/current', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return data;
};

//@ts-expect-error
export const updateUser = async (payload) => {
    const token = localStorage.getItem("token");
    const {data} = await authInstance.post('/update', payload, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return data;
};

export const logout = async () => {
    const token = localStorage.getItem("token");
    return authInstance.post('/logout', {}, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
};

