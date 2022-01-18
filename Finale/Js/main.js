const hamburger = document.getElementsByClassName('hamburger')[0];
const navboi = document.getElementsByClassName('navboi')[0];


 hamburger.addEventListener('click', () => {
   navboi.classList.toggle('active')})

//navbar stuff



function cuteM () {

  alert("U kinda cute ngl")

}

var count = 0;

function dontM() {

  if (count++ == 0) {
    alert("Really ?")
    alert("You really read that and decided to go for it anyways");
    alert("Do you even know how to read ?")
    alert("Look at you now, pressing ok trying your best to get it done for")
    alert("Give me a reason to make this stop ? one reason")
    alert("Just kidding you can go")
  };

  if (count++ > 1) {
    alert("Not again no --__--")
  };
}

document.getElementsByClassName('prompt-answer')

function question () {

  var name = prompt ("Your name is ?")

  if (name=="Nix" || name=="nix" || name=="Hsn"|| name=="hsn") {
    document.getElementById('pa').innerHTML = `Welcome Creator`;
    }

  else if (name==="Angela" || name==="angela" || name==="Angela abed al khalek" || name==="Angela Abed Al Khalek") {
  document.getElementById('pa').innerHTML = `Sup Partner <3`;
  }

  else if (name==="Lamis" || name==="lamis" || name==="Lamis Sbeiti" || name==="lamis sbeiti" || name==="Lamis sbeiti" ) {
    document.getElementById('pa').innerHTML = `Sup Boo <3`;
    }

  else if (name==="ayre" || name==="Ayre" || name==="moso" || name==="zabre" || name==="nfo5o" ) {
    document.getElementById('pa').innerHTML = `ehh yalla moso`;
    }

  else {
    document.getElementById('pa').innerHTML = `That's a cool name ${name}`;
  }


}

//clicking stuff ends here

function decider () {

  var val1 = document.getElementById('text-1').value;
  var val2 = document.getElementById('text-2').value;
  var val3 = document.getElementById('text-3').value;
  
  if (val1 == "I" || val1 == "i" && val2 == "Am" || val2 == "am" && val3 == "Cute" || val3 == "cute"){
    alert('You sure damn are!')
    return true;
  }

  else {
    alert('Come on, you can do it!')
    return false;
  }

}

//writing stuff ends here


let img = document.querySelector('#img-d')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')

btn1.addEventListener('click', () => {
  img.src = 'images/dv.png';
})

btn2.addEventListener('click', () => {
  img.src = 'images/tv.png';
})

btn3.addEventListener('click', () => {
  img.src = 'images/mv.png';
})

//jsrd webpage button change image stuff
