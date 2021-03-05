import datetime

from flask import request, session

from app import DAO, config
from app.Controller.UserController import user


@user.route('/comment', methods=['GET', 'POST'])
def setComment():
    if session.get('email') is not None:
        comment_content = request.values.get('content')
        arc_id = request.values.get('arc_id')
        reply_id = request.values.get('reply_id')
        dt = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        email = session.get('email')
        user_id = DAO.getUserID(email)
        code = DAO.insertToComments(user_id, arc_id, dt, comment_content, reply_id)
        return code
    else:
        return config.STATUS.REQUEST_ERROR
