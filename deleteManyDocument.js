const { MongoClient } = require("mongodb");
async function main() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("jobapp");
    const insertDemo = database.collection("insertDemo");

    const filter = { name: "John Patrick 3" };

    const result = await insertDemo.deleteMany(filter);

    if (result.deletedCount > 0) {
      console.log(`Deleted one document :: ${result.deletedCount}`);
    } else {
      console.log("No matching document found for deletion");
    }
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
