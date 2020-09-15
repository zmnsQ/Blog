# 从app模块中即从__init__.py中导入创建的app应用
from flask import render_template

from app import app
from werkzeug.exceptions import HTTPException


# 建立路由，通过路由可以执行其覆盖的方法，可以多个路由指向同一个方法。
@app.route('/')
@app.route('/index')
def index():
    return "Hello,World!"


@app.errorhandler(HTTPException)
def handle_bad_request(e):
    index = "job/index"
    return render_template('404.html', index=index), 404
