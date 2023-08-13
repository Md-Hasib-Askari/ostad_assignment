function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
        return;
    }
    for (const objKey in obj) {
        console.log(objKey+': '+obj[objKey]);
    }
}
printObjectProperties({})
printObjectProperties({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
    key4: "value 4",
})
