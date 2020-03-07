__author__ = 'michaelfromyeg'
import os
import io
from flask import Flask, make_response, request, render_template, jsonify
import csv

app = Flask(__name__)

def transform(text_file_contents):
    return text_file_contents.replace("=", ",")

@app.route("/upload", methods=["POST"])
def upload():
    f = request.files['file']
    if not f:
        return "No file"

    stream = io.StringIO(f.stream.read().decode("UTF8"), newline=None)
    csv_input = csv.reader(stream)

    data = []
    for row in csv_input:
        data.append(row)

    print(jsonify(data))
    
    return jsonify(data)

@app.route("/")
def index():
    return render_template("index.html", token="Hello, Flask + React")

if __name__ == "__main__":
    app.run(debug=True)