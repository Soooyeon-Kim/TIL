# Flask 모듈을 import 후 Flask 객체 생성
from flask import Flask
app = Flask(__name__)


# "/" URL에서 메시지를 출력하도록 페이지 연결
@app.route("/")
def hello():
    return "Hello World!"


# Flask 서버 실행
if __name__ == "__main__":
    app.run()
