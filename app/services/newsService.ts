import axiosInstance from "./axiosInstace";

export const getNews = async () => {
    try {
        const response = await axiosInstance.get("/articles?populate=cover");
        return response.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
};

export const getNew = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/articles/${id}?populate=cover`);
        return response.data;
    } catch (error) {
        console.error("Error fetching news:", error);
        throw error;
    }
}