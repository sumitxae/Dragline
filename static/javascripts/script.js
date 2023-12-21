(function(){
async function letsGo(min,max){
             min = Math.ceil(min);
           return Math.floor(Math.random() * (max - min) + min)
}

    setInterval(run2,8000)
    async function run2(){
          document.getElementById('cycleTime').innerHTML = await letsGo(90,100)
          document.getElementById('hoistSpeed').innerHTML = await letsGo(110,130)
          document.getElementById('swingSpeed').innerHTML = await letsGo(100,120)
          document.getElementById('presentVolume').innerHTML = await letsGo(15,18)
    }
})()