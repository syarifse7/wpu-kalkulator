

var tombol = document.querySelector(".container-tombol"); // aktifkan tombol pada kalkulator
var layar = document.querySelector("#layar"); // aktifkan layar pada kalkulator

tombol.addEventListener("click", function(e){ //mengaktifkan fungsi tombol
	
	var tombolClick = e.target;
	var nilaiTombol = tombolClick.innerText;

	if(nilaiTombol == "C"){
		layar.value = "";
	}
	else if(nilaiTombol == "<"){
		layar.value = layar.value.slice(0, -1);
	}
	else if(nilaiTombol == "="){
		layar.value = eval(layar.value);
	}
	else {
		layar.value = layar.value + nilaiTombol;
	}

});
