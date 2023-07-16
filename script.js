setInterval(()=>{
T= new Date();
hrotation=30*T.getHours() + T.getMinutes()/2;
mrotation=6*T.getMinutes();
srotation=6*T.getSeconds();
hour.style.transform=`rotate(${hrotation}deg)`;
document.getElementById("minute").style.transform=`rotate(${mrotation}deg)`;
document.getElementById("second").style.transform=`rotate(${srotation}deg)`;
},1000);