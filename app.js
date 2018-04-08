function Clock() {
    const fullDate= new Date();
    var h= fullDate.getHours();
    var m= fullDate.getMinutes();
    var s= fullDate.getSeconds();
    
    if(h<10)
       { h="0" + h;}
    if(m<10)
    {m="0" + m;}
    if(s<10)
    {s="0" + s;}
     
    document.getElementById("hour").innerHTML = h + ":";
    document.getElementById("minutes").innerHTML = m + ":";
    document.getElementById("seconds").innerHTML = s;
}
setInterval(Clock,1000);