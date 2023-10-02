use('test_db'); // Created Database named "test_db"

db.createCollection('testCollection1'); // Created Collection named "testCollection1"
db.createCollection('testCollection2'); // Created Collection named "testCollection2"

db.testCollection2.drop(); // dropped "testCollection2"

db.testCollection1.insertOne({  // Inserted one document
    title: "Pixel 5",
    manufacturer: "Google",
    price: 200000,
});

db.testCollection1.deleteOne({  // Deleted one document whose title="Pixel 5"
    title: "Pixel 5",
});
