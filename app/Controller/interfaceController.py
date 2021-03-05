import json

from flask import Blueprint, request
from app import DAO

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/getArcticle',methods=['GET', 'POST'])
def getArcticle():
    arcname = request.values.get('arcname')
    sql = "SELECT arc_src,arc_type FROM ARCTICLES WHERE arc_name ='"+arcname+"'"
    arcurl, arctype = DAO.SelectQueryInDB(sql)
    data = json.dumps({"arc_url": arcurl, "arc_type": arctype})
    return data
