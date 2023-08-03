const endDate = "03 Aug 2023 06:10 PM";
document.getElementById("enddate").innerText = endDate;
const input = document.querySelectorAll("input");



function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    if (diff<0) return;
    const days = diff/3600/24;
    const hours = (diff/3600)%24;
    const minutes = (diff/60)%60;
    const seconds = diff % 60;
    
    input[0].value = Math.floor(days);
    input[1].value = Math.floor(hours);
    input[2].value = Math.floor(minutes);
    input[3].value = Math.floor(seconds);
}

clock()

setInterval(()=>{clock(),
1000});

