from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load trained model
with open('customer_churn_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Load encoders
with open('encoders.pkl', 'rb') as f:
    encoders = pickle.load(f)

@app.route('/')
def home():
    return "✅ Customer Churn Prediction API is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        df = pd.DataFrame([data])

        # Encode categorical fields safely
        for col, encoder in encoders.items():
            if df[col].values[0] not in encoder.classes_:
                return jsonify({'error': f"Invalid value for {col}: {df[col].values[0]}"}), 400
            df[col] = encoder.transform(df[col])

        # ✅ Access the real model inside the dictionary
        prediction = model["model"].predict(df)[0]
        probability = model["model"].predict_proba(df)[0][1]

        return jsonify({
            'prediction': 'Churn' if prediction == 1 else 'Not Churn',
            'probability': round(probability, 2)
        })

    except Exception as e:
        print("❌ ERROR during prediction:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
