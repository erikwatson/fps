/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../Bramble/dist/assets.js":
/*!*********************************!*\
  !*** ../Bramble/dist/assets.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAllTerrain = exports.loadTerrain = exports.loadAllImages = exports.loadImage = exports.loadAllText = exports.loadString = void 0;
function loadString(path) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.addEventListener('load', function (event) {
            resolve(request.responseText);
        });
        request.addEventListener('error', function (event) {
            reject(event);
        });
        request.open('GET', path);
        request.send();
    });
}
exports.loadString = loadString;
function loadAllText(paths) {
    if (paths === void 0) { paths = []; }
    return Promise.all(paths.map(function (x) { return loadString(x); }));
}
exports.loadAllText = loadAllText;
function loadImage(path) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.addEventListener('load', function (e) {
            resolve(img);
        });
        img.addEventListener('error', function (err) {
            reject(err);
        });
        img.src = path;
    });
}
exports.loadImage = loadImage;
function loadAllImages(paths) {
    if (paths === void 0) { paths = []; }
    return Promise.all(paths.map(function (x) { return loadImage(x); }));
}
exports.loadAllImages = loadAllImages;
// Downloads a Terrain file,
// reads it,
// downloads the related image file,
// returns a new Terrain object
function loadTerrain(path) {
    var description;
    return loadString(path)
        .then(function (json) {
        description = JSON.parse(json);
        return loadImage(description.path);
    })
        .then(function (image) { return ({
        name: description.name,
        type: description.type,
        image: image,
        tiles: description.tiles
    }); });
}
exports.loadTerrain = loadTerrain;
function loadAllTerrain(paths) {
    if (paths === void 0) { paths = []; }
    return Promise.all(paths.map(function (x) { return loadTerrain(x); }));
}
exports.loadAllTerrain = loadAllTerrain;
exports.default = {
    loadImage: loadImage,
    loadString: loadString,
    loadAllText: loadAllText,
    loadAllImages: loadAllImages,
    loadTerrain: loadTerrain,
    loadAllTerrain: loadAllTerrain
};


/***/ }),

/***/ "../Bramble/dist/bramble.js":
/*!**********************************!*\
  !*** ../Bramble/dist/bramble.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assets_1 = __webpack_require__(/*! ./assets */ "../Bramble/dist/assets.js");
Object.defineProperty(exports, "assets", { enumerable: true, get: function () { return assets_1.default; } });
var game_1 = __webpack_require__(/*! ./game */ "../Bramble/dist/game.js");
Object.defineProperty(exports, "game", { enumerable: true, get: function () { return game_1.default; } });
var grid_1 = __webpack_require__(/*! ./grid */ "../Bramble/dist/grid.js");
Object.defineProperty(exports, "grid", { enumerable: true, get: function () { return grid_1.default; } });
var graphics_1 = __webpack_require__(/*! ./graphics */ "../Bramble/dist/graphics.js");
Object.defineProperty(exports, "graphics", { enumerable: true, get: function () { return graphics_1.default; } });
var input_1 = __webpack_require__(/*! ./input */ "../Bramble/dist/input.js");
Object.defineProperty(exports, "keyboard", { enumerable: true, get: function () { return input_1.keyboard; } });
Object.defineProperty(exports, "mouse", { enumerable: true, get: function () { return input_1.mouse; } });
var sprite_1 = __webpack_require__(/*! ./sprite */ "../Bramble/dist/sprite.js");
Object.defineProperty(exports, "sprite", { enumerable: true, get: function () { return sprite_1.default; } });
var vec2_1 = __webpack_require__(/*! ./vec2 */ "../Bramble/dist/vec2.js");
Object.defineProperty(exports, "vec2", { enumerable: true, get: function () { return vec2_1.default; } });
var storage_1 = __webpack_require__(/*! ./storage */ "../Bramble/dist/storage.js");
Object.defineProperty(exports, "save", { enumerable: true, get: function () { return storage_1.save; } });
Object.defineProperty(exports, "load", { enumerable: true, get: function () { return storage_1.load; } });


/***/ }),

/***/ "../Bramble/dist/game.js":
/*!*******************************!*\
  !*** ../Bramble/dist/game.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphics_1 = __webpack_require__(/*! ./graphics */ "../Bramble/dist/graphics.js");
var input_1 = __webpack_require__(/*! ./input */ "../Bramble/dist/input.js");
var create = function () {
    var backgroundColor = '#000000';
    var update = null;
    var render = null;
    // These are used for calculating the Delta Time for the Frame
    var prevTime = 0;
    var frameTime = 0;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var graphics = graphics_1.default.create(ctx);
    canvas.id = 'bramble-game';
    var mouseInput = input_1.mouse.create(canvas);
    var setBackgroundColor = function (color) {
        backgroundColor = color;
    };
    var setUpdate = function (callback) {
        update = callback;
    };
    var setRender = function (callback) {
        render = callback;
    };
    var step = function () {
        if (update) {
            update(1 / 60); // TODO: fake it at 60fps for now
        }
        if (render) {
            graphics.clear(backgroundColor);
            render(graphics);
        }
        mouseInput.update();
        window.requestAnimationFrame(step);
    };
    var start = function () {
        mouseInput = input_1.mouse.create(canvas);
        mouseInput.start();
        window.requestAnimationFrame(step);
    };
    var setSize = function (width, height) {
        canvas.width = width;
        canvas.height = height;
    };
    var attachTo = function (element) {
        element.appendChild(canvas);
    };
    // NOTE: Must be called AFTER anything that would change our context.
    //       setSize for example.
    var setSmoothing = function (to) {
        if (to === void 0) { to = true; }
        ctx.imageSmoothingEnabled = to;
    };
    var disableContextMenu = function () {
        canvas.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    };
    return {
        setSize: setSize,
        setUpdate: setUpdate,
        setRender: setRender,
        setBackgroundColor: setBackgroundColor,
        attachTo: attachTo,
        disableContextMenu: disableContextMenu,
        setSmoothing: setSmoothing,
        start: start,
        getMouseState: function () { return mouseInput.getState(); }
    };
};
exports.default = {
    create: create
};


/***/ }),

/***/ "../Bramble/dist/graphics.js":
/*!***********************************!*\
  !*** ../Bramble/dist/graphics.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = __webpack_require__(/*! ./utils/number */ "../Bramble/dist/utils/number.js");
function clear(ctx, colour) {
    rect(ctx, { x: 0, y: 0 }, { width: ctx.canvas.width, height: ctx.canvas.height }, {
        fill: {
            colour: colour
        }
    });
}
function square(ctx, position, size, options) {
    if (options === void 0) { options = defaultRect; }
    rect(ctx, { x: position.x, y: position.y }, { width: size, height: size }, options);
}
var defaultRect = {
    fill: {
        colour: '#ffffff',
        opacity: 1
    },
    line: {
        width: 2,
        colour: '#000000',
        opacity: 1
    }
};
function rect(ctx, position, size, options) {
    if (options === void 0) { options = defaultRect; }
    if (typeof options.fill !== 'undefined') {
        ctx.fillStyle = options.fill.colour;
        ctx.fillRect(position.x, position.y, size.width, size.height);
    }
    if (typeof options.line !== 'undefined') {
        ctx.strokeStyle = options.line.colour;
        ctx.lineWidth = options.line.width;
        ctx.strokeRect(position.x, position.y, size.width, size.height);
    }
}
var defaultLine = {
    width: 2,
    colour: '#000000'
};
function line(ctx, from, to, options) {
    if (options === void 0) { options = defaultLine; }
    ctx.strokeStyle = options.colour;
    ctx.lineWidth = options.width;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
}
var defaultCircle = {
    fill: {
        colour: '#000000',
        opacity: 1
    },
    line: {
        colour: '#ffffff',
        opacity: 1,
        width: 2
    }
};
function circle(ctx, position, radius, options) {
    if (options === void 0) { options = defaultCircle; }
    // not happy with this really, make another function i think
    if (typeof options.fill !== 'undefined') {
        ctx.fillStyle = options.fill.colour;
    }
    ctx.beginPath();
    ctx.strokeStyle = options.line.colour;
    ctx.lineWidth = options.line.width;
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI);
    ctx.closePath();
    if (typeof options.fill !== 'undefined') {
        ctx.fill();
    }
    ctx.stroke();
}
function image(ctx, position, size, image) {
    ctx.drawImage(image, position.x, position.y, size.width, size.height);
}
function subImage(ctx, position, size, subPosition, subSize, image) {
    ctx.drawImage(image, subPosition.x, subPosition.y, subSize.width, subSize.height, position.x, position.y, size.width, size.height);
}
function sprite(ctx, sprite) {
    var halfWidth = sprite.size.width / 2;
    var halfHeight = sprite.size.height / 2;
    ctx.save();
    ctx.translate(sprite.position.x + halfWidth, sprite.position.y + halfHeight);
    ctx.rotate(number_1.default.toRadians(sprite.rotation));
    if (sprite.frames.length > 1) {
        subImage(ctx, {
            x: -halfWidth,
            y: -halfHeight
        }, {
            width: sprite.size.width,
            height: sprite.size.height
        }, {
            x: sprite.frames[sprite.frame].position.x,
            y: sprite.frames[sprite.frame].position.y
        }, {
            width: sprite.frames[sprite.frame].size.width,
            height: sprite.frames[sprite.frame].size.height
        }, sprite.texture);
    }
    else {
        image(ctx, {
            x: -halfWidth,
            y: -halfHeight
        }, {
            width: sprite.size.width,
            height: sprite.size.height
        }, sprite.texture);
    }
    ctx.restore();
}
function txt(ctx, position, text, colour, font) {
    if (text === void 0) { text = ''; }
    if (colour === void 0) { colour = '#000000'; }
    if (font === void 0) { font = '16pt sans-serif'; }
    ctx.fillStyle = colour;
    ctx.font = font;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(text, position.x, position.y);
}
function tile(ctx, position, tilesheet, gridPosition, tilesheetPosition, scale, tileSize) {
    subImage(ctx, {
        x: position.x + scale * (gridPosition.x * tileSize.width),
        y: position.y + scale * (gridPosition.y * tileSize.height)
    }, {
        width: scale * tileSize.width,
        height: scale * tileSize.height
    }, {
        x: tileSize.width * tilesheetPosition.x,
        y: tileSize.height * tilesheetPosition.y
    }, {
        width: tileSize.width,
        height: tileSize.height
    }, tilesheet);
}
// tilegrid: a 2d array of numbers representing terrain types
// spritesheets: An object, each key is the value that represents a tile from this sheet
function tiles(ctx, position, tileGrid, spriteSheets, scale, tileSize) {
    var dirValues = {
        NW: 1,
        N: 2,
        NE: 4,
        E: 8,
        SE: 16,
        S: 32,
        SW: 64,
        W: 128
    };
    var _loop_1 = function (y) {
        var _loop_2 = function (x) {
            if (tileGrid[y][x] === 0) {
                return "continue";
            }
            // REAL VALUES
            var tl = y > 0 ? tileGrid[y - 1][x - 1] : 0;
            var tm = y > 0 ? tileGrid[y - 1][x] : 0;
            var tr = y > 0 ? tileGrid[y - 1][x + 1] : 0;
            var ml = tileGrid[y][x - 1];
            var m = tileGrid[y][x];
            var mr = tileGrid[y][x + 1];
            var bl = y < tileGrid.length - 1 ? tileGrid[y + 1][x - 1] : 0;
            var bm = y < tileGrid.length - 1 ? tileGrid[y + 1][x] : 0;
            var br = y < tileGrid.length - 1 ? tileGrid[y + 1][x + 1] : 0;
            // BINARY VALUES
            var n = m === tm ? 1 : 0;
            var e = m === mr ? 1 : 0;
            var s = m === bm ? 1 : 0;
            var w = m === ml ? 1 : 0;
            var nw = m === tm && m === ml ? (m === tl ? 1 : 0) : 0;
            var ne = m === tm && m === mr ? (m === tr ? 1 : 0) : 0;
            var sw = m === bm && m === ml ? (m === bl ? 1 : 0) : 0;
            var se = m === bm && m === mr ? (m === br ? 1 : 0) : 0;
            var sum = dirValues.NW * nw +
                dirValues.N * n +
                dirValues.NE * ne +
                dirValues.E * e +
                dirValues.SE * se +
                dirValues.S * s +
                dirValues.SW * sw +
                dirValues.W * w;
            // Figure out which sheet we're supposed to be drawing from
            var sheet = spriteSheets.filter(function (sheet) {
                return sheet.type === tileGrid[y][x];
            })[0];
            if (!sheet) {
                console.error("Sheet " + tileGrid[y][x] + " not found!");
                return { value: void 0 };
            }
            var selections = sheet.tiles.filter(function (x) { return x.type === sum; });
            // Note: Just picking a random one of the variants every time we render for now
            var selection = selections[Math.floor(Math.random() * selections.length)];
            if (selection) {
                tile(ctx, position, sheet.image, { x: x, y: y }, selection.position, scale, selection.size);
            }
            else {
                console.log("Tile not defined " + sum);
            }
        };
        for (var x = 0; x < tileGrid[y].length; x++) {
            var state_2 = _loop_2(x);
            if (typeof state_2 === "object")
                return state_2;
        }
    };
    for (var y = 0; y < tileGrid.length; y++) {
        var state_1 = _loop_1(y);
        if (typeof state_1 === "object")
            return state_1.value;
    }
}
var defaultDropShadow = {
    shadowcolour: '#000000',
    shadowBlur: 6,
    shadowOffsetX: 4,
    shadowOffsetY: 4
};
function shadow(ctx, drawingOperations, options) {
    if (options === void 0) { options = defaultDropShadow; }
    ctx.save();
    ctx.shadowColor = options.shadowcolour;
    ctx.shadowBlur = options.shadowBlur;
    ctx.shadowOffsetX = options.shadowOffsetX;
    ctx.shadowOffsetY = options.shadowOffsetY;
    drawingOperations();
    ctx.restore();
}
function dodge(ctx, drawingOperations) {
    ctx.save();
    ctx.globalCompositeOperation = 'colour-dodge';
    drawingOperations();
    ctx.restore();
}
function overlay(ctx, drawingOperations) {
    ctx.save();
    ctx.globalCompositeOperation = 'overlay';
    drawingOperations();
    ctx.restore();
}
function transparency(ctx, drawingOperations, alpha) {
    if (alpha === void 0) { alpha = 0.25; }
    ctx.save();
    ctx.globalAlpha = alpha;
    drawingOperations();
    ctx.restore();
}
function create(ctx) {
    return {
        circle: function (position, radius, options) {
            if (options === void 0) { options = defaultCircle; }
            circle(ctx, position, radius, options);
        },
        clear: function (colour) {
            clear(ctx, colour);
        },
        square: function (position, size, options) {
            if (options === void 0) { options = defaultRect; }
            square(ctx, position, size, options);
        },
        rect: function (position, size, options) {
            if (options === void 0) { options = defaultRect; }
            rect(ctx, position, size, options);
        },
        image: function (position, size, img) {
            image(ctx, position, size, img);
        },
        line: function (from, to, options) {
            if (options === void 0) { options = defaultLine; }
            line(ctx, from, to, options);
        },
        sprite: function (spr) {
            sprite(ctx, spr);
        },
        subImage: function (position, size, subPosition, subSize, img) {
            subImage(ctx, position, size, subPosition, subSize, img);
        },
        text: function (position, text, colour, font) {
            if (position === void 0) { position = { x: 0, y: 0 }; }
            if (text === void 0) { text = ''; }
            if (colour === void 0) { colour = '#000000'; }
            if (font === void 0) { font = '16pt sans-serif'; }
            txt(ctx, position, text, colour, font);
        },
        tiles: function (position, tileGrid, spriteSheets, scale, tileSize) {
            tiles(ctx, position, tileGrid, spriteSheets, scale, tileSize);
        },
        shadow: function (drawingOperations, options) {
            if (options === void 0) { options = defaultDropShadow; }
            shadow(ctx, drawingOperations, options);
        },
        dodge: function (drawingOperations) {
            dodge(ctx, drawingOperations);
        },
        overlay: function (drawingOperations) {
            overlay(ctx, drawingOperations);
        },
        transparency: function (drawingOperations, alpha) {
            if (alpha === void 0) { alpha = 0.25; }
            transparency(ctx, drawingOperations, alpha);
        }
    };
}
exports.default = {
    create: create,
    circle: circle,
    clear: clear,
    image: image,
    line: line,
    rect: rect,
    sprite: sprite,
    square: square,
    subImage: subImage,
    text: txt,
    tiles: tiles,
    shadow: shadow,
    dodge: dodge,
    overlay: overlay,
    transparency: transparency
};


