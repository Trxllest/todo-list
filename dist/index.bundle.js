"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global Changes */
:root {
    --items-BkGrdClr: #FFFFFF;
    --header-BkGrdClr: rgb(249, 148, 23);
    --nav-BkGrdClr: rgb(77, 76, 125);
    --toDo-CardClr: rgb(245, 245, 245);
    --light-accent: rgb(245, 245, 245);
    --dark-accent: rgb(54, 48, 98);

}

/* --------------------------------------- */

/* Sections of Page */
body {
    height: 100vh;
    margin: 0;
}

#content {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 8em 3fr;
}


/* Header Section */
.header {
    grid-column: 1/3;

    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    background-color: var(--header-BkGrdClr);
}

/* --------------------------------------- */

/* Nav Section */
.nav {
    grid-column: 1;
    grid-row: 2;
    border: 1px solid black;
    background-color: var(--nav-BkGrdClr);

    display: grid;
    grid-template-rows: 5em 3fr;
}

.nav-projs {
    display: flex;
    flex-direction: column;

}

.nav-title-elements {
    border-bottom: 1px solid var(--light-accent);
    color: var(--light-accent);
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 6px 0 6px;
    margin: 1em;
}

.nav-title-elements:hover {
    background-color: var(--dark-accent);
}
/* --------------------------------------- */

/* Items Section */
.items {

    grid-column: 2;
    grid-row: 2;
    background-color: var(--items-BkGrdClr);

    display: grid;
    grid-template-rows: 1em 1fr ;
    gap: 1em;

    padding: 1em;
}

.tasks {
    display:  grid;
    grid-template-rows: repeat(auto-fit, minmax(50px, 100px));
    gap: 1em;
    padding: 1em;
}

.add-item {
    width: 9em;
    justify-self: center;
    align-self: center;
    padding: 0.5rem;
}

.toDo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: .5em 1em ;
    background-color: var(--toDo-CardClr);
    border-radius: 5px;
    border: 1px solid var(--dark-accent);
}

.toDo.med-priority {
    background-color: rgb(249, 148, 23, 0.7);
}

.toDo.high-priority {
    background-color: rgb(180, 34, 34, 0.6)
}

.toDo .to-do-description {
    display: none;
}

.toDo:hover .to-do-description {
    display: block;
}

.toDo.expanded .to-do-description {
    display: block;
}
/* --------------------------------------- */

/* Icons and Images */
.icon {
    width: 30px;
}
.nav-title-elements .icon {
    opacity: 0.3;
}

.nav-title-elements .icon:hover{
    opacity: 1;
}

/* --------------------------------------- */


/* Dialog */

/* Styles for the dialog container */
dialog {
    border: 1px solid var(--dark-accent);
    border-radius: 8px;
    overflow: hidden;
}

/* Styles for the form within the dialog */
form {
    padding: 20px;
    background-color: var(--light-accent);
}

/* Styles for labels */
label {
    display: block;
    margin-bottom: 8px;
}

/* Styles for input and textarea */
input,
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
}

/* Styles for buttons */
button {
    background-color: var(--dark-accent);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #e57373; /* Change to your desired hover color */
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,mBAAmB;AACnB;IACI,yBAAyB;IACzB,oCAAoC;IACpC,gCAAgC;IAChC,kCAAkC;IAClC,kCAAkC;IAClC,8BAA8B;;AAElC;;AAEA,4CAA4C;;AAE5C,qBAAqB;AACrB;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;;AAGA,mBAAmB;AACnB;IACI,gBAAgB;;IAEhB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,uBAAuB;IACvB,wCAAwC;AAC5C;;AAEA,4CAA4C;;AAE5C,gBAAgB;AAChB;IACI,cAAc;IACd,WAAW;IACX,uBAAuB;IACvB,qCAAqC;;IAErC,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,4CAA4C;IAC5C,0BAA0B;;IAE1B,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,oCAAoC;AACxC;AACA,4CAA4C;;AAE5C,kBAAkB;AAClB;;IAEI,cAAc;IACd,WAAW;IACX,uCAAuC;;IAEvC,aAAa;IACb,4BAA4B;IAC5B,QAAQ;;IAER,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,yDAAyD;IACzD,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,kBAAkB;IAClB,qCAAqC;IACrC,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;AACA,4CAA4C;;AAE5C,qBAAqB;AACrB;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA,4CAA4C;;;AAG5C,WAAW;;AAEX,oCAAoC;AACpC;IACI,oCAAoC;IACpC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA,0CAA0C;AAC1C;IACI,aAAa;IACb,qCAAqC;AACzC;;AAEA,sBAAsB;AACtB;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA,kCAAkC;AAClC;;IAEI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA,uBAAuB;AACvB;IACI,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB,EAAE,uCAAuC;AACtE","sourcesContent":["/* Global Changes */\n:root {\n    --items-BkGrdClr: #FFFFFF;\n    --header-BkGrdClr: rgb(249, 148, 23);\n    --nav-BkGrdClr: rgb(77, 76, 125);\n    --toDo-CardClr: rgb(245, 245, 245);\n    --light-accent: rgb(245, 245, 245);\n    --dark-accent: rgb(54, 48, 98);\n\n}\n\n/* --------------------------------------- */\n\n/* Sections of Page */\nbody {\n    height: 100vh;\n    margin: 0;\n}\n\n#content {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 8em 3fr;\n}\n\n\n/* Header Section */\n.header {\n    grid-column: 1/3;\n\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    border: 1px solid black;\n    background-color: var(--header-BkGrdClr);\n}\n\n/* --------------------------------------- */\n\n/* Nav Section */\n.nav {\n    grid-column: 1;\n    grid-row: 2;\n    border: 1px solid black;\n    background-color: var(--nav-BkGrdClr);\n\n    display: grid;\n    grid-template-rows: 5em 3fr;\n}\n\n.nav-projs {\n    display: flex;\n    flex-direction: column;\n\n}\n\n.nav-title-elements {\n    border-bottom: 1px solid var(--light-accent);\n    color: var(--light-accent);\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 0 6px 0 6px;\n    margin: 1em;\n}\n\n.nav-title-elements:hover {\n    background-color: var(--dark-accent);\n}\n/* --------------------------------------- */\n\n/* Items Section */\n.items {\n\n    grid-column: 2;\n    grid-row: 2;\n    background-color: var(--items-BkGrdClr);\n\n    display: grid;\n    grid-template-rows: 1em 1fr ;\n    gap: 1em;\n\n    padding: 1em;\n}\n\n.tasks {\n    display:  grid;\n    grid-template-rows: repeat(auto-fit, minmax(50px, 100px));\n    gap: 1em;\n    padding: 1em;\n}\n\n.add-item {\n    width: 9em;\n    justify-self: center;\n    align-self: center;\n    padding: 0.5rem;\n}\n\n.toDo {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: .5em 1em ;\n    background-color: var(--toDo-CardClr);\n    border-radius: 5px;\n    border: 1px solid var(--dark-accent);\n}\n\n.toDo.med-priority {\n    background-color: rgb(249, 148, 23, 0.7);\n}\n\n.toDo.high-priority {\n    background-color: rgb(180, 34, 34, 0.6)\n}\n\n.toDo .to-do-description {\n    display: none;\n}\n\n.toDo:hover .to-do-description {\n    display: block;\n}\n\n.toDo.expanded .to-do-description {\n    display: block;\n}\n/* --------------------------------------- */\n\n/* Icons and Images */\n.icon {\n    width: 30px;\n}\n.nav-title-elements .icon {\n    opacity: 0.3;\n}\n\n.nav-title-elements .icon:hover{\n    opacity: 1;\n}\n\n/* --------------------------------------- */\n\n\n/* Dialog */\n\n/* Styles for the dialog container */\ndialog {\n    border: 1px solid var(--dark-accent);\n    border-radius: 8px;\n    overflow: hidden;\n}\n\n/* Styles for the form within the dialog */\nform {\n    padding: 20px;\n    background-color: var(--light-accent);\n}\n\n/* Styles for labels */\nlabel {\n    display: block;\n    margin-bottom: 8px;\n}\n\n/* Styles for input and textarea */\ninput,\ntextarea {\n    width: 100%;\n    padding: 8px;\n    margin-bottom: 16px;\n    box-sizing: border-box;\n}\n\n/* Styles for buttons */\nbutton {\n    background-color: var(--dark-accent);\n    color: #fff;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n    background-color: #e57373; /* Change to your desired hover color */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dialogBox: () => (/* binding */ dialogBox),
/* harmony export */   myPage: () => (/* binding */ myPage),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _renderFxns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFxns */ "./src/renderFxns.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");






///

const addbtn = document.querySelector('.add-item');
const title = document.getElementById('title');
const date = document.getElementById('date');
const desc = document.getElementById('desc');
const priority = document.getElementById('priority');
const dialogBox = document.getElementById('task-dialog');
const submitBtn = document.querySelector('.subAdd');
const editBtn = document.querySelector('.subEdit');
const cancelAdd = document.getElementById('cancelBtn');
const addProjBtn = document.querySelector('.add-project');
const submitProjBtn = document.getElementById('submitProj');
const projDialog = document.getElementById('project-dialog')
const projTitle = document.getElementById('pTitle');
const cancelAddProj = document.getElementById('cancelAddProj');

///

let myPage;

//load new page or...
getSavedProjects();


_renderFxns__WEBPACK_IMPORTED_MODULE_1__.renderPage(myPage);

// Open dialog to add a todo card
addbtn.addEventListener('click', () => {
    document.getElementById('taskId').value = '';
    dialogBox.showModal();
});

// Submit new a todo card
submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    // Get the values from the form
    const taskId = document.getElementById('taskId').value;
    const newTitle = document.getElementById('title').value;
    const newDate = document.getElementById('date').value;
    const newDesc = document.getElementById('desc').value;
    const newPriority = document.getElementById('priority').value;

    if (taskId) {
        // Editing an existing task
        // console.log('Edited task');
        const task = myPage.currentProject.tasks.find(t => t.id === taskId);
        if (task) {
            task.title = newTitle;
            task.desc = newDesc;
            task.dueDate = newDate;
            task.priority = newPriority;
        }
    } else {
        // Adding a new task
        // console.log('added a new task');
        const todo = new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](newTitle, newDate, newDesc, newPriority);
        myPage.currentProject.addTask(todo);
    }

    // Reset form and close dialog
    title.value = '';
    date.value = '';
    desc.value = '';
    priority.value = '';
    dialogBox.close();

    // Save changes and update the display
    saveProjects(myPage);
    _renderFxns__WEBPACK_IMPORTED_MODULE_1__.loadItems(myPage.currentProject);
});


