from flask import Flask, request, render_template_string
app = Flask(__name__)
@app.route("/")
def index():
    name = request.args.get("name", "")
    return render_template_string("Bonjour {{ " + name + " }}")