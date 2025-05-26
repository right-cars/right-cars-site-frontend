import axios from "axios";

const carsInstance = axios.create({
    // baseURL: "https://right-cars-backend-production.up.railway.app/api/cars",
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/cars`,
})

export const getNewestCars = async () => {
    const {data} = await carsInstance.get("/");
    //@ts-expect-error
    const normalaizedData = data.map(item => ({...item, img: item.mainImage, id: item._id, mileage: item.mileageInKm}));
    if(normalaizedData.length > 3) return normalaizedData.slice(-4);

    return normalaizedData;
}

export const getAllCars = async () => {
    const {data} = await carsInstance.get("/");
    return data;
}

export const getCarById = async (id: string) => {
    const {data} = await carsInstance.get(`/${id}`);
    return data;
}

