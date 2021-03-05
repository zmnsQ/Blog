# 从app模块中导入app应用
from app import app
from gevent import monkey
from gevent.pywsgi import WSGIServer
from app import logger

from app.Controller.UserController import user

monkey.patch_all()
DEFAULT_MODULES = [user]


def run(host: str = '0.0.0.0', port: int = 2333):
    http_server = WSGIServer((host, port), app)
    logger.info('服务已启动于 http://{host}:{port}'.format(host=host, port=port))
    http_server.serve_forever()


# 防止被引用后执行，只有在当前模块中才可以使用
if __name__ == '__main__':
    run()
