#!/usr/bin/python3
# encoding: utf-8
import pymysql

from flask import Flask
from flask_cors import *
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__,  template_folder='../templates')

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:a123456789@127.0.0.1:3306/job?charset=utf8mb4'
