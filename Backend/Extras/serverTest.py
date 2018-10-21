from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify

app = Flask(__name__)
api = Api(app)

cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

@app.route("/", methods=['GET'])
def roottest():
    name1="anisha"
    name2="adil"
    return jsonify([
            {'name': name1},
            {'name': name2}
            ])

@app.route("/test1/", methods=['GET'])
def test1():
    name1="anisha_test"
    name2="adil_test"
    return jsonify([
            {'name': name1},
            {'name': name2}
            ])
    
@app.route("/test2/", methods=['GET'])
def test2():
    name1="anisha_test_test"
    name2="adil_test_test"
    return jsonify([
            {'name': name1},
            {'name': name2}
            ])     
    
    
if __name__ == '__main__':
     app.run(port=5002)