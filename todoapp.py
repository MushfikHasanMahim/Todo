from flask import Flask, render_template, request, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] ="sqlite:///todo.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    
db = SQLAlchemy(app)

class Todo(db.Model):
    sno = db.Column(db.Integer, primary_key=True )
    title = db.Column(db.String(120), nullable=False)
    desc = db.Column(db.String(300), nullable=False)
    date_created = db.Column(db.String(100), default=str(datetime.now())[:-7])
    
    def __repr__(self):
        return f"{self.sno} - {self.title} - {self.desc}"
        
        
@app.route("/home", methods=["GET", "POST"])        
@app.route("/", methods=["GET", "POST"])
def index():
       
    if request.method == "POST":
        todo = Todo(title=request.form["title"], desc=request.form["desc"])
        if todo.title and todo.desc:      
            db.session.add(todo)
            db.session.commit()
            #flash("Title and Description can't be empty.")
          
    todos = Todo.query.all()
    return render_template("index.html", todos = todos)


@app.route("/update/<int:sno>", methods=['GET', 'POST'])
def update(sno):
    todo = Todo.query.filter_by(sno=sno).first()
    if request.method == "POST":
        title = request.form["title"]
        desc = request.form["desc"]
        todo.title = title
        todo.desc = desc
        db.session.commit()
        return redirect("/")
    return render_template('update.html', todo=todo)


@app.route("/delete/<int:sno>")
def delete(sno):     
    todo = Todo.query.filter_by(sno=sno).first()
    db.session.delete(todo)
    db.session.commit()
    # flash(f"{todo} was deleted.")
    todos = Todo.query.all()
    return redirect("/")



if __name__=="__main__":
    app.run(debug=True)
