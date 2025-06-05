import axios from "axios";

const authInstance = axios.create({
    // baseURL: "https://right-cars-backend-production.up.railway.app/api/cars",
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/users`,
})

//@ts-expect-error
export const register = async payload => {
    const {data} = await authInstance.post("/register", payload);
    return data;
}

