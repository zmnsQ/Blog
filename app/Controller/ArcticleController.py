from flask import request
from app import config, OSS, DAO
import os, random

from app.Controller.AdminController import admin


@admin.route('/putArc', method='POST')
def putArc():
    arcfile = request.files.get('file')
    arcname = request.values.get('name')
    arctype = request.values.get('type')
    list = []
    for i in range(0, 10):
        list.append(i)
    tagcode = random.sample(list, 7)
    with open(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode + ".md") as file:
        file.write(arcfile)
    arcurl = OSS.putToArc(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode + ".md", arcname)
    code = DAO.insertToARCTICLES(arcname, arcurl, arctype)
    os.remove(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode + ".md")
    return code


@admin.route('/upadteArc', method='POST')
def updateArc():
    arcfile = request.files.get('file')
    arcname = request.values.get('name')
    arctype = request.values.get('type')
    arc_id = request.values.get('arc_id')
    list = []
    for i in range(0, 10):
        list.append(i)
    tagcode = random.sample(list, 7)
    with open(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode + ".md") as file:
        file.write(arcfile)
    arcurl = OSS.putToArc(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode + ".md", arcname)
    code = DAO.updateARCTICLES(arc_id, arcname, arctype)
    os.remove(config.BASE_DIR + "/tmp/arcTmpFile" + tagcode + ".md")
    return code
