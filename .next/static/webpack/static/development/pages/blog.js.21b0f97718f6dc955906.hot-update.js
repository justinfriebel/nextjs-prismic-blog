webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/dist/prismic-javascript.min.js");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prismic_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../prismic-configuration */ "./prismic-configuration.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/freebs/projects/jf-next-ts/pages/blog/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var BlogHome = function BlogHome(props) {
  var data = props.home.data;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(data.headline)), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].asText(data.description)), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.posts.results.map(function (post) {
    return __jsx("li", {
      key: post.uid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: Object(_prismic_configuration__WEBPACK_IMPORTED_MODULE_4__["hrefResolver"])(post),
      as: Object(_prismic_configuration__WEBPACK_IMPORTED_MODULE_4__["linkResolver"])(post),
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["RichText"].render(post.data.title))), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, Object(prismic_reactjs__WEBPACK_IMPORTED_MODULE_3__["Date"])(post.data.date).toString()));
  })));
};

BlogHome.getInitialProps = function _callee(context) {
  var home, posts;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_prismic_configuration__WEBPACK_IMPORTED_MODULE_4__["client"].getSingle("blog_home"));

        case 2:
          home = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_prismic_configuration__WEBPACK_IMPORTED_MODULE_4__["client"].query(prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.Predicates.at("document.type", "blog_post"), {
            orderings: "[my.blog_post.date desc]"
          }));

        case 5:
          posts = _context.sent;
          return _context.abrupt("return", {
            home: home,
            posts: posts
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BlogHome);

/***/ })

})
//# sourceMappingURL=blog.js.21b0f97718f6dc955906.hot-update.js.map