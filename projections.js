const { MongoClient } = require("mongodb");
async function main() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("jobapp");
    const users = database.collection("users");

    const options = {
      projection: { _id: 0, name: 1, city: 1 },
    };
    const query = { age: { $lt: 25 } };

    const cursor = users.find(query, options);

    // const cursor = client.db('jobapp').collection('user').find();
    if ((await users.countDocuments(query)) == 0) {
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
