from flask import Flask, request, jsonify
import joblib
import pandas as pd
from tensorflow.keras.models import load_model

app = Flask(__name__)

# Load models
rf_model = joblib.load('./models/random_forest_model.pkl')
gbm_model = joblib.load('./models/gbm_model.pkl')
lstm_model = load_model('./models/lstm_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    df = pd.DataFrame(data)
    # Preprocess data if needed
    # Example prediction
    rf_pred = rf_model.predict(df)
    gbm_pred = gbm_model.predict(df)
    lstm_pred = lstm_model.predict(df)
    return jsonify({
        'rf_prediction': rf_pred.tolist(),
        'gbm_prediction': gbm_pred.tolist(),
        'lstm_prediction': lstm_pred.tolist()
    })

if __name__ == '__main__':
    app.run(debug=True)
