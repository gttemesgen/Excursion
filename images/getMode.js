function getMode(array){
    //count amount of occurences of each number
    //create object
    const obj = {};
    //loop over array
    array.forEach(element => {
        //for each number in array,
        //if it soesn't already exist as a key on hte
        //object, createe one and set its value to 1.

        if(!obj[element]){
            obj[element] = 1;
        }else{
            //if already exists as key on the object,
            //increment its corresponding value.
            obj[number] += 1;
        }
        
    });
    console.log(obj)
}
console.log(getMode([,1,2,2,3,3,4,4,5,6,7,8,9]));