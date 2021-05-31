let leftTime = {
    d: 0,
    h: 0,
    m: 0, 
    s: 0,
}

let allSeconds

function clockRunner () {
    allSeconds = Math.floor((new Date('01.01.2021') - new Date()) / 1000);
    console.log(allSeconds)
    let interval = setInterval(() => {
        if(allSeconds < 0){
            clearInterval(interval)
        }
    }, 1000)
}



clockRunner()