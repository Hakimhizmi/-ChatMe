import openai
from flask_cors import cross_origin
from flask import Flask , request


openai.api_key = "" #set your api here




app = Flask(__name__)

@app.route("/ask")
@cross_origin()


def ask():
    response = openai.Completion.create(
    engine="text-davinci-003",
    prompt=request.args['q'],
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.7
)
    answer = response["choices"][0]["text"]
    return {"qes":request.args['q'],"ans":answer}

if __name__ == "__main__" :
    app.run(debug=True)    
