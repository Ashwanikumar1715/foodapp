const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ashwani:ashwani@cluster0.w29fiuu.mongodb.net/mernfooddata?retryWrites=true&w=majority';

module.exports = async function () {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log("Connected to MongoDB");

    const foodCollection = await mongoose.connection.db.collection("food_items");
    const data = await foodCollection.find({}).toArray();

    const categoryCollection = await mongoose.connection.db.collection("foodCategory");
    const Catdata = await categoryCollection.find({}).toArray();
    global.foodData=data;
     global.foodCategory=Catdata;
    return { data, Catdata }; // Return the data as an objec

  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err;
  }
};
