function myfun(d)
{
let request = new XMLHttpRequest();
request.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+d+ '&appid=93f26e3c57081a6210de53b8dcfdfea4',true);
request.onload = function() {
    if( request.status >=200 && request.status < 400){
        console.log("success!!!");
        let data = JSON.parse(request.responseText);
        let imgsrc= 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        document.getElementById('myparas').innerHTML=data.name;
        document.getElementById('mypara').innerHTML=data.main.temp+'F';
        document.getElementById('myimg').src= imgsrc;
        console.log(data);
    }
    else {
        console.log("could not connect to server")
    }
}
request.onerror = function() {
    console.log("error!!")
}
request.send();
}
myfun(prompt("Enter Location"))