const { MongoClient } = require("mongodb");
async function main() {
  const uri = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(uri);
  try {
    const database = client.db("jobapp");
    const users = database.collection("users");

    const pipeline = [
      { $sort: { lastApplication: 1 } },
      {
        $group: {
          _id: "$city",
          user_count: { $sum: 1 },
          firstDoc: { $first: "$lastApplication" },
        },
      },
    ];
    const cursor = users.aggregate(pipeline);

    await cursor.forEach(function (user) {
      console.log(user);
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);
