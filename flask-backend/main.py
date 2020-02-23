import os
import flask

app = flask.Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload():
    file = flask.request.files['file']
    print(file)
    return "done"

@app.route("/")
def index():
    return flask.render_template("index.html", token="Hello, Flask + React")

if __name__ == "__main__":
    app.run(debug=True)