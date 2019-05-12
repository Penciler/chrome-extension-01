function getPic(){
	var img = document.createElement("img");

	var breed = document.getElementById("breed").value;
	//console.log('breed:' + breed);
	var url = "https://dog.ceo/api/breed/" + breed + "/images/random";

	//fetch("https://dog.ceo/api/breeds/image/random")
	fetch(url)
	  .then(function(response) {
	    return response.json();
	  })
	  .then(function(myJson) {
	    console.log(JSON.stringify(myJson));
	    img.src = myJson.message;
	    var src = document.getElementById("x");
	 	src.appendChild(img);
	 	//document.getElementById("x") = img;
	  });
}

document.getElementById("breed").addEventListener("change", getPic);

document.getElementById("breed").onchange = getPic();
