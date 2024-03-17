const { MongoClient } = require("mongodb");
async function main() {
  const uri =
    "mongodb+srv://****:****@cluster0.vigqsrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);
  try {
    const database = client.db("movie-api-db");
    const users = database.collection("movies");
    const cursor = users.find();

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
