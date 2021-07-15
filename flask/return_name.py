# request 모듈 import
from flask import Flask, jsonify, request

app = Flask(__name__)

# @app.route를 작성하고, GET Method만 사용 가능
# get방식은 url 에서 물음표(?) 뒤에 데이터를 입력해서 전송하는 방식
# post방식은 form이라는 데이터에 일정한 양식에 맞춰 데이터를 입력해서 전송하는 방식

@app.route("/", methods=["GET"])
def input():
    # url 주소 + ? + name = sooyeon
    name = request.args.get('name')
    # GET 방식으로 request.args를 사용해서 데이터를 가져온 뒤 name 을 JSON 형태로 반환
    return jsonify(name)
    
    
# Flask 서버 실행
if __name__ == "__main__":
    app.run()