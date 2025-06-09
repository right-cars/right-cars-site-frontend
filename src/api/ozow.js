import axios from "axios";

const ozowInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/ozow`,
});

export const getPaymentUrl = async (payload) => {
    const {data} = await ozowInstance.post("/initiate", payload);
    return data.url;
}
