from flask import Flask
from flask import render_template
# from flaskext.mysql import MySQL

app = Flask(__name__)

@app.route('/dulces')
def dulces():
    return render_template('dulces.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/novedades')
def novedades():
    return render_template('novedades.html')



@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)