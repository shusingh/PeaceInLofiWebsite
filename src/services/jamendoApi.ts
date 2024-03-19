import axios from "axios";

const BASE_URL = "https://api.jamendo.com/v3.0";
const CLIENT_ID = "d8642bbc";

export const fetchTrackData = async (trackId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/tracks/`, {
            params: {
                client_id: CLIENT_ID,
                id: trackId,
                format: "json",
            },
        });
        
        return response.data;
    } catch (error) {
        console.log("Error fetching track data: ", error);
        throw error;
    }
};