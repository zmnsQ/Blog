# 从app模块中导入app应用
# from app import app
import json
import time

import requests
from flask import Flask, request, Blueprint
from werkzeug.utils import secure_filename

from app import OSS

oss = Blueprint('oss',__name__)

def run(host: str = '0.0.0.0', port: int = 2333):
    app = Flask(__name__)
    print('服务已启动于 http://{host}:{port}'.format(host=host, port=port))
    app.register_blueprint(oss)
    app.run(host=host, port=port)


@oss.route("/oss/putArc",methods=['POST'])
def putArc():
    data = json.loads(request.data)
    file = data["content"]
    timestap = time.time()
    fileName = str(timestap)+".md"
    arcurl = OSS.putToArc(fileName, file)
    return arcurl


@oss.route("/oss/getArc",methods=['POST'])
def getArc():
    data = json.loads(request.data)
    url = data["url"]
    print(url)
    file = requests.get(url)
    md = file.content
    return md


@oss.route("/oss/putImg",methods=['POST'])
def putImg():
    file = request.files.get("file")
    print(file)
    fileName = secure_filename(file.filename)
    with open("./"+fileName,"wb") as tmp:
        tmp.write(file.read())
        imgsrc = OSS.putToImg("./"+fileName, tmp)
    return imgsrc


if __name__ == '__main__':
    run()
