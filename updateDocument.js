const { MongoClient } = require("mongodb");
async function main() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("jobapp");
    const insertDemo = database.collection("insertDemo");

    const filter = { name: "John Patrick" };
    const doc = {
      $set: {
        city: "Southampton, United Kingdom",
        age: 23,
      },
    };

    const result = await insertDemo.updateOne(filter, doc);

    console.log(
      `Update successful : Modified count :: ${result.modifiedCount}`
    );
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
