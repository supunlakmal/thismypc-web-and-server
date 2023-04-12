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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction respond(name) {\n    return {\n        name: name\n    };\n}\nasync function handler(req, res) {\n    const { email , password , firstName , lastName  } = req.body;\n    if (!email || !password || !firstName || !lastName) {\n        return res.status(401).json(respond(\"username/password/first name/last name required\"));\n    }\n    if (!validator__WEBPACK_IMPORTED_MODULE_0___default().isAlpha(firstName) || !validator__WEBPACK_IMPORTED_MODULE_0___default().isAlpha(lastName)) {\n        return res.status(401).json(respond(\"First Name and Last Name need to be only string\"));\n    }\n    if (!validator__WEBPACK_IMPORTED_MODULE_0___default().isEmail(email)) {\n        return res.status(401).json(respond(\"Invalid Email\"));\n    }\n    req.body.password = password;\n    // TODO: Save user data to the database\n    return res.status(200).json(respond(\"OK\"));\n} // search user by user name\n // const user = await User.searchEmailUser(email);\n // if (!user) {\n //   const userClass = new userComponent();\n //   // create  room id\n //   const ioSocketID = md5(req.body.email + Date.now());\n //   userData.ioSocketID = ioSocketID;\n //   userData.authentication_key = md5(ioSocketID);\n //   const newUser = await User.createUser(userData);\n //   if (newUser) {\n //     // user  class\n //     userClass\n //       .setUserDataToClass(newUser)\n //       .userID()\n //       .userFirstName()\n //       .userLastName()\n //       .userEmail()\n //       .getAuthenticationKey();\n //     res\n //       .status(200)\n //       .json(respond(true, \"User Information\", userClass.getUser()));\n //   }\n // } else {\n //   res.status(401);\n //   res.json(respond(false, \"User  Already exit\", null));\n // }\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWtDO0FBTWxDLFNBQVNDLFFBQVFDLElBQVksRUFBRTtJQUM3QixPQUFPO1FBQ0xBLE1BQU1BO0lBQ1I7QUFDRjtBQUVlLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQTBCLEVBQUU7SUFDckYsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtJQUV6RCxJQUFJLENBQUNKLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxhQUFhLENBQUNDLFVBQVU7UUFDbEQsT0FBT0osSUFDSk0sTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQ1gsUUFBUTtJQUNsQixDQUFDO0lBRUQsSUFBSSxDQUFDRCx3REFBaUIsQ0FBQ1EsY0FBYyxDQUFDUix3REFBaUIsQ0FBQ1MsV0FBVztRQUNqRSxPQUFPSixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDWCxRQUFRO0lBQ3RDLENBQUM7SUFFRCxJQUFJLENBQUNELHdEQUFpQixDQUFDTSxRQUFRO1FBQzdCLE9BQU9ELElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNYLFFBQVE7SUFDdEMsQ0FBQztJQUdERyxJQUFJTSxJQUFJLENBQUNILFFBQVEsR0FBR0E7SUFFcEIsdUNBQXVDO0lBRXZDLE9BQU9GLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNYLFFBQVE7QUFDdEMsQ0FBQyxDQUdDLDJCQUEyQjtDQUMzQixrREFBa0Q7Q0FDbEQsZUFBZTtDQUNmLDJDQUEyQztDQUMzQyx1QkFBdUI7Q0FDdkIseURBQXlEO0NBQ3pELHNDQUFzQztDQUN0QyxtREFBbUQ7Q0FDbkQscURBQXFEO0NBQ3JELG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLHFDQUFxQztDQUNyQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsdUVBQXVFO0NBQ3ZFLE1BQU07Q0FDTixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLDBEQUEwRDtDQUMxRCxJQUFJO0NBV04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1hbmQtc2VydmVyLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLnRzPzdkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAndmFsaWRhdG9yJztcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZXNwb25kKG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBuYW1lLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT4pIHtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFmaXJzdE5hbWUgfHwgIWxhc3ROYW1lKSB7XHJcbiAgICByZXR1cm4gcmVzXHJcbiAgICAgIC5zdGF0dXMoNDAxKVxyXG4gICAgICAuanNvbihyZXNwb25kKCd1c2VybmFtZS9wYXNzd29yZC9maXJzdCBuYW1lL2xhc3QgbmFtZSByZXF1aXJlZCcpKTtcclxuICB9XHJcblxyXG4gIGlmICghdmFsaWRhdG9yLmlzQWxwaGEoZmlyc3ROYW1lKSB8fCAhdmFsaWRhdG9yLmlzQWxwaGEobGFzdE5hbWUpKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24ocmVzcG9uZCgnRmlyc3QgTmFtZSBhbmQgTGFzdCBOYW1lIG5lZWQgdG8gYmUgb25seSBzdHJpbmcnKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHJlc3BvbmQoJ0ludmFsaWQgRW1haWwnKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVxLmJvZHkucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuXHJcbiAgLy8gVE9ETzogU2F2ZSB1c2VyIGRhdGEgdG8gdGhlIGRhdGFiYXNlXHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25kKCdPSycpKTtcclxufVxyXG5cclxuXHJcbiAgLy8gc2VhcmNoIHVzZXIgYnkgdXNlciBuYW1lXHJcbiAgLy8gY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuc2VhcmNoRW1haWxVc2VyKGVtYWlsKTtcclxuICAvLyBpZiAoIXVzZXIpIHtcclxuICAvLyAgIGNvbnN0IHVzZXJDbGFzcyA9IG5ldyB1c2VyQ29tcG9uZW50KCk7XHJcbiAgLy8gICAvLyBjcmVhdGUgIHJvb20gaWRcclxuICAvLyAgIGNvbnN0IGlvU29ja2V0SUQgPSBtZDUocmVxLmJvZHkuZW1haWwgKyBEYXRlLm5vdygpKTtcclxuICAvLyAgIHVzZXJEYXRhLmlvU29ja2V0SUQgPSBpb1NvY2tldElEO1xyXG4gIC8vICAgdXNlckRhdGEuYXV0aGVudGljYXRpb25fa2V5ID0gbWQ1KGlvU29ja2V0SUQpO1xyXG4gIC8vICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlVXNlcih1c2VyRGF0YSk7XHJcbiAgLy8gICBpZiAobmV3VXNlcikge1xyXG4gIC8vICAgICAvLyB1c2VyICBjbGFzc1xyXG4gIC8vICAgICB1c2VyQ2xhc3NcclxuICAvLyAgICAgICAuc2V0VXNlckRhdGFUb0NsYXNzKG5ld1VzZXIpXHJcbiAgLy8gICAgICAgLnVzZXJJRCgpXHJcbiAgLy8gICAgICAgLnVzZXJGaXJzdE5hbWUoKVxyXG4gIC8vICAgICAgIC51c2VyTGFzdE5hbWUoKVxyXG4gIC8vICAgICAgIC51c2VyRW1haWwoKVxyXG4gIC8vICAgICAgIC5nZXRBdXRoZW50aWNhdGlvbktleSgpO1xyXG4gIC8vICAgICByZXNcclxuICAvLyAgICAgICAuc3RhdHVzKDIwMClcclxuICAvLyAgICAgICAuanNvbihyZXNwb25kKHRydWUsIFwiVXNlciBJbmZvcm1hdGlvblwiLCB1c2VyQ2xhc3MuZ2V0VXNlcigpKSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSBlbHNlIHtcclxuICAvLyAgIHJlcy5zdGF0dXMoNDAxKTtcclxuICAvLyAgIHJlcy5qc29uKHJlc3BvbmQoZmFsc2UsIFwiVXNlciAgQWxyZWFkeSBleGl0XCIsIG51bGwpKTtcclxuICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIH1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidmFsaWRhdG9yIiwicmVzcG9uZCIsIm5hbWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZW1haWwiLCJwYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJpc0FscGhhIiwiaXNFbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

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