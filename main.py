from flask import Flask,redirect,request,render_template

app = Flask(__name__)
app.secret_key = 'flamengo'
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/quemSomos')
def quemSomos():
    return render_template('quemSomos.html')
















if __name__ == '__main__':
    app.run(debug=True)