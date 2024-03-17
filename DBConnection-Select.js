const { MongoClient } = require("mongodb");
async function main() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("jobapp");
    const users = database.collection("user");
    const cursor = users.find();

    // const cursor = client.db('jobapp').collection('user').find();
    if ((await users.countDocuments()) == 0) {
      console.log("No documents found");
    }
    await cursor.forEach(function (doc) {
      console.log(doc);
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
