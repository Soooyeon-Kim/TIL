from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/test', methods=['GET'])
def test_get():
   title_receive = request.args.get('title_give')
   # 'title_give 로 가져온 값을 가져와봐'라는 의미

   print(title_receive)
   # title_give로 받은 값을 title_receive로 저장한 뒤 출력
   return jsonify({'result':'success', 'msg': '이 요청은 GET!'})
   # Ajax로 콜 -> Ajax로 가지고 온 것을 API로 처리, response를 주고
   # 고객이었던 Ajax가 response에서 console.log로 찍어서 볼 수 있게 함

@app.route('/test', methods=['POST'])
def test_post():
   title_receive = request.form['title_give']
   print(title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 POST!'})

if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)