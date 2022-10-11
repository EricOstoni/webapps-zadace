function numInTime (x) {
    let sati = Math.round(x/60)   
    let minute = x%60 
    console.log(sati + " : " +  minute)
}

numInTime(120)