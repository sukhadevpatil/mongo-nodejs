const { MongoClient } = require("mongodb");
async function main() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("jobapp");
    const insertDemo = database.collection("insertDemo");

    const options = { upsert: true }; // upsert will insert if no matching record found
    const filter = { name: "John Patrick" };
    const doc = {
      $set: {
        salary: 400000,
      },
    };

    const result = await insertDemo.updateMany(filter, doc, options);

    console.log(`Modified successful : count :: ${result.modifiedCount}`);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
