// Print the total population of countries using reduce function
var request = new XMLHttpRequest();
       request.open('GET','https://restcountries.com/v3/all', true);
       request.send();
       request.onload = function(){
       var data = JSON.parse(request.response);
       const population=data.reduce((acc,curr)=>{
                return acc+curr.population;
            },0)
    console.log(population);}
