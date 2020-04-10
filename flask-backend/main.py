__author__ = 'michaelfromyeg'
import os
import io
import csv
import logging
import sqlite3
import pprint

from flask import Flask, make_response, request, render_template, jsonify, send_file, g
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy.types as types

# Configure logger for debugging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('Hello, world!')

# Allow file types; csv and Excel only
ALLOWED_EXTENSIONS = ['csv', 'xls', 'xlsx']

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config.from_object('config')

SQLALCHEMY_DATABASE_URI = app.config['SQLALCHEMY_DATABASE_URI']

db = SQLAlchemy(app)

class Data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(types.JSON())

    def __repr__(self):
        return f"Data('{user.id}', '{user.data}')"

def transform(text_file_contents):
    return text_file_contents.replace("=", ",")

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/upload", methods=["POST"])
@cross_origin(supports_credentials=True)
def upload():
    f = request.files['file']
    if not f:
        return "No file"
    if not allowed_file(f.filename):
        return "Invalid file type"
    stream = io.StringIO(f.stream.read().decode("UTF8"), newline=None)
    csv_input = csv.reader(stream)
    data = []
    for row in csv_input:
        data.append(row)
    
    return jsonify(data)

@app.route('/download')
def download():
    return send_file(app.config['DEFAULT_FILE'],
                     mimetype='text/csv',
                     attachment_filename='artesiansoft.csv',
                     as_attachment=True)


@app.route("/submit", methods=["POST"])
@cross_origin(supports_credentials=True)
def submit():
    pp = pprint.PrettyPrinter(indent=4)
    pp.pprint(request)
    # submit data to SQLite db 
    resp = jsonify(success=True)
    return resp

@app.route("/")
def index():
    return render_template("index.html", token="")

if __name__ == "__main__":
    app.run(debug=True)