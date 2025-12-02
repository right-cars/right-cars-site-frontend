import axios from "axios";

const auctionsInstance = axios.create({
    // baseURL: "https://right-cars-backend-production.up.railway.app/api/cars",
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/auctions`,
})

export const getAuctions = async()=> {
    const {data} = await auctionsInstance.get("/cars");
    return data;
}


export const getCarById = async (id: string) => {
    const {data} = await auctionsInstance.get(`/${id}`);
    return data;
}


export const getAuctionById = async (id: string) => {
    const {data} = await auctionsInstance.get(`/${id}`);
    return data;
}
