# render_templates 모듈 import 
# templates 폴더 내부에 index.html의 파일을 불러온 뒤 띄워주는 기능
from flask import Flask, render_template
from flask import Flask

app = Flask(__name__)


@app.route('/')
def elice():
    return render_template('index.html')
    # render_templates를 작성한 @app.route의 return문에 적용


if __name__ == "__main__":
    app.run()
