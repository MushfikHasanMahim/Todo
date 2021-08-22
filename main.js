sun = document.querySelector("#sun")
moon = document.querySelector("#moon")
body = document.querySelector("body")
table = document.querySelector("table")


if (window.localStorage.getItem('theme') == 'light') {
  sun.style.display = "block";
  moon.style.display = "none";
  body.style.background = "#fff";
  body.style.color = "#24252e";
  //document.querySelector('.container').style.background="#e7e7e7"
  document.querySelector('.input-text').style.color = "#24252a"
  document.querySelector('.input-text').style.border = "2px solid #24252a"
  document.querySelector('textarea').style.color = "#111"
  table.classList.toggle('table-light')
} else {

  sun.style.display = "none"
  moon.style.display = "block"
  moon.style.color = "#fff"
  moon.style.background = "black"
  body.style.background = "#24252a"
  body.style.color = "#fff"
  //	document.#querySelector('.container').style.background="#181818"
  document.querySelector('.input-text').style.color = "#fff"
  document.querySelector('.input-text').style.border = "2px solid #24252a"
  document.querySelector('textarea').style.color = "#fff"
  table.classList.toggle('table-dark')
}
document.querySelector('.message').style.background = "none";

function change() {
  if ((moon.style.display == "none") && (sun.style.display == "block")) {
    sun.style.display = "none"
    moon.style.display = "block"
    moon.style.color = "#fff"
    moon.style.background = "black"
    body.style.background = "#24252a"
    body.style.color = "#fff"
    //	document.#querySelector('.container').style.background="#181818"
    window.localStorage.clear()
    window.localStorage.setItem('theme', 'dark')
    document.querySelector('.input-text').style.color = "#fff"
    document.querySelector('.input-text').style.border = "2px solid #25242a"
    document.querySelector('textarea').style.color = "#fff"
    //document.querySelector('.container').classList.toggle('.bg-dark')
    table.classList.toggle('table-dark')
  } else {
    sun.style.display = "block";
    moon.style.display = "none";
    body.style.background = "#fff";
    body.style.color = "#24252e";
    //document.querySelector('.container').style.background="#e7e7e7"
    window.localStorage.clear()
    window.localStorage.setItem('theme', 'light')
    document.querySelector('.input-text').style.color = "#24252a"
    document.querySelector('.input-text').style.border = "2px solid #24252a"


    document.querySelector('textarea').style.color = "#111"
    document.querySelector('.message').style.background = "none"
    table.classList.toggle('table-light')

    //document.querySelector('.container').classList.toggle('.bg-light')
  }

};