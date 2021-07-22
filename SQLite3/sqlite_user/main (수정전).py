from flask import Flask, jsonify, request
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from model import Base
from model.user_model import UserModel

engine = create_engine("sqlite:///main.db", connect_args={"check_same_thread": False})
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

app = Flask(__name__)

@app.route("/signup", methods=["POST"])
def signup():
    """회원가입"""
    # flask request 값 가져오기
    username = request.form["username"]
    password = request.form["password"]
    name = request.form["name"]
    email = request.form["email"]

    # sqlalchemy를 이용하여 db에 사용자 저장하기
    user = UserModel(username, password, name, email)
    session.add(user)
    session.commit()
    
    return "SUCCESS"


@app.route("/signin", methods=["POST"])
def signin():
    """로그인"""
    # flask request에서 값 가져오기
    username = request.form.get("username")
    password = request.form.get("password")

    # 값으로 db 조회하여 사용자 찾기
    user = session.query(UserModel).filter(
        UserModel.username == username, 
        UserModel.password == password
    ).one_or_none()
    if user is None:
        return "No User"

    return jsonify({
        "user_id": user.user_id,
        "username": user.username,
        "password": user.password,
        "name": user.name,
        "email": user.email
    })


@app.route("/user/password", methods=["PATCH"])
def change_password():
    username = request.form.get("username")
    password = request.form.get("password")

    new_password = request.form.get("new_password")

    user = session.query(
        UserModel
    ).filter(
        UserModel.username == username,
        UserModel.password==password
    ).one_or_none()
    if user is None:
        return "No User"
    
    user.password = new_password
    session.add(user)
    session.commit()

    return "SUCCESS"


@app.route("/user", methods=["DELETE"])
def delete_user():
    username = request.form.get("username")
    password = request.form.get("password")

    user = session.query(
        UserModel
    ).filter(
        UserModel.username == username,
        UserModel.password==password
    ).one_or_none()
    if user is None:
        return "No User"
    
    session.delete(user)
    session.commit()

    return "SUCCESS"

app.run(debug=True)