import re

import pymysql
import app.config as conf

conn = pymysql.connect(
    host='10.10.10.2',
    user='root',
    password='blog',
    db='blog',
    charset='utf8',
    port=3306
)


def data_exists():
    db = pymysql.connect(host='10.10.10.2',
                         user='root',
                         password='blog',
                         charset='utf8',
                         port=3306)
    database = "blog"
    cursor = db.cursor()
    sql = "show databases"
    cursor.execute(sql)
    databases = [cursor.fetchall()]
    databases_list = re.findall('(\'.*?\')', str(databases))
    databases_list = [re.sub("'", '', each) for each in databases_list]
    if database in databases_list:
        code = conf.STATUS.DB_EXIST
    else:
        # 创建数据库
        sql = "CREATE DATABASE IF NOT EXISTS " + database
        try:
            cursor.execute(sql)
            db.commit()
            code = conf.STATUS.OK
        except:
            db.rollback()
            code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def initTableUser():
    cursor = conn.cursor()
    sql = """
        CREATE TABLE USER(
        user_id INT auto_increment PRIMARY KEY,
        email CHAR(30) NOT NULL
        )"""
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def initTableArcticles():
    cursor = conn.cursor()
    sql = """
        CREATE TABLE ARCTICLES(
        arc_id INT auto_increment PRIMARY KEY,
        arc_name CHAR(20) NOT NULL UNIQUE,
        arc_src CHAR(300) NOT NULL,
        arc_type CHAR(20)
        )"""
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def initTableLike():
    cursor = conn.cursor()
    sql = """
        CREATE TABLE LIKE(
        like_id INT auto_increment PRIMARY KEY,
        user_ID INT NOT NULL UNIQUE,
        arc_ID INT NOT NULL,
        like_tag INT(1),
        foreign key(user_id) references USER(user_id),
        foreign key(arc_ID) references ARCTICLES(arc_ID)
        )"""
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def initTableComment():
    cursor = conn.cursor()
    sql = """
            CREATE TABLE COMMENTS(
            comment_id INT auto_increment PRIMARY KEY,
            user_id INT NOT NULL,
            arc_id INT NOT NULL,
            comment_time TIMESTAMP NOT NULL,
            comment_context CHAR(200),
            reply_comment_id INT,
            foreign key(user_id) references USER(user_id),
            foreign key(arc_ID) references ARCTICLES(arc_ID)
            )"""
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def initTableImage():
    cursor = conn.cursor()
    sql = """
            CREATE TABLE IMAGE(
            image_id INT auto_increment PRIMARY KEY,
            image_src CHAR(1000) NOT NULL UNIQUE,
            use_tag INT(1) NOT NULL
            )"""
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def insertToUser(user_id, email):
    cursor = conn.cursor()
    sql = "INSERT INTO USER (email) VALUES(" + email + ")"
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def insertToARCTICLES(arc_name, arc_src, arc_type):
    cursor = conn.cursor()
    sql = "INSERT INTO USER (arc_name,arc_src, arc_type) VALUES(" + arc_name + "," + arc_src + "," + arc_type + ")"
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def insertToLike(user_id, arc_id, like_tag):
    cursor = conn.cursor()
    sql = "INSERT INTO USER (user_id,arc_id,like_tag) VALUES(" + user_id + "," + arc_id + "," + like_tag + ")"
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def insertToComments(user_id, arc_id, comment_time, comment_context, reply_comment_id):
    cursor = conn.cursor()
    sql = "INSERT INTO USER (user_id,arc_id,comment_time,comment_context,reply_comment_id) VALUES(" + user_id + "," + arc_id + "," + comment_time + "," + comment_context + "," + reply_comment_id + ")"
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def insertToImage(image_src, use_tag):
    cursor = conn.cursor()
    sql = "INSERT INTO USER (image_src,use_tag) VALUES(" + image_src + "," + use_tag + ")"
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def SelectQueryInDB(query):
    cursor = conn.cursor()
    try:
        cursor.execute(query)
        conn.commit()
        data = cursor.fetchone()
    except:
        conn.rollback()
    conn.close()
    return data


def updateArcticles(arc_id, arc_name, arc_type):
    cursor = conn.cursor()
    sql = "UPDATE ARCTICLES SET arc_name ='"+ arc_name +"' arc_type ='" + arc_type +"' WHERE arc_id ='" + arc_id +"'"
    try:
        cursor.execute(sql)
        conn.commit()
        code = conf.STATUS.OK
    except:
        conn.rollback()
        code = conf.STATUS.SQL_EXECUTE_ERROR
    conn.close()
    return code


def getUserID(email):
    sql = "SELECT user_id FROM USER WHERE email ='" + email + "'"
    user_id = SelectQueryInDB(sql)
    return user_id