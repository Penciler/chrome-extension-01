var img = document.createElement("img");

fetch("https://dog.ceo/api/breeds/image/random")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    img.src = myJson.message;
    var src = document.getElementById("x");
 	src.appendChild(img);
  });