// Cancel adding a card
cancelAdd.addEventListener('click', () => {
    dialogBox.close();
});


// Add a new project
addProjBtn.addEventListener('click', () => {
    projDialog.showModal();
});

// Submit a project
submitProjBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newProj = new _project__WEBPACK_IMPORTED_MODULE_3__["default"](projTitle.value);
    myPage.addProj(newProj);
    _renderFxns__WEBPACK_IMPORTED_MODULE_1__.renderPage(myPage);
    projTitle.value = '';
    projDialog.close();
    saveProjects(myPage);
});

cancelAddProj.addEventListener('click',  () => {
    projDialog.close();
});


function saveProjects(page) {
    page = JSON.stringify(page);
    localStorage.setItem('myTodo', page);
    // console.log('saved')
}

function getSavedProjects() {
    
    const storedPage = JSON.parse(localStorage.getItem('myTodo'));
    let projArray = [];
    if (storedPage) {

        let sprojects = storedPage['_projects'];
        
        for (let p of sprojects) {
            let proj = new _project__WEBPACK_IMPORTED_MODULE_3__["default"](p['_name'], p['_id']);

            for (let t of p['_tasks']){
                let task = new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](t['_title'], t['_dueDate'], t['_desc'], t['_priority']);
                proj.addTask(task);
            }

            projArray.push(proj);
        }
        myPage = new _projects__WEBPACK_IMPORTED_MODULE_0__["default"](projArray);
    } else {
        myPage = new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

    
}





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ project)
/* harmony export */ });
 

class project {

    constructor(name, id = this.generateID()) {
        this._name = name;
        this._tasks = [];
        this._id = id;
    }

    get tasks() {
        return this._tasks;
    }

    set tasks(newTasks) {
        this._tasks = newTasks;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get id(){
        return this._id;
    }

    generateID(){
        let id = crypto.randomUUID();
        // console.log(`This is the ID: ${id}`);
        return id;
    }
    
    clearAll() {
        this._tasks = [];
    }

    addTask(task) { //ToDo object
        let taskIndex = this._tasks.findIndex((el) => el.id === task.id);
        if (taskIndex === -1) {
            this._tasks.push(task);
        } else {
            let oldTask = this._tasks[taskIndex];
            oldTask.title = task.title;
            oldTask.dueDate = task.dueDate;
            oldTask.priority = task.priority;
            oldTask.desc = task.desc;
        }
    }

    deleteTask(taskID) {
        let index = this._tasks.findIndex((el) => el.id === taskID);
        if (index === -1) {
            console.error(`The task: ${taskID} does not exist`);
        } else {
            const deletedEl = this._tasks.splice(index,1); // array
            console.log(`${deletedEl[0].title} was deleted`);
            return deletedEl; // array
        }
    }

    logTasks() {
        const tasksArray = this._tasks //Object.entries(this.tasks);
        for (let el of tasksArray) {
            console.log('Logging Tasks...\n');
            console.log(`Task: ${el.title} is to... ${el.desc} \n`);
        }
    }

    logtd() {
        return this.tasks;
    }
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


class projects {

    constructor(projects = [new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Project1')]) {
        this._projects = projects; // array
        this._currentProject = projects[0];
    }

    get projects(){
        return this._projects;
    }

    get currentProject() {
        if (this._currentProject === undefined){
            console.error('There is no projects')
        } else {
            return this._currentProject;
        }
    }

    addProj(proj){
        this._projects.push(proj);
        this.switchCurrProj(proj);
    }

    deleteProj(projID) {
        let index = this._projects.findIndex((el) => el.id === projID);
        if (index === -1) {
            console.error(`The proj: ${projID} does not exist`);
        } else {
            const deletedEl = this._projects.splice(index,1); // array
            console.log(`${deletedEl[0].name} was deleted`);
            if (this._projects.length < 1) {

                this._currentProject = undefined;
            } else {
                this._currentProject = this._projects[this._projects.length - 1];
            }
            return deletedEl; // array
        }
        
    }

    clearAllProjs() {
        this._projects = [new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Project')];
        this._currentProject = this._projects[0];
    }

    switchCurrProj(proj) { // name of project we want to switch to
        const id = proj.id;
        let index = this._projects.findIndex((el) => el.id === id);
        if (index > -1){
            this._currentProject = proj;
            return this._currentProject;
        } else {
            console.error('Project does not exist')
        }
    }

    findProj(projID) {
        let proj = this._projects.find(function(p) {
            // console.log(p);
            return p.id === projID;
        })
        return proj;
    }
}

/***/ }),

/***/ "./src/projsComp.js":
/*!**************************!*\
  !*** ./src/projsComp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projComp)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _imgs_delete_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/delete-outline.svg */ "./src/imgs/delete-outline.svg");
/* harmony import */ var _renderFxns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderFxns */ "./src/renderFxns.js");




