import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchPrediction = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/predict`, data);
        return response.data;
    } catch (error) {
        console.error('Error fetching prediction', error);
        throw error;
    }
};
