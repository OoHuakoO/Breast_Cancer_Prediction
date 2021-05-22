from flask import Flask, request
import pickle

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/prediction', methods=['POST'])
def prediction():
    predictionModel = ''
    if request.method == 'POST':
        data = request.get_json()
        thickness = data['thickness']
        cellSize = data['cellSize']
        cellShape = data['cellShape']
        adhesion = data['adhesion']
        epithelialSize = data['epithelialSize']
        bareNiclei = data['bareNiclei']
        blandCromatin = data['blandCromatin']
        normalNucleoli = data['normalNucleoli']
        mitoses = data['mitoses']
        machineLearning = data['machineLearning']

        predictData = [[float(thickness), float(cellSize),
                        float(cellShape), float(adhesion), float(epithelialSize), float(bareNiclei), float(blandCromatin), float(normalNucleoli), float(mitoses)]]
        if machineLearning == 'Naivebayes':
            naiveBayes = pickle.load(open('../model/Naivebayes.pkl', 'rb'))
            predictionModel = naiveBayes.predict(predictData)[0]
        elif machineLearning == 'Quadratic Discriminant Analysis':
            quadraticDiscriminantAnalysis = pickle.load(
                open('../model/QuadraticDiscriminantAnalysis.pkl', 'rb'))
            predictionModel = quadraticDiscriminantAnalysis.predict(predictData)[
                0]
        elif machineLearning == 'Random Forest':
            randomForest = pickle.load(open('../model/RandomForest.pkl', 'rb'))
            predictionModel = randomForest.predict(predictData)[0]
        print(predictionModel)
    return str(predictionModel)

if __name__ == '__main__':
    app.run()