/***/ }),

/***/ "../Bramble/dist/grid.js":
/*!*******************************!*\
  !*** ../Bramble/dist/grid.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function make2DArray(width, height, defaultValue) {
    if (width === void 0) { width = 1; }
    if (height === void 0) { height = 1; }
    if (defaultValue === void 0) { defaultValue = null; }
    var result = [];
    for (var y = 0; y < height; y++) {
        var row = [];
        for (var x = 0; x < width; x++) {
            row.push(defaultValue);
        }
        result.push(row);
    }
    return result;
}
function copyTiles(tiles) {
    return tiles.map(function (arr) { return arr.slice(); });
}
var defaultGrid = {
    pos: { x: 0, y: 0 },
    visible: true,
    divisions: 4,
    tileWidth: 8,
    tileHeight: 8,
    scale: 1
};
function fill(tiles, position, target, replacement) {
    var gridClone = copyTiles(tiles);
    function floodFill(position, target, replacement) {
        if (target === replacement) {
            return;
        }
        var valueAtPosition = gridClone[position.y][position.x];
        if (valueAtPosition !== target) {
            return;
        }
        var isWithinBounds = position.x < gridClone[position.y].length &&
            position.x >= 0 &&
            position.y < gridClone.length &&
            position.y >= 0;
        if (isWithinBounds) {
            gridClone[position.y][position.x] = replacement;
            if (position.y < gridClone.length - 1) {
                floodFill({ x: position.x, y: position.y + 1 }, target, replacement);
            }
            if (position.y > 0) {
                floodFill({ x: position.x, y: position.y - 1 }, target, replacement);
            }
            if (position.x < gridClone[0].length - 1) {
                floodFill({ x: position.x + 1, y: position.y }, target, replacement);
            }
            if (position.x > 0) {
                floodFill({ x: position.x - 1, y: position.y }, target, replacement);
            }
        }
        return;
    }
    if (true) {
        floodFill(position, target, replacement);
    }
    return gridClone;
}
function create(size, options) {
    if (options === void 0) { options = defaultGrid; }
    options = __assign(__assign({}, defaultGrid), options);
    var tiles = make2DArray(size.width, size.height, 0);
    var pos = { x: options.pos.x, y: options.pos.y };
    var visible = options.visible;
    var divisions = options.divisions;
    var tileWidth = options.tileWidth;
    var tileHeight = options.tileHeight;
    var tileSize = options.tileWidth;
    var scale = options.scale;
    return {
        divisions: divisions,
        pos: pos,
        tileHeight: tileHeight,
        tiles: tiles,
        tileWidth: tileWidth,
        visible: visible,
        size: size,
        tileSize: tileSize,
        scale: scale
    };
}
exports.default = {
    create: create,
    fill: fill,
    copyTiles: copyTiles
};


/***/ }),

/***/ "../Bramble/dist/input.js":
/*!********************************!*\
  !*** ../Bramble/dist/input.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.keyboard = exports.mouse = void 0;
var mouse_1 = __webpack_require__(/*! ./input/mouse */ "../Bramble/dist/input/mouse.js");
function create(canvas) {
    var mouseInput = mouse_1.default.create(canvas);
    var start = function () {
        mouseInput.start();
    };
    var update = function () {
        mouseInput.update();
    };
    return {
        start: start,
        update: update,
        getState: function () { return mouseInput.getState(); }
    };
}
exports.mouse = {
    create: create
};
exports.keyboard = {
    create: function () {
        console.log('keyboard input stub');
    }
};


/***/ }),

/***/ "../Bramble/dist/input/mouse.js":
/*!**************************************!*\
  !*** ../Bramble/dist/input/mouse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function create(canvas) {
    var defaultState = function () {
        return {
            position: { x: 0, y: 0 },
            left: defaultButtonState(),
            wheel: defaultWheelState(),
            right: defaultButtonState()
        };
    };
    var defaultButtonState = function () {
        return {
            pressed: false,
            justPressed: false,
            released: false,
            justReleased: false
        };
    };
    var defaultWheelState = function () {
        var buttonState = defaultButtonState();
        return __assign(__assign({}, buttonState), { moved: false, direction: 'up' });
    };
    var prevMouse = defaultState();
    var mouse = defaultState();
    var clone = function (state) {
        return Object.assign({}, state);
    };
    var relative = function (event) {
        var bounds = canvas.getBoundingClientRect();
        return {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top
        };
    };
    var move = function (event) {
        var newPos = relative(event);
        mouse.position = newPos;
    };
    var down = function (event) {
        switch (event.which) {
            case 1:
                mouse.left.pressed = true;
                break;
            case 2:
                mouse.wheel.pressed = true;
                break;
            case 3:
                mouse.right.pressed = true;
                break;
        }
    };
    var up = function (event) {
        switch (event.which) {
            case 1:
                mouse.left.pressed = false;
                break;
            case 2:
                mouse.wheel.pressed = false;
                break;
            case 3:
                mouse.right.pressed = false;
                break;
        }
    };
    var wheel = function (event) {
        mouse.wheel.moved = event.deltaY === 0 ? false : true;
        if (mouse.wheel.moved !== false) {
            mouse.wheel.direction = event.deltaY < 0 ? 'up' : 'down';
        }
    };
    var update = function () {
        mouse.wheel.moved = false;
        prevMouse = clone(mouse);
    };
    var start = function () {
        // mouse events
        canvas.addEventListener('mousemove', move);
        canvas.addEventListener('mousedown', down);
        canvas.addEventListener('mouseup', up);
        canvas.addEventListener('wheel', wheel);
        // default mouse position, center of screen
        mouse.position.x = canvas.width / 2;
        mouse.position.y = canvas.height / 2;
    };
    return {
        getState: function () { return mouse; },
        start: start,
        update: update
    };
}
exports.default = { create: create };


/***/ }),

/***/ "../Bramble/dist/sprite.js":
/*!*********************************!*\
  !*** ../Bramble/dist/sprite.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function create(position, size, rotation, texture, colour) {
    if (rotation === void 0) { rotation = 0; }
    if (colour === void 0) { colour = '#ffffff'; }
    var frames = [];
    return {
        size: size,
        texture: texture,
        colour: colour,
        frame: 0,
        position: position,
        setFrames: function (newFrames) {
            frames = newFrames;
        },
        addFrame: function (frame) {
            frames.push(frame);
        },
        get frames() {
            return frames;
        },
        get rotation() {
            return rotation;
        },
        set rotation(degrees) {
            rotation = degrees >= 360 ? 360 - degrees : degrees;
        }
    };
}
exports.default = {
    create: create
};


/***/ }),

/***/ "../Bramble/dist/storage.js":
/*!**********************************!*\
  !*** ../Bramble/dist/storage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports.save = void 0;
function save() {
}
exports.save = save;
function load() {
}
exports.load = load;


/***/ }),

/***/ "../Bramble/dist/utils/number.js":
/*!***************************************!*\
  !*** ../Bramble/dist/utils/number.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toDegrees = exports.toRadians = void 0;
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
exports.toRadians = toRadians;
function toDegrees(radians) {
    return radians * (180 / Math.PI);
}
exports.toDegrees = toDegrees;
exports.default = {
    toRadians: toRadians,
    toDegrees: toDegrees
};


/***/ }),

/***/ "../Bramble/dist/vec2.js":
/*!*******************************!*\
  !*** ../Bramble/dist/vec2.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function create(_x, _y) {
    var x = _x;
    var y = _y;
    var add = function (v) {
        x += v.x;
        y += v.y;
    };
    var addScalar = function (s) {
        x += s;
        y += s;
    };
    var divide = function (v) {
        x /= v.x;
        y /= v.y;
    };
    var divideScalar = function (s) {
        x /= s;
        y /= s;
    };
    var dot = function (v) {
        return x * v.x + y * v.y;
    };
    var getLength = function () {
        return Math.sqrt(x * x + y * y);
    };
    var getOpposite = function (v) {
        return create(-v.x, -v.y);
    };
    var getPerp = function () {
        return create(-y, x);
    };
    var isEqualTo = function (v) {
        return x == v.x && y == v.y;
    };
    var multiply = function (v) {
        x *= v.x;
        y *= v.y;
    };
    var multiplyScalar = function (s) {
        x *= s;
        y *= s;
    };
    var normalise = function () {
        var l = getLength();
        x = x / l;
        y = y / l;
    };
    var setLength = function (l) {
        normalise();
        multiplyScalar(l);
    };
    var subtract = function (v) {
        x -= v.x;
        y -= v.y;
    };
    var subtractScalar = function (s) {
        x -= s;
        y -= s;
    };
    return {
        add: add,
        addScalar: addScalar,
        clone: clone,
        divide: divide,
        divideScalar: divideScalar,
        dot: dot,
        getLength: getLength,
        getOpposite: getOpposite,
        getPerp: getPerp,
        isEqualTo: isEqualTo,
        multiply: multiply,
        multiplyScalar: multiplyScalar,
        normalise: normalise,
        setLength: setLength,
        subtract: subtract,
        subtractScalar: subtractScalar,
        set x(_x) {
            x = _x;
        },
        get x() {
            return x;
        },
        set y(_y) {
            y = _y;
        },
        get y() {
            return y;
        }
    };
}
var fromDegrees = function (degrees) {
    var rad = degrees * (Math.PI / 180);
    return create(Math.cos(rad), Math.sin(rad));
};
var clone = function (v) {
    return create(v.x, v.y);
};
exports.default = {
    clone: clone,
    create: create,
    fromDegrees: fromDegrees
};


/***/ }),

/***/ "./src/aabb.js":
/*!*********************!*\
  !*** ./src/aabb.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! @erikwatson/bramble */ "../Bramble/dist/bramble.js"),
    vec2 = _require.vec2; // works


function pointVsRect(point, rect) {
  return point.x >= rect.x && point.y >= rect.y && point.x < rect.x + rect.width && point.y < rect.y + rect.height;
} // works


function rectVsRect(rectA, rectB) {
  return rectA.x < rectB.x + rectB.width && rectA.x + rectA.width > rectB.x && rectA.y < rectB.y + rectB.height && rectA.y + rectA.height > rectB.y;
} // works
// returns false if no collision occurred, otherwise it returns an object
// containing the results of the collision
// { near, far, normal }


