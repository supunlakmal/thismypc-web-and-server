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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator */ \"validator\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction respond(name) {\n    return {\n        name: name\n    };\n}\nasync function handler(req, res) {\n    const { email , password , firstName , lastName  } = req.body;\n    if (!email || !password || !firstName || !lastName) {\n        return res.status(401).json(respond(\"username/password/first name/last name required\"));\n    }\n    if (!validator__WEBPACK_IMPORTED_MODULE_0___default().isAlpha(firstName) || !validator__WEBPACK_IMPORTED_MODULE_0___default().isAlpha(lastName)) {\n        return res.status(401).json(respond(\"First Name and Last Name need to be only string\"));\n    }\n    if (!validator__WEBPACK_IMPORTED_MODULE_0___default().isEmail(email)) {\n        return res.status(401).json(respond(\"Invalid Email\"));\n    }\n    req.body.password = password;\n    // TODO: Save user data to the database\n    return res.status(200).json(respond(\"OK\"));\n} // search user by user name\n // const user = await User.searchEmailUser(email);\n // if (!user) {\n //   const userClass = new userComponent();\n //   // create  room id\n //   const ioSocketID = md5(req.body.email + Date.now());\n //   userData.ioSocketID = ioSocketID;\n //   userData.authentication_key = md5(ioSocketID);\n //   const newUser = await User.createUser(userData);\n //   if (newUser) {\n //     // user  class\n //     userClass\n //       .setUserDataToClass(newUser)\n //       .userID()\n //       .userFirstName()\n //       .userLastName()\n //       .userEmail()\n //       .getAuthenticationKey();\n //     res\n //       .status(200)\n //       .json(respond(true, \"User Information\", userClass.getUser()));\n //   }\n // } else {\n //   res.status(401);\n //   res.json(respond(false, \"User  Already exit\", null));\n // }\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWtDO0FBTWxDLFNBQVNDLFFBQVFDLElBQVksRUFBRTtJQUM3QixPQUFPO1FBQ0xBLE1BQU1BO0lBQ1I7QUFDRjtBQUVlLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQTBCLEVBQUU7SUFDckYsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtJQUV6RCxJQUFJLENBQUNKLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxhQUFhLENBQUNDLFVBQVU7UUFDbEQsT0FBT0osSUFDSk0sTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQ1gsUUFBUTtJQUNsQixDQUFDO0lBRUQsSUFBSSxDQUFDRCx3REFBaUIsQ0FBQ1EsY0FBYyxDQUFDUix3REFBaUIsQ0FBQ1MsV0FBVztRQUNqRSxPQUFPSixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDWCxRQUFRO0lBQ3RDLENBQUM7SUFFRCxJQUFJLENBQUNELHdEQUFpQixDQUFDTSxRQUFRO1FBQzdCLE9BQU9ELElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNYLFFBQVE7SUFDdEMsQ0FBQztJQUdERyxJQUFJTSxJQUFJLENBQUNILFFBQVEsR0FBR0E7SUFFcEIsdUNBQXVDO0lBRXZDLE9BQU9GLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNYLFFBQVE7QUFDdEMsQ0FBQyxDQUdDLDJCQUEyQjtDQUMzQixrREFBa0Q7Q0FDbEQsZUFBZTtDQUNmLDJDQUEyQztDQUMzQyx1QkFBdUI7Q0FDdkIseURBQXlEO0NBQ3pELHNDQUFzQztDQUN0QyxtREFBbUQ7Q0FDbkQscURBQXFEO0NBQ3JELG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLHFDQUFxQztDQUNyQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsaUNBQWlDO0NBQ2pDLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsdUVBQXVFO0NBQ3ZFLE1BQU07Q0FDTixXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLDBEQUEwRDtDQUMxRCxJQUFJO0NBV04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1hbmQtc2VydmVyLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLnRzPzdkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIHJlc3BvbmQobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPikge1xuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSB9ID0gcmVxLmJvZHk7XG5cbiAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIWZpcnN0TmFtZSB8fCAhbGFzdE5hbWUpIHtcbiAgICByZXR1cm4gcmVzXG4gICAgICAuc3RhdHVzKDQwMSlcbiAgICAgIC5qc29uKHJlc3BvbmQoJ3VzZXJuYW1lL3Bhc3N3b3JkL2ZpcnN0IG5hbWUvbGFzdCBuYW1lIHJlcXVpcmVkJykpO1xuICB9XG5cbiAgaWYgKCF2YWxpZGF0b3IuaXNBbHBoYShmaXJzdE5hbWUpIHx8ICF2YWxpZGF0b3IuaXNBbHBoYShsYXN0TmFtZSkpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24ocmVzcG9uZCgnRmlyc3QgTmFtZSBhbmQgTGFzdCBOYW1lIG5lZWQgdG8gYmUgb25seSBzdHJpbmcnKSk7XG4gIH1cblxuICBpZiAoIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbihyZXNwb25kKCdJbnZhbGlkIEVtYWlsJykpO1xuICB9XG5cblxuICByZXEuYm9keS5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXG4gIC8vIFRPRE86IFNhdmUgdXNlciBkYXRhIHRvIHRoZSBkYXRhYmFzZVxuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25kKCdPSycpKTtcbn1cblxuXG4gIC8vIHNlYXJjaCB1c2VyIGJ5IHVzZXIgbmFtZVxuICAvLyBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5zZWFyY2hFbWFpbFVzZXIoZW1haWwpO1xuICAvLyBpZiAoIXVzZXIpIHtcbiAgLy8gICBjb25zdCB1c2VyQ2xhc3MgPSBuZXcgdXNlckNvbXBvbmVudCgpO1xuICAvLyAgIC8vIGNyZWF0ZSAgcm9vbSBpZFxuICAvLyAgIGNvbnN0IGlvU29ja2V0SUQgPSBtZDUocmVxLmJvZHkuZW1haWwgKyBEYXRlLm5vdygpKTtcbiAgLy8gICB1c2VyRGF0YS5pb1NvY2tldElEID0gaW9Tb2NrZXRJRDtcbiAgLy8gICB1c2VyRGF0YS5hdXRoZW50aWNhdGlvbl9rZXkgPSBtZDUoaW9Tb2NrZXRJRCk7XG4gIC8vICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlVXNlcih1c2VyRGF0YSk7XG4gIC8vICAgaWYgKG5ld1VzZXIpIHtcbiAgLy8gICAgIC8vIHVzZXIgIGNsYXNzXG4gIC8vICAgICB1c2VyQ2xhc3NcbiAgLy8gICAgICAgLnNldFVzZXJEYXRhVG9DbGFzcyhuZXdVc2VyKVxuICAvLyAgICAgICAudXNlcklEKClcbiAgLy8gICAgICAgLnVzZXJGaXJzdE5hbWUoKVxuICAvLyAgICAgICAudXNlckxhc3ROYW1lKClcbiAgLy8gICAgICAgLnVzZXJFbWFpbCgpXG4gIC8vICAgICAgIC5nZXRBdXRoZW50aWNhdGlvbktleSgpO1xuICAvLyAgICAgcmVzXG4gIC8vICAgICAgIC5zdGF0dXMoMjAwKVxuICAvLyAgICAgICAuanNvbihyZXNwb25kKHRydWUsIFwiVXNlciBJbmZvcm1hdGlvblwiLCB1c2VyQ2xhc3MuZ2V0VXNlcigpKSk7XG4gIC8vICAgfVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIHJlcy5zdGF0dXMoNDAxKTtcbiAgLy8gICByZXMuanNvbihyZXNwb25kKGZhbHNlLCBcIlVzZXIgIEFscmVhZHkgZXhpdFwiLCBudWxsKSk7XG4gIC8vIH1cblxuXG5cblxuICBcblxuXG5cblxuXG4vLyB9XG5cblxuIl0sIm5hbWVzIjpbInZhbGlkYXRvciIsInJlc3BvbmQiLCJuYW1lIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiaXNBbHBoYSIsImlzRW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

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