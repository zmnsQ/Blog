# 一些简单的博客用户配置

import os

User = "root"
Password = "123456"

Mail_server = "smtp.qq.com"  # 使用的邮箱服务
Mail_user = "402887431"  # 使用邮箱服务账户
Mail_password = "a123456789"  # 邮箱服务密码

BASE_DIR = "/home/flask"  # 项目产生文件目录


class OSSIMG(object):
    AccessKeyId = ""
    AccessKeySecret = ""
    Endpoint = ""
    Bucket = ""


class OSSARC(object):
    AccessKeyId = ""
    AccessKeySecret = ""
    Endpoint = ""
    Bucket = ""


class STATUS(object):
    OK = 200  # 正确
    DB_EXIST = 10  # 数据库存在
    INIT_ERROR = 110  # 初始化错误
    EMAIL_LOGINERROR = 2333  # 邮箱登陆错误
    REQUEST_ERROR = 0  # 请求错误
    CODE_ERROR = 144  # 验证码错误
    MAIL_SEND_ERROR = 255  # 邮件发送错误
    FIRST_LOGIN = 10010  # 第一次登陆
    LOGIN_SUCCESS = 555  # 登陆成功
    ADMIN_ERROR = 800  # 管理员账户或密码错误
    SQL_EXECUTE_ERROR = 8707  # SQL执行出错，回滚
    LIKE = 1  # 点赞
    DISLIKE = 0  # 点赞已取消
