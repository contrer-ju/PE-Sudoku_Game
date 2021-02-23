function newArray(){
    let randomArray = [Math.floor(Math.random() * 9)]
    let i = 0;
    do{
        let randomNumber = Math.floor(Math.random() * 9);
        let compare = (currentValue) => currentValue !== randomNumber;
        if(randomArray.every(compare)){
            randomArray.push(randomNumber);
            i++;
        }
    } while (i < 8);
    return randomArray;
}