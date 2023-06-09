

  app.get("/api/v1/user/:userID/computer/:computerKey", async (req, res) => {

    const authentication_key = req.headers.authentication_key;

    const userID = req.params.userID;
    const computerKey = md5(req.params.computerKey);
    const userClass = new userComponent();
    const computerClass = new computerComponent();
    const authentication = await computerClass.authentication(
      res,
      userID,
      authentication_key,
      computerKey
    );
    if (authentication) {
      return (res = authentication);
    }
    
    await userClass.getUserDataFromDB(userID);
    userClass
      .userID()
      .userFirstName()
      .userLastName()
      .userEmail()
      .getAuthenticationKey();
    res.status(200).json(respond(true, "User Information", userClass.getUser()));
  });
  
  app.get("/api/v1/user/:userID/logout", async (req, res) => {
    const userID = req.params.userID;
    const authentication_key = req.headers.authentication_key;
    if (!(await User.authUser(userID, authentication_key))) {
      res.status(401);
      return res.json(respond(false, "Invalid User", null));
    }
    if (user) {
      const out = {};
      out.authentication_key = md5(userID + new Date()) + "_logout";
      await User.updateUserAuth(userID, out, {});
      res.status(200);
      res.json(respond(true, "logout!", null));
    } else {
      res.status(401);
      res.json(respond(true, "Invalid User", null));
    }
  });
  
  app.get("/api/v1/user/:userID/computer/logout", async (req, res) => {
    const userID = req.params.userID;
    const authentication_key = req.headers.authentication_key;
    if (!(await User.authApp(userID, authentication_key))) {
      res.status(401);
      return res.json(respond(false, "Invalid User", null));
    }
    if (user) {
      const out = {};
      out.authentication_key = md5(userID + new Date()) + "_logout";
      await User.updateUserAuth(userID, out, {});
      res.status(200);
      res.json(respond(true, "logout!", null));
    } else {
      res.status(401);
      res.json(respond(true, "Invalid User", null));
    }
  });
  
  app.post("/api/v1/user/computer/public/status/update", async (req, res) => {
    const authentication_key = req.headers.authentication_key;
    const computerKey = req.body.computerKey;
    const userID = req.body.userID;
    const publicAccessStatus = req.body.status;
    const user = await User.authUser(userID, authentication_key);
    if (!user) {
      res.status(401);
      return res.json(respond(false, "Invalid User", null));
    }
    let publicAccessKey = computerKey + Date.now();
    if (publicAccessStatus === 1) {
      publicAccessKey = md5(publicAccessKey);
    } else {
      publicAccessKey = md5(publicAccessKey);
    }
    const out = {};
    out.publicAccessKey = publicAccessKey;
    out.publicAccessStatus = publicAccessStatus;
    const computerClassData = await PC.updatePublicAccessStatus(
      computerKey,
      out,
      {
        new: true,
      }
    );
    if (computerClassData) {
      const computerClass = new computerComponent();
  
      computerClass.setComputer(computerClassData);
      computerClass.getComputerAuthentication();
      computerClass.getPublicAccessKey();
      res.status(200);
      res.json(respond(true, "Update Done", computerClass.getComputer()));
    }
  });
  
  app.post("/api/v1/user/computer/public/key/update", async (req, res) => {
    const authentication_key = req.headers.authentication_key;
    const computerKey = req.body.computerKey;
    const userID = req.body.userID;
    const user = await User.authUser(userID, authentication_key);
    if (!user) {
      res.status(401);
      return res.json(respond(false, "Invalid User", null));
    }
    let publicAccessKey = computerKey + Date.now();
    publicAccessKey = md5(publicAccessKey);
    const out = {};
    out.publicAccessKey = publicAccessKey;
    const pc = await PC.newPublicAccessKey(pcID, out, {
      new: true,
    });
    if (pc) {
      res.status(200);
      res.json(respond(true, "Update Done", out));
    }
  });
  
  app.post("/api/v1/user/computer/online", async (req, res) => {
    const userID = req.body.userID;
    const authentication_key = req.headers.authentication_key;
    const user = await User.authUser(userID, authentication_key);
    if (!user) {
      res.status(401);
      return res.json(respond(false, "Invalid User", null));
    }
    const pc = await PC.getPCByUserIDOnline(userID);
    if (pc) {
      res.status(200);
      res.json(respond(true, "Computer  Information", pc));
    } else {
      res.status(401);
      res.json(respond(false, "Invalid User", null));
    }
  });
  
  app.post("/api/v1/user/computer", async (req, res) => {
    const userID = req.body.userID;
    const authentication_key = req.headers.authentication_key;
    const user = await User.authUser(userID, authentication_key);
    if (!user) {
      res.status(401);
      return res.json(respond(false, "Invalid User", null));
    }
    const pc = await PC.getPCByUserID(userID);
    if (pc) {
      res.status(200);
      res.json(respond(true, "good call", pc));
    } else {
      res.status(401);
      res.json(respond(false, "Invalid User", null));
    }
  });
  
  app.post("/api/v1/user/authentication", async (req, res) => {
    const userID = req.body.userID;
    const authentication_key = req.headers.authentication_key;
    const user = await User.authUser(userID, authentication_key);
    if (user) {
      res.status(200);
      res.json(respond(true, "good call", null));
    } else {
      res.status(401);
      res.json(respond(false, "Invalid User", null));
    }
  });
  const isValidFoldersName = (() => {
    const rg1 = /^[^\\/:\*\?"<>\|]+$/; 
    const rg2 = /^\./; 
    const rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i; 
    return function isValidFoldersName(fname) {
      return rg1.test(fname) && !rg2.test(fname) && !rg3.test(fname);
    };
  })();
  io.on("connection", (socket) => {
    logger.log(socket.id);
    
    socket.on("loginPage", () => {});
    
    socket.on("disconnect", async () => {
      const pc = await PC.getPCSocketID(socket.id);
      if (pc) {
        const pcInfo = {};
        pcInfo.pcOnline = 0;
        pcInfo.pcSocketID = socket.id;
        await PC.updatePcOnlineStatus(pc._id, pcInfo, {});
      } else {
        const user = await User.getUserSocketId(socket.id);
        if (user) {
          const pc = await PC.getPCUsingID(user.userNowAccessPCID);
          if (pc) {
            const sendUserInfoToApp = {};
            sendUserInfoToApp.status = false;
            io.sockets
              .to(pc.pcSocketID)
              .emit("pcAccessRequest", sendUserInfoToApp);
          }
        }
      }
    });
    
    async function updateAppUserAuth(user, pcKey) {
      const date = new Date();
      const input = {};
      input.auth = md5(user._id + date + pcKey);
      input.id = user._id;
      const updateUserAuthApp = await PC.updateUserAuthApp(pcKey, input, {
        new: true,
      });
      return updateUserAuthApp;
    }
    app.post("/api/v1/user/computer/login", async (req, res) => {
      const email = req.body.email;
      
      const password = md5(req.body.password);
      const pcKey = md5(req.body.pcKey);
      const pcName = req.body.pcName;
      const platform = req.body.platform;
      req.body.password = password;
      if (req.body.email === "" || req.body.password === "") {
        res.status(401);
        return res.json(respond(false, "username/password required", null));
      }
      
      const computerClass = new computerComponent();
      const user = await User.loginUser(email, password);
      if (user) {
        
        const pc = await PC.getPCByUserIDAndPCKey(pcKey, user._id);
        if (pc) {
          const pcInfo = {};
          pcInfo.pcOnline = 1;
          pcInfo.pcSocketID = socket.id;
          await PC.updatePcOnlineStatus(pc._id, pcInfo, {});
          const pcOwner = {};
          pcOwner.pcID = pc._id;
          pcOwner.pcKey = pcKey;
          pcOwner.userID = user._id;
          const pcOwnerData = await PcOwner.pcAndOwner(pcOwner);
          if (pcOwnerData) {
            const userInformation = await User.getUser(user._id);
            await computerClass.updateAppUserAuth(user, pcKey);
            computerClass.getComputerAuthentication();
            await computerClass.getComputerUserInformation(user._id);
            res.status(200);
            res.json(respond(true, "Hello!", computerClass.getComputer()));
          }
        } else {
          const pc = {};
          pc.pcKey = pcKey;
          pc.pcName = pcName;
          pc.pcOnline = 1;
          pc.pcSocketID = socket.id;
          pc.platform = platform;
          pc.publicAccessKey = md5(pcKey + Date.now());
          pc.userID = user._id;
          const pcData = await PC.createNewPC(pc);
          if (pcData) {
            const pcOwner = {};
            pcOwner.pcID = pcData._id;
            pcOwner.pcKey = pcKey;
            pcOwner.userID = user._id;
            const pcOwnerData = await PcOwner.pcAndOwner(pcOwner);
            if (pcOwnerData) {
              await computerClass.updateAppUserAuth(user, pcKey);
              computerClass.getComputerAuthentication();
              await computerClass.getComputerUserInformation(user._id);
              res.status(200);
              res.json(respond(true, "Hello!", computerClass.getComputer()));
            }
          }
        }
        socket.join(user.ioSocketID);
      } else {
        res.status(401);
        res.json(respond(false, "Invalid User", null));
      }
      
    });