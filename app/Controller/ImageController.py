from flask import request
from app import config
import os,random
from app import OSS,DAO

from app.Controller.AdminController import admin


@admin.route("/putimage")
def putimage():
    imgfile = request.files.get('file')
    imgname = request.values.get('name')
    name, ext = os.path.splitext(imgname)
    list = []
    for i in range(0, 10):
        list.append(i)
    tagcode = random.sample(list, 7)
    with open(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode + ext) as file:
        file.write(imgfile)
    arcurl = OSS.putToArc(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode+ext, imgname)
    code = DAO.insertToImage(arcurl, use_tag=1)
    os.remove(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode + ext)
    return code
