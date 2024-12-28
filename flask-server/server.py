from flask import Flask, jsonify
import pandas as pd
import os

if os.path.exists('flask-server/people-100.csv'):
    data = pd.read_csv('flask-server/people-100.csv')
    jobs = data[['Index', 'Job Title']].to_dict(orient="records")

app = Flask(__name__)    
@app.route("/output")
def showData():
    reply = jsonify(jobs)
    reply.headers['Access-Control-Allow-Origin'] = "*"
    reply.headers['Content-Type'] = "application/json"
    return reply

if __name__ == "__main__":
    app.run()