function lineVsRect(line, rect) {
  var from = vec2.create(line.from.x, line.from.y);
  var to = vec2.create(line.to.x, line.to.y);
  var dir = vec2.clone(to);
  dir.subtract(from);
  var invdir = {
    x: 1.0 / dir.x,
    y: 1.0 / dir.y
  };
  var timeNear = {
    x: (rect.x - line.from.x) * invdir.x,
    y: (rect.y - line.from.y) * invdir.y
  };
  var timeFar = {
    x: (rect.x + rect.width - line.from.x) * invdir.x,
    y: (rect.y + rect.height - line.from.y) * invdir.y
  };

  if (isNaN(timeNear.x) || isNaN(timeNear.y)) {
    // console.log('timeNear is NaN', timeNear.x, timeNear.y)
    return false;
  }

  if (isNaN(timeFar.x) || isNaN(timeFar.y)) {
    // console.log('timeFar is NaN', timeFar.x, timeFar.y)
    return false;
  } // sort the distances


  var tempNear = _objectSpread({}, timeNear);

  var tempFar = _objectSpread({}, timeFar);

  if (tempNear.x > tempFar.x) {
    timeNear.x = tempFar.x;
    timeFar.x = tempNear.x;
  }

  tempNear = _objectSpread({}, timeNear);
  tempFar = _objectSpread({}, timeFar);

  if (tempNear.y > tempFar.y) {
    timeNear.y = tempFar.y;
    timeFar.y = tempNear.y;
  } // no collision detected


  if (timeNear.x > timeFar.y || timeNear.y > timeFar.x) {
    return false;
  }

  var hitNear = Math.max(timeNear.x, timeNear.y);
  var hitFar = Math.min(timeFar.x, timeFar.y); // abort if ray is facing away from our object

  if (hitFar < 0) {
    return false;
  } // abort if the ray does not reach the object


  if (hitNear > 1) {
    return false;
  } // abort if the ray's first collision is behind us


  if (hitNear < 0) {
    return false;
  } // construct a vector to hold the normal of the surface


  var normal = vec2.create(0, 0);

  if (timeNear.x > timeNear.y) {
    if (invdir.x < 0) {
      normal.x = 1;
      normal.y = 0;
    } else {
      normal.x = -1;
      normal.y = 0;
    }
  } else if (timeNear.x < timeNear.y) {
    if (invdir.y < 0) {
      normal.x = 0;
      normal.y = 1;
    } else {
      normal.x = 0;
      normal.y = -1;
    }
  } else if (timeNear.x === timeNear.y) {
    // console.log(invdir.x, invdir.y)
    if (invdir.x < 0 && invdir.y < 0) {
      console.log('tl');
      normal.x = -1;
      normal.y = 1;
    } else if (invdir.x > 0 && invdir.y < 0) {
      console.log('tr');
      normal.x = 1;
      normal.y = 1;
    } else if (invdir.x < 0 && invdir.y > 0) {
      console.log('bl');
      normal.x = -1;
      normal.y = -1;
    } else if (invdir.x > 0 && invdir.y > 0) {
      console.log('br');
      normal.x = 1;
      normal.y = -1;
    }
  } // collided with the object!


  return {
    normal: normal,
    near: vec2.create(from.x + hitNear * dir.x, from.y + hitNear * dir.y),
    far: vec2.create(from.x + hitFar * dir.x, from.y + hitFar * dir.y),
    timeOfCollision: hitNear
  };
}

module.exports = {
  lineVsRect: lineVsRect,
  rectVsRect: rectVsRect,
  pointVsRect: pointVsRect
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! @erikwatson/bramble */ "../Bramble/dist/bramble.js"),
    game = _require.game,
    vec2 = _require.vec2,
    mouse = _require.mouse;

var _require2 = __webpack_require__(/*! ./aabb */ "./src/aabb.js"),
    lineVsRect = _require2.lineVsRect;

var container = document.querySelector('#container');
var g = game.create();
var m = mouse.create();
var level = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 2, 2, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 2, 2, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 1, 1], [1, 0, 1, 0, 0, 0, 0, 0, 2, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 0, 2, 0, 0, 2, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
var canvasSize = {
  width: 1280,
  height: 720
};
var tileSize = 24;
var columnWidth = 8;
var screenInColumns = Math.ceil(canvasSize.width / columnWidth);
var hero = {
  position: vec2.create(tileSize * (level[0].length / 2), tileSize * (level.length / 2)),
  angle: -90
};

function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);
  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);
  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;
  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
  return "#".concat(RR).concat(GG).concat(BB);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function range(from, to, length) {
  var range = Math.abs(from - to);
  var step = range / (length - 1);
  var result = [];

  for (var i = 0; i < length; i++) {
    result.push(from + i * step);
  }

  return result;
}

function getRays(fov, horizon, columns) {
  var result = [];
  var from = -(fov / 2);
  var to = fov / 2;
  var steps = range(from, to, screenInColumns);
  return steps.map(function (angle) {
    var theta = toRadians(hero.angle + angle);
    return {
      from: hero.position,
      to: {
        x: hero.position.x + horizon * Math.cos(theta),
        y: hero.position.y + horizon * Math.sin(theta)
      }
    };
  });
}

g.attachTo(container);
g.setSize(1280, 720);
var collisions = [];
g.setUpdate(function (dt) {
  hero.angle += 1;
  collisions = [];
  var rays = getRays(90, 150, screenInColumns);
  rays.forEach(function (line) {
    var collisionCandidates = [];
    level.forEach(function (row, y) {
      level[y].forEach(function (col, x) {
        if (level[y][x] !== 0) {
          collisionCandidates.push({
            x: x * tileSize,
            y: y * tileSize,
            width: tileSize,
            height: tileSize,
            type: level[y][x]
          });
        }
      });
    });
    var collision = collisionCandidates.map(function (rect) {
      return {
        ray: line,
        rect: rect,
        collision: lineVsRect(line, rect)
      };
    }).filter(function (collision) {
      return collision.collision !== false;
    }).sort(function (a, b) {
      return a.collision.timeOfCollision > b.collision.timeOfCollision;
    })[0];
    collisions.push(collision);
  });
});
g.setRender(function (gfx) {
  gfx.clear('#232323'); // draw in 3d

  collisions.forEach(function (_ref, i) {
    var collision = _ref.collision,
        rect = _ref.rect,
        ray = _ref.ray;

    if (!collision) {
      return;
    } // console.log(ray)
    // debug


    var rayAngle = Math.atan2(ray.to.y - ray.from.y, ray.to.x - ray.from.x);
    var correctedAngle = rayAngle - toRadians(hero.angle);
    var newDistance = collision.timeOfCollision * Math.cos(correctedAngle); // console.log(rayAngle, collision.timeOfCollision, newDistance)
    // debug

    var height = 0.16 * canvasSize.height / newDistance;
    var colour = rect.type === 2 ? '#800080' : '#FFEF00';
    var shade = Math.round(newDistance * 100);
    colour = shadeColor(colour, 50 - shade);
    gfx.rect({
      x: i * columnWidth,
      y: (canvasSize.height - height) / 2
    }, {
      width: columnWidth,
      height: height
    }, {
      fill: {
        colour: colour
      }
    });
  }); // draw the minimap

  gfx.rect({
    x: 0,
    y: 0
  }, {
    width: level[0].length * tileSize,
    height: level.length * tileSize
  }, {
    fill: {
      colour: 'black'
    }
  });
  level.forEach(function (row, y) {
    row.forEach(function (column, x) {
      switch (level[y][x]) {
        case 1:
          gfx.square({
            x: x * tileSize,
            y: y * tileSize
          }, tileSize, {
            fill: {
              colour: '#FFEF00'
            }
          });
          break;

        case 2:
          gfx.square({
            x: x * tileSize,
            y: y * tileSize
          }, tileSize, {
            fill: {
              colour: '#800080'
            }
          });
          break;

        default:
          break;
      }
    });
  }); // draw the collisions 

  collisions.forEach(function (collision) {
    if (!collision) {
      return;
    }

    var rect = collision.rect;
    collision = collision.collision;

    if (collision) {
      gfx.line(hero.position, collision.near, {
        colour: 'red'
      });
    } else {
      gfx.line(hero.position, collision.to, {
        colour: 'white'
      });
    }
  }); // draw the hero 

  gfx.circle(hero.position, 8); // x: hero.position.x + horizon * Math.cos(theta),
  // y: hero.position.y + horizon * Math.sin(theta)

  gfx.line(hero.position, {
    x: hero.position.x + 15 * Math.cos(toRadians(hero.angle)),
    y: hero.position.y + 15 * Math.sin(toRadians(hero.angle))
  }, {
    colour: 'white'
  });
});
g.start();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9icmFtYmxlLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi4vQnJhbWJsZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi4vQnJhbWJsZS9kaXN0L2lucHV0LmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvdXRpbHMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvdmVjMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWFiYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidmVjMiIsInBvaW50VnNSZWN0IiwicG9pbnQiLCJyZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJlY3RWc1JlY3QiLCJyZWN0QSIsInJlY3RCIiwibGluZVZzUmVjdCIsImxpbmUiLCJmcm9tIiwiY3JlYXRlIiwidG8iLCJkaXIiLCJjbG9uZSIsInN1YnRyYWN0IiwiaW52ZGlyIiwidGltZU5lYXIiLCJ0aW1lRmFyIiwiaXNOYU4iLCJ0ZW1wTmVhciIsInRlbXBGYXIiLCJoaXROZWFyIiwiTWF0aCIsIm1heCIsImhpdEZhciIsIm1pbiIsIm5vcm1hbCIsImNvbnNvbGUiLCJsb2ciLCJuZWFyIiwiZmFyIiwidGltZU9mQ29sbGlzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImdhbWUiLCJtb3VzZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImciLCJtIiwibGV2ZWwiLCJjYW52YXNTaXplIiwidGlsZVNpemUiLCJjb2x1bW5XaWR0aCIsInNjcmVlbkluQ29sdW1ucyIsImNlaWwiLCJoZXJvIiwicG9zaXRpb24iLCJsZW5ndGgiLCJhbmdsZSIsInNoYWRlQ29sb3IiLCJjb2xvciIsInBlcmNlbnQiLCJSIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJHIiwiQiIsIlJSIiwidG9TdHJpbmciLCJHRyIsIkJCIiwidG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwicmFuZ2UiLCJhYnMiLCJzdGVwIiwicmVzdWx0IiwiaSIsInB1c2giLCJnZXRSYXlzIiwiZm92IiwiaG9yaXpvbiIsImNvbHVtbnMiLCJzdGVwcyIsIm1hcCIsInRoZXRhIiwiY29zIiwic2luIiwiYXR0YWNoVG8iLCJzZXRTaXplIiwiY29sbGlzaW9ucyIsInNldFVwZGF0ZSIsImR0IiwicmF5cyIsImZvckVhY2giLCJjb2xsaXNpb25DYW5kaWRhdGVzIiwicm93IiwiY29sIiwidHlwZSIsImNvbGxpc2lvbiIsInJheSIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsInNldFJlbmRlciIsImdmeCIsImNsZWFyIiwicmF5QW5nbGUiLCJhdGFuMiIsImNvcnJlY3RlZEFuZ2xlIiwibmV3RGlzdGFuY2UiLCJjb2xvdXIiLCJzaGFkZSIsInJvdW5kIiwiZmlsbCIsImNvbHVtbiIsInNxdWFyZSIsImNpcmNsZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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RWhELEtBQUMsRUFBRStDLElBQUksQ0FBQ0MsUUFBTCxDQUFjaEQsQ0FBZCxHQUFrQixLQUFLc0IsSUFBSSxDQUFDeUQsR0FBTCxDQUFTaEIsU0FBUyxDQUFDaEIsSUFBSSxDQUFDRyxLQUFOLENBQWxCLENBRDVCO0FBRUVqRCxLQUFDLEVBQUU4QyxJQUFJLENBQUNDLFFBQUwsQ0FBYy9DLENBQWQsR0FBa0IsS0FBS3FCLElBQUksQ0FBQzBELEdBQUwsQ0FBU2pCLFNBQVMsQ0FBQ2hCLElBQUksQ0FBQ0csS0FBTixDQUFsQjtBQUY1QixHQUZGLEVBTUU7QUFBRXVELFVBQU0sRUFBRTtBQUFWLEdBTkY7QUFRRCxDQS9GRDtBQWlHQWxFLENBQUMsQ0FBQ3lFLEtBQUYsRyIsImZpbGUiOiJmcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRBbGxUZXJyYWluID0gZXhwb3J0cy5sb2FkVGVycmFpbiA9IGV4cG9ydHMubG9hZEFsbEltYWdlcyA9IGV4cG9ydHMubG9hZEltYWdlID0gZXhwb3J0cy5sb2FkQWxsVGV4dCA9IGV4cG9ydHMubG9hZFN0cmluZyA9IHZvaWQgMDtcbmZ1bmN0aW9uIGxvYWRTdHJpbmcocGF0aCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZWplY3QoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBwYXRoKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRTdHJpbmcgPSBsb2FkU3RyaW5nO1xuZnVuY3Rpb24gbG9hZEFsbFRleHQocGF0aHMpIHtcbiAgICBpZiAocGF0aHMgPT09IHZvaWQgMCkgeyBwYXRocyA9IFtdOyB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBhdGhzLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gbG9hZFN0cmluZyh4KTsgfSkpO1xufVxuZXhwb3J0cy5sb2FkQWxsVGV4dCA9IGxvYWRBbGxUZXh0O1xuZnVuY3Rpb24gbG9hZEltYWdlKHBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nLnNyYyA9IHBhdGg7XG4gICAgfSk7XG59XG5leHBvcnRzLmxvYWRJbWFnZSA9IGxvYWRJbWFnZTtcbmZ1bmN0aW9uIGxvYWRBbGxJbWFnZXMocGF0aHMpIHtcbiAgICBpZiAocGF0aHMgPT09IHZvaWQgMCkgeyBwYXRocyA9IFtdOyB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBhdGhzLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gbG9hZEltYWdlKHgpOyB9KSk7XG59XG5leHBvcnRzLmxvYWRBbGxJbWFnZXMgPSBsb2FkQWxsSW1hZ2VzO1xuLy8gRG93bmxvYWRzIGEgVGVycmFpbiBmaWxlLFxuLy8gcmVhZHMgaXQsXG4vLyBkb3dubG9hZHMgdGhlIHJlbGF0ZWQgaW1hZ2UgZmlsZSxcbi8vIHJldHVybnMgYSBuZXcgVGVycmFpbiBvYmplY3RcbmZ1bmN0aW9uIGxvYWRUZXJyYWluKHBhdGgpIHtcbiAgICB2YXIgZGVzY3JpcHRpb247XG4gICAgcmV0dXJuIGxvYWRTdHJpbmcocGF0aClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKGRlc2NyaXB0aW9uLnBhdGgpO1xuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChpbWFnZSkgeyByZXR1cm4gKHtcbiAgICAgICAgbmFtZTogZGVzY3JpcHRpb24ubmFtZSxcbiAgICAgICAgdHlwZTogZGVzY3JpcHRpb24udHlwZSxcbiAgICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgICB0aWxlczogZGVzY3JpcHRpb24udGlsZXNcbiAgICB9KTsgfSk7XG59XG5leHBvcnRzLmxvYWRUZXJyYWluID0gbG9hZFRlcnJhaW47XG5mdW5jdGlvbiBsb2FkQWxsVGVycmFpbihwYXRocykge1xuICAgIGlmIChwYXRocyA9PT0gdm9pZCAwKSB7IHBhdGhzID0gW107IH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocGF0aHMubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBsb2FkVGVycmFpbih4KTsgfSkpO1xufVxuZXhwb3J0cy5sb2FkQWxsVGVycmFpbiA9IGxvYWRBbGxUZXJyYWluO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGxvYWRJbWFnZTogbG9hZEltYWdlLFxuICAgIGxvYWRTdHJpbmc6IGxvYWRTdHJpbmcsXG4gICAgbG9hZEFsbFRleHQ6IGxvYWRBbGxUZXh0LFxuICAgIGxvYWRBbGxJbWFnZXM6IGxvYWRBbGxJbWFnZXMsXG4gICAgbG9hZFRlcnJhaW46IGxvYWRUZXJyYWluLFxuICAgIGxvYWRBbGxUZXJyYWluOiBsb2FkQWxsVGVycmFpblxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFzc2V0c18xID0gcmVxdWlyZShcIi4vYXNzZXRzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXNzZXRzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhc3NldHNfMS5kZWZhdWx0OyB9IH0pO1xudmFyIGdhbWVfMSA9IHJlcXVpcmUoXCIuL2dhbWVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnYW1lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnYW1lXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBncmlkXzEgPSByZXF1aXJlKFwiLi9ncmlkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ3JpZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ3JpZF8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgZ3JhcGhpY3NfMSA9IHJlcXVpcmUoXCIuL2dyYXBoaWNzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ3JhcGhpY3NcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdyYXBoaWNzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBpbnB1dF8xID0gcmVxdWlyZShcIi4vaW5wdXRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJrZXlib2FyZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5wdXRfMS5rZXlib2FyZDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1vdXNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbnB1dF8xLm1vdXNlOyB9IH0pO1xudmFyIHNwcml0ZV8xID0gcmVxdWlyZShcIi4vc3ByaXRlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3ByaXRlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzcHJpdGVfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHZlYzJfMSA9IHJlcXVpcmUoXCIuL3ZlYzJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZWMyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB2ZWMyXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBzdG9yYWdlXzEgPSByZXF1aXJlKFwiLi9zdG9yYWdlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2F2ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmFnZV8xLnNhdmU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJsb2FkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yYWdlXzEubG9hZDsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGdyYXBoaWNzXzEgPSByZXF1aXJlKFwiLi9ncmFwaGljc1wiKTtcbnZhciBpbnB1dF8xID0gcmVxdWlyZShcIi4vaW5wdXRcIik7XG52YXIgY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMDAwMCc7XG4gICAgdmFyIHVwZGF0ZSA9IG51bGw7XG4gICAgdmFyIHJlbmRlciA9IG51bGw7XG4gICAgLy8gVGhlc2UgYXJlIHVzZWQgZm9yIGNhbGN1bGF0aW5nIHRoZSBEZWx0YSBUaW1lIGZvciB0aGUgRnJhbWVcbiAgICB2YXIgcHJldlRpbWUgPSAwO1xuICAgIHZhciBmcmFtZVRpbWUgPSAwO1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIGdyYXBoaWNzID0gZ3JhcGhpY3NfMS5kZWZhdWx0LmNyZWF0ZShjdHgpO1xuICAgIGNhbnZhcy5pZCA9ICdicmFtYmxlLWdhbWUnO1xuICAgIHZhciBtb3VzZUlucHV0ID0gaW5wdXRfMS5tb3VzZS5jcmVhdGUoY2FudmFzKTtcbiAgICB2YXIgc2V0QmFja2dyb3VuZENvbG9yID0gZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIH07XG4gICAgdmFyIHNldFVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB1cGRhdGUgPSBjYWxsYmFjaztcbiAgICB9O1xuICAgIHZhciBzZXRSZW5kZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmVuZGVyID0gY2FsbGJhY2s7XG4gICAgfTtcbiAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgdXBkYXRlKDEgLyA2MCk7IC8vIFRPRE86IGZha2UgaXQgYXQgNjBmcHMgZm9yIG5vd1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmNsZWFyKGJhY2tncm91bmRDb2xvcik7XG4gICAgICAgICAgICByZW5kZXIoZ3JhcGhpY3MpO1xuICAgICAgICB9XG4gICAgICAgIG1vdXNlSW5wdXQudXBkYXRlKCk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfTtcbiAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vdXNlSW5wdXQgPSBpbnB1dF8xLm1vdXNlLmNyZWF0ZShjYW52YXMpO1xuICAgICAgICBtb3VzZUlucHV0LnN0YXJ0KCk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfTtcbiAgICB2YXIgc2V0U2l6ZSA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH07XG4gICAgdmFyIGF0dGFjaFRvID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIH07XG4gICAgLy8gTk9URTogTXVzdCBiZSBjYWxsZWQgQUZURVIgYW55dGhpbmcgdGhhdCB3b3VsZCBjaGFuZ2Ugb3VyIGNvbnRleHQuXG4gICAgLy8gICAgICAgc2V0U2l6ZSBmb3IgZXhhbXBsZS5cbiAgICB2YXIgc2V0U21vb3RoaW5nID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgICAgIGlmICh0byA9PT0gdm9pZCAwKSB7IHRvID0gdHJ1ZTsgfVxuICAgICAgICBjdHguaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gdG87XG4gICAgfTtcbiAgICB2YXIgZGlzYWJsZUNvbnRleHRNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldFNpemU6IHNldFNpemUsXG4gICAgICAgIHNldFVwZGF0ZTogc2V0VXBkYXRlLFxuICAgICAgICBzZXRSZW5kZXI6IHNldFJlbmRlcixcbiAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yOiBzZXRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGF0dGFjaFRvOiBhdHRhY2hUbyxcbiAgICAgICAgZGlzYWJsZUNvbnRleHRNZW51OiBkaXNhYmxlQ29udGV4dE1lbnUsXG4gICAgICAgIHNldFNtb290aGluZzogc2V0U21vb3RoaW5nLFxuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIGdldE1vdXNlU3RhdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlSW5wdXQuZ2V0U3RhdGUoKTsgfVxuICAgIH07XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbnVtYmVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9udW1iZXJcIik7XG5mdW5jdGlvbiBjbGVhcihjdHgsIGNvbG91cikge1xuICAgIHJlY3QoY3R4LCB7IHg6IDAsIHk6IDAgfSwgeyB3aWR0aDogY3R4LmNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjdHguY2FudmFzLmhlaWdodCB9LCB7XG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIGNvbG91cjogY29sb3VyXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNxdWFyZShjdHgsIHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdFJlY3Q7IH1cbiAgICByZWN0KGN0eCwgeyB4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55IH0sIHsgd2lkdGg6IHNpemUsIGhlaWdodDogc2l6ZSB9LCBvcHRpb25zKTtcbn1cbnZhciBkZWZhdWx0UmVjdCA9IHtcbiAgICBmaWxsOiB7XG4gICAgICAgIGNvbG91cjogJyNmZmZmZmYnLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICAgIHdpZHRoOiAyLFxuICAgICAgICBjb2xvdXI6ICcjMDAwMDAwJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH1cbn07XG5mdW5jdGlvbiByZWN0KGN0eCwgcG9zaXRpb24sIHNpemUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0UmVjdDsgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWxsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gb3B0aW9ucy5maWxsLmNvbG91cjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmxpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IG9wdGlvbnMubGluZS5jb2xvdXI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSBvcHRpb25zLmxpbmUud2lkdGg7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgICB9XG59XG52YXIgZGVmYXVsdExpbmUgPSB7XG4gICAgd2lkdGg6IDIsXG4gICAgY29sb3VyOiAnIzAwMDAwMCdcbn07XG5mdW5jdGlvbiBsaW5lKGN0eCwgZnJvbSwgdG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0TGluZTsgfVxuICAgIGN0eC5zdHJva2VTdHlsZSA9IG9wdGlvbnMuY29sb3VyO1xuICAgIGN0eC5saW5lV2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGZyb20ueCwgZnJvbS55KTtcbiAgICBjdHgubGluZVRvKHRvLngsIHRvLnkpO1xuICAgIGN0eC5zdHJva2UoKTtcbn1cbnZhciBkZWZhdWx0Q2lyY2xlID0ge1xuICAgIGZpbGw6IHtcbiAgICAgICAgY29sb3VyOiAnIzAwMDAwMCcsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgICAgY29sb3VyOiAnI2ZmZmZmZicsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHdpZHRoOiAyXG4gICAgfVxufTtcbmZ1bmN0aW9uIGNpcmNsZShjdHgsIHBvc2l0aW9uLCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0Q2lyY2xlOyB9XG4gICAgLy8gbm90IGhhcHB5IHdpdGggdGhpcyByZWFsbHksIG1ha2UgYW5vdGhlciBmdW5jdGlvbiBpIHRoaW5rXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZpbGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBvcHRpb25zLmZpbGwuY29sb3VyO1xuICAgIH1cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gb3B0aW9ucy5saW5lLmNvbG91cjtcbiAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5saW5lLndpZHRoO1xuICAgIGN0eC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWxsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlKCk7XG59XG5mdW5jdGlvbiBpbWFnZShjdHgsIHBvc2l0aW9uLCBzaXplLCBpbWFnZSkge1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbn1cbmZ1bmN0aW9uIHN1YkltYWdlKGN0eCwgcG9zaXRpb24sIHNpemUsIHN1YlBvc2l0aW9uLCBzdWJTaXplLCBpbWFnZSkge1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHN1YlBvc2l0aW9uLngsIHN1YlBvc2l0aW9uLnksIHN1YlNpemUud2lkdGgsIHN1YlNpemUuaGVpZ2h0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG59XG5mdW5jdGlvbiBzcHJpdGUoY3R4LCBzcHJpdGUpIHtcbiAgICB2YXIgaGFsZldpZHRoID0gc3ByaXRlLnNpemUud2lkdGggLyAyO1xuICAgIHZhciBoYWxmSGVpZ2h0ID0gc3ByaXRlLnNpemUuaGVpZ2h0IC8gMjtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoc3ByaXRlLnBvc2l0aW9uLnggKyBoYWxmV2lkdGgsIHNwcml0ZS5wb3NpdGlvbi55ICsgaGFsZkhlaWdodCk7XG4gICAgY3R4LnJvdGF0ZShudW1iZXJfMS5kZWZhdWx0LnRvUmFkaWFucyhzcHJpdGUucm90YXRpb24pKTtcbiAgICBpZiAoc3ByaXRlLmZyYW1lcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHN1YkltYWdlKGN0eCwge1xuICAgICAgICAgICAgeDogLWhhbGZXaWR0aCxcbiAgICAgICAgICAgIHk6IC1oYWxmSGVpZ2h0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHdpZHRoOiBzcHJpdGUuc2l6ZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc3ByaXRlLnNpemUuaGVpZ2h0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHg6IHNwcml0ZS5mcmFtZXNbc3ByaXRlLmZyYW1lXS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogc3ByaXRlLmZyYW1lc1tzcHJpdGUuZnJhbWVdLnBvc2l0aW9uLnlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgd2lkdGg6IHNwcml0ZS5mcmFtZXNbc3ByaXRlLmZyYW1lXS5zaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzcHJpdGUuZnJhbWVzW3Nwcml0ZS5mcmFtZV0uc2l6ZS5oZWlnaHRcbiAgICAgICAgfSwgc3ByaXRlLnRleHR1cmUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW1hZ2UoY3R4LCB7XG4gICAgICAgICAgICB4OiAtaGFsZldpZHRoLFxuICAgICAgICAgICAgeTogLWhhbGZIZWlnaHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgd2lkdGg6IHNwcml0ZS5zaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzcHJpdGUuc2l6ZS5oZWlnaHRcbiAgICAgICAgfSwgc3ByaXRlLnRleHR1cmUpO1xuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xufVxuZnVuY3Rpb24gdHh0KGN0eCwgcG9zaXRpb24sIHRleHQsIGNvbG91ciwgZm9udCkge1xuICAgIGlmICh0ZXh0ID09PSB2b2lkIDApIHsgdGV4dCA9ICcnOyB9XG4gICAgaWYgKGNvbG91ciA9PT0gdm9pZCAwKSB7IGNvbG91ciA9ICcjMDAwMDAwJzsgfVxuICAgIGlmIChmb250ID09PSB2b2lkIDApIHsgZm9udCA9ICcxNnB0IHNhbnMtc2VyaWYnOyB9XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG91cjtcbiAgICBjdHguZm9udCA9IGZvbnQ7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCc7XG4gICAgY3R4LmZpbGxUZXh0KHRleHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xufVxuZnVuY3Rpb24gdGlsZShjdHgsIHBvc2l0aW9uLCB0aWxlc2hlZXQsIGdyaWRQb3NpdGlvbiwgdGlsZXNoZWV0UG9zaXRpb24sIHNjYWxlLCB0aWxlU2l6ZSkge1xuICAgIHN1YkltYWdlKGN0eCwge1xuICAgICAgICB4OiBwb3NpdGlvbi54ICsgc2NhbGUgKiAoZ3JpZFBvc2l0aW9uLnggKiB0aWxlU2l6ZS53aWR0aCksXG4gICAgICAgIHk6IHBvc2l0aW9uLnkgKyBzY2FsZSAqIChncmlkUG9zaXRpb24ueSAqIHRpbGVTaXplLmhlaWdodClcbiAgICB9LCB7XG4gICAgICAgIHdpZHRoOiBzY2FsZSAqIHRpbGVTaXplLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHNjYWxlICogdGlsZVNpemUuaGVpZ2h0XG4gICAgfSwge1xuICAgICAgICB4OiB0aWxlU2l6ZS53aWR0aCAqIHRpbGVzaGVldFBvc2l0aW9uLngsXG4gICAgICAgIHk6IHRpbGVTaXplLmhlaWdodCAqIHRpbGVzaGVldFBvc2l0aW9uLnlcbiAgICB9LCB7XG4gICAgICAgIHdpZHRoOiB0aWxlU2l6ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aWxlU2l6ZS5oZWlnaHRcbiAgICB9LCB0aWxlc2hlZXQpO1xufVxuLy8gdGlsZWdyaWQ6IGEgMmQgYXJyYXkgb2YgbnVtYmVycyByZXByZXNlbnRpbmcgdGVycmFpbiB0eXBlc1xuLy8gc3ByaXRlc2hlZXRzOiBBbiBvYmplY3QsIGVhY2gga2V5IGlzIHRoZSB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgYSB0aWxlIGZyb20gdGhpcyBzaGVldFxuZnVuY3Rpb24gdGlsZXMoY3R4LCBwb3NpdGlvbiwgdGlsZUdyaWQsIHNwcml0ZVNoZWV0cywgc2NhbGUsIHRpbGVTaXplKSB7XG4gICAgdmFyIGRpclZhbHVlcyA9IHtcbiAgICAgICAgTlc6IDEsXG4gICAgICAgIE46IDIsXG4gICAgICAgIE5FOiA0LFxuICAgICAgICBFOiA4LFxuICAgICAgICBTRTogMTYsXG4gICAgICAgIFM6IDMyLFxuICAgICAgICBTVzogNjQsXG4gICAgICAgIFc6IDEyOFxuICAgIH07XG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoeSkge1xuICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICBpZiAodGlsZUdyaWRbeV1beF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUkVBTCBWQUxVRVNcbiAgICAgICAgICAgIHZhciB0bCA9IHkgPiAwID8gdGlsZUdyaWRbeSAtIDFdW3ggLSAxXSA6IDA7XG4gICAgICAgICAgICB2YXIgdG0gPSB5ID4gMCA/IHRpbGVHcmlkW3kgLSAxXVt4XSA6IDA7XG4gICAgICAgICAgICB2YXIgdHIgPSB5ID4gMCA/IHRpbGVHcmlkW3kgLSAxXVt4ICsgMV0gOiAwO1xuICAgICAgICAgICAgdmFyIG1sID0gdGlsZUdyaWRbeV1beCAtIDFdO1xuICAgICAgICAgICAgdmFyIG0gPSB0aWxlR3JpZFt5XVt4XTtcbiAgICAgICAgICAgIHZhciBtciA9IHRpbGVHcmlkW3ldW3ggKyAxXTtcbiAgICAgICAgICAgIHZhciBibCA9IHkgPCB0aWxlR3JpZC5sZW5ndGggLSAxID8gdGlsZUdyaWRbeSArIDFdW3ggLSAxXSA6IDA7XG4gICAgICAgICAgICB2YXIgYm0gPSB5IDwgdGlsZUdyaWQubGVuZ3RoIC0gMSA/IHRpbGVHcmlkW3kgKyAxXVt4XSA6IDA7XG4gICAgICAgICAgICB2YXIgYnIgPSB5IDwgdGlsZUdyaWQubGVuZ3RoIC0gMSA/IHRpbGVHcmlkW3kgKyAxXVt4ICsgMV0gOiAwO1xuICAgICAgICAgICAgLy8gQklOQVJZIFZBTFVFU1xuICAgICAgICAgICAgdmFyIG4gPSBtID09PSB0bSA/IDEgOiAwO1xuICAgICAgICAgICAgdmFyIGUgPSBtID09PSBtciA/IDEgOiAwO1xuICAgICAgICAgICAgdmFyIHMgPSBtID09PSBibSA/IDEgOiAwO1xuICAgICAgICAgICAgdmFyIHcgPSBtID09PSBtbCA/IDEgOiAwO1xuICAgICAgICAgICAgdmFyIG53ID0gbSA9PT0gdG0gJiYgbSA9PT0gbWwgPyAobSA9PT0gdGwgPyAxIDogMCkgOiAwO1xuICAgICAgICAgICAgdmFyIG5lID0gbSA9PT0gdG0gJiYgbSA9PT0gbXIgPyAobSA9PT0gdHIgPyAxIDogMCkgOiAwO1xuICAgICAgICAgICAgdmFyIHN3ID0gbSA9PT0gYm0gJiYgbSA9PT0gbWwgPyAobSA9PT0gYmwgPyAxIDogMCkgOiAwO1xuICAgICAgICAgICAgdmFyIHNlID0gbSA9PT0gYm0gJiYgbSA9PT0gbXIgPyAobSA9PT0gYnIgPyAxIDogMCkgOiAwO1xuICAgICAgICAgICAgdmFyIHN1bSA9IGRpclZhbHVlcy5OVyAqIG53ICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuTiAqIG4gK1xuICAgICAgICAgICAgICAgIGRpclZhbHVlcy5ORSAqIG5lICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuRSAqIGUgK1xuICAgICAgICAgICAgICAgIGRpclZhbHVlcy5TRSAqIHNlICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuUyAqIHMgK1xuICAgICAgICAgICAgICAgIGRpclZhbHVlcy5TVyAqIHN3ICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuVyAqIHc7XG4gICAgICAgICAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHNoZWV0IHdlJ3JlIHN1cHBvc2VkIHRvIGJlIGRyYXdpbmcgZnJvbVxuICAgICAgICAgICAgdmFyIHNoZWV0ID0gc3ByaXRlU2hlZXRzLmZpbHRlcihmdW5jdGlvbiAoc2hlZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hlZXQudHlwZSA9PT0gdGlsZUdyaWRbeV1beF07XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgIGlmICghc2hlZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2hlZXQgXCIgKyB0aWxlR3JpZFt5XVt4XSArIFwiIG5vdCBmb3VuZCFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZvaWQgMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlbGVjdGlvbnMgPSBzaGVldC50aWxlcy5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgudHlwZSA9PT0gc3VtOyB9KTtcbiAgICAgICAgICAgIC8vIE5vdGU6IEp1c3QgcGlja2luZyBhIHJhbmRvbSBvbmUgb2YgdGhlIHZhcmlhbnRzIGV2ZXJ5IHRpbWUgd2UgcmVuZGVyIGZvciBub3dcbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSBzZWxlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNlbGVjdGlvbnMubGVuZ3RoKV07XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGlsZShjdHgsIHBvc2l0aW9uLCBzaGVldC5pbWFnZSwgeyB4OiB4LCB5OiB5IH0sIHNlbGVjdGlvbi5wb3NpdGlvbiwgc2NhbGUsIHNlbGVjdGlvbi5zaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGlsZSBub3QgZGVmaW5lZCBcIiArIHN1bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGlsZUdyaWRbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgICAgIHZhciBzdGF0ZV8yID0gX2xvb3BfMih4KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RhdGVfMiA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVfMjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aWxlR3JpZC5sZW5ndGg7IHkrKykge1xuICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoeSk7XG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGVfMSA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZV8xLnZhbHVlO1xuICAgIH1cbn1cbnZhciBkZWZhdWx0RHJvcFNoYWRvdyA9IHtcbiAgICBzaGFkb3djb2xvdXI6ICcjMDAwMDAwJyxcbiAgICBzaGFkb3dCbHVyOiA2LFxuICAgIHNoYWRvd09mZnNldFg6IDQsXG4gICAgc2hhZG93T2Zmc2V0WTogNFxufTtcbmZ1bmN0aW9uIHNoYWRvdyhjdHgsIGRyYXdpbmdPcGVyYXRpb25zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdERyb3BTaGFkb3c7IH1cbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5zaGFkb3dDb2xvciA9IG9wdGlvbnMuc2hhZG93Y29sb3VyO1xuICAgIGN0eC5zaGFkb3dCbHVyID0gb3B0aW9ucy5zaGFkb3dCbHVyO1xuICAgIGN0eC5zaGFkb3dPZmZzZXRYID0gb3B0aW9ucy5zaGFkb3dPZmZzZXRYO1xuICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gb3B0aW9ucy5zaGFkb3dPZmZzZXRZO1xuICAgIGRyYXdpbmdPcGVyYXRpb25zKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbn1cbmZ1bmN0aW9uIGRvZGdlKGN0eCwgZHJhd2luZ09wZXJhdGlvbnMpIHtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnY29sb3VyLWRvZGdlJztcbiAgICBkcmF3aW5nT3BlcmF0aW9ucygpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG59XG5mdW5jdGlvbiBvdmVybGF5KGN0eCwgZHJhd2luZ09wZXJhdGlvbnMpIHtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnb3ZlcmxheSc7XG4gICAgZHJhd2luZ09wZXJhdGlvbnMoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xufVxuZnVuY3Rpb24gdHJhbnNwYXJlbmN5KGN0eCwgZHJhd2luZ09wZXJhdGlvbnMsIGFscGhhKSB7XG4gICAgaWYgKGFscGhhID09PSB2b2lkIDApIHsgYWxwaGEgPSAwLjI1OyB9XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSBhbHBoYTtcbiAgICBkcmF3aW5nT3BlcmF0aW9ucygpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG59XG5mdW5jdGlvbiBjcmVhdGUoY3R4KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2lyY2xlOiBmdW5jdGlvbiAocG9zaXRpb24sIHJhZGl1cywgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdENpcmNsZTsgfVxuICAgICAgICAgICAgY2lyY2xlKGN0eCwgcG9zaXRpb24sIHJhZGl1cywgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyOiBmdW5jdGlvbiAoY29sb3VyKSB7XG4gICAgICAgICAgICBjbGVhcihjdHgsIGNvbG91cik7XG4gICAgICAgIH0sXG4gICAgICAgIHNxdWFyZTogZnVuY3Rpb24gKHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0UmVjdDsgfVxuICAgICAgICAgICAgc3F1YXJlKGN0eCwgcG9zaXRpb24sIHNpemUsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICByZWN0OiBmdW5jdGlvbiAocG9zaXRpb24sIHNpemUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRSZWN0OyB9XG4gICAgICAgICAgICByZWN0KGN0eCwgcG9zaXRpb24sIHNpemUsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBpbWFnZTogZnVuY3Rpb24gKHBvc2l0aW9uLCBzaXplLCBpbWcpIHtcbiAgICAgICAgICAgIGltYWdlKGN0eCwgcG9zaXRpb24sIHNpemUsIGltZyk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpbmU6IGZ1bmN0aW9uIChmcm9tLCB0bywgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdExpbmU7IH1cbiAgICAgICAgICAgIGxpbmUoY3R4LCBmcm9tLCB0bywgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNwcml0ZTogZnVuY3Rpb24gKHNwcikge1xuICAgICAgICAgICAgc3ByaXRlKGN0eCwgc3ByKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3ViSW1hZ2U6IGZ1bmN0aW9uIChwb3NpdGlvbiwgc2l6ZSwgc3ViUG9zaXRpb24sIHN1YlNpemUsIGltZykge1xuICAgICAgICAgICAgc3ViSW1hZ2UoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgc3ViUG9zaXRpb24sIHN1YlNpemUsIGltZyk7XG4gICAgICAgIH0sXG4gICAgICAgIHRleHQ6IGZ1bmN0aW9uIChwb3NpdGlvbiwgdGV4dCwgY29sb3VyLCBmb250KSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkgeyBwb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9OyB9XG4gICAgICAgICAgICBpZiAodGV4dCA9PT0gdm9pZCAwKSB7IHRleHQgPSAnJzsgfVxuICAgICAgICAgICAgaWYgKGNvbG91ciA9PT0gdm9pZCAwKSB7IGNvbG91ciA9ICcjMDAwMDAwJzsgfVxuICAgICAgICAgICAgaWYgKGZvbnQgPT09IHZvaWQgMCkgeyBmb250ID0gJzE2cHQgc2Fucy1zZXJpZic7IH1cbiAgICAgICAgICAgIHR4dChjdHgsIHBvc2l0aW9uLCB0ZXh0LCBjb2xvdXIsIGZvbnQpO1xuICAgICAgICB9LFxuICAgICAgICB0aWxlczogZnVuY3Rpb24gKHBvc2l0aW9uLCB0aWxlR3JpZCwgc3ByaXRlU2hlZXRzLCBzY2FsZSwgdGlsZVNpemUpIHtcbiAgICAgICAgICAgIHRpbGVzKGN0eCwgcG9zaXRpb24sIHRpbGVHcmlkLCBzcHJpdGVTaGVldHMsIHNjYWxlLCB0aWxlU2l6ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNoYWRvdzogZnVuY3Rpb24gKGRyYXdpbmdPcGVyYXRpb25zLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0RHJvcFNoYWRvdzsgfVxuICAgICAgICAgICAgc2hhZG93KGN0eCwgZHJhd2luZ09wZXJhdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBkb2RnZTogZnVuY3Rpb24gKGRyYXdpbmdPcGVyYXRpb25zKSB7XG4gICAgICAgICAgICBkb2RnZShjdHgsIGRyYXdpbmdPcGVyYXRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheTogZnVuY3Rpb24gKGRyYXdpbmdPcGVyYXRpb25zKSB7XG4gICAgICAgICAgICBvdmVybGF5KGN0eCwgZHJhd2luZ09wZXJhdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICB0cmFuc3BhcmVuY3k6IGZ1bmN0aW9uIChkcmF3aW5nT3BlcmF0aW9ucywgYWxwaGEpIHtcbiAgICAgICAgICAgIGlmIChhbHBoYSA9PT0gdm9pZCAwKSB7IGFscGhhID0gMC4yNTsgfVxuICAgICAgICAgICAgdHJhbnNwYXJlbmN5KGN0eCwgZHJhd2luZ09wZXJhdGlvbnMsIGFscGhhKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgY2lyY2xlOiBjaXJjbGUsXG4gICAgY2xlYXI6IGNsZWFyLFxuICAgIGltYWdlOiBpbWFnZSxcbiAgICBsaW5lOiBsaW5lLFxuICAgIHJlY3Q6IHJlY3QsXG4gICAgc3ByaXRlOiBzcHJpdGUsXG4gICAgc3F1YXJlOiBzcXVhcmUsXG4gICAgc3ViSW1hZ2U6IHN1YkltYWdlLFxuICAgIHRleHQ6IHR4dCxcbiAgICB0aWxlczogdGlsZXMsXG4gICAgc2hhZG93OiBzaGFkb3csXG4gICAgZG9kZ2U6IGRvZGdlLFxuICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgdHJhbnNwYXJlbmN5OiB0cmFuc3BhcmVuY3lcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtYWtlMkRBcnJheSh3aWR0aCwgaGVpZ2h0LCBkZWZhdWx0VmFsdWUpIHtcbiAgICBpZiAod2lkdGggPT09IHZvaWQgMCkgeyB3aWR0aCA9IDE7IH1cbiAgICBpZiAoaGVpZ2h0ID09PSB2b2lkIDApIHsgaGVpZ2h0ID0gMTsgfVxuICAgIGlmIChkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCkgeyBkZWZhdWx0VmFsdWUgPSBudWxsOyB9XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgdmFyIHJvdyA9IFtdO1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgICAgICAgIHJvdy5wdXNoKGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvcHlUaWxlcyh0aWxlcykge1xuICAgIHJldHVybiB0aWxlcy5tYXAoZnVuY3Rpb24gKGFycikgeyByZXR1cm4gYXJyLnNsaWNlKCk7IH0pO1xufVxudmFyIGRlZmF1bHRHcmlkID0ge1xuICAgIHBvczogeyB4OiAwLCB5OiAwIH0sXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBkaXZpc2lvbnM6IDQsXG4gICAgdGlsZVdpZHRoOiA4LFxuICAgIHRpbGVIZWlnaHQ6IDgsXG4gICAgc2NhbGU6IDFcbn07XG5mdW5jdGlvbiBmaWxsKHRpbGVzLCBwb3NpdGlvbiwgdGFyZ2V0LCByZXBsYWNlbWVudCkge1xuICAgIHZhciBncmlkQ2xvbmUgPSBjb3B5VGlsZXModGlsZXMpO1xuICAgIGZ1bmN0aW9uIGZsb29kRmlsbChwb3NpdGlvbiwgdGFyZ2V0LCByZXBsYWNlbWVudCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSByZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZUF0UG9zaXRpb24gPSBncmlkQ2xvbmVbcG9zaXRpb24ueV1bcG9zaXRpb24ueF07XG4gICAgICAgIGlmICh2YWx1ZUF0UG9zaXRpb24gIT09IHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1dpdGhpbkJvdW5kcyA9IHBvc2l0aW9uLnggPCBncmlkQ2xvbmVbcG9zaXRpb24ueV0ubGVuZ3RoICYmXG4gICAgICAgICAgICBwb3NpdGlvbi54ID49IDAgJiZcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPCBncmlkQ2xvbmUubGVuZ3RoICYmXG4gICAgICAgICAgICBwb3NpdGlvbi55ID49IDA7XG4gICAgICAgIGlmIChpc1dpdGhpbkJvdW5kcykge1xuICAgICAgICAgICAgZ3JpZENsb25lW3Bvc2l0aW9uLnldW3Bvc2l0aW9uLnhdID0gcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueSA8IGdyaWRDbG9uZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZmxvb2RGaWxsKHsgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSArIDEgfSwgdGFyZ2V0LCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueSA+IDApIHtcbiAgICAgICAgICAgICAgICBmbG9vZEZpbGwoeyB4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55IC0gMSB9LCB0YXJnZXQsIHJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi54IDwgZ3JpZENsb25lWzBdLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBmbG9vZEZpbGwoeyB4OiBwb3NpdGlvbi54ICsgMSwgeTogcG9zaXRpb24ueSB9LCB0YXJnZXQsIHJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi54ID4gMCkge1xuICAgICAgICAgICAgICAgIGZsb29kRmlsbCh7IHg6IHBvc2l0aW9uLnggLSAxLCB5OiBwb3NpdGlvbi55IH0sIHRhcmdldCwgcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRydWUpIHtcbiAgICAgICAgZmxvb2RGaWxsKHBvc2l0aW9uLCB0YXJnZXQsIHJlcGxhY2VtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWRDbG9uZTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZShzaXplLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdEdyaWQ7IH1cbiAgICBvcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRHcmlkKSwgb3B0aW9ucyk7XG4gICAgdmFyIHRpbGVzID0gbWFrZTJEQXJyYXkoc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQsIDApO1xuICAgIHZhciBwb3MgPSB7IHg6IG9wdGlvbnMucG9zLngsIHk6IG9wdGlvbnMucG9zLnkgfTtcbiAgICB2YXIgdmlzaWJsZSA9IG9wdGlvbnMudmlzaWJsZTtcbiAgICB2YXIgZGl2aXNpb25zID0gb3B0aW9ucy5kaXZpc2lvbnM7XG4gICAgdmFyIHRpbGVXaWR0aCA9IG9wdGlvbnMudGlsZVdpZHRoO1xuICAgIHZhciB0aWxlSGVpZ2h0ID0gb3B0aW9ucy50aWxlSGVpZ2h0O1xuICAgIHZhciB0aWxlU2l6ZSA9IG9wdGlvbnMudGlsZVdpZHRoO1xuICAgIHZhciBzY2FsZSA9IG9wdGlvbnMuc2NhbGU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGl2aXNpb25zOiBkaXZpc2lvbnMsXG4gICAgICAgIHBvczogcG9zLFxuICAgICAgICB0aWxlSGVpZ2h0OiB0aWxlSGVpZ2h0LFxuICAgICAgICB0aWxlczogdGlsZXMsXG4gICAgICAgIHRpbGVXaWR0aDogdGlsZVdpZHRoLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICB0aWxlU2l6ZTogdGlsZVNpemUsXG4gICAgICAgIHNjYWxlOiBzY2FsZVxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgZmlsbDogZmlsbCxcbiAgICBjb3B5VGlsZXM6IGNvcHlUaWxlc1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5rZXlib2FyZCA9IGV4cG9ydHMubW91c2UgPSB2b2lkIDA7XG52YXIgbW91c2VfMSA9IHJlcXVpcmUoXCIuL2lucHV0L21vdXNlXCIpO1xuZnVuY3Rpb24gY3JlYXRlKGNhbnZhcykge1xuICAgIHZhciBtb3VzZUlucHV0ID0gbW91c2VfMS5kZWZhdWx0LmNyZWF0ZShjYW52YXMpO1xuICAgIHZhciBzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW91c2VJbnB1dC5zdGFydCgpO1xuICAgIH07XG4gICAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW91c2VJbnB1dC51cGRhdGUoKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZUlucHV0LmdldFN0YXRlKCk7IH1cbiAgICB9O1xufVxuZXhwb3J0cy5tb3VzZSA9IHtcbiAgICBjcmVhdGU6IGNyZWF0ZVxufTtcbmV4cG9ydHMua2V5Ym9hcmQgPSB7XG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXlib2FyZCBpbnB1dCBzdHViJyk7XG4gICAgfVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNyZWF0ZShjYW52YXMpIHtcbiAgICB2YXIgZGVmYXVsdFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgbGVmdDogZGVmYXVsdEJ1dHRvblN0YXRlKCksXG4gICAgICAgICAgICB3aGVlbDogZGVmYXVsdFdoZWVsU3RhdGUoKSxcbiAgICAgICAgICAgIHJpZ2h0OiBkZWZhdWx0QnV0dG9uU3RhdGUoKVxuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGRlZmF1bHRCdXR0b25TdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlLFxuICAgICAgICAgICAganVzdFByZXNzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcmVsZWFzZWQ6IGZhbHNlLFxuICAgICAgICAgICAganVzdFJlbGVhc2VkOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGRlZmF1bHRXaGVlbFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnV0dG9uU3RhdGUgPSBkZWZhdWx0QnV0dG9uU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBidXR0b25TdGF0ZSksIHsgbW92ZWQ6IGZhbHNlLCBkaXJlY3Rpb246ICd1cCcgfSk7XG4gICAgfTtcbiAgICB2YXIgcHJldk1vdXNlID0gZGVmYXVsdFN0YXRlKCk7XG4gICAgdmFyIG1vdXNlID0gZGVmYXVsdFN0YXRlKCk7XG4gICAgdmFyIGNsb25lID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XG4gICAgfTtcbiAgICB2YXIgcmVsYXRpdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGJvdW5kcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSBib3VuZHMubGVmdCxcbiAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSBib3VuZHMudG9wXG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgbW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbmV3UG9zID0gcmVsYXRpdmUoZXZlbnQpO1xuICAgICAgICBtb3VzZS5wb3NpdGlvbiA9IG5ld1BvcztcbiAgICB9O1xuICAgIHZhciBkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtb3VzZS5sZWZ0LnByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIG1vdXNlLndoZWVsLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIG1vdXNlLnJpZ2h0LnByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgdXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG1vdXNlLmxlZnQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIG1vdXNlLndoZWVsLnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBtb3VzZS5yaWdodC5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciB3aGVlbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBtb3VzZS53aGVlbC5tb3ZlZCA9IGV2ZW50LmRlbHRhWSA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgaWYgKG1vdXNlLndoZWVsLm1vdmVkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgbW91c2Uud2hlZWwuZGlyZWN0aW9uID0gZXZlbnQuZGVsdGFZIDwgMCA/ICd1cCcgOiAnZG93bic7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vdXNlLndoZWVsLm1vdmVkID0gZmFsc2U7XG4gICAgICAgIHByZXZNb3VzZSA9IGNsb25lKG1vdXNlKTtcbiAgICB9O1xuICAgIHZhciBzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRvd24pO1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgd2hlZWwpO1xuICAgICAgICAvLyBkZWZhdWx0IG1vdXNlIHBvc2l0aW9uLCBjZW50ZXIgb2Ygc2NyZWVuXG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbW91c2U7IH0sXG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgdXBkYXRlOiB1cGRhdGVcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0geyBjcmVhdGU6IGNyZWF0ZSB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBjcmVhdGUocG9zaXRpb24sIHNpemUsIHJvdGF0aW9uLCB0ZXh0dXJlLCBjb2xvdXIpIHtcbiAgICBpZiAocm90YXRpb24gPT09IHZvaWQgMCkgeyByb3RhdGlvbiA9IDA7IH1cbiAgICBpZiAoY29sb3VyID09PSB2b2lkIDApIHsgY29sb3VyID0gJyNmZmZmZmYnOyB9XG4gICAgdmFyIGZyYW1lcyA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgIHRleHR1cmU6IHRleHR1cmUsXG4gICAgICAgIGNvbG91cjogY29sb3VyLFxuICAgICAgICBmcmFtZTogMCxcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBzZXRGcmFtZXM6IGZ1bmN0aW9uIChuZXdGcmFtZXMpIHtcbiAgICAgICAgICAgIGZyYW1lcyA9IG5ld0ZyYW1lcztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRnJhbWU6IGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgICAgZnJhbWVzLnB1c2goZnJhbWUpO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgZnJhbWVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYW1lcztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHJvdGF0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvdGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgcm90YXRpb24oZGVncmVlcykge1xuICAgICAgICAgICAgcm90YXRpb24gPSBkZWdyZWVzID49IDM2MCA/IDM2MCAtIGRlZ3JlZXMgOiBkZWdyZWVzO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBjcmVhdGU6IGNyZWF0ZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkID0gZXhwb3J0cy5zYXZlID0gdm9pZCAwO1xuZnVuY3Rpb24gc2F2ZSgpIHtcbn1cbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5mdW5jdGlvbiBsb2FkKCkge1xufVxuZXhwb3J0cy5sb2FkID0gbG9hZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50b0RlZ3JlZXMgPSBleHBvcnRzLnRvUmFkaWFucyA9IHZvaWQgMDtcbmZ1bmN0aW9uIHRvUmFkaWFucyhkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7XG59XG5leHBvcnRzLnRvUmFkaWFucyA9IHRvUmFkaWFucztcbmZ1bmN0aW9uIHRvRGVncmVlcyhyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAoMTgwIC8gTWF0aC5QSSk7XG59XG5leHBvcnRzLnRvRGVncmVlcyA9IHRvRGVncmVlcztcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB0b1JhZGlhbnM6IHRvUmFkaWFucyxcbiAgICB0b0RlZ3JlZXM6IHRvRGVncmVlc1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gY3JlYXRlKF94LCBfeSkge1xuICAgIHZhciB4ID0gX3g7XG4gICAgdmFyIHkgPSBfeTtcbiAgICB2YXIgYWRkID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgeCArPSB2Lng7XG4gICAgICAgIHkgKz0gdi55O1xuICAgIH07XG4gICAgdmFyIGFkZFNjYWxhciA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHggKz0gcztcbiAgICAgICAgeSArPSBzO1xuICAgIH07XG4gICAgdmFyIGRpdmlkZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHggLz0gdi54O1xuICAgICAgICB5IC89IHYueTtcbiAgICB9O1xuICAgIHZhciBkaXZpZGVTY2FsYXIgPSBmdW5jdGlvbiAocykge1xuICAgICAgICB4IC89IHM7XG4gICAgICAgIHkgLz0gcztcbiAgICB9O1xuICAgIHZhciBkb3QgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4geCAqIHYueCArIHkgKiB2Lnk7XG4gICAgfTtcbiAgICB2YXIgZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH07XG4gICAgdmFyIGdldE9wcG9zaXRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZSgtdi54LCAtdi55KTtcbiAgICB9O1xuICAgIHZhciBnZXRQZXJwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlKC15LCB4KTtcbiAgICB9O1xuICAgIHZhciBpc0VxdWFsVG8gPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4geCA9PSB2LnggJiYgeSA9PSB2Lnk7XG4gICAgfTtcbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB4ICo9IHYueDtcbiAgICAgICAgeSAqPSB2Lnk7XG4gICAgfTtcbiAgICB2YXIgbXVsdGlwbHlTY2FsYXIgPSBmdW5jdGlvbiAocykge1xuICAgICAgICB4ICo9IHM7XG4gICAgICAgIHkgKj0gcztcbiAgICB9O1xuICAgIHZhciBub3JtYWxpc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsID0gZ2V0TGVuZ3RoKCk7XG4gICAgICAgIHggPSB4IC8gbDtcbiAgICAgICAgeSA9IHkgLyBsO1xuICAgIH07XG4gICAgdmFyIHNldExlbmd0aCA9IGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIG5vcm1hbGlzZSgpO1xuICAgICAgICBtdWx0aXBseVNjYWxhcihsKTtcbiAgICB9O1xuICAgIHZhciBzdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHggLT0gdi54O1xuICAgICAgICB5IC09IHYueTtcbiAgICB9O1xuICAgIHZhciBzdWJ0cmFjdFNjYWxhciA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHggLT0gcztcbiAgICAgICAgeSAtPSBzO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkOiBhZGQsXG4gICAgICAgIGFkZFNjYWxhcjogYWRkU2NhbGFyLFxuICAgICAgICBjbG9uZTogY2xvbmUsXG4gICAgICAgIGRpdmlkZTogZGl2aWRlLFxuICAgICAgICBkaXZpZGVTY2FsYXI6IGRpdmlkZVNjYWxhcixcbiAgICAgICAgZG90OiBkb3QsXG4gICAgICAgIGdldExlbmd0aDogZ2V0TGVuZ3RoLFxuICAgICAgICBnZXRPcHBvc2l0ZTogZ2V0T3Bwb3NpdGUsXG4gICAgICAgIGdldFBlcnA6IGdldFBlcnAsXG4gICAgICAgIGlzRXF1YWxUbzogaXNFcXVhbFRvLFxuICAgICAgICBtdWx0aXBseTogbXVsdGlwbHksXG4gICAgICAgIG11bHRpcGx5U2NhbGFyOiBtdWx0aXBseVNjYWxhcixcbiAgICAgICAgbm9ybWFsaXNlOiBub3JtYWxpc2UsXG4gICAgICAgIHNldExlbmd0aDogc2V0TGVuZ3RoLFxuICAgICAgICBzdWJ0cmFjdDogc3VidHJhY3QsXG4gICAgICAgIHN1YnRyYWN0U2NhbGFyOiBzdWJ0cmFjdFNjYWxhcixcbiAgICAgICAgc2V0IHgoX3gpIHtcbiAgICAgICAgICAgIHggPSBfeDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHgoKSB7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHkoX3kpIHtcbiAgICAgICAgICAgIHkgPSBfeTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHkoKSB7XG4gICAgICAgICAgICByZXR1cm4geTtcbiAgICAgICAgfVxuICAgIH07XG59XG52YXIgZnJvbURlZ3JlZXMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgIHZhciByYWQgPSBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xuICAgIHJldHVybiBjcmVhdGUoTWF0aC5jb3MocmFkKSwgTWF0aC5zaW4ocmFkKSk7XG59O1xudmFyIGNsb25lID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gY3JlYXRlKHYueCwgdi55KTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY2xvbmU6IGNsb25lLFxuICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgIGZyb21EZWdyZWVzOiBmcm9tRGVncmVlc1xufTtcbiIsImNvbnN0IHsgdmVjMiB9ID0gcmVxdWlyZSgnQGVyaWt3YXRzb24vYnJhbWJsZScpXG5cbi8vIHdvcmtzXG5mdW5jdGlvbiBwb2ludFZzUmVjdCAocG9pbnQsIHJlY3QpIHtcbiAgcmV0dXJuIHBvaW50LnggPj0gcmVjdC54ICYmXG4gICAgcG9pbnQueSA+PSByZWN0LnkgJiZcbiAgICBwb2ludC54IDwgcmVjdC54ICsgcmVjdC53aWR0aCAmJlxuICAgIHBvaW50LnkgPCByZWN0LnkgKyByZWN0LmhlaWdodFxufVxuXG4vLyB3b3Jrc1xuZnVuY3Rpb24gcmVjdFZzUmVjdCAocmVjdEEsIHJlY3RCKSB7XG4gIHJldHVybiByZWN0QS54IDwgcmVjdEIueCArIHJlY3RCLndpZHRoICYmXG4gICAgcmVjdEEueCArIHJlY3RBLndpZHRoID4gcmVjdEIueCAmJlxuICAgIHJlY3RBLnkgPCByZWN0Qi55ICsgcmVjdEIuaGVpZ2h0ICYmXG4gICAgcmVjdEEueSArIHJlY3RBLmhlaWdodCA+IHJlY3RCLnlcbn1cblxuLy8gd29ya3Ncbi8vIHJldHVybnMgZmFsc2UgaWYgbm8gY29sbGlzaW9uIG9jY3VycmVkLCBvdGhlcndpc2UgaXQgcmV0dXJucyBhbiBvYmplY3Rcbi8vIGNvbnRhaW5pbmcgdGhlIHJlc3VsdHMgb2YgdGhlIGNvbGxpc2lvblxuLy8geyBuZWFyLCBmYXIsIG5vcm1hbCB9XG5mdW5jdGlvbiBsaW5lVnNSZWN0IChsaW5lLCByZWN0KSB7XG4gIGNvbnN0IGZyb20gPSB2ZWMyLmNyZWF0ZShsaW5lLmZyb20ueCwgbGluZS5mcm9tLnkpXG4gIGNvbnN0IHRvID0gdmVjMi5jcmVhdGUobGluZS50by54LCBsaW5lLnRvLnkpXG5cbiAgbGV0IGRpciA9IHZlYzIuY2xvbmUodG8pXG4gIGRpci5zdWJ0cmFjdChmcm9tKVxuXG4gIGNvbnN0IGludmRpciA9IHtcbiAgICB4OiAxLjAgLyBkaXIueCxcbiAgICB5OiAxLjAgLyBkaXIueVxuICB9XG5cbiAgbGV0IHRpbWVOZWFyID0ge1xuICAgIHg6IChyZWN0LnggLSBsaW5lLmZyb20ueCkgKiBpbnZkaXIueCxcbiAgICB5OiAocmVjdC55IC0gbGluZS5mcm9tLnkpICogaW52ZGlyLnlcbiAgfVxuXG4gIGxldCB0aW1lRmFyID0ge1xuICAgIHg6IChyZWN0LnggKyByZWN0LndpZHRoIC0gbGluZS5mcm9tLngpICogaW52ZGlyLngsXG4gICAgeTogKHJlY3QueSArIHJlY3QuaGVpZ2h0IC0gbGluZS5mcm9tLnkpICogaW52ZGlyLnlcbiAgfVxuXG4gIGlmIChpc05hTih0aW1lTmVhci54KSB8fCBpc05hTih0aW1lTmVhci55KSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aW1lTmVhciBpcyBOYU4nLCB0aW1lTmVhci54LCB0aW1lTmVhci55KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKGlzTmFOKHRpbWVGYXIueCkgfHwgaXNOYU4odGltZUZhci55KSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aW1lRmFyIGlzIE5hTicsIHRpbWVGYXIueCwgdGltZUZhci55KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gc29ydCB0aGUgZGlzdGFuY2VzXG4gIGxldCB0ZW1wTmVhciA9IHsgLi4udGltZU5lYXIgfVxuICBsZXQgdGVtcEZhciA9IHsgLi4udGltZUZhciB9XG5cbiAgaWYgKHRlbXBOZWFyLnggPiB0ZW1wRmFyLngpIHtcbiAgICB0aW1lTmVhci54ID0gdGVtcEZhci54XG4gICAgdGltZUZhci54ID0gdGVtcE5lYXIueFxuICB9XG5cbiAgdGVtcE5lYXIgPSB7IC4uLnRpbWVOZWFyIH1cbiAgdGVtcEZhciA9IHsgLi4udGltZUZhciB9XG5cbiAgaWYgKHRlbXBOZWFyLnkgPiB0ZW1wRmFyLnkpIHtcbiAgICB0aW1lTmVhci55ID0gdGVtcEZhci55XG4gICAgdGltZUZhci55ID0gdGVtcE5lYXIueVxuICB9XG5cbiAgLy8gbm8gY29sbGlzaW9uIGRldGVjdGVkXG4gIGlmICh0aW1lTmVhci54ID4gdGltZUZhci55IHx8IHRpbWVOZWFyLnkgPiB0aW1lRmFyLngpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGhpdE5lYXIgPSBNYXRoLm1heCh0aW1lTmVhci54LCB0aW1lTmVhci55KVxuICBjb25zdCBoaXRGYXIgPSBNYXRoLm1pbih0aW1lRmFyLngsIHRpbWVGYXIueSlcblxuICAvLyBhYm9ydCBpZiByYXkgaXMgZmFjaW5nIGF3YXkgZnJvbSBvdXIgb2JqZWN0XG4gIGlmIChoaXRGYXIgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBhYm9ydCBpZiB0aGUgcmF5IGRvZXMgbm90IHJlYWNoIHRoZSBvYmplY3RcbiAgaWYgKGhpdE5lYXIgPiAxKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBhYm9ydCBpZiB0aGUgcmF5J3MgZmlyc3QgY29sbGlzaW9uIGlzIGJlaGluZCB1c1xuICBpZiAoaGl0TmVhciA8IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGNvbnN0cnVjdCBhIHZlY3RvciB0byBob2xkIHRoZSBub3JtYWwgb2YgdGhlIHN1cmZhY2VcbiAgbGV0IG5vcm1hbCA9IHZlYzIuY3JlYXRlKDAsIDApXG5cbiAgaWYgKHRpbWVOZWFyLnggPiB0aW1lTmVhci55KSB7XG4gICAgaWYgKGludmRpci54IDwgMCkge1xuICAgICAgbm9ybWFsLnggPSAxXG4gICAgICBub3JtYWwueSA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgbm9ybWFsLnggPSAtMVxuICAgICAgbm9ybWFsLnkgPSAwXG4gICAgfVxuICB9IGVsc2UgaWYgKHRpbWVOZWFyLnggPCB0aW1lTmVhci55KSB7XG4gICAgaWYgKGludmRpci55IDwgMCkge1xuICAgICAgbm9ybWFsLnggPSAwXG4gICAgICBub3JtYWwueSA9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgbm9ybWFsLnggPSAwXG4gICAgICBub3JtYWwueSA9IC0xXG4gICAgfVxuICB9IGVsc2UgaWYgKHRpbWVOZWFyLnggPT09IHRpbWVOZWFyLnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhpbnZkaXIueCwgaW52ZGlyLnkpXG4gICAgaWYgKGludmRpci54IDwgMCAmJiBpbnZkaXIueSA8IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0bCcpXG4gICAgICBub3JtYWwueCA9IC0xXG4gICAgICBub3JtYWwueSA9IDFcbiAgICB9IGVsc2UgaWYgKGludmRpci54ID4gMCAmJiBpbnZkaXIueSA8IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0cicpXG4gICAgICBub3JtYWwueCA9IDFcbiAgICAgIG5vcm1hbC55ID0gMVxuICAgIH0gZWxzZSBpZiAoaW52ZGlyLnggPCAwICYmIGludmRpci55ID4gMCkge1xuICAgICAgY29uc29sZS5sb2coJ2JsJylcbiAgICAgIG5vcm1hbC54ID0gLTFcbiAgICAgIG5vcm1hbC55ID0gLTFcbiAgICB9IGVsc2UgaWYgKGludmRpci54ID4gMCAmJiBpbnZkaXIueSA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdicicpXG4gICAgICBub3JtYWwueCA9IDFcbiAgICAgIG5vcm1hbC55ID0gLTFcbiAgICB9XG4gIH1cblxuICAvLyBjb2xsaWRlZCB3aXRoIHRoZSBvYmplY3QhXG4gIHJldHVybiB7XG4gICAgbm9ybWFsLFxuICAgIG5lYXI6IHZlYzIuY3JlYXRlKFxuICAgICAgZnJvbS54ICsgaGl0TmVhciAqIGRpci54LFxuICAgICAgZnJvbS55ICsgaGl0TmVhciAqIGRpci55XG4gICAgKSxcbiAgICBmYXI6IHZlYzIuY3JlYXRlKFxuICAgICAgZnJvbS54ICsgaGl0RmFyICogZGlyLngsXG4gICAgICBmcm9tLnkgKyBoaXRGYXIgKiBkaXIueVxuICAgICksXG4gICAgdGltZU9mQ29sbGlzaW9uOiBoaXROZWFyXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxpbmVWc1JlY3QsXG4gIHJlY3RWc1JlY3QsXG4gIHBvaW50VnNSZWN0XG59IiwiY29uc3QgeyBnYW1lLCB2ZWMyLCBtb3VzZSB9ID0gcmVxdWlyZSgnQGVyaWt3YXRzb24vYnJhbWJsZScpXG5jb25zdCB7IGxpbmVWc1JlY3QgfSA9IHJlcXVpcmUoJy4vYWFiYicpXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKVxuY29uc3QgZyA9IGdhbWUuY3JlYXRlKClcbmNvbnN0IG0gPSBtb3VzZS5jcmVhdGUoKVxuXG5jb25zdCBsZXZlbCA9IFtcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuICBbMSwgMCwgMCwgMiwgMiwgMCwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDIsIDIsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxXSxcbiAgWzEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDIsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDEsIDAsIDIsIDAsIDAsIDIsIDAsIDFdLFxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG5dXG5cbmNvbnN0IGNhbnZhc1NpemUgPSB7XG4gIHdpZHRoOiAxMjgwLFxuICBoZWlnaHQ6IDcyMFxufVxuXG5jb25zdCB0aWxlU2l6ZSA9IDI0XG5cbmNvbnN0IGNvbHVtbldpZHRoID0gOFxuY29uc3Qgc2NyZWVuSW5Db2x1bW5zID0gTWF0aC5jZWlsKGNhbnZhc1NpemUud2lkdGggLyBjb2x1bW5XaWR0aClcblxuY29uc3QgaGVybyA9IHtcbiAgcG9zaXRpb246IHZlYzIuY3JlYXRlKFxuICAgICh0aWxlU2l6ZSAqIChsZXZlbFswXS5sZW5ndGggLyAyKSksIFxuICAgIHRpbGVTaXplICogKGxldmVsLmxlbmd0aCAvIDIpXG4gICksXG4gIGFuZ2xlOiAtOTBcbn1cblxuZnVuY3Rpb24gc2hhZGVDb2xvcihjb2xvciwgcGVyY2VudCkge1xuICBsZXQgUiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLDMpLDE2KTtcbiAgbGV0IEcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMyw1KSwxNik7XG4gIGxldCBCID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsNyksMTYpO1xuXG4gIFIgPSBwYXJzZUludChSICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcbiAgRyA9IHBhcnNlSW50KEcgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICBCID0gcGFyc2VJbnQoQiAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG5cbiAgUiA9IChSIDwgMjU1KSA/IFIgOiAyNTU7ICBcbiAgRyA9IChHIDwgMjU1KSA/IEcgOiAyNTU7ICBcbiAgQiA9IChCIDwgMjU1KSA/IEIgOiAyNTU7ICBcblxuICBsZXQgUlIgPSAoKFIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrUi50b1N0cmluZygxNik6Ui50b1N0cmluZygxNikpO1xuICBsZXQgR0cgPSAoKEcudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrRy50b1N0cmluZygxNik6Ry50b1N0cmluZygxNikpO1xuICBsZXQgQkIgPSAoKEIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrQi50b1N0cmluZygxNik6Qi50b1N0cmluZygxNikpO1xuXG4gIHJldHVybiBgIyR7UlJ9JHtHR30ke0JCfWA7XG59XG5cbmZ1bmN0aW9uIHRvUmFkaWFucyAoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKVxufVxuXG5mdW5jdGlvbiByYW5nZSAoZnJvbSwgdG8sIGxlbmd0aCkge1xuICBjb25zdCByYW5nZSA9IE1hdGguYWJzKGZyb20gLSB0bylcbiAgY29uc3Qgc3RlcCA9IHJhbmdlIC8gKGxlbmd0aCAtIDEpXG4gIFxuICBsZXQgcmVzdWx0ID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goZnJvbSArIChpICogc3RlcCkpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGdldFJheXMgKGZvdiwgaG9yaXpvbiwgY29sdW1ucykge1xuICBsZXQgcmVzdWx0ID0gW11cblxuICBsZXQgZnJvbSA9IC0oZm92IC8gMilcbiAgbGV0IHRvID0gZm92IC8gMlxuXG4gIGxldCBzdGVwcyA9IHJhbmdlKGZyb20sIHRvLCBzY3JlZW5JbkNvbHVtbnMpXG5cbiAgcmV0dXJuIHN0ZXBzLm1hcChhbmdsZSA9PiB7XG4gICAgY29uc3QgdGhldGEgPSB0b1JhZGlhbnMoaGVyby5hbmdsZSArIGFuZ2xlKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZyb206IGhlcm8ucG9zaXRpb24sXG4gICAgICB0bzoge1xuICAgICAgICB4OiBoZXJvLnBvc2l0aW9uLnggKyBob3Jpem9uICogTWF0aC5jb3ModGhldGEpLFxuICAgICAgICB5OiBoZXJvLnBvc2l0aW9uLnkgKyBob3Jpem9uICogTWF0aC5zaW4odGhldGEpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5nLmF0dGFjaFRvKGNvbnRhaW5lcilcbmcuc2V0U2l6ZSgxMjgwLCA3MjApXG5cbmxldCBjb2xsaXNpb25zID0gW11cblxuZy5zZXRVcGRhdGUoZHQgPT4ge1xuICBoZXJvLmFuZ2xlICs9IDFcblxuICBjb2xsaXNpb25zID0gW11cblxuICBjb25zdCByYXlzID0gZ2V0UmF5cyg5MCwgMTUwLCBzY3JlZW5JbkNvbHVtbnMpXG5cbiAgcmF5cy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgIGNvbnN0IGNvbGxpc2lvbkNhbmRpZGF0ZXMgPSBbXVxuXG4gICAgbGV2ZWwuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgICBsZXZlbFt5XS5mb3JFYWNoKChjb2wsIHgpID0+IHtcbiAgICAgICAgaWYgKGxldmVsW3ldW3hdICE9PSAwKSB7XG4gICAgICAgICAgY29sbGlzaW9uQ2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHg6IHggKiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHk6IHkgKiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHdpZHRoOiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogdGlsZVNpemUsXG4gICAgICAgICAgICB0eXBlOiBsZXZlbFt5XVt4XVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbGxpc2lvbiA9IGNvbGxpc2lvbkNhbmRpZGF0ZXNcbiAgICAgIC5tYXAocmVjdCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmF5OiBsaW5lLFxuICAgICAgICAgIHJlY3QsIFxuICAgICAgICAgIGNvbGxpc2lvbjogbGluZVZzUmVjdChsaW5lLCByZWN0KSBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoY29sbGlzaW9uID0+IGNvbGxpc2lvbi5jb2xsaXNpb24gIT09IGZhbHNlKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuY29sbGlzaW9uLnRpbWVPZkNvbGxpc2lvbiA+IGIuY29sbGlzaW9uLnRpbWVPZkNvbGxpc2lvbilbMF1cblxuICAgIGNvbGxpc2lvbnMucHVzaChjb2xsaXNpb24pXG4gIH0pXG59KVxuXG5nLnNldFJlbmRlcihnZnggPT4ge1xuICBnZnguY2xlYXIoJyMyMzIzMjMnKVxuIFxuICAvLyBkcmF3IGluIDNkXG4gIFxuICBjb2xsaXNpb25zLmZvckVhY2goKHsgY29sbGlzaW9uLCByZWN0LCByYXkgfSwgaSkgPT4ge1xuICAgIGlmICghY29sbGlzaW9uKSB7IHJldHVybiB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhyYXkpXG4gICAgLy8gZGVidWdcblxuICAgIGNvbnN0IHJheUFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgIHJheS50by55IC0gcmF5LmZyb20ueSxcbiAgICAgIHJheS50by54IC0gcmF5LmZyb20ueFxuICAgIClcblxuICAgIGNvbnN0IGNvcnJlY3RlZEFuZ2xlID0gcmF5QW5nbGUgLSB0b1JhZGlhbnMoaGVyby5hbmdsZSlcbiAgICBjb25zdCBuZXdEaXN0YW5jZSA9IGNvbGxpc2lvbi50aW1lT2ZDb2xsaXNpb24gKiBNYXRoLmNvcyhjb3JyZWN0ZWRBbmdsZSlcblxuICAgIC8vIGNvbnNvbGUubG9nKHJheUFuZ2xlLCBjb2xsaXNpb24udGltZU9mQ29sbGlzaW9uLCBuZXdEaXN0YW5jZSlcbiAgICAvLyBkZWJ1Z1xuXG4gICAgdmFyIGhlaWdodCA9ICgwLjE2ICogY2FudmFzU2l6ZS5oZWlnaHQpIC8gbmV3RGlzdGFuY2VcbiAgICBsZXQgY29sb3VyID0gKHJlY3QudHlwZSA9PT0gMikgPyAnIzgwMDA4MCcgOiAnI0ZGRUYwMCdcblxuICAgIGNvbnN0IHNoYWRlID0gTWF0aC5yb3VuZChuZXdEaXN0YW5jZSAqIDEwMClcbiAgICBjb2xvdXIgPSBzaGFkZUNvbG9yKGNvbG91ciwgNTAgLSBzaGFkZSlcblxuICAgIGdmeC5yZWN0KFxuICAgICAgeyB4OiBpICogY29sdW1uV2lkdGgsIHk6IChjYW52YXNTaXplLmhlaWdodCAtIGhlaWdodCkgLyAyIH0sXG4gICAgICB7IHdpZHRoOiBjb2x1bW5XaWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSxcbiAgICAgIHsgZmlsbDogeyBjb2xvdXIgfSB9XG4gICAgKVxuICB9KVxuXG4gIC8vIGRyYXcgdGhlIG1pbmltYXBcbiAgZ2Z4LnJlY3QoXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB3aWR0aDogbGV2ZWxbMF0ubGVuZ3RoICogdGlsZVNpemUsIGhlaWdodDogbGV2ZWwubGVuZ3RoICogdGlsZVNpemUgfSxcbiAgICB7IGZpbGw6IHsgY29sb3VyOiAnYmxhY2snIH0gfVxuICApXG5cbiAgbGV2ZWwuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNvbHVtbiwgeCkgPT4ge1xuICAgICAgc3dpdGNoIChsZXZlbFt5XVt4XSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZ2Z4LnNxdWFyZShcbiAgICAgICAgICAgIHsgeDogeCAqIHRpbGVTaXplLCB5OiB5ICogdGlsZVNpemUgfSwgXG4gICAgICAgICAgICB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHsgZmlsbDogeyBjb2xvdXI6ICcjRkZFRjAwJyB9IH1cbiAgICAgICAgICApXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIDI6IFxuICAgICAgICAgIGdmeC5zcXVhcmUoXG4gICAgICAgICAgICB7IHg6IHggKiB0aWxlU2l6ZSwgeTogeSAqIHRpbGVTaXplIH0sIFxuICAgICAgICAgICAgdGlsZVNpemUsXG4gICAgICAgICAgICB7IGZpbGw6IHsgY29sb3VyOiAnIzgwMDA4MCcgfSB9XG4gICAgICAgICAgKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICAgIH0gICAgICBcbiAgICB9KVxuICB9KVxuXG5cbiAgLy8gZHJhdyB0aGUgY29sbGlzaW9ucyBcbiAgY29sbGlzaW9ucy5mb3JFYWNoKGNvbGxpc2lvbiA9PiB7XG4gICAgaWYgKCFjb2xsaXNpb24pIHsgcmV0dXJuIH1cblxuICAgIGNvbnN0IHJlY3QgPSBjb2xsaXNpb24ucmVjdFxuICAgIGNvbGxpc2lvbiA9IGNvbGxpc2lvbi5jb2xsaXNpb25cblxuICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgIGdmeC5saW5lKGhlcm8ucG9zaXRpb24sIGNvbGxpc2lvbi5uZWFyLCB7IGNvbG91cjogJ3JlZCcgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ2Z4LmxpbmUoaGVyby5wb3NpdGlvbiwgY29sbGlzaW9uLnRvLCB7IGNvbG91cjogJ3doaXRlJyB9KVxuICAgIH1cbiAgfSlcbiAgXG4gIC8vIGRyYXcgdGhlIGhlcm8gXG4gIGdmeC5jaXJjbGUoaGVyby5wb3NpdGlvbiwgOClcblxuICAvLyB4OiBoZXJvLnBvc2l0aW9uLnggKyBob3Jpem9uICogTWF0aC5jb3ModGhldGEpLFxuICAvLyB5OiBoZXJvLnBvc2l0aW9uLnkgKyBob3Jpem9uICogTWF0aC5zaW4odGhldGEpXG5cbiAgZ2Z4LmxpbmUoXG4gICAgaGVyby5wb3NpdGlvbiwgXG4gICAgeyBcbiAgICAgIHg6IGhlcm8ucG9zaXRpb24ueCArIDE1ICogTWF0aC5jb3ModG9SYWRpYW5zKGhlcm8uYW5nbGUpKSwgXG4gICAgICB5OiBoZXJvLnBvc2l0aW9uLnkgKyAxNSAqIE1hdGguc2luKHRvUmFkaWFucyhoZXJvLmFuZ2xlKSlcbiAgICB9LFxuICAgIHsgY29sb3VyOiAnd2hpdGUnIH1cbiAgKVxufSlcblxuZy5zdGFydCgpIl0sInNvdXJjZVJvb3QiOiIifQ==