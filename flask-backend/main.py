__author__ = 'michaelfromyeg'
import os
import io
from flask import Flask, make_response, request, render_template
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
    #print("file contents: ", file_contents)
    #print(type(file_contents))
    print(csv_input)
    for row in csv_input:
        print(row)

    stream.seek(0)
    result = transform(stream.read())

    response = make_response(result)
    response.headers["Content-Disposition"] = "attachment; filename=result.csv"
    return response

@app.route("/")
def index():
    return render_template("index.html", token="Hello, Flask + React")

if __name__ == "__main__":
    app.run(debug=True)