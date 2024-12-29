from flask import Flask, jsonify
import pandas as pd
import os

#shows
if os.path.exists('flask-server/movie-data/titles.csv'):
    data = pd.read_csv('flask-server/movie-data/titles.csv')
    
    show_data = data[data['type'] == "SHOW"]
    print(show_data)
    JSONshow_data = show_data[['title', 'release_year']].to_dict(orient='records')

    movie_data = data[data['type'] == "MOVIE"]
    print(movie_data)
    JSONmovie_data = movie_data[['title', 'release_year']].to_dict(orient='records')

    

app = Flask(__name__)   
@app.route("/shows")
def show_data_route():
    reply = jsonify(JSONshow_data)
    reply.headers['Access-Control-Allow-Origin'] = "*"
    reply.headers['Content-Type'] = "application/json"
    return reply

@app.route("/movies")
def movie_data_route():
    reply = jsonify(JSONmovie_data)
    reply.headers['Access-Control-Allow-Origin'] = "*"
    reply.headers['Content-Type'] = "application/json"
    return reply

if __name__ == "__main__":
    app.run(debug=True)

