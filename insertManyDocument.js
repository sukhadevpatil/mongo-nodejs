const { MongoClient } = require("mongodb");
async function main() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("jobapp");
    const insertDemo = database.collection("insertDemo");

    const doc = [
      { name: "John Patrick 1", age: 41 },
      { name: "John Patrick 2", age: 42 },
      { name: "John Patrick 3", age: 43 },
    ];

    const result = await insertDemo.insertMany(doc);

    console.log(`Insertion successful :: ${result.insertedCount}`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
