const { Server: HttpServer } = require('http');
const { MongoClient, ObjectId } = require('mongodb');
const { Server: SocketIOServer } = require('socket.io');
const { uri, dbName, jwtSecret } = require('./config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const axios = require('axios');

const server = new HttpServer();
const io = new SocketIOServer(server, {
  cors: {
    origin: '*', // You can restrict this to specific domains or set it to "*" to allow all
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('user login', async ({ userId, token }) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/user/${userId}/update/online`,
        { isOnline: true },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(`User ${userId} is now online`);
    } catch (error) {
      console.error('Error updating user online status:', error.message);
    }
  });

  socket.on('joinFromWeb', async (data) => {
    const userId = data.data.userId;
    const token = data.data.token;

    try {
      const decoded = jwt.verify(token, jwtSecret);

      if (decoded.userId === userId) {
        try {
          const response = await axios.put(
            `http://localhost:3000/api/user/${userId}/update/currentSocketId`,
            { userCurrentSocketId: socket.id },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            },
          );

          socket.join(socket.id);

          console.log(`User ${userId} is now online`);
        } catch (error) {
          console.error('Error updating user online status:', error.message);
        }
      } else {
        console.error('Invalid user ID');
      }
    } catch (err) {
      console.error('Invalid token:', err);
    }
  });

  socket.on('joinFromApp', async (data) => {
    const token = data.data.token;
    const userId = data.data.userId;
    const pcKey = md5(data.data.pcKey);

    console.log({ token, userId, pcKey });

    // const pc = await PC.authApp(userID, authentication_key, pcKey);
    // if (pc) {
    //   const user = await User.getUser(userID);
    //   if (user) {
    //     socket.join(user.ioSocketID);
    //     const pcData = await PC.getPC(pcKey);
    //     if (pcData) {
    //       const pcInfo = {};
    //       pcInfo.pcSocketID = socket.id;
    //       await PC.updatePcSocketID(pcData._id, pcInfo, {});
    //     }
    //   }
    // }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`Socket.IO server listening on port ${port}`);
});