function projComp(proj) {

    //nav Title
    let navTitleElements = document.createElement('div');
    let navTitle = document.createElement('div');
    navTitleElements.classList.add('nav-title-elements');
    navTitle.classList.add('nav-title');

    navTitle.textContent = proj.name;

    //add ID to data attributes
    navTitle.dataset.projId = proj.id;
    console.log(`the projects id is: ${navTitle.dataset.projId}`);

    //Switch event
    navTitle.addEventListener('click', () => {
        let targetID = navTitle.dataset.projId;
        let targetProj = ___WEBPACK_IMPORTED_MODULE_0__.myPage.findProj(String(targetID));

        ___WEBPACK_IMPORTED_MODULE_0__.myPage.switchCurrProj(targetProj);
        (0,_renderFxns__WEBPACK_IMPORTED_MODULE_2__.loadItems)(___WEBPACK_IMPORTED_MODULE_0__.myPage.currentProject);
    })

    //Icons
    const deleteProj = new Image();
    deleteProj.src = _imgs_delete_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    deleteProj.classList.add('icon')
    deleteProj.classList.add('delete-icon')
    deleteProj.addEventListener('click', () => {
        ;(0,___WEBPACK_IMPORTED_MODULE_0__.saveProjects)(___WEBPACK_IMPORTED_MODULE_0__.myPage);
        ___WEBPACK_IMPORTED_MODULE_0__.myPage.deleteProj(proj.id);
        if (___WEBPACK_IMPORTED_MODULE_0__.myPage.projects.length === 0) {
            localStorage.removeItem('myTodo');
        }
        navTitleElements.remove();
    
        (0,_renderFxns__WEBPACK_IMPORTED_MODULE_2__.loadItems)(___WEBPACK_IMPORTED_MODULE_0__.myPage.currentProject);
    })

    navTitleElements.appendChild(navTitle);
    navTitleElements.appendChild(deleteProj)

    let nav = document.querySelector('.nav-projs');
    nav.appendChild(navTitleElements);
}

/***/ }),

/***/ "./src/renderFxns.js":
/*!***************************!*\
  !*** ./src/renderFxns.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeProj: () => (/* binding */ changeProj),
/* harmony export */   loadItems: () => (/* binding */ loadItems),
/* harmony export */   loadNav: () => (/* binding */ loadNav),
/* harmony export */   renderPage: () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoComp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoComp */ "./src/todoComp.js");
/* harmony import */ var _projsComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projsComp */ "./src/projsComp.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");







function renderPage(page) {

    //load assets
    loadNav(page); // nav bar
    if (page.projects.length > 0){
        loadItems(page.currentProject) // list of todos   
    }
    
}



function loadNav(page) { //projects Obj
    document.querySelector('.nav-projs').textContent = '';
    for (let p of page.projects) {
        (0,_projsComp__WEBPACK_IMPORTED_MODULE_2__["default"])(p);
    }
}


function loadItems(proj) { //current proj
    document.querySelector('.tasks').textContent = '';
    if (typeof proj === "undefined"){
        document.querySelector('.tasks').textContent = ''; 
    } else if (proj.tasks.length > 0){
        for (let t of proj.tasks) {
            
            (0,_todoComp__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
            let editButtons = document.querySelectorAll('.edit-icon');
            // edit buttons
            for (let b of editButtons) {
                b.addEventListener('click', () => {
                    let taskID = b.dataset.toDoId;
                    let taskIdx =  proj.tasks.findIndex((el) => el.id === taskID);
                    let task = proj.tasks[taskIdx]
                    const oldTitle = task.title || '';
                    const oldDate = task.dueDate || '';
                    const oldDesc = task.desc || '';
                    const oldPriority = task.priority || 'low';
                    
                    document.getElementById('taskId').value = task.id;
                    document.getElementById('title').value = oldTitle;
                    const formattedDate = oldDate ? new Date(oldDate).toISOString().slice(0, 16) : '';
                    document.getElementById('date').value = formattedDate;
                    document.getElementById('desc').value = oldDesc;
                    document.getElementById('priority').value = oldPriority;
                    ___WEBPACK_IMPORTED_MODULE_3__.dialogBox.showModal();
                });
            }
        }
    } else {
        console.log('no tasks')
    }
}

function changeProj(page, newProj){ //projects, projects to switchtooo
    page.switchCurrProj(newProj);
    loadNav(page); // nav bar
    loadItems(page.currentProject) // list of todos
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDo)
/* harmony export */ });


class toDo {
    constructor(title, dueDate,desc,priority='low', toDoId = this.generateID()) { // str, datetime-local, str, str
        this._title = title;
        this._dueDate = this.dateFormatter(dueDate); // <input type="datetime-local">
        this._desc = desc;
        this._priority = priority;
        this._id = toDoId;
    }

    get title() {
        return this._title;
    }

    set title(name) {
        this._title = name;
    }

    get desc() {
        return this._desc;
    }

    set desc(name) {
        this._desc = name;
    }

    set dueDate(date){
        if (date === ''){
            this._dueDate = new Date();
        } else {
            this._dueDate = new Date(date);
        }
       
    }

    get dueDate(){
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    set priority(level){
        this._priority = level;
    }

    get id(){
        return this._id;
    }

    dateFormatter(date) {
        if (date === ''){
            let d = new Date()
            return d
        } else {
            let d = new Date(date)
            return d
        }
    } 

    generateID(){
        let id = crypto.randomUUID();
        console.log(`This is the ID: ${id}`);
        return id;
    }


    toString(){
        return `Title: ${this.title}, description: ${this.desc}, Due ${this.dueDate} with a ${this.priority} priority.`
    }

}


// function formatDate(date) {
//     ...;
// }

/***/ }),

