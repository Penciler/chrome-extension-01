function getPic(callback){
	var img = document.createElement("img");

	var width = document.getElementById("width").value;
	var height = document.getElementById("height").value;
	//console.log('breed:' + breed);
	var url = "https://picsum.photos/" + width + "/" + height;
	
	//fetch("https://picsum.photos/200/300")
	fetch(url)
	  .then(function(response) {
	  	//console.log('response =' + response);
	    //return response.json();
	    return response;
	    
	  })
	  .then(function(myJson) {
	    //console.log('myJson url =' + myJson.url);
	    //img.src = myJson.message;
	    img.src = myJson.url;
	    var src = document.getElementById("x");
	 	//src.appendChild(img);
	 	if(src.childElementCount == 0){
	 		src.appendChild(img);
	 	} else {
	 		src.replaceChild(img, src.childNodes[0]);
	 	}
	 	callback(myJson.url);
	  });

}

window.onload = function(){

	document.getElementById("refresh").onclick = getPic(function(picUrl){console.log('picUrl:' + picUrl)});

	document.getElementById("refresh").addEventListener("click", getPic(function(picUrl){console.log('picUrl:' + picUrl)}));
}

