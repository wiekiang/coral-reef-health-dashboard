# Coral Reef Health Assessment Dashboard

## Project Overview
This project aims to create a dashboard for assessing the health of coral reefs based on various environmental factors. The dashboard will provide visualizations of data related to benthic composition, and will include predictive models using machine learning techniques to analyze and predict coral health.

## Key Components
- Data Collection and Preprocessing
- Machine Learning Model Development
- Backend Development
- Frontend Development (React)
- Integration and Deployment

## Machine Learning Models
The project employs machine learning models to predict coral health based on environmental data. Models used include:

* **Random Forest:** An ensemble learning method effective for handling structured, tabular data.
* **Gradient Boosting Machine (GBM):** A powerful model known for its accuracy and efficiency in prediction tasks.
* **Long Short-Term Memory (LSTM):** A type of recurrent neural network, useful for time-series data, which may be considered for future enhancements.

## Datasets
The project uses datasets from the Australian Institute of Marine Science (AIMS):

1. **Benthic Data (all.reef.csv):** Contains information about the benthic composition at different reefs and depths.

## Notebooks
In the [notebooks folder](https://github.com/wiekiang/coral-reef-health-dashboard/tree/develop/notebooks), there are two files:

* [data_preprocessing](https://github.com/wiekiang/coral-reef-health-dashboard/blob/develop/notebooks/data_preprocessing.ipynb): Handles data optimization, cleanup, and preprocessing.
* [data_analysis](https://github.com/wiekiang/coral-reef-health-dashboard/blob/develop/notebooks/data_analysis.ipynb): Contains visualizations and exploratory data analysis.

## Dependencies
- Python
- Pandas
- Matplotlib
- Seaborn
- Scikit-learn
- React (for the dashboard)
- Node.js and npm

## Model Development
The model development involves training and tuning the following models:s

* Random Forest
* Gradient Boosting Machine (GBM)
* Long Short-Term Memory (LSTM)

For more details on model development, [visit the Deepnote platform](https://deepnote.com/workspace/Team-Member-at-WIES-798da747-1ee5-4625-acb5-a01f96ddd4d7/project/Coral-Reef-Health-Prediction-Model-Development-1762dcff-703e-4976-a0ba-5c3c5ee64cbc/notebook/notebook-4f0f3719657c4a8fa0d8955444c79ded).

## References
Australian Institute of Marine Science (AIMS). (2020). Development of the coral index, a summary of coral reef resilience as a guide for management. https://doi.org/10.25845/g0nc-1549, accessed 01-Aug-2024.

## Note
This project is intended for educational purposes only. The data used is obtained from the Australian Institute of Marine Science (AIMS) and is meant to illustrate machine learning techniques and data visualization.

## License
The code in this project is licensed under the MIT License. See LICENSE for details.
Please note that the data used for this project is obtained from the Australian Institute of Marine Science (AIMS) and its use may be subject to additional terms and conditions.
