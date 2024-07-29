import React, { useState } from 'react';
import { fetchPrediction } from '../api';

const PredictionForm = () => {
    const [formData, setFormData] = useState({});
    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await fetchPrediction(formData);
        setPrediction(result);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Add input fields for your data here */}
                <input type="text" name="example" onChange={handleChange} />
                <button type="submit">Predict</button>
            </form>
            {prediction && (
                <div>
                    <h3>Predictions:</h3>
                    <p>Random Forest: {prediction.rf_prediction}</p>
                    <p>GBM: {prediction.gbm_prediction}</p>
                    <p>LSTM: {prediction.lstm_prediction}</p>
                </div>
            )}
        </div>
    );
};

export default PredictionForm;
