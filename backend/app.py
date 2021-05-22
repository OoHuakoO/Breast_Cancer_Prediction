from flask import Flask, render_template, request
import pickle
from sklearn.linear_model import LogisticRegression

from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/prediction', methods=['POST'])
def prediction():
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
                         float(cellShape), float(adhesion), float(epithelialSize), float(bareNiclei), float(blandCromatin), float(normalNucleoli), float(mitoses),]]
        if machineLearning == 'naivebayes' :    
                print('a')
                naiveBayes = pickle.load(open('Naivebayes.pkl', 'rb'))
                predictionModel = naiveBayes.prediction(predictData)[0]
         
        elif machineLearning == 'Quadratic Discriminant Analysis' :
                print('b')
                quadraticDiscriminantAnalysis = pickle.load(open('QuadraticDiscriminantAnalysis.pkl', 'rb'))
                predictionModel = quadraticDiscriminantAnalysis.prediction(predictData)[0]

        elif machineLearning == 'Random Forest' :
                print('c')
                randomForest = pickle.load(open('RandomForest.pkl', 'rb'))
                predictionModel = randomForest.prediction(predictData)[0]
        return str(predictionModel)
if __name__ == '__main__':
    app.run()
