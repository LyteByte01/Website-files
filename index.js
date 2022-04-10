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

function dropPre2() {
	var para = document.getElementById('contt2');
	para.style.display = 'none';
}

function dropPre3() {
	var para = document.getElementById('contt3');
	para.style.display = 'none';
}

function dropPre4() {
	var para = document.getElementById('contt4');
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
		top.style.borderRadius = "8px 8px 0 0"
	} else {
		button.innerHTML = 'show'
		para.style.opacity = 0;
		setTimeout(() => {
			para.style.display = 'none';
		}, 300);
		tops.style.borderRadius = "8px";
	}
}

	
	function drop2() {
	var para = document.getElementById('contt2');
	var button = document.getElementById('show2');
	var top = document.getElementById('tops2');

	if (para.style.display == 'none') {
		para.style.opacity = 0;
		button.innerHTML = 'hide'
		para.style.display = 'block';
		setTimeout(() => {
			para.style.opacity = 1;
		}, 50);
		top.style.borderRadius = "8px 8px 0 0"
	} else {
		button.innerHTML = 'show'
		para.style.opacity = 0;
		setTimeout(() => {
			para.style.display = 'none';
		}, 300);
		top.style.borderRadius = "8px";
	}

	
}

function drop3() {
	var para = document.getElementById('contt3');
	var button = document.getElementById('show3');
	var top = document.getElementById('tops3');

	if (para.style.display == 'none') {
		para.style.opacity = 0;
		button.innerHTML = 'hide'
		para.style.display = 'block';
		setTimeout(() => {
			para.style.opacity = 1;
		}, 50);
		top.style.borderRadius = "8px 8px 0 0"
	} else {
		button.innerHTML = 'show'
		para.style.opacity = 0;
		setTimeout(() => {
			para.style.display = 'none';
		}, 300);
		top.style.borderRadius = "8px";
	}

	
}

function drop4() {
	var para = document.getElementById('contt4');
	var button = document.getElementById('show4');
	var top = document.getElementById('tops4');

	if (para.style.display == 'none') {
		para.style.opacity = 0;
		button.innerHTML = 'hide'
		para.style.display = 'block';
		setTimeout(() => {
			para.style.opacity = 1;
		}, 50);
		top.style.borderRadius = "8px 8px 0 0"
	} else {
		button.innerHTML = 'show'
		para.style.opacity = 0;
		setTimeout(() => {
			para.style.display = 'none';
		}, 300);
		top.style.borderRadius = "8px";
	}

	
}