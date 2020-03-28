__author__ = 'michaelfromyeg'
import os
import io
import csv
import logging

from flask import Flask, make_response, request, render_template, jsonify
from flask_cors import CORS, cross_origin

# Configure logger for debugging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('Hello, world!')

# Allow file types; csv and Excel only
ALLOWED_EXTENSIONS = ['csv', 'xls', 'xlsx']

app = Flask(__name__)
CORS(app, supports_credentials=True)

def transform(text_file_contents):
    return text_file_contents.replace("=", ",")

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/upload", methods=["POST"])
@cross_origin(supports_credentials=True)
def upload():
    f = request.files['file']
    print(f)
    if not f:
        return "No file"
    if not allowed_file(f.filename):
        return "Invalid file type"

    stream = io.StringIO(f.stream.read().decode("UTF8"), newline=None)
    csv_input = csv.reader(stream)

    data = []
    for row in csv_input:
        data.append(row)

    print(jsonify(data))
    
    return jsonify(data)

@app.route("/submit", methods=["POST"])
@cross_origin(supports_credentials=True)
def submit():
    resp = jsonify(success=True)
    return resp

@app.route("/")
def index():
    return render_template("index.html", token="")

if __name__ == "__main__":
    app.run(debug=True)