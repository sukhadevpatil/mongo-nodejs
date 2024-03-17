const { MongoClient } = require("mongodb");
async function main() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("jobapp");
    const insertDemo = database.collection("insertDemo");

    const doc = {
      name: "John Patrick",
      age: 45,
      location: [12.44, 88.33],
      city: "Mumbai",
      hobbies: ["Cycling", "Jogging"],
      education: {
        university: "Southampton Universoty",
        city: "Southampton",
        start: "01-2015",
        end: "02-2017",
        degree: "MBA",
      },
    };

    const result = await insertDemo.insertOne(doc);

    console.log(`Insertion successful :: ${result.insertedId}`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
