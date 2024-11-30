const mongoose = require("mongoose");

// MongoDB Connection
const MONGO_URI = "mongodb://localhost:27017/Week8";

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Connected to ${MONGO_URI}`))
  .catch((err) => console.error("Error occurred during connection:", err));

// Creating Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  salary: {
    type: Number,
    min: 0,
    required: true,
  },
});

// Model Creation
const Person = mongoose.model("Person", personSchema, "personCollection");

// Create and Save a Document
/* const createPerson = async () => {
  try {
    const newPerson = new Person({
      name: "Yusuf",
      age: 44,
      gender: "Male",
      salary: 3456,
    });

    const savedPerson = await newPerson.save();
    console.log("New Document Added to the Database:", savedPerson);
  } catch (err) {
    console.error("Error while saving the document:", err);
  }
}; */

// For adding many person
/* const addManyPersons = async () => {
    try {
      const persons = [
        { name: "Simon", age: 42, gender: "Male", salary: 4000 },
        { name: "Neesha", age: 23, gender: "Female", salary: 5000 },
        { name: "Mary", age: 27, gender: "Female", salary: 3500 },
        { name: "Mike", age: 40, gender: "Male", salary: 6000 },
        { name: "Eve", age: 32, gender: "Other", salary: 4500 },
      ];
  
      const result = await Person.insertMany(persons);
      console.log("Documents added successfully:", result);
    } catch (err) {
      console.error("Error adding documents:", err);
    }
  }; */
// Execute the function to create and save a document
// addManyPersons();

// Task 3: Fetching Data
/* const fetchData = async () => {
    try {
        // i) return 5 documents only
      const allDocuments = await Person.find().limit(5);
      console.log(allDocuments);
  
      // ii) Fetch documents with a filtering criteria (Name and Salary)
      const filteredDocuments = await Person.find({}, { name: 1, salary: 1, _id: 0 });
      console.log(filteredDocuments);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  
  // Execute the function
  fetchData(); */

// Task 4: Fetching Documents with Filtering Criteria
/* const fetchFilteredData = async (ageLimit) => {
    try {
      console.log(`Fetching documents for gender = "Female" and age > ${ageLimit}:`);
  
      // Find command with filtering criteria
      const filteredDocuments = await Person.find({
        gender: "Female",
        age: { $gt: ageLimit }, // $gt is the MongoDB operator for "greater than"
      });
  
      console.log(filteredDocuments);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  
  // Execute the function with a specific age limit
  fetchFilteredData(20); */

/*   const getTotalDocuments = async () => {
    try {
      // Count the total number of documents
      const totalDocuments = await Person.countDocuments();
      console.log(`Total number of documents in the collection: ${totalDocuments}`);
    } catch (err) {
      console.error("Error counting documents:", err);
    }
  };
  
  // Execute the function
  getTotalDocuments(); */

// Task 6: Delete Documents for a Given Criteria
/* const deleteDocuments = async () => {
    try {
      // Delete all documents where age > 25
      const result = await Person.deleteMany({ age: { $gt: 25 } });
      
      console.log(`Deleted ${result.deletedCount} documents.`);
    } catch (err) {
      console.error("Error deleting documents:", err);
    }
  };
  
  // Execute the function
  deleteDocuments(); */

// Task 7: Update All Documents for a Given Criteria
const updateDocuments = async () => {
  try {
    // Update all documents where gender is "Female"
    const result = await Person.updateMany(
      { gender: "Female" }, // Filtering criteria
      { $set: { salary: 5555 } } // Update operation
    );

    console.log(`${result.modifiedCount} documents were updated.`);
  } catch (err) {
    console.error("Error updating documents:", err);
  }
};

// Execute the function
updateDocuments();
