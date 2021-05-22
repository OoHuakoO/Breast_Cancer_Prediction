from flask import Flask, render_template, request
import pickle
from sklearn.linear_model import LogisticRegression

from flask_cors import CORS


app = Flask(__name__)
CORS(app)
print("ok")

@app.route('/prediction', methods=['POST'])
def prediction():
    if request.method == 'POST':
        print("2")
        data = request.get_json()
        name = data['name']
        surname = data['surname']
        sex = data['sex']
        age = data['age']
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

        predictData = [[float(name), float(surname), float(sex), float(age), float(thickness), float(cellSize),
                         float(cellShape), float(adhesion), float(epithelialSize), float(bareNiclei), float(blandCromatin), float(normalNucleoli), float(mitoses), float(machineLearning)]]
        if machineLearning == 'naivebayes' :
                print('a')
                naiveBayes = pickle.load(open('Naivebayes.pkl', 'rb'))
                prediction2 = naiveBayes.prediction(predictData)[0]
                return str(prediction2)
        elif machineLearning == 'Quadratic Discriminant Analysis' :
                print('b')
                quadraticDiscriminantAnalysis = pickle.load(open('QuadraticDiscriminantAnalysis.pkl', 'rb'))
                prediction2 = quadraticDiscriminantAnalysis.prediction(predictData)[0]
                return str(prediction2)
        elif machineLearning == 'Random Forest' :
                print('c')
                randomForest = pickle.load(open('RandomForest.pkl', 'rb'))
                prediction2 = randomForest.prediction(predictData)[0]
                return str(prediction2)
if __name__ == '__main__':
    app.run()
