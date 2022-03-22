function printi() {
  document.getElementById('topnav').style.position = "relative"
  window.print()
  document.getElementById('topnav').style.position = "fixed"
  window.alert("I don't care if you wanted to save it as a pdf, why would you want to print a page???")
}

function dropPre() {
	var para = document.getElementById('contt');
	para.style.display = 'none';
}

function drop() {
	var para = document.getElementById('contt');
	var button = document.getElementById('show');
	var top = document.getElementById('tops');

	if (para.style.display == 'none') {
		para.style.opacity = 0;
		button.innerHTML = 'hide'
		para.style.display = 'block';
		setTimeout(() => {
			para.style.opacity = 1;
		}, 50);
		tops.style.borderRadius = "8px 8px 0 0"
	} else {
		button.innerHTML = 'show'
		para.style.opacity = 0;
		setTimeout(() => {
			para.style.display = 'none';
		}, 300);
		tops.style.borderRadius = "8px";
	}

	/*
	
	if (para.style.display == 'none') {
		para.style.display = 'block'
		button.innerHTML = 'hide'
		top.style.borderRadius = "8px 8px 0 0"
	}
	else {
		para.style.display = 'none'
		button.innerHTML = 'show'
		top.style.borderRadius = "8px"
	}
	*/
}