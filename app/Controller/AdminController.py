from flask import Blueprint, request, session
from app import config

admin = Blueprint('admin', __name__, url_prefix='/admin')


@admin.route('/login', methods=['GET', 'POST'])
def adminLogin():
    if request.method == 'GET':
        return config.STATUS.REQUEST_ERROR
    if request.method == 'POST':
        data = request.form.get('data')
        user = data['user']
        password = data['password']
        if user == config.User and password == config.Password:
            session['user'] = user
            return config.STATUS.OK
        else:
            return config.STATUS.ADMIN_ERROR


@admin.route('/logout')
def logout():
    session.clear()
    return config.STATUS.OK
