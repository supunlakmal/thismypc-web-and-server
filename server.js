const { Server: HttpServer } = require('http');
const { MongoClient, ObjectId } = require('mongodb');
const { Server: SocketIOServer } = require('socket.io');
const { uri, dbName, jwtSecret } = require('./config');
const jwt = require('jsonwebtoken');

const server = new HttpServer();
const io = new SocketIOServer(server, {
  cors: {
    origin: '*', // You can restrict this to specific domains or set it to "*" to allow all
    methods: ['GET', 'POST'],
  },
});

async function connectToMongoDB() {
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}

async function updateUserOnlineStatus(client, userId, online) {
  const db = client.db(dbName);
  const usersCollection = db.collection('users');
  await usersCollection.updateOne(
    { _id: new ObjectId(userId) },
    { $set: { online } },
  );
}

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('user login', async (userId) => {
    try {
      const client = await connectToMongoDB();
      await updateUserOnlineStatus(client, userId, true);
      console.log(`User ${userId} is now online`);
      await client.close();
    } catch (error) {
      console.error('Error updating user online status:', error);
    }
  });

  socket.on('joinFromWeb', async (data) => {
    const userId = data.data.userId;
    const token = data.data.token;

    try {
      const decoded = jwt.verify(token, jwtSecret);

      if (decoded.userId === userId) {
        const client = await connectToMongoDB();
        const db = client.db(dbName);
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({
          _id: new ObjectId(userId),
        });

        console.log({ user });

        if (user) {
          socket.join(user.ioSocketID);
          await usersCollection.updateOne(
            { _id: new ObjectId(userId) },
            { $set: { userCurrentSocketId: socket.id } },
          );
          io.sockets.in(user.ioSocketID).emit('getAppData', {
            data: 'start',
          });
        }

        await client.close();
      } else {
        console.error('Invalid user ID');
      }
    } catch (err) {
      console.error('Invalid token:', err);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Socket.IO server listening on port ${port}`);
});
