from flask import session, request

from app import DAO, config
from app.Controller.UserController import user


@user.route('/ClickLike', methods=['GET', 'POST'])
def ClickLike():
    email = session.get('email')
    if email is not None:
        user_id = DAO.getUserID(email)
        arc_id = request.values.get('arc_id')
        sql = "SELECT Like_tag FROM LIKE WHERE user_id='" + user_id + "' and arc_id='" + arc_id + "'"
        like_tag = DAO.SelectQueryInDB(sql)
        if like_tag == 1:
            code = DAO.insertToLike(user_id, arc_id, config.STATUS.DISLIKE)
            return code
        elif like_tag == 0:
            code = DAO.insertToLike(user_id, arc_id, config.STATUS.LIKE)
            return code
    else:
        return config.STATUS.REQUEST_ERROR