from flask import Flask, render_template, request
import sys

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home/index.html')

@app.route('/authenticated', methods=['POST'])
def authenticated():
    return render_template('dashboard/index.html')

@app.route('/about', methods=['POST'])
def about():
    return render_template('about/index.html')

app.run(debug=True)