from flask import Flask
from flask_cors import CORS
import simplejson as json
from datetime import datetime

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origin": "*"}})

@app.route('/', methods=['GET'])
def check():
    ret = {
        'curso':'Redes de Computadoras 2',
        'nombre':'Andrés Esteban Carvajal Morales',
        'carnet':'201612272',
        'fecha': str(datetime.now())
    }
    
    return json.dumps(ret)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True, use_reloader=True)