/***/ "./src/todoComp.js":
/*!*************************!*\
  !*** ./src/todoComp.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoComp)
/* harmony export */ });
/* harmony import */ var _imgs_delete_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/delete-outline.svg */ "./src/imgs/delete-outline.svg");
/* harmony import */ var _imgs_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/pencil-outline.svg */ "./src/imgs/pencil-outline.svg");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");




function toDoComp(task) {

    const card = document.createElement('div');
    card.classList.add('toDo');

    //add data attribute
    card.dataset.toDoId = task.id;

    const cardLeft = document.createElement('div');
    cardLeft.classList.add('left-card')
    const cardRight = document.createElement('div');
    cardRight.classList.add('right-card')

    //Title
    let title = document.createElement('div');
    title.classList.add('to-do-title')
    title.textContent = task.title;

    // Due Date
    let due = document.createElement('div');
    due.classList.add('to-do-dueDate');
    due.textContent = task.dueDate.toDateString(); 

    // Description
    const description = document.createElement('div');
    description.classList.add('to-do-description');
    description.textContent = task.desc;

    // priority colour code:
    if (task.priority === 'high') {
        card.classList.add('high-priority')
    } else if (task.priority === 'med') {
        card.classList.add('med-priority')
    } else {
        card.classList.add('low-priority')
    }

    cardLeft.appendChild(title);
    cardLeft.appendChild(due);
    cardLeft.appendChild(description); // Add description element

    //Icons
    const deleteTodo = new Image();
    deleteTodo.src = _imgs_delete_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
    deleteTodo.classList.add('icon')
    deleteTodo.classList.add('delete-icon')
    deleteTodo.addEventListener('click', () => {
        ___WEBPACK_IMPORTED_MODULE_2__.myPage.currentProject.deleteTask(task.id);
        (0,___WEBPACK_IMPORTED_MODULE_2__.saveProjects)(___WEBPACK_IMPORTED_MODULE_2__.myPage);
        card.remove();
    })

    const editTodo = new Image();
    editTodo.src = _imgs_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    editTodo.classList.add('icon');
    editTodo.classList.add('edit-icon');
    editTodo.dataset.toDoId = task.id;


    cardRight.appendChild(editTodo);
    cardRight.appendChild(deleteTodo);

    card.appendChild(cardLeft);
    card.appendChild(cardRight);

    document.querySelector('.tasks').appendChild(card);

    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });

    // console.log(`the cards id is: ${card.dataset.toDoId}`);

}

//  when add todo is clicked create a dialog object for the card

/***/ }),

/***/ "./src/imgs/delete-outline.svg":
/*!*************************************!*\
  !*** ./src/imgs/delete-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0bb67a90c508546224.svg";

/***/ }),

