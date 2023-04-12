"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "md5":
/*!**********************!*\
  !*** external "md5" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("md5");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("validator");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ \"md5\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Connection URI and database name\nconst uri = process.env.MONGODB_URI;\nconst dbName = process.env.DB_NAME;\n// Create a new MongoClient\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(uri);\nlet isConnected = false;\nasync function connectToMongoClient() {\n    if (!isConnected) {\n        try {\n            await client.connect();\n            isConnected = true;\n        } catch (error) {\n            console.error(\"Error connecting to MongoDB:\", error);\n            throw error;\n        }\n    }\n    return client;\n}\nfunction respond(name) {\n    return {\n        name: name\n    };\n}\nasync function handler(req, res) {\n    const { email , password , firstName , lastName  } = req.body;\n    if (!email || !password || !firstName || !lastName) {\n        return res.status(401).json(respond(\"username/password/first name/last name required\"));\n    }\n    if (!validator__WEBPACK_IMPORTED_MODULE_2___default().isAlpha(firstName) || !validator__WEBPACK_IMPORTED_MODULE_2___default().isAlpha(lastName)) {\n        return res.status(401).json(respond(\"First Name and Last Name need to be only string\"));\n    }\n    if (!validator__WEBPACK_IMPORTED_MODULE_2___default().isEmail(email)) {\n        return res.status(401).json(respond(\"Invalid Email\"));\n    }\n    const encryptedPassword = md5__WEBPACK_IMPORTED_MODULE_0___default()(password);\n    const userData = {\n        email,\n        password: encryptedPassword,\n        firstName,\n        lastName\n    };\n    try {\n        const mongoClient = await connectToMongoClient();\n        const db = mongoClient.db(dbName);\n        const usersCollection = db.collection(\"users\");\n        // Check if the email already exists\n        const existingUser = await usersCollection.findOne({\n            email\n        });\n        if (existingUser) {\n            return res.status(400).json(respond(\"Email already exists\"));\n        }\n        // Insert the user data into the \"users\" collection\n        await usersCollection.insertOne(userData);\n        return res.status(200).json(respond(\"User created successfully\"));\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n        return res.status(500).json(respond(\"Internal server error\"));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQjtBQUNnQjtBQUVKO0FBTWxDLG1DQUFtQztBQUNuQyxNQUFNRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUMsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxPQUFPO0FBRWxDLDJCQUEyQjtBQUMzQixNQUFNQyxTQUFTLElBQUlSLGdEQUFXQSxDQUFDRTtBQUUvQixJQUFJTyxjQUFjLEtBQUs7QUFFdkIsZUFBZUMsdUJBQXVCO0lBQ3BDLElBQUksQ0FBQ0QsYUFBYTtRQUNoQixJQUFJO1lBQ0YsTUFBTUQsT0FBT0csT0FBTztZQUNwQkYsY0FBYyxJQUFJO1FBQ3BCLEVBQUUsT0FBT0csT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtZQUM5QyxNQUFNQSxNQUFNO1FBQ2Q7SUFDRixDQUFDO0lBQ0QsT0FBT0o7QUFDVDtBQUVBLFNBQVNNLFFBQVFDLElBQVksRUFBRTtJQUM3QixPQUFPO1FBQ0xBLE1BQU1BO0lBQ1I7QUFDRjtBQUVlLGVBQWVDLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBRSxHQUFHTCxJQUFJTSxJQUFJO0lBRXpELElBQUksQ0FBQ0osU0FBUyxDQUFDQyxZQUFZLENBQUNDLGFBQWEsQ0FBQ0MsVUFBVTtRQUNsRCxPQUFPSixJQUNKTSxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDWCxRQUFRO0lBQ2xCLENBQUM7SUFFRCxJQUFJLENBQUNiLHdEQUFpQixDQUFDb0IsY0FBYyxDQUFDcEIsd0RBQWlCLENBQUNxQixXQUFXO1FBQ2pFLE9BQU9KLElBQ0pNLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUNYLFFBQVE7SUFDbEIsQ0FBQztJQUVELElBQUksQ0FBQ2Isd0RBQWlCLENBQUNrQixRQUFRO1FBQzdCLE9BQU9ELElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNYLFFBQVE7SUFDdEMsQ0FBQztJQUVELE1BQU1jLG9CQUFvQjdCLDBDQUFHQSxDQUFDcUI7SUFFOUIsTUFBTVMsV0FBVztRQUNmVjtRQUNBQyxVQUFVUTtRQUNWUDtRQUNBQztJQUNGO0lBRUEsSUFBSTtRQUNGLE1BQU1RLGNBQWMsTUFBTXBCO1FBQzFCLE1BQU1xQixLQUFLRCxZQUFZQyxFQUFFLENBQUN6QjtRQUMxQixNQUFNMEIsa0JBQWtCRCxHQUFHRSxVQUFVLENBQUM7UUFFdEMsb0NBQW9DO1FBQ3BDLE1BQU1DLGVBQWUsTUFBTUYsZ0JBQWdCRyxPQUFPLENBQUM7WUFBRWhCO1FBQU07UUFDM0QsSUFBSWUsY0FBYztZQUNoQixPQUFPaEIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1gsUUFBUTtRQUN0QyxDQUFDO1FBRUQsbURBQW1EO1FBQ25ELE1BQU1rQixnQkFBZ0JJLFNBQVMsQ0FBQ1A7UUFFaEMsT0FBT1gsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1gsUUFBUTtJQUN0QyxFQUFFLE9BQU9GLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBT00sSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1gsUUFBUTtJQUN0QztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYW5kLXNlcnZlci8uL3BhZ2VzL2FwaS9yZWdpc3Rlci50cz83ZGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZDUgZnJvbSBcIm1kNVwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSBcInZhbGlkYXRvclwiO1xyXG5cclxudHlwZSBEYXRhID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbi8vIENvbm5lY3Rpb24gVVJJIGFuZCBkYXRhYmFzZSBuYW1lXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIGFzIHN0cmluZztcclxuY29uc3QgZGJOYW1lID0gcHJvY2Vzcy5lbnYuREJfTkFNRSBhcyBzdHJpbmc7XHJcblxyXG4vLyBDcmVhdGUgYSBuZXcgTW9uZ29DbGllbnRcclxuY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XHJcblxyXG5sZXQgaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb01vbmdvQ2xpZW50KCkge1xyXG4gIGlmICghaXNDb25uZWN0ZWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICAgIGlzQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6XCIsIGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbmQobmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG5hbWUsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBmaXJzdE5hbWUsIGxhc3ROYW1lIH0gPSByZXEuYm9keTtcclxuXHJcbiAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIWZpcnN0TmFtZSB8fCAhbGFzdE5hbWUpIHtcclxuICAgIHJldHVybiByZXNcclxuICAgICAgLnN0YXR1cyg0MDEpXHJcbiAgICAgIC5qc29uKHJlc3BvbmQoXCJ1c2VybmFtZS9wYXNzd29yZC9maXJzdCBuYW1lL2xhc3QgbmFtZSByZXF1aXJlZFwiKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbGlkYXRvci5pc0FscGhhKGZpcnN0TmFtZSkgfHwgIXZhbGlkYXRvci5pc0FscGhhKGxhc3ROYW1lKSkge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDQwMSlcclxuICAgICAgLmpzb24ocmVzcG9uZChcIkZpcnN0IE5hbWUgYW5kIExhc3QgTmFtZSBuZWVkIHRvIGJlIG9ubHkgc3RyaW5nXCIpKTtcclxuICB9XHJcblxyXG4gIGlmICghdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24ocmVzcG9uZChcIkludmFsaWQgRW1haWxcIikpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZW5jcnlwdGVkUGFzc3dvcmQgPSBtZDUocGFzc3dvcmQpO1xyXG5cclxuICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgIGVtYWlsLFxyXG4gICAgcGFzc3dvcmQ6IGVuY3J5cHRlZFBhc3N3b3JkLFxyXG4gICAgZmlyc3ROYW1lLFxyXG4gICAgbGFzdE5hbWUsXHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1vbmdvQ2xpZW50ID0gYXdhaXQgY29ubmVjdFRvTW9uZ29DbGllbnQoKTtcclxuICAgIGNvbnN0IGRiID0gbW9uZ29DbGllbnQuZGIoZGJOYW1lKTtcclxuICAgIGNvbnN0IHVzZXJzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgZW1haWwgYWxyZWFkeSBleGlzdHNcclxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHVzZXJzQ29sbGVjdGlvbi5maW5kT25lKHsgZW1haWwgfSk7XHJcbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihyZXNwb25kKFwiRW1haWwgYWxyZWFkeSBleGlzdHNcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEluc2VydCB0aGUgdXNlciBkYXRhIGludG8gdGhlIFwidXNlcnNcIiBjb2xsZWN0aW9uXHJcbiAgICBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uaW5zZXJ0T25lKHVzZXJEYXRhKTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uZChcIlVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIikpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBNb25nb0RCOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24ocmVzcG9uZChcIkludGVybmFsIHNlcnZlciBlcnJvclwiKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtZDUiLCJNb25nb0NsaWVudCIsInZhbGlkYXRvciIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImRiTmFtZSIsIkRCX05BTUUiLCJjbGllbnQiLCJpc0Nvbm5lY3RlZCIsImNvbm5lY3RUb01vbmdvQ2xpZW50IiwiY29ubmVjdCIsImVycm9yIiwiY29uc29sZSIsInJlc3BvbmQiLCJuYW1lIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiaXNBbHBoYSIsImlzRW1haWwiLCJlbmNyeXB0ZWRQYXNzd29yZCIsInVzZXJEYXRhIiwibW9uZ29DbGllbnQiLCJkYiIsInVzZXJzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJleGlzdGluZ1VzZXIiLCJmaW5kT25lIiwiaW5zZXJ0T25lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();