var test = [1,1,1,0,1,0],
    temp,
    i = 0,
    j = test.length-1;
console.log(test);

while (i!==j) {
    if (test[i]===0) {
        i++;
    } else {
        if (test[j]===0) {
            console.log('DO SWAPPING: '+i+' : '+j);
            temp = test[i];
            test[i] = test[j];
            test[j] = temp;
            i++;
        }
        j--;
    }
}
console.log(test);