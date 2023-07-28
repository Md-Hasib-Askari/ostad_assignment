function multiplicationTableGenerator(value) {
    console.log("Generate Multiplication Table for: " + value);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${value} = ${i*value}`);
    }

}

multiplicationTableGenerator(5);