/***/ "./src/imgs/pencil-outline.svg":
/*!*************************************!*\
  !*** ./src/imgs/pencil-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCx1Q0FBdUMsb0JBQW9COztBQUUzRDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qc0NvbXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlckZ4bnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9Db21wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBHbG9iYWwgQ2hhbmdlcyAqL1xuOnJvb3Qge1xuICAgIC0taXRlbXMtQmtHcmRDbHI6ICNGRkZGRkY7XG4gICAgLS1oZWFkZXItQmtHcmRDbHI6IHJnYigyNDksIDE0OCwgMjMpO1xuICAgIC0tbmF2LUJrR3JkQ2xyOiByZ2IoNzcsIDc2LCAxMjUpO1xuICAgIC0tdG9Eby1DYXJkQ2xyOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gICAgLS1saWdodC1hY2NlbnQ6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgICAtLWRhcmstYWNjZW50OiByZ2IoNTQsIDQ4LCA5OCk7XG5cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIFNlY3Rpb25zIG9mIFBhZ2UgKi9cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOGVtIDNmcjtcbn1cblxuXG4vKiBIZWFkZXIgU2VjdGlvbiAqL1xuLmhlYWRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItQmtHcmRDbHIpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogTmF2IFNlY3Rpb24gKi9cbi5uYXYge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1Ca0dyZENscik7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNWVtIDNmcjtcbn1cblxuLm5hdi1wcm9qcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5cbi5uYXYtdGl0bGUtZWxlbWVudHMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodC1hY2NlbnQpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiAwIDZweCAwIDZweDtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuLm5hdi10aXRsZS1lbGVtZW50czpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIEl0ZW1zIFNlY3Rpb24gKi9cbi5pdGVtcyB7XG5cbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtcy1Ca0dyZENscik7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWVtIDFmciA7XG4gICAgZ2FwOiAxZW07XG5cbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi50YXNrcyB7XG4gICAgZGlzcGxheTogIGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxMDBweCkpO1xuICAgIGdhcDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmFkZC1pdGVtIHtcbiAgICB3aWR0aDogOWVtO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi50b0RvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgcGFkZGluZzogLjVlbSAxZW0gO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvRG8tQ2FyZENscik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYWNjZW50KTtcbn1cblxuLnRvRG8ubWVkLXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAxNDgsIDIzLCAwLjcpO1xufVxuXG4udG9Eby5oaWdoLXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAzNCwgMzQsIDAuNilcbn1cblxuLnRvRG8gLnRvLWRvLWRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9Ebzpob3ZlciAudG8tZG8tZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udG9Eby5leHBhbmRlZCAudG8tZG8tZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIEljb25zIGFuZCBJbWFnZXMgKi9cbi5pY29uIHtcbiAgICB3aWR0aDogMzBweDtcbn1cbi5uYXYtdGl0bGUtZWxlbWVudHMgLmljb24ge1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuLm5hdi10aXRsZS1lbGVtZW50cyAuaWNvbjpob3ZlcntcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG4vKiBEaWFsb2cgKi9cblxuLyogU3R5bGVzIGZvciB0aGUgZGlhbG9nIGNvbnRhaW5lciAqL1xuZGlhbG9nIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWFjY2VudCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIFN0eWxlcyBmb3IgdGhlIGZvcm0gd2l0aGluIHRoZSBkaWFsb2cgKi9cbmZvcm0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcbn1cblxuLyogU3R5bGVzIGZvciBsYWJlbHMgKi9cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi8qIFN0eWxlcyBmb3IgaW5wdXQgYW5kIHRleHRhcmVhICovXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBTdHlsZXMgZm9yIGJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hY2NlbnQpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU3MzczOyAvKiBDaGFuZ2UgdG8geW91ciBkZXNpcmVkIGhvdmVyIGNvbG9yICovXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjtBQUNuQjtJQUNJLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsOEJBQThCOztBQUVsQzs7QUFFQSw0Q0FBNEM7O0FBRTVDLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7QUFDL0I7OztBQUdBLG1CQUFtQjtBQUNuQjtJQUNJLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHdDQUF3QztBQUM1Qzs7QUFFQSw0Q0FBNEM7O0FBRTVDLGdCQUFnQjtBQUNoQjtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHFDQUFxQzs7SUFFckMsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLDBCQUEwQjs7SUFFMUIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7O0lBRW5CLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQSw0Q0FBNEM7O0FBRTVDLGtCQUFrQjtBQUNsQjs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHVDQUF1Qzs7SUFFdkMsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixRQUFROztJQUVSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseURBQXlEO0lBQ3pELFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0EsNENBQTRDOztBQUU1QyxxQkFBcUI7QUFDckI7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsNENBQTRDOzs7QUFHNUMsV0FBVzs7QUFFWCxvQ0FBb0M7QUFDcEM7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQSwwQ0FBMEM7QUFDMUM7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUEsa0NBQWtDO0FBQ2xDOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUIsRUFBRSx1Q0FBdUM7QUFDdEVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR2xvYmFsIENoYW5nZXMgKi9cXG46cm9vdCB7XFxuICAgIC0taXRlbXMtQmtHcmRDbHI6ICNGRkZGRkY7XFxuICAgIC0taGVhZGVyLUJrR3JkQ2xyOiByZ2IoMjQ5LCAxNDgsIDIzKTtcXG4gICAgLS1uYXYtQmtHcmRDbHI6IHJnYig3NywgNzYsIDEyNSk7XFxuICAgIC0tdG9Eby1DYXJkQ2xyOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIC0tbGlnaHQtYWNjZW50OiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICAgIC0tZGFyay1hY2NlbnQ6IHJnYig1NCwgNDgsIDk4KTtcXG5cXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogU2VjdGlvbnMgb2YgUGFnZSAqL1xcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOGVtIDNmcjtcXG59XFxuXFxuXFxuLyogSGVhZGVyIFNlY3Rpb24gKi9cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItQmtHcmRDbHIpO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4vKiBOYXYgU2VjdGlvbiAqL1xcbi5uYXYge1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtQmtHcmRDbHIpO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDVlbSAzZnI7XFxufVxcblxcbi5uYXYtcHJvanMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4ubmF2LXRpdGxlLWVsZW1lbnRzIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWFjY2VudCk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1hY2NlbnQpO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAwIDZweCAwIDZweDtcXG4gICAgbWFyZ2luOiAxZW07XFxufVxcblxcbi5uYXYtdGl0bGUtZWxlbWVudHM6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIEl0ZW1zIFNlY3Rpb24gKi9cXG4uaXRlbXMge1xcblxcbiAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW1zLUJrR3JkQ2xyKTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZW0gMWZyIDtcXG4gICAgZ2FwOiAxZW07XFxuXFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgZGlzcGxheTogIGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTBweCwgMTAwcHgpKTtcXG4gICAgZ2FwOiAxZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmFkZC1pdGVtIHtcXG4gICAgd2lkdGg6IDllbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4udG9EbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogLjVlbSAxZW0gO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b0RvLUNhcmRDbHIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYWNjZW50KTtcXG59XFxuXFxuLnRvRG8ubWVkLXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMTQ4LCAyMywgMC43KTtcXG59XFxuXFxuLnRvRG8uaGlnaC1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDM0LCAzNCwgMC42KVxcbn1cXG5cXG4udG9EbyAudG8tZG8tZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9Ebzpob3ZlciAudG8tZG8tZGVzY3JpcHRpb24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRvRG8uZXhwYW5kZWQgLnRvLWRvLWRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIEljb25zIGFuZCBJbWFnZXMgKi9cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG4ubmF2LXRpdGxlLWVsZW1lbnRzIC5pY29uIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4ubmF2LXRpdGxlLWVsZW1lbnRzIC5pY29uOmhvdmVye1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG4vKiBEaWFsb2cgKi9cXG5cXG4vKiBTdHlsZXMgZm9yIHRoZSBkaWFsb2cgY29udGFpbmVyICovXFxuZGlhbG9nIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1hY2NlbnQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgdGhlIGZvcm0gd2l0aGluIHRoZSBkaWFsb2cgKi9cXG5mb3JtIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYWNjZW50KTtcXG59XFxuXFxuLyogU3R5bGVzIGZvciBsYWJlbHMgKi9cXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgaW5wdXQgYW5kIHRleHRhcmVhICovXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIGJ1dHRvbnMgKi9cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFjY2VudCk7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU3MzczOyAvKiBDaGFuZ2UgdG8geW91ciBkZXNpcmVkIGhvdmVyIGNvbG9yICovXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgKiBhcyByZW5kZXIgZnJvbSAnLi9yZW5kZXJGeG5zJztcbmltcG9ydCB0b0RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5cbi8vL1xuXG5jb25zdCBhZGRidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbmNvbnN0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpO1xuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcbmV4cG9ydCBjb25zdCBkaWFsb2dCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kaWFsb2cnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJBZGQnKTtcbmNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3ViRWRpdCcpO1xuY29uc3QgY2FuY2VsQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbEJ0bicpO1xuY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuY29uc3Qgc3VibWl0UHJvakJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRQcm9qJyk7XG5jb25zdCBwcm9qRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZGlhbG9nJylcbmNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwVGl0bGUnKTtcbmNvbnN0IGNhbmNlbEFkZFByb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsQWRkUHJvaicpO1xuXG4vLy9cblxubGV0IG15UGFnZTtcblxuLy9sb2FkIG5ldyBwYWdlIG9yLi4uXG5nZXRTYXZlZFByb2plY3RzKCk7XG5cblxucmVuZGVyLnJlbmRlclBhZ2UobXlQYWdlKTtcblxuLy8gT3BlbiBkaWFsb2cgdG8gYWRkIGEgdG9kbyBjYXJkXG5hZGRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJZCcpLnZhbHVlID0gJyc7XG4gICAgZGlhbG9nQm94LnNob3dNb2RhbCgpO1xufSk7XG5cbi8vIFN1Ym1pdCBuZXcgYSB0b2RvIGNhcmRcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gR2V0IHRoZSB2YWx1ZXMgZnJvbSB0aGUgZm9ybVxuICAgIGNvbnN0IHRhc2tJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSWQnKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG5cbiAgICBpZiAodGFza0lkKSB7XG4gICAgICAgIC8vIEVkaXRpbmcgYW4gZXhpc3RpbmcgdGFza1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnRWRpdGVkIHRhc2snKTtcbiAgICAgICAgY29uc3QgdGFzayA9IG15UGFnZS5jdXJyZW50UHJvamVjdC50YXNrcy5maW5kKHQgPT4gdC5pZCA9PT0gdGFza0lkKTtcbiAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgIHRhc2sudGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgICAgIHRhc2suZGVzYyA9IG5ld0Rlc2M7XG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUgPSBuZXdEYXRlO1xuICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWRkaW5nIGEgbmV3IHRhc2tcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZGVkIGEgbmV3IHRhc2snKTtcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyB0b0RvKG5ld1RpdGxlLCBuZXdEYXRlLCBuZXdEZXNjLCBuZXdQcmlvcml0eSk7XG4gICAgICAgIG15UGFnZS5jdXJyZW50UHJvamVjdC5hZGRUYXNrKHRvZG8pO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGZvcm0gYW5kIGNsb3NlIGRpYWxvZ1xuICAgIHRpdGxlLnZhbHVlID0gJyc7XG4gICAgZGF0ZS52YWx1ZSA9ICcnO1xuICAgIGRlc2MudmFsdWUgPSAnJztcbiAgICBwcmlvcml0eS52YWx1ZSA9ICcnO1xuICAgIGRpYWxvZ0JveC5jbG9zZSgpO1xuXG4gICAgLy8gU2F2ZSBjaGFuZ2VzIGFuZCB1cGRhdGUgdGhlIGRpc3BsYXlcbiAgICBzYXZlUHJvamVjdHMobXlQYWdlKTtcbiAgICByZW5kZXIubG9hZEl0ZW1zKG15UGFnZS5jdXJyZW50UHJvamVjdCk7XG59KTtcblxuXG4vLyBDYW5jZWwgYWRkaW5nIGEgY2FyZFxuY2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpYWxvZ0JveC5jbG9zZSgpO1xufSk7XG5cblxuLy8gQWRkIGEgbmV3IHByb2plY3RcbmFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvakRpYWxvZy5zaG93TW9kYWwoKTtcbn0pO1xuXG4vLyBTdWJtaXQgYSBwcm9qZWN0XG5zdWJtaXRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3UHJvaiA9IG5ldyBwcm9qZWN0KHByb2pUaXRsZS52YWx1ZSk7XG4gICAgbXlQYWdlLmFkZFByb2oobmV3UHJvaik7XG4gICAgcmVuZGVyLnJlbmRlclBhZ2UobXlQYWdlKTtcbiAgICBwcm9qVGl0bGUudmFsdWUgPSAnJztcbiAgICBwcm9qRGlhbG9nLmNsb3NlKCk7XG4gICAgc2F2ZVByb2plY3RzKG15UGFnZSk7XG59KTtcblxuY2FuY2VsQWRkUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoKSA9PiB7XG4gICAgcHJvakRpYWxvZy5jbG9zZSgpO1xufSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0cyhwYWdlKSB7XG4gICAgcGFnZSA9IEpTT04uc3RyaW5naWZ5KHBhZ2UpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvZG8nLCBwYWdlKTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2F2ZWQnKVxufVxuXG5mdW5jdGlvbiBnZXRTYXZlZFByb2plY3RzKCkge1xuICAgIFxuICAgIGNvbnN0IHN0b3JlZFBhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRvZG8nKSk7XG4gICAgbGV0IHByb2pBcnJheSA9IFtdO1xuICAgIGlmIChzdG9yZWRQYWdlKSB7XG5cbiAgICAgICAgbGV0IHNwcm9qZWN0cyA9IHN0b3JlZFBhZ2VbJ19wcm9qZWN0cyddO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgcCBvZiBzcHJvamVjdHMpIHtcbiAgICAgICAgICAgIGxldCBwcm9qID0gbmV3IHByb2plY3QocFsnX25hbWUnXSwgcFsnX2lkJ10pO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB0IG9mIHBbJ190YXNrcyddKXtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IG5ldyB0b0RvKHRbJ190aXRsZSddLCB0WydfZHVlRGF0ZSddLCB0WydfZGVzYyddLCB0WydfcHJpb3JpdHknXSk7XG4gICAgICAgICAgICAgICAgcHJvai5hZGRUYXNrKHRhc2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9qQXJyYXkucHVzaChwcm9qKTtcbiAgICAgICAgfVxuICAgICAgICBteVBhZ2UgPSBuZXcgcHJvamVjdHMocHJvakFycmF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBteVBhZ2UgPSBuZXcgcHJvamVjdHMoKTtcbiAgICB9XG5cbiAgICBcbn1cblxuXG5leHBvcnQge215UGFnZX07XG4iLCIgXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb2plY3Qge1xuXG4gICAgY29uc3RydWN0b3IobmFtZSwgaWQgPSB0aGlzLmdlbmVyYXRlSUQoKSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXQgdGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YXNrcztcbiAgICB9XG5cbiAgICBzZXQgdGFza3MobmV3VGFza3MpIHtcbiAgICAgICAgdGhpcy5fdGFza3MgPSBuZXdUYXNrcztcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgaWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIGdlbmVyYXRlSUQoKXtcbiAgICAgICAgbGV0IGlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFRoaXMgaXMgdGhlIElEOiAke2lkfWApO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIFxuICAgIGNsZWFyQWxsKCkge1xuICAgICAgICB0aGlzLl90YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzaykgeyAvL1RvRG8gb2JqZWN0XG4gICAgICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLl90YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gdGFzay5pZCk7XG4gICAgICAgIGlmICh0YXNrSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl90YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IG9sZFRhc2sgPSB0aGlzLl90YXNrc1t0YXNrSW5kZXhdO1xuICAgICAgICAgICAgb2xkVGFzay50aXRsZSA9IHRhc2sudGl0bGU7XG4gICAgICAgICAgICBvbGRUYXNrLmR1ZURhdGUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgICAgICBvbGRUYXNrLnByaW9yaXR5ID0gdGFzay5wcmlvcml0eTtcbiAgICAgICAgICAgIG9sZFRhc2suZGVzYyA9IHRhc2suZGVzYztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sodGFza0lEKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX3Rhc2tzLmZpbmRJbmRleCgoZWwpID0+IGVsLmlkID09PSB0YXNrSUQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBUaGUgdGFzazogJHt0YXNrSUR9IGRvZXMgbm90IGV4aXN0YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVkRWwgPSB0aGlzLl90YXNrcy5zcGxpY2UoaW5kZXgsMSk7IC8vIGFycmF5XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtkZWxldGVkRWxbMF0udGl0bGV9IHdhcyBkZWxldGVkYCk7XG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlZEVsOyAvLyBhcnJheVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9nVGFza3MoKSB7XG4gICAgICAgIGNvbnN0IHRhc2tzQXJyYXkgPSB0aGlzLl90YXNrcyAvL09iamVjdC5lbnRyaWVzKHRoaXMudGFza3MpO1xuICAgICAgICBmb3IgKGxldCBlbCBvZiB0YXNrc0FycmF5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTG9nZ2luZyBUYXNrcy4uLlxcbicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRhc2s6ICR7ZWwudGl0bGV9IGlzIHRvLi4uICR7ZWwuZGVzY30gXFxuYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2d0ZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XG4gICAgfVxufVxuIiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9qZWN0cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0cyA9IFtuZXcgcHJvamVjdCgnUHJvamVjdDEnKV0pIHtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMgPSBwcm9qZWN0czsgLy8gYXJyYXlcbiAgICAgICAgdGhpcy5fY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1swXTtcbiAgICB9XG5cbiAgICBnZXQgcHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RzO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50UHJvamVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQcm9qZWN0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgaXMgbm8gcHJvamVjdHMnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQcm9qZWN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkUHJvaihwcm9qKXtcbiAgICAgICAgdGhpcy5fcHJvamVjdHMucHVzaChwcm9qKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdXJyUHJvaihwcm9qKTtcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qKHByb2pJRCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9wcm9qZWN0cy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gcHJvaklEKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlIHByb2o6ICR7cHJvaklEfSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlZEVsID0gdGhpcy5fcHJvamVjdHMuc3BsaWNlKGluZGV4LDEpOyAvLyBhcnJheVxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7ZGVsZXRlZEVsWzBdLm5hbWV9IHdhcyBkZWxldGVkYCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fcHJvamVjdHMubGVuZ3RoIDwgMSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudFByb2plY3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQcm9qZWN0ID0gdGhpcy5fcHJvamVjdHNbdGhpcy5fcHJvamVjdHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlZEVsOyAvLyBhcnJheVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNsZWFyQWxsUHJvanMoKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3RzID0gW25ldyBwcm9qZWN0KCdQcm9qZWN0JyldO1xuICAgICAgICB0aGlzLl9jdXJyZW50UHJvamVjdCA9IHRoaXMuX3Byb2plY3RzWzBdO1xuICAgIH1cblxuICAgIHN3aXRjaEN1cnJQcm9qKHByb2opIHsgLy8gbmFtZSBvZiBwcm9qZWN0IHdlIHdhbnQgdG8gc3dpdGNoIHRvXG4gICAgICAgIGNvbnN0IGlkID0gcHJvai5pZDtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fcHJvamVjdHMuZmluZEluZGV4KChlbCkgPT4gZWwuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpe1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFByb2plY3QgPSBwcm9qO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRQcm9qZWN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUHJvamVjdCBkb2VzIG5vdCBleGlzdCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kUHJvaihwcm9qSUQpIHtcbiAgICAgICAgbGV0IHByb2ogPSB0aGlzLl9wcm9qZWN0cy5maW5kKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHApO1xuICAgICAgICAgICAgcmV0dXJuIHAuaWQgPT09IHByb2pJRDtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb2o7XG4gICAgfVxufSIsImltcG9ydCB7IG15UGFnZSwgc2F2ZVByb2plY3RzIH0gZnJvbSAnLic7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltZ3MvZGVsZXRlLW91dGxpbmUuc3ZnJztcbmltcG9ydCB7IGxvYWRJdGVtcyB9IGZyb20gJy4vcmVuZGVyRnhucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2pDb21wKHByb2opIHtcblxuICAgIC8vbmF2IFRpdGxlXG4gICAgbGV0IG5hdlRpdGxlRWxlbWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgbmF2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZUaXRsZUVsZW1lbnRzLmNsYXNzTGlzdC5hZGQoJ25hdi10aXRsZS1lbGVtZW50cycpO1xuICAgIG5hdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ25hdi10aXRsZScpO1xuXG4gICAgbmF2VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qLm5hbWU7XG5cbiAgICAvL2FkZCBJRCB0byBkYXRhIGF0dHJpYnV0ZXNcbiAgICBuYXZUaXRsZS5kYXRhc2V0LnByb2pJZCA9IHByb2ouaWQ7XG4gICAgY29uc29sZS5sb2coYHRoZSBwcm9qZWN0cyBpZCBpczogJHtuYXZUaXRsZS5kYXRhc2V0LnByb2pJZH1gKTtcblxuICAgIC8vU3dpdGNoIGV2ZW50XG4gICAgbmF2VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCB0YXJnZXRJRCA9IG5hdlRpdGxlLmRhdGFzZXQucHJvaklkO1xuICAgICAgICBsZXQgdGFyZ2V0UHJvaiA9IG15UGFnZS5maW5kUHJvaihTdHJpbmcodGFyZ2V0SUQpKTtcblxuICAgICAgICBteVBhZ2Uuc3dpdGNoQ3VyclByb2oodGFyZ2V0UHJvaik7XG4gICAgICAgIGxvYWRJdGVtcyhteVBhZ2UuY3VycmVudFByb2plY3QpO1xuICAgIH0pXG5cbiAgICAvL0ljb25zXG4gICAgY29uc3QgZGVsZXRlUHJvaiA9IG5ldyBJbWFnZSgpO1xuICAgIGRlbGV0ZVByb2ouc3JjID0gZGVsZXRlSWNvbjtcbiAgICBkZWxldGVQcm9qLmNsYXNzTGlzdC5hZGQoJ2ljb24nKVxuICAgIGRlbGV0ZVByb2ouY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKVxuICAgIGRlbGV0ZVByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNhdmVQcm9qZWN0cyhteVBhZ2UpO1xuICAgICAgICBteVBhZ2UuZGVsZXRlUHJvaihwcm9qLmlkKTtcbiAgICAgICAgaWYgKG15UGFnZS5wcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdteVRvZG8nKTtcbiAgICAgICAgfVxuICAgICAgICBuYXZUaXRsZUVsZW1lbnRzLnJlbW92ZSgpO1xuICAgIFxuICAgICAgICBsb2FkSXRlbXMobXlQYWdlLmN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KVxuXG4gICAgbmF2VGl0bGVFbGVtZW50cy5hcHBlbmRDaGlsZChuYXZUaXRsZSk7XG4gICAgbmF2VGl0bGVFbGVtZW50cy5hcHBlbmRDaGlsZChkZWxldGVQcm9qKVxuXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtcHJvanMnKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2VGl0bGVFbGVtZW50cyk7XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgdG9Eb0NvbXAgZnJvbSAnLi90b2RvQ29tcCc7XG5pbXBvcnQgcHJvakNvbXAgZnJvbSAnLi9wcm9qc0NvbXAnO1xuaW1wb3J0IHsgZGlhbG9nQm94IH0gZnJvbSAnLic7XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUGFnZShwYWdlKSB7XG5cbiAgICAvL2xvYWQgYXNzZXRzXG4gICAgbG9hZE5hdihwYWdlKTsgLy8gbmF2IGJhclxuICAgIGlmIChwYWdlLnByb2plY3RzLmxlbmd0aCA+IDApe1xuICAgICAgICBsb2FkSXRlbXMocGFnZS5jdXJyZW50UHJvamVjdCkgLy8gbGlzdCBvZiB0b2RvcyAgIFxuICAgIH1cbiAgICBcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTmF2KHBhZ2UpIHsgLy9wcm9qZWN0cyBPYmpcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXByb2pzJykudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3IgKGxldCBwIG9mIHBhZ2UucHJvamVjdHMpIHtcbiAgICAgICAgcHJvakNvbXAocCk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkSXRlbXMocHJvaikgeyAvL2N1cnJlbnQgcHJvalxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKHR5cGVvZiBwcm9qID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJykudGV4dENvbnRlbnQgPSAnJzsgXG4gICAgfSBlbHNlIGlmIChwcm9qLnRhc2tzLmxlbmd0aCA+IDApe1xuICAgICAgICBmb3IgKGxldCB0IG9mIHByb2oudGFza3MpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9Eb0NvbXAodCk7XG4gICAgICAgICAgICBsZXQgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1pY29uJyk7XG4gICAgICAgICAgICAvLyBlZGl0IGJ1dHRvbnNcbiAgICAgICAgICAgIGZvciAobGV0IGIgb2YgZWRpdEJ1dHRvbnMpIHtcbiAgICAgICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0lEID0gYi5kYXRhc2V0LnRvRG9JZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tJZHggPSAgcHJvai50YXNrcy5maW5kSW5kZXgoKGVsKSA9PiBlbC5pZCA9PT0gdGFza0lEKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBwcm9qLnRhc2tzW3Rhc2tJZHhdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZFRpdGxlID0gdGFzay50aXRsZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkRGF0ZSA9IHRhc2suZHVlRGF0ZSB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkRGVzYyA9IHRhc2suZGVzYyB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkUHJpb3JpdHkgPSB0YXNrLnByaW9yaXR5IHx8ICdsb3cnO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJZCcpLnZhbHVlID0gdGFzay5pZDtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSBvbGRUaXRsZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IG9sZERhdGUgPyBuZXcgRGF0ZShvbGREYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDE2KSA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gZm9ybWF0dGVkRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZSA9IG9sZERlc2M7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlID0gb2xkUHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ0JveC5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyB0YXNrcycpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJvaihwYWdlLCBuZXdQcm9qKXsgLy9wcm9qZWN0cywgcHJvamVjdHMgdG8gc3dpdGNodG9vb1xuICAgIHBhZ2Uuc3dpdGNoQ3VyclByb2oobmV3UHJvaik7XG4gICAgbG9hZE5hdihwYWdlKTsgLy8gbmF2IGJhclxuICAgIGxvYWRJdGVtcyhwYWdlLmN1cnJlbnRQcm9qZWN0KSAvLyBsaXN0IG9mIHRvZG9zXG59XG5cbiIsIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b0RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSxkZXNjLHByaW9yaXR5PSdsb3cnLCB0b0RvSWQgPSB0aGlzLmdlbmVyYXRlSUQoKSkgeyAvLyBzdHIsIGRhdGV0aW1lLWxvY2FsLCBzdHIsIHN0clxuICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLl9kdWVEYXRlID0gdGhpcy5kYXRlRm9ybWF0dGVyKGR1ZURhdGUpOyAvLyA8aW5wdXQgdHlwZT1cImRhdGV0aW1lLWxvY2FsXCI+XG4gICAgICAgIHRoaXMuX2Rlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLl9pZCA9IHRvRG9JZDtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgdGl0bGUobmFtZSkge1xuICAgICAgICB0aGlzLl90aXRsZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjO1xuICAgIH1cblxuICAgIHNldCBkZXNjKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fZGVzYyA9IG5hbWU7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUoZGF0ZSl7XG4gICAgICAgIGlmIChkYXRlID09PSAnJyl7XG4gICAgICAgICAgICB0aGlzLl9kdWVEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2R1ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eShsZXZlbCl7XG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gbGV2ZWw7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBkYXRlRm9ybWF0dGVyKGRhdGUpIHtcbiAgICAgICAgaWYgKGRhdGUgPT09ICcnKXtcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoKVxuICAgICAgICAgICAgcmV0dXJuIGRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSlcbiAgICAgICAgICAgIHJldHVybiBkXG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgZ2VuZXJhdGVJRCgpe1xuICAgICAgICBsZXQgaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGhpcyBpcyB0aGUgSUQ6ICR7aWR9YCk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cblxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiBgVGl0bGU6ICR7dGhpcy50aXRsZX0sIGRlc2NyaXB0aW9uOiAke3RoaXMuZGVzY30sIER1ZSAke3RoaXMuZHVlRGF0ZX0gd2l0aCBhICR7dGhpcy5wcmlvcml0eX0gcHJpb3JpdHkuYFxuICAgIH1cblxufVxuXG5cbi8vIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuLy8gICAgIC4uLjtcbi8vIH0iLCJpbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltZ3MvZGVsZXRlLW91dGxpbmUuc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2ltZ3MvcGVuY2lsLW91dGxpbmUuc3ZnJztcbmltcG9ydCB7IG15UGFnZSwgc2F2ZVByb2plY3RzIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRG9Db21wKHRhc2spIHtcblxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3RvRG8nKTtcblxuICAgIC8vYWRkIGRhdGEgYXR0cmlidXRlXG4gICAgY2FyZC5kYXRhc2V0LnRvRG9JZCA9IHRhc2suaWQ7XG5cbiAgICBjb25zdCBjYXJkTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRMZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQtY2FyZCcpXG4gICAgY29uc3QgY2FyZFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWNhcmQnKVxuXG4gICAgLy9UaXRsZVxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvLWRvLXRpdGxlJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICAvLyBEdWUgRGF0ZVxuICAgIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWUuY2xhc3NMaXN0LmFkZCgndG8tZG8tZHVlRGF0ZScpO1xuICAgIGR1ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZS50b0RhdGVTdHJpbmcoKTsgXG5cbiAgICAvLyBEZXNjcmlwdGlvblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG8tZG8tZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzYztcblxuICAgIC8vIHByaW9yaXR5IGNvbG91ciBjb2RlOlxuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5JylcbiAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWQnKSB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWVkLXByaW9yaXR5JylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpXG4gICAgfVxuXG4gICAgY2FyZExlZnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNhcmRMZWZ0LmFwcGVuZENoaWxkKGR1ZSk7XG4gICAgY2FyZExlZnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pOyAvLyBBZGQgZGVzY3JpcHRpb24gZWxlbWVudFxuXG4gICAgLy9JY29uc1xuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVUb2RvLnNyYyA9IGRlbGV0ZUljb247XG4gICAgZGVsZXRlVG9kby5jbGFzc0xpc3QuYWRkKCdpY29uJylcbiAgICBkZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uJylcbiAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBteVBhZ2UuY3VycmVudFByb2plY3QuZGVsZXRlVGFzayh0YXNrLmlkKTtcbiAgICAgICAgc2F2ZVByb2plY3RzKG15UGFnZSk7XG4gICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGVkaXRUb2RvID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdFRvZG8uc3JjID0gZWRpdEljb247XG4gICAgZWRpdFRvZG8uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgIGVkaXRUb2RvLmNsYXNzTGlzdC5hZGQoJ2VkaXQtaWNvbicpO1xuICAgIGVkaXRUb2RvLmRhdGFzZXQudG9Eb0lkID0gdGFzay5pZDtcblxuXG4gICAgY2FyZFJpZ2h0LmFwcGVuZENoaWxkKGVkaXRUb2RvKTtcbiAgICBjYXJkUmlnaHQuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kbyk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRMZWZ0KTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRSaWdodCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKS5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGB0aGUgY2FyZHMgaWQgaXM6ICR7Y2FyZC5kYXRhc2V0LnRvRG9JZH1gKTtcblxufVxuXG4vLyAgd2hlbiBhZGQgdG9kbyBpcyBjbGlja2VkIGNyZWF0ZSBhIGRpYWxvZyBvYmplY3QgZm9yIHRoZSBjYXJkIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9