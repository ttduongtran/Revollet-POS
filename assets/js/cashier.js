var buttons = document.getElementsByClassName('tablinks');
var contents = document.getElementsByClassName('tabcontent');
function showContent(id) {
	for (var i = 0; i < contents.length; i++) {
		contents[i].style.display = 'none';
	}
	var content = document.getElementById(id);
	content.style.display = 'block';
}
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		var id = this.textContent;
		console.log('id');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove("active");
		}
		this.className += " active";
		showContent(id);
	});
}
showContent('Product 1');

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
