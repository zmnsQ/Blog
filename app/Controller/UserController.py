import json
import random
import re
import yagmail

from flask import Blueprint, app, request, session
from flask_login import login_manager
from app import config, DAO

user = Blueprint('user', __name__, url_prefix='/api')

code = None
email = None


@user.before_request
def before_request():
    pass


@user.route('/userLoginCheck', methods=['GET', 'POST'])
def login():
    global email, code
    if request.method == 'GET':
        return config.STATUS.REQUEST_ERROR
    if request.method == 'POST':
        data = request.form.get('data')
        if data is not None:
            data = json.load(data)
            email = data['email']
            datacode = data['code']
            if len(email) > 0 and len(code) > 0 and re.match(
                    "^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$", email) is not None:
                if code == datacode:
                    checkemail = DAO.SelectQueryInDB("SELECT user_id FROM USER WHERR email= '" + email + "'")
                    if checkemail is not None:
                        session['user_id'] = checkemail
                        return config.STATUS.LOGIN_SUCCESS
                    else:
                        DAO.insertToUser(email)
                        checkemail = DAO.SelectQueryInDB("SELECT user_id FROM USER WHERR email= '" + email + "'")
                        session['user_id'] = checkemail
                        return config.STATUS.FIRST_LOGIN
                else:
                    return config.STATUS.CODE_ERROR
            else:
                return config.STATUS.EMAIL_LOGINERROR
        else:
            return config.STATUS.REQUEST_ERROR


@user.route('/getMailCode', methods=['GET'])
def get_mailcode():
    global email, code
    email = request.values.get("email")
    list = []
    for i in range(0, 10):
        list.append(i)
    code = random.sample(list, 4)
    mailserve = yagmail.SMTP(user=config.Mail_user,password=config.Mail_password,host=config.Mail_server)
    subject = ["ZMNS-Blog.TEC 验证码"]
    content = ["""
   <table style="width: 99.8%; height: 95%;">
    <tbody>
        <tr>
            <td id="QQMAILSTATIONERY" style="background:url(https://zmnssiteimages.oss-cn-chengdu.aliyuncs.com/Email_bg.jpg)no-repeat center ">
            <div style="text-align: center;"><font>{},您好！&nbsp;</font></div>
            <div style="text-align: center;"><font><br>
                </font>
            </div>
            <div style="text-align: center;"><font>您的 JunJun.Tec 验证码/临时登录密码 为&nbsp;</font></div>
            <div style="text-align: center;"><font><br>
                </font>
            </div>
            <div style="text-align: center;"><font color="#ff0000"><b><u>{}</u></b></font></div>
            <div style="text-align: center;"><font><br>
                </font>
            </div>
            <div style="text-align: center;"><font>如非您本人操作无需理会。&nbsp;</font></div>
            <div style="text-align: center;"><font><br>
                </font>
            </div>
            <div style="text-align: center;"><font>感谢支持。</font></div>
            </td>
        </tr>
    </tbody>
</table>
<div><includetail><!--<![endif]--></includetail></div>
    """.format(email,code)]
    try:
        mailserve.send(email,subject,content)
    except:
        return config.STATUS.MAIL_SEND_ERROR
    return config.STATUS.OK
