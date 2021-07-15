from flask import Flask, request
app = Flask(__name__)

@app.route('/sum')
def sum():
   a = int(request.args['a'])
   b = int(request.args['b'])
   return str(a+b)


@app.route('/mul')
def mul():
   a = int(request.args['a'])
   b = int(request.args['b'])
   return str(a*b)


@app.route('/sub')
def sub():
   a = int(request.args['a'])
   b = int(request.args['b'])
   return str(a-b)


@app.route('/div')
def sum():
   a = int(request.args['a'])
   b = int(request.args['b'])
   return str(a/b)

if __name__ == '__main__':
   app.run(debug=True)

# http://127.0.0.1:5000/sum?a=10&b=10