// Get all the countries from Asia continent /region using Filter function

var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all', true);
request.send();
request.onload = function(){
var data = JSON.parse(request.response);
 var result = data.filter((element)=>{
 return element.region === "Asia";
})
console.log(result);
}
