const { Server: HttpServer } = require("http");
const { MongoClient, ObjectId } = require("mongodb");
const { Server: SocketIOServer, Socket } = require("socket.io");
const { uri, dbName } = require("./config");
const server = new HttpServer();
const io = new SocketIOServer(server, {
  cors: {
    origin: "*", // You can restrict this to specific domains or set it to "*" to allow all
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("user login", async (userId) => {
    try {
      const client = new MongoClient(uri);
      await client.connect();
      const db = client.db(dbName);
      const usersCollection = db.collection("users");
      console.log(usersCollection);
      await usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: { online: true } }
      );

      console.log(`User ${userId} is now online`);

      await client.close();
    } catch (error) {
      console.error("Error updating user online status:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Socket.IO server listening on port ${port}`);
});
