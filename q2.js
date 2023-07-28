function filterEven(arr) {
    let filteredArray = [];
    arr.forEach((element) => {
        if (element % 2 === 0) {
            filteredArray.push(element);
        }
    });
    console.log(`Original Array: [${arr}]`);
    console.log(`Filtered Even Numbers: [${filteredArray}]`);
}

let someArr = [12, 34, 45, 23, 6, 78, 54, 90];
filterEven(someArr);