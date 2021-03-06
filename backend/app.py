from flask import Flask
from flask_cors import CORS
import simplejson as json
from datetime import datetime
import requests

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origin": "*"}})

@app.route('/', methods=['GET'])
def check():
    r=requests.get('http://192.168.1.46:5000/')

    return json.dumps(r.json())


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, use_reloader=True)