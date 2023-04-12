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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! md5 */ \"md5\");\n/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/mongoUtils */ \"(api)/./utils/mongoUtils.ts\");\n\n\n\nasync function handler(req, res) {\n    const { email , password , firstName , lastName  } = req.body;\n    if (!email || !password || !firstName || !lastName) {\n        return res.status(401).json((0,_utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__.respond)(\"Email/password/first name/last name required\"));\n    }\n    if (!validator__WEBPACK_IMPORTED_MODULE_1___default().isAlpha(firstName) || !validator__WEBPACK_IMPORTED_MODULE_1___default().isAlpha(lastName)) {\n        return res.status(401).json((0,_utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__.respond)(\"First Name and Last Name need to be only string\"));\n    }\n    if (!validator__WEBPACK_IMPORTED_MODULE_1___default().isEmail(email)) {\n        return res.status(401).json((0,_utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__.respond)(\"Invalid Email\"));\n    }\n    const encryptedPassword = md5__WEBPACK_IMPORTED_MODULE_0___default()(password);\n    const userType = \"user\"; // Hard-code the user type value\n    const userData = {\n        email,\n        password: encryptedPassword,\n        firstName,\n        lastName,\n        userType\n    };\n    try {\n        const mongoClient = await (0,_utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__.connectToMongoClient)();\n        const db = mongoClient.db(_utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__.dbName);\n        const usersCollection = db.collection(\"users\");\n        // Check if the email already exists\n        const existingUser = await usersCollection.findOne({\n            email\n        });\n        if (existingUser) {\n            return res.status(400).json((0,_utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__.respond)(\"Email already exists\"));\n        }\n        // Insert the user data into the \"users\" collection\n        await usersCollection.insertOne(userData);\n        return res.status(200).json((0,_utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__.respond)(\"User created successfully\"));\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n        return res.status(500).json((0,_utils_mongoUtils__WEBPACK_IMPORTED_MODULE_2__.respond)(\"Internal server error\"));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNCO0FBRVk7QUFDNkM7QUFNaEUsZUFBZUssUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNBLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUVDLFVBQVMsRUFBRUMsU0FBUSxFQUFFLEdBQUdMLElBQUlNLElBQUk7SUFFekQsSUFBSSxDQUFDSixTQUFTLENBQUNDLFlBQVksQ0FBQ0MsYUFBYSxDQUFDQyxVQUFVO1FBQ2xELE9BQU9KLElBQ0pNLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUNWLDBEQUFPQSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLENBQUNILHdEQUFpQixDQUFDUyxjQUFjLENBQUNULHdEQUFpQixDQUFDVSxXQUFXO1FBQ2pFLE9BQU9KLElBQ0pNLE1BQU0sQ0FBQyxLQUNQQyxJQUFJLENBQUNWLDBEQUFPQSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLENBQUNILHdEQUFpQixDQUFDTyxRQUFRO1FBQzdCLE9BQU9ELElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNWLDBEQUFPQSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNYSxvQkFBb0JqQiwwQ0FBR0EsQ0FBQ1M7SUFDOUIsTUFBTVMsV0FBVyxRQUFRLGdDQUFnQztJQUV6RCxNQUFNQyxXQUFXO1FBQ2ZYO1FBQ0FDLFVBQVVRO1FBQ1ZQO1FBQ0FDO1FBQ0FPO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YsTUFBTUUsY0FBYyxNQUFNbEIsdUVBQW9CQTtRQUM5QyxNQUFNbUIsS0FBS0QsWUFBWUMsRUFBRSxDQUFDbEIscURBQU1BO1FBQ2hDLE1BQU1tQixrQkFBa0JELEdBQUdFLFVBQVUsQ0FBQztRQUV0QyxvQ0FBb0M7UUFDcEMsTUFBTUMsZUFBZSxNQUFNRixnQkFBZ0JHLE9BQU8sQ0FBQztZQUFFakI7UUFBTTtRQUMzRCxJQUFJZ0IsY0FBYztZQUNoQixPQUFPakIsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1YsMERBQU9BLENBQUM7UUFDdEMsQ0FBQztRQUVELG1EQUFtRDtRQUNuRCxNQUFNa0IsZ0JBQWdCSSxTQUFTLENBQUNQO1FBRWhDLE9BQU9aLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNWLDBEQUFPQSxDQUFDO0lBQ3RDLEVBQUUsT0FBT3VCLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBT3BCLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNWLDBEQUFPQSxDQUFDO0lBQ3RDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1hbmQtc2VydmVyLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLnRzPzdkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1kNSBmcm9tIFwibWQ1XCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSBcInZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9Nb25nb0NsaWVudCwgZGJOYW1lLCByZXNwb25kIH0gZnJvbSBcIi4uLy4uL3V0aWxzL21vbmdvVXRpbHNcIjtcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxyXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cclxuKSB7XHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIGZpcnN0TmFtZSwgbGFzdE5hbWUgfSA9IHJlcS5ib2R5O1xyXG5cclxuICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCB8fCAhZmlyc3ROYW1lIHx8ICFsYXN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDQwMSlcclxuICAgICAgLmpzb24ocmVzcG9uZChcIkVtYWlsL3Bhc3N3b3JkL2ZpcnN0IG5hbWUvbGFzdCBuYW1lIHJlcXVpcmVkXCIpKTtcclxuICB9XHJcblxyXG4gIGlmICghdmFsaWRhdG9yLmlzQWxwaGEoZmlyc3ROYW1lKSB8fCAhdmFsaWRhdG9yLmlzQWxwaGEobGFzdE5hbWUpKSB7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5zdGF0dXMoNDAxKVxyXG4gICAgICAuanNvbihyZXNwb25kKFwiRmlyc3QgTmFtZSBhbmQgTGFzdCBOYW1lIG5lZWQgdG8gYmUgb25seSBzdHJpbmdcIikpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWxpZGF0b3IuaXNFbWFpbChlbWFpbCkpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbihyZXNwb25kKFwiSW52YWxpZCBFbWFpbFwiKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBlbmNyeXB0ZWRQYXNzd29yZCA9IG1kNShwYXNzd29yZCk7XHJcbiAgY29uc3QgdXNlclR5cGUgPSBcInVzZXJcIjsgLy8gSGFyZC1jb2RlIHRoZSB1c2VyIHR5cGUgdmFsdWVcclxuXHJcbiAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICBlbWFpbCxcclxuICAgIHBhc3N3b3JkOiBlbmNyeXB0ZWRQYXNzd29yZCxcclxuICAgIGZpcnN0TmFtZSxcclxuICAgIGxhc3ROYW1lLFxyXG4gICAgdXNlclR5cGUsIC8vIEFkZCB0aGUgaGFyZC1jb2RlZCB1c2VyIHR5cGUgdG8gdGhlIHVzZXJEYXRhIG9iamVjdFxyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBtb25nb0NsaWVudCA9IGF3YWl0IGNvbm5lY3RUb01vbmdvQ2xpZW50KCk7XHJcbiAgICBjb25zdCBkYiA9IG1vbmdvQ2xpZW50LmRiKGRiTmFtZSk7XHJcbiAgICBjb25zdCB1c2Vyc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGVtYWlsIGFscmVhZHkgZXhpc3RzXHJcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB1c2Vyc0NvbGxlY3Rpb24uZmluZE9uZSh7IGVtYWlsIH0pO1xyXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24ocmVzcG9uZChcIkVtYWlsIGFscmVhZHkgZXhpc3RzXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnNlcnQgdGhlIHVzZXIgZGF0YSBpbnRvIHRoZSBcInVzZXJzXCIgY29sbGVjdGlvblxyXG4gICAgYXdhaXQgdXNlcnNDb2xsZWN0aW9uLmluc2VydE9uZSh1c2VyRGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbmQoXCJVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHJlc3BvbmQoXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIikpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibWQ1IiwidmFsaWRhdG9yIiwiY29ubmVjdFRvTW9uZ29DbGllbnQiLCJkYk5hbWUiLCJyZXNwb25kIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiaXNBbHBoYSIsImlzRW1haWwiLCJlbmNyeXB0ZWRQYXNzd29yZCIsInVzZXJUeXBlIiwidXNlckRhdGEiLCJtb25nb0NsaWVudCIsImRiIiwidXNlcnNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImV4aXN0aW5nVXNlciIsImZpbmRPbmUiLCJpbnNlcnRPbmUiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ }),

/***/ "(api)/./utils/mongoUtils.ts":
/*!*****************************!*\
  !*** ./utils/mongoUtils.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client),\n/* harmony export */   \"connectToMongoClient\": () => (/* binding */ connectToMongoClient),\n/* harmony export */   \"dbName\": () => (/* binding */ dbName),\n/* harmony export */   \"isConnected\": () => (/* binding */ isConnected),\n/* harmony export */   \"respond\": () => (/* binding */ respond),\n/* harmony export */   \"uri\": () => (/* binding */ uri)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// Connection URI and database name\nconst uri = process.env.MONGODB_URI;\nconst dbName = process.env.DB_NAME;\n// Create a new MongoClient\nconst client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri);\nlet isConnected = false;\nasync function connectToMongoClient() {\n    if (!isConnected) {\n        try {\n            await client.connect();\n            isConnected = true;\n        } catch (error) {\n            console.error(\"Error connecting to MongoDB:\", error);\n            throw error;\n        }\n    }\n    return client;\n}\nfunction respond(name) {\n    return {\n        name: name\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nb1V0aWxzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBRXRDLG1DQUFtQztBQUM1QixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsQ0FBVztBQUM5QyxNQUFNQyxTQUFTSCxRQUFRQyxHQUFHLENBQUNHLE9BQU8sQ0FBVztBQUVwRCwyQkFBMkI7QUFDcEIsTUFBTUMsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0MsS0FBSztBQUVwQyxJQUFJTyxjQUFjLEtBQUssQ0FBQztBQUV4QixlQUFlQyx1QkFBdUI7SUFDM0MsSUFBSSxDQUFDRCxhQUFhO1FBQ2hCLElBQUk7WUFDRixNQUFNRCxPQUFPRyxPQUFPO1lBQ3BCRixjQUFjLElBQUk7UUFDcEIsRUFBRSxPQUFPRyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1lBQzlDLE1BQU1BLE1BQU07UUFDZDtJQUNGLENBQUM7SUFDRCxPQUFPSjtBQUNULENBQUM7QUFFTSxTQUFTTSxRQUFRQyxJQUFZLEVBQUU7SUFDcEMsT0FBTztRQUNMQSxNQUFNQTtJQUNSO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1hbmQtc2VydmVyLy4vdXRpbHMvbW9uZ29VdGlscy50cz9jOGJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbi8vIENvbm5lY3Rpb24gVVJJIGFuZCBkYXRhYmFzZSBuYW1lXHJcbmV4cG9ydCBjb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSBhcyBzdHJpbmc7XHJcbmV4cG9ydCBjb25zdCBkYk5hbWUgPSBwcm9jZXNzLmVudi5EQl9OQU1FIGFzIHN0cmluZztcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBNb25nb0NsaWVudFxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSk7XHJcblxyXG5leHBvcnQgbGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvTW9uZ29DbGllbnQoKSB7XHJcbiAgaWYgKCFpc0Nvbm5lY3RlZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuICAgICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgZXJyb3IpO1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNsaWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbmQobmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IG5hbWUsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJkYk5hbWUiLCJEQl9OQU1FIiwiY2xpZW50IiwiaXNDb25uZWN0ZWQiLCJjb25uZWN0VG9Nb25nb0NsaWVudCIsImNvbm5lY3QiLCJlcnJvciIsImNvbnNvbGUiLCJyZXNwb25kIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/mongoUtils.ts\n");

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