function getPic(){
	var img = document.createElement("img");

	var width = document.getElementById("width").value;
	var height = document.getElementById("height").value;
	//console.log('breed:' + breed);
	var url = "https://picsum.photos/" + width + "/" + height;

	//fetch("https://picsum.photos/200/300")
	fetch(url)
	  .then(function(response) {
	  	console.log(response);
	    //return response.json();
	    return response;
	  })
	  .then(function(myJson) {
	    console.log(JSON.stringify(myJson));
	    //img.src = myJson.message;
	    img.src = myJson.url;
	    var src = document.getElementById("x");
	 	//src.appendChild(img);
	 	if(src.childElementCount == 0){
	 		src.appendChild(img);
	 	} else {
	 		src.replaceChild(img, src.childNodes[0]);
	 	}
	 	//document.getElementById("x") = img;
	  });
}

document.getElementById("width").addEventListener("change", getPic);

document.getElementById("width").onchange = getPic();

document.getElementById("height").addEventListener("change", getPic);

document.getElementById("height").onchange = getPic();

//getPic();
//document.getElementById("refresh").onclick = getPic();
