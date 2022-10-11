function prov (x) {
    if (x >= 0 && x <= 1000) {
        let numMult7 = [];
        for (let i = 0; i < x; i++) {
            if (i % 7 === 0 && i != 0) {
                numMult7.push(i);
            }
        }
        let a = 1;
        numMult7.forEach(num => {
            a *= num;
        })
        console.log(a);
    }
} 
prov(23);

