import http from "../service/http";

export const getScooters = async () => {
  try {
    const response = await http.get("/scooters");
    return response.data;
  } catch (error) {
    console.error("Error fetching scooters:", error);
    return Promise.reject(error);
  }
};
export const getNames = async () => {
  try {
    const response = await http.get("/scooters/names/");
    return response.data;
  } catch (error) {
    console.error("Error fetching scooters names:", error);
    return Promise.reject(error);
  }
};
export const getBrands = async () => {
  try {
    const response = await http.get("/brands/");
    return response.data;
  } catch (error) {
    console.error("Error fetching scooters names:", error);
    return Promise.reject(error);
  }
};
export const getScootersWithFilters = async (filters: object) => {
  try {
    const response = await http.get("/scooters", {
      params: filters,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching scooters:", error);
    return Promise.reject(error);
  }
};

export const getScooter = async (id: number) => {
  try {
    const response = await http.get(`/scooters/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching scooter:", error);
    return Promise.reject(error);
  }
};

export const postScooterId = async ({
  name,
  brand,
  engine_type,
}: {
  name: string;
  brand: string;
  engine_type: "electric" | "gasoline";
}) => {
  try {
    const response = await http.post(`/scooters/get/id/`, {
      name,
      brand,
      engine_type,
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching scooter:", error);
    return Promise.reject(error);
  }
};

export const getFilters = async () => {
  try {
    const batteryTypes = await http.get("/battery-types");
    const brands = await http.get("/brands");
    const colors = await http.get("/colors");
    const price = await http.get("/price");

    return {
      batteryTypes: batteryTypes.data,
      brands: brands.data,
      colors: colors.data,
      price: price.data,
    };
  } catch (error) {
    console.log("Error fetching scooter:", error);
    return Promise.reject(error);
  }
};
