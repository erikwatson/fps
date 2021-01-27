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
var columnWidth = 10;
var screenInColumns = Math.ceil(canvasSize.width / columnWidth);
var hero = {
  position: vec2.create(32, 32)
};

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
    var theta = toRadians(angle);
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
  hero.position.y++;
  hero.position.x++;
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

  collisions.forEach(function (collision, i) {
    if (!collision) {
      return;
    }

    var rect = collision.rect;
    collision = collision.collision;
    var height = canvasSize.height - canvasSize.height * collision.timeOfCollision;
    var colour = rect.type === 2 ? 'purple' : 'yellow';
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
              colour: 'yellow'
            }
          });
          break;

        case 2:
          gfx.square({
            x: x * tileSize,
            y: y * tileSize
          }, tileSize, {
            fill: {
              colour: 'purple'
            }
          });
          break;

        default:
          break;
      }
    });
  }); // draw the hero 

  gfx.circle(hero.position, 8); // draw the collisions 

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
  });
});
g.start();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9icmFtYmxlLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi4vQnJhbWJsZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi4vQnJhbWJsZS9kaXN0L2lucHV0LmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvdXRpbHMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvdmVjMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWFiYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidmVjMiIsInBvaW50VnNSZWN0IiwicG9pbnQiLCJyZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJlY3RWc1JlY3QiLCJyZWN0QSIsInJlY3RCIiwibGluZVZzUmVjdCIsImxpbmUiLCJmcm9tIiwiY3JlYXRlIiwidG8iLCJkaXIiLCJjbG9uZSIsInN1YnRyYWN0IiwiaW52ZGlyIiwidGltZU5lYXIiLCJ0aW1lRmFyIiwiaXNOYU4iLCJ0ZW1wTmVhciIsInRlbXBGYXIiLCJoaXROZWFyIiwiTWF0aCIsIm1heCIsImhpdEZhciIsIm1pbiIsIm5vcm1hbCIsImNvbnNvbGUiLCJsb2ciLCJuZWFyIiwiZmFyIiwidGltZU9mQ29sbGlzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImdhbWUiLCJtb3VzZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImciLCJtIiwibGV2ZWwiLCJjYW52YXNTaXplIiwidGlsZVNpemUiLCJjb2x1bW5XaWR0aCIsInNjcmVlbkluQ29sdW1ucyIsImNlaWwiLCJoZXJvIiwicG9zaXRpb24iLCJ0b1JhZGlhbnMiLCJkZWdyZWVzIiwiUEkiLCJyYW5nZSIsImxlbmd0aCIsImFicyIsInN0ZXAiLCJyZXN1bHQiLCJpIiwicHVzaCIsImdldFJheXMiLCJmb3YiLCJob3Jpem9uIiwiY29sdW1ucyIsInN0ZXBzIiwibWFwIiwiYW5nbGUiLCJ0aGV0YSIsImNvcyIsInNpbiIsImF0dGFjaFRvIiwic2V0U2l6ZSIsImNvbGxpc2lvbnMiLCJzZXRVcGRhdGUiLCJkdCIsInJheXMiLCJmb3JFYWNoIiwiY29sbGlzaW9uQ2FuZGlkYXRlcyIsInJvdyIsImNvbCIsInR5cGUiLCJjb2xsaXNpb24iLCJmaWx0ZXIiLCJzb3J0IiwiYSIsImIiLCJzZXRSZW5kZXIiLCJnZngiLCJjbGVhciIsImNvbG91ciIsImZpbGwiLCJjb2x1bW4iLCJzcXVhcmUiLCJjaXJjbGUiLCJzdGFydCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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QUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQURZLEVBRVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUZZLEVBR1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUhZLEVBSVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUpZLEVBS1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUxZLEVBTVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQU5ZLEVBT1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQVBZLEVBUVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6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RixFQUVFQSxRQUZGLEVBR0U7QUFBRThDLGdCQUFJLEVBQUU7QUFBRUQsb0JBQU0sRUFBRTtBQUFWO0FBQVIsV0FIRjtBQUtBOztBQUVGO0FBQVM7QUFqQlg7QUFtQkQsS0FwQkQ7QUFxQkQsR0F0QkQsRUE1QmlCLENBb0RqQjs7QUFDQUYsS0FBRyxDQUFDTSxNQUFKLENBQVc3QyxJQUFJLENBQUNDLFFBQWhCLEVBQTBCLENBQTFCLEVBckRpQixDQXVEakI7O0FBQ0F1QixZQUFVLENBQUNJLE9BQVgsQ0FBbUIsVUFBQUssU0FBUyxFQUFJO0FBQzlCLFFBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUFFO0FBQVE7O0FBRTFCLFFBQU1qRixJQUFJLEdBQUdpRixTQUFTLENBQUNqRixJQUF2QjtBQUNBaUYsYUFBUyxHQUFHQSxTQUFTLENBQUNBLFNBQXRCOztBQUVBLFFBQUlBLFNBQUosRUFBZTtBQUNiTSxTQUFHLENBQUM5RSxJQUFKLENBQVN1QyxJQUFJLENBQUNDLFFBQWQsRUFBd0JnQyxTQUFTLENBQUNuRCxJQUFsQyxFQUF3QztBQUFFMkQsY0FBTSxFQUFFO0FBQVYsT0FBeEM7QUFDRCxLQUZELE1BRU87QUFDTEYsU0FBRyxDQUFDOUUsSUFBSixDQUFTdUMsSUFBSSxDQUFDQyxRQUFkLEVBQXdCZ0MsU0FBUyxDQUFDckUsRUFBbEMsRUFBc0M7QUFBRTZFLGNBQU0sRUFBRTtBQUFWLE9BQXRDO0FBQ0Q7QUFDRixHQVhEO0FBWUQsQ0FwRUQ7QUFzRUFqRCxDQUFDLENBQUNzRCxLQUFGLEciLCJmaWxlIjoiZnBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkQWxsVGVycmFpbiA9IGV4cG9ydHMubG9hZFRlcnJhaW4gPSBleHBvcnRzLmxvYWRBbGxJbWFnZXMgPSBleHBvcnRzLmxvYWRJbWFnZSA9IGV4cG9ydHMubG9hZEFsbFRleHQgPSBleHBvcnRzLmxvYWRTdHJpbmcgPSB2b2lkIDA7XG5mdW5jdGlvbiBsb2FkU3RyaW5nKHBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmVqZWN0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcGF0aCk7XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkU3RyaW5nID0gbG9hZFN0cmluZztcbmZ1bmN0aW9uIGxvYWRBbGxUZXh0KHBhdGhzKSB7XG4gICAgaWYgKHBhdGhzID09PSB2b2lkIDApIHsgcGF0aHMgPSBbXTsgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwYXRocy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGxvYWRTdHJpbmcoeCk7IH0pKTtcbn1cbmV4cG9ydHMubG9hZEFsbFRleHQgPSBsb2FkQWxsVGV4dDtcbmZ1bmN0aW9uIGxvYWRJbWFnZShwYXRoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXNvbHZlKGltZyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltZy5zcmMgPSBwYXRoO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkSW1hZ2UgPSBsb2FkSW1hZ2U7XG5mdW5jdGlvbiBsb2FkQWxsSW1hZ2VzKHBhdGhzKSB7XG4gICAgaWYgKHBhdGhzID09PSB2b2lkIDApIHsgcGF0aHMgPSBbXTsgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwYXRocy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGxvYWRJbWFnZSh4KTsgfSkpO1xufVxuZXhwb3J0cy5sb2FkQWxsSW1hZ2VzID0gbG9hZEFsbEltYWdlcztcbi8vIERvd25sb2FkcyBhIFRlcnJhaW4gZmlsZSxcbi8vIHJlYWRzIGl0LFxuLy8gZG93bmxvYWRzIHRoZSByZWxhdGVkIGltYWdlIGZpbGUsXG4vLyByZXR1cm5zIGEgbmV3IFRlcnJhaW4gb2JqZWN0XG5mdW5jdGlvbiBsb2FkVGVycmFpbihwYXRoKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uO1xuICAgIHJldHVybiBsb2FkU3RyaW5nKHBhdGgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShkZXNjcmlwdGlvbi5wYXRoKTtcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoaW1hZ2UpIHsgcmV0dXJuICh7XG4gICAgICAgIG5hbWU6IGRlc2NyaXB0aW9uLm5hbWUsXG4gICAgICAgIHR5cGU6IGRlc2NyaXB0aW9uLnR5cGUsXG4gICAgICAgIGltYWdlOiBpbWFnZSxcbiAgICAgICAgdGlsZXM6IGRlc2NyaXB0aW9uLnRpbGVzXG4gICAgfSk7IH0pO1xufVxuZXhwb3J0cy5sb2FkVGVycmFpbiA9IGxvYWRUZXJyYWluO1xuZnVuY3Rpb24gbG9hZEFsbFRlcnJhaW4ocGF0aHMpIHtcbiAgICBpZiAocGF0aHMgPT09IHZvaWQgMCkgeyBwYXRocyA9IFtdOyB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBhdGhzLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gbG9hZFRlcnJhaW4oeCk7IH0pKTtcbn1cbmV4cG9ydHMubG9hZEFsbFRlcnJhaW4gPSBsb2FkQWxsVGVycmFpbjtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBsb2FkSW1hZ2U6IGxvYWRJbWFnZSxcbiAgICBsb2FkU3RyaW5nOiBsb2FkU3RyaW5nLFxuICAgIGxvYWRBbGxUZXh0OiBsb2FkQWxsVGV4dCxcbiAgICBsb2FkQWxsSW1hZ2VzOiBsb2FkQWxsSW1hZ2VzLFxuICAgIGxvYWRUZXJyYWluOiBsb2FkVGVycmFpbixcbiAgICBsb2FkQWxsVGVycmFpbjogbG9hZEFsbFRlcnJhaW5cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhc3NldHNfMSA9IHJlcXVpcmUoXCIuL2Fzc2V0c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFzc2V0c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYXNzZXRzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBnYW1lXzEgPSByZXF1aXJlKFwiLi9nYW1lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2FtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2FtZV8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgZ3JpZF8xID0gcmVxdWlyZShcIi4vZ3JpZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdyaWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdyaWRfMS5kZWZhdWx0OyB9IH0pO1xudmFyIGdyYXBoaWNzXzEgPSByZXF1aXJlKFwiLi9ncmFwaGljc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdyYXBoaWNzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBncmFwaGljc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgaW5wdXRfMSA9IHJlcXVpcmUoXCIuL2lucHV0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwia2V5Ym9hcmRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlucHV0XzEua2V5Ym9hcmQ7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtb3VzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5wdXRfMS5tb3VzZTsgfSB9KTtcbnZhciBzcHJpdGVfMSA9IHJlcXVpcmUoXCIuL3Nwcml0ZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNwcml0ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3ByaXRlXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2ZWMyXzEgPSByZXF1aXJlKFwiLi92ZWMyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVjMlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmVjMl8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgc3RvcmFnZV8xID0gcmVxdWlyZShcIi4vc3RvcmFnZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNhdmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JhZ2VfMS5zYXZlOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibG9hZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmFnZV8xLmxvYWQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBncmFwaGljc18xID0gcmVxdWlyZShcIi4vZ3JhcGhpY3NcIik7XG52YXIgaW5wdXRfMSA9IHJlcXVpcmUoXCIuL2lucHV0XCIpO1xudmFyIGNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gJyMwMDAwMDAnO1xuICAgIHZhciB1cGRhdGUgPSBudWxsO1xuICAgIHZhciByZW5kZXIgPSBudWxsO1xuICAgIC8vIFRoZXNlIGFyZSB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgRGVsdGEgVGltZSBmb3IgdGhlIEZyYW1lXG4gICAgdmFyIHByZXZUaW1lID0gMDtcbiAgICB2YXIgZnJhbWVUaW1lID0gMDtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBncmFwaGljcyA9IGdyYXBoaWNzXzEuZGVmYXVsdC5jcmVhdGUoY3R4KTtcbiAgICBjYW52YXMuaWQgPSAnYnJhbWJsZS1nYW1lJztcbiAgICB2YXIgbW91c2VJbnB1dCA9IGlucHV0XzEubW91c2UuY3JlYXRlKGNhbnZhcyk7XG4gICAgdmFyIHNldEJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICB9O1xuICAgIHZhciBzZXRVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdXBkYXRlID0gY2FsbGJhY2s7XG4gICAgfTtcbiAgICB2YXIgc2V0UmVuZGVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJlbmRlciA9IGNhbGxiYWNrO1xuICAgIH07XG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgIHVwZGF0ZSgxIC8gNjApOyAvLyBUT0RPOiBmYWtlIGl0IGF0IDYwZnBzIGZvciBub3dcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcihiYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgcmVuZGVyKGdyYXBoaWNzKTtcbiAgICAgICAgfVxuICAgICAgICBtb3VzZUlucHV0LnVwZGF0ZSgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH07XG4gICAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb3VzZUlucHV0ID0gaW5wdXRfMS5tb3VzZS5jcmVhdGUoY2FudmFzKTtcbiAgICAgICAgbW91c2VJbnB1dC5zdGFydCgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH07XG4gICAgdmFyIHNldFNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9O1xuICAgIHZhciBhdHRhY2hUbyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICB9O1xuICAgIC8vIE5PVEU6IE11c3QgYmUgY2FsbGVkIEFGVEVSIGFueXRoaW5nIHRoYXQgd291bGQgY2hhbmdlIG91ciBjb250ZXh0LlxuICAgIC8vICAgICAgIHNldFNpemUgZm9yIGV4YW1wbGUuXG4gICAgdmFyIHNldFNtb290aGluZyA9IGZ1bmN0aW9uICh0bykge1xuICAgICAgICBpZiAodG8gPT09IHZvaWQgMCkgeyB0byA9IHRydWU7IH1cbiAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRvO1xuICAgIH07XG4gICAgdmFyIGRpc2FibGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRTaXplOiBzZXRTaXplLFxuICAgICAgICBzZXRVcGRhdGU6IHNldFVwZGF0ZSxcbiAgICAgICAgc2V0UmVuZGVyOiBzZXRSZW5kZXIsXG4gICAgICAgIHNldEJhY2tncm91bmRDb2xvcjogc2V0QmFja2dyb3VuZENvbG9yLFxuICAgICAgICBhdHRhY2hUbzogYXR0YWNoVG8sXG4gICAgICAgIGRpc2FibGVDb250ZXh0TWVudTogZGlzYWJsZUNvbnRleHRNZW51LFxuICAgICAgICBzZXRTbW9vdGhpbmc6IHNldFNtb290aGluZyxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBnZXRNb3VzZVN0YXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZUlucHV0LmdldFN0YXRlKCk7IH1cbiAgICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBjcmVhdGU6IGNyZWF0ZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG51bWJlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvbnVtYmVyXCIpO1xuZnVuY3Rpb24gY2xlYXIoY3R4LCBjb2xvdXIpIHtcbiAgICByZWN0KGN0eCwgeyB4OiAwLCB5OiAwIH0sIHsgd2lkdGg6IGN0eC5jYW52YXMud2lkdGgsIGhlaWdodDogY3R4LmNhbnZhcy5oZWlnaHQgfSwge1xuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBjb2xvdXI6IGNvbG91clxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzcXVhcmUoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRSZWN0OyB9XG4gICAgcmVjdChjdHgsIHsgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSB9LCB7IHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfSwgb3B0aW9ucyk7XG59XG52YXIgZGVmYXVsdFJlY3QgPSB7XG4gICAgZmlsbDoge1xuICAgICAgICBjb2xvdXI6ICcjZmZmZmZmJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgICB3aWR0aDogMixcbiAgICAgICAgY29sb3VyOiAnIzAwMDAwMCcsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG59O1xuZnVuY3Rpb24gcmVjdChjdHgsIHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdFJlY3Q7IH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wdGlvbnMuZmlsbC5jb2xvdXI7XG4gICAgICAgIGN0eC5maWxsUmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5saW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBvcHRpb25zLmxpbmUuY29sb3VyO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5saW5lLndpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgfVxufVxudmFyIGRlZmF1bHRMaW5lID0ge1xuICAgIHdpZHRoOiAyLFxuICAgIGNvbG91cjogJyMwMDAwMDAnXG59O1xuZnVuY3Rpb24gbGluZShjdHgsIGZyb20sIHRvLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdExpbmU7IH1cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBvcHRpb25zLmNvbG91cjtcbiAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyhmcm9tLngsIGZyb20ueSk7XG4gICAgY3R4LmxpbmVUbyh0by54LCB0by55KTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG52YXIgZGVmYXVsdENpcmNsZSA9IHtcbiAgICBmaWxsOiB7XG4gICAgICAgIGNvbG91cjogJyMwMDAwMDAnLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICAgIGNvbG91cjogJyNmZmZmZmYnLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB3aWR0aDogMlxuICAgIH1cbn07XG5mdW5jdGlvbiBjaXJjbGUoY3R4LCBwb3NpdGlvbiwgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdENpcmNsZTsgfVxuICAgIC8vIG5vdCBoYXBweSB3aXRoIHRoaXMgcmVhbGx5LCBtYWtlIGFub3RoZXIgZnVuY3Rpb24gaSB0aGlua1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWxsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gb3B0aW9ucy5maWxsLmNvbG91cjtcbiAgICB9XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IG9wdGlvbnMubGluZS5jb2xvdXI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IG9wdGlvbnMubGluZS53aWR0aDtcbiAgICBjdHguYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xufVxuZnVuY3Rpb24gaW1hZ2UoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgaW1hZ2UpIHtcbiAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG59XG5mdW5jdGlvbiBzdWJJbWFnZShjdHgsIHBvc2l0aW9uLCBzaXplLCBzdWJQb3NpdGlvbiwgc3ViU2l6ZSwgaW1hZ2UpIHtcbiAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBzdWJQb3NpdGlvbi54LCBzdWJQb3NpdGlvbi55LCBzdWJTaXplLndpZHRoLCBzdWJTaXplLmhlaWdodCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xufVxuZnVuY3Rpb24gc3ByaXRlKGN0eCwgc3ByaXRlKSB7XG4gICAgdmFyIGhhbGZXaWR0aCA9IHNwcml0ZS5zaXplLndpZHRoIC8gMjtcbiAgICB2YXIgaGFsZkhlaWdodCA9IHNwcml0ZS5zaXplLmhlaWdodCAvIDI7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHNwcml0ZS5wb3NpdGlvbi54ICsgaGFsZldpZHRoLCBzcHJpdGUucG9zaXRpb24ueSArIGhhbGZIZWlnaHQpO1xuICAgIGN0eC5yb3RhdGUobnVtYmVyXzEuZGVmYXVsdC50b1JhZGlhbnMoc3ByaXRlLnJvdGF0aW9uKSk7XG4gICAgaWYgKHNwcml0ZS5mcmFtZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBzdWJJbWFnZShjdHgsIHtcbiAgICAgICAgICAgIHg6IC1oYWxmV2lkdGgsXG4gICAgICAgICAgICB5OiAtaGFsZkhlaWdodFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB3aWR0aDogc3ByaXRlLnNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNwcml0ZS5zaXplLmhlaWdodFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB4OiBzcHJpdGUuZnJhbWVzW3Nwcml0ZS5mcmFtZV0ucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHNwcml0ZS5mcmFtZXNbc3ByaXRlLmZyYW1lXS5wb3NpdGlvbi55XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHdpZHRoOiBzcHJpdGUuZnJhbWVzW3Nwcml0ZS5mcmFtZV0uc2l6ZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc3ByaXRlLmZyYW1lc1tzcHJpdGUuZnJhbWVdLnNpemUuaGVpZ2h0XG4gICAgICAgIH0sIHNwcml0ZS50ZXh0dXJlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGltYWdlKGN0eCwge1xuICAgICAgICAgICAgeDogLWhhbGZXaWR0aCxcbiAgICAgICAgICAgIHk6IC1oYWxmSGVpZ2h0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHdpZHRoOiBzcHJpdGUuc2l6ZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc3ByaXRlLnNpemUuaGVpZ2h0XG4gICAgICAgIH0sIHNwcml0ZS50ZXh0dXJlKTtcbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbn1cbmZ1bmN0aW9uIHR4dChjdHgsIHBvc2l0aW9uLCB0ZXh0LCBjb2xvdXIsIGZvbnQpIHtcbiAgICBpZiAodGV4dCA9PT0gdm9pZCAwKSB7IHRleHQgPSAnJzsgfVxuICAgIGlmIChjb2xvdXIgPT09IHZvaWQgMCkgeyBjb2xvdXIgPSAnIzAwMDAwMCc7IH1cbiAgICBpZiAoZm9udCA9PT0gdm9pZCAwKSB7IGZvbnQgPSAnMTZwdCBzYW5zLXNlcmlmJzsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvdXI7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbn1cbmZ1bmN0aW9uIHRpbGUoY3R4LCBwb3NpdGlvbiwgdGlsZXNoZWV0LCBncmlkUG9zaXRpb24sIHRpbGVzaGVldFBvc2l0aW9uLCBzY2FsZSwgdGlsZVNpemUpIHtcbiAgICBzdWJJbWFnZShjdHgsIHtcbiAgICAgICAgeDogcG9zaXRpb24ueCArIHNjYWxlICogKGdyaWRQb3NpdGlvbi54ICogdGlsZVNpemUud2lkdGgpLFxuICAgICAgICB5OiBwb3NpdGlvbi55ICsgc2NhbGUgKiAoZ3JpZFBvc2l0aW9uLnkgKiB0aWxlU2l6ZS5oZWlnaHQpXG4gICAgfSwge1xuICAgICAgICB3aWR0aDogc2NhbGUgKiB0aWxlU2l6ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzY2FsZSAqIHRpbGVTaXplLmhlaWdodFxuICAgIH0sIHtcbiAgICAgICAgeDogdGlsZVNpemUud2lkdGggKiB0aWxlc2hlZXRQb3NpdGlvbi54LFxuICAgICAgICB5OiB0aWxlU2l6ZS5oZWlnaHQgKiB0aWxlc2hlZXRQb3NpdGlvbi55XG4gICAgfSwge1xuICAgICAgICB3aWR0aDogdGlsZVNpemUud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGlsZVNpemUuaGVpZ2h0XG4gICAgfSwgdGlsZXNoZWV0KTtcbn1cbi8vIHRpbGVncmlkOiBhIDJkIGFycmF5IG9mIG51bWJlcnMgcmVwcmVzZW50aW5nIHRlcnJhaW4gdHlwZXNcbi8vIHNwcml0ZXNoZWV0czogQW4gb2JqZWN0LCBlYWNoIGtleSBpcyB0aGUgdmFsdWUgdGhhdCByZXByZXNlbnRzIGEgdGlsZSBmcm9tIHRoaXMgc2hlZXRcbmZ1bmN0aW9uIHRpbGVzKGN0eCwgcG9zaXRpb24sIHRpbGVHcmlkLCBzcHJpdGVTaGVldHMsIHNjYWxlLCB0aWxlU2l6ZSkge1xuICAgIHZhciBkaXJWYWx1ZXMgPSB7XG4gICAgICAgIE5XOiAxLFxuICAgICAgICBOOiAyLFxuICAgICAgICBORTogNCxcbiAgICAgICAgRTogOCxcbiAgICAgICAgU0U6IDE2LFxuICAgICAgICBTOiAzMixcbiAgICAgICAgU1c6IDY0LFxuICAgICAgICBXOiAxMjhcbiAgICB9O1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgaWYgKHRpbGVHcmlkW3ldW3hdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJFQUwgVkFMVUVTXG4gICAgICAgICAgICB2YXIgdGwgPSB5ID4gMCA/IHRpbGVHcmlkW3kgLSAxXVt4IC0gMV0gOiAwO1xuICAgICAgICAgICAgdmFyIHRtID0geSA+IDAgPyB0aWxlR3JpZFt5IC0gMV1beF0gOiAwO1xuICAgICAgICAgICAgdmFyIHRyID0geSA+IDAgPyB0aWxlR3JpZFt5IC0gMV1beCArIDFdIDogMDtcbiAgICAgICAgICAgIHZhciBtbCA9IHRpbGVHcmlkW3ldW3ggLSAxXTtcbiAgICAgICAgICAgIHZhciBtID0gdGlsZUdyaWRbeV1beF07XG4gICAgICAgICAgICB2YXIgbXIgPSB0aWxlR3JpZFt5XVt4ICsgMV07XG4gICAgICAgICAgICB2YXIgYmwgPSB5IDwgdGlsZUdyaWQubGVuZ3RoIC0gMSA/IHRpbGVHcmlkW3kgKyAxXVt4IC0gMV0gOiAwO1xuICAgICAgICAgICAgdmFyIGJtID0geSA8IHRpbGVHcmlkLmxlbmd0aCAtIDEgPyB0aWxlR3JpZFt5ICsgMV1beF0gOiAwO1xuICAgICAgICAgICAgdmFyIGJyID0geSA8IHRpbGVHcmlkLmxlbmd0aCAtIDEgPyB0aWxlR3JpZFt5ICsgMV1beCArIDFdIDogMDtcbiAgICAgICAgICAgIC8vIEJJTkFSWSBWQUxVRVNcbiAgICAgICAgICAgIHZhciBuID0gbSA9PT0gdG0gPyAxIDogMDtcbiAgICAgICAgICAgIHZhciBlID0gbSA9PT0gbXIgPyAxIDogMDtcbiAgICAgICAgICAgIHZhciBzID0gbSA9PT0gYm0gPyAxIDogMDtcbiAgICAgICAgICAgIHZhciB3ID0gbSA9PT0gbWwgPyAxIDogMDtcbiAgICAgICAgICAgIHZhciBudyA9IG0gPT09IHRtICYmIG0gPT09IG1sID8gKG0gPT09IHRsID8gMSA6IDApIDogMDtcbiAgICAgICAgICAgIHZhciBuZSA9IG0gPT09IHRtICYmIG0gPT09IG1yID8gKG0gPT09IHRyID8gMSA6IDApIDogMDtcbiAgICAgICAgICAgIHZhciBzdyA9IG0gPT09IGJtICYmIG0gPT09IG1sID8gKG0gPT09IGJsID8gMSA6IDApIDogMDtcbiAgICAgICAgICAgIHZhciBzZSA9IG0gPT09IGJtICYmIG0gPT09IG1yID8gKG0gPT09IGJyID8gMSA6IDApIDogMDtcbiAgICAgICAgICAgIHZhciBzdW0gPSBkaXJWYWx1ZXMuTlcgKiBudyArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLk4gKiBuICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuTkUgKiBuZSArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLkUgKiBlICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuU0UgKiBzZSArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLlMgKiBzICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuU1cgKiBzdyArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLlcgKiB3O1xuICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGljaCBzaGVldCB3ZSdyZSBzdXBwb3NlZCB0byBiZSBkcmF3aW5nIGZyb21cbiAgICAgICAgICAgIHZhciBzaGVldCA9IHNwcml0ZVNoZWV0cy5maWx0ZXIoZnVuY3Rpb24gKHNoZWV0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoZWV0LnR5cGUgPT09IHRpbGVHcmlkW3ldW3hdO1xuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICBpZiAoIXNoZWV0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNoZWV0IFwiICsgdGlsZUdyaWRbeV1beF0gKyBcIiBub3QgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2b2lkIDAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb25zID0gc2hlZXQudGlsZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnR5cGUgPT09IHN1bTsgfSk7XG4gICAgICAgICAgICAvLyBOb3RlOiBKdXN0IHBpY2tpbmcgYSByYW5kb20gb25lIG9mIHRoZSB2YXJpYW50cyBldmVyeSB0aW1lIHdlIHJlbmRlciBmb3Igbm93XG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gc2VsZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzZWxlY3Rpb25zLmxlbmd0aCldO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRpbGUoY3R4LCBwb3NpdGlvbiwgc2hlZXQuaW1hZ2UsIHsgeDogeCwgeTogeSB9LCBzZWxlY3Rpb24ucG9zaXRpb24sIHNjYWxlLCBzZWxlY3Rpb24uc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbGUgbm90IGRlZmluZWQgXCIgKyBzdW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRpbGVHcmlkW3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVfMiA9IF9sb29wXzIoeCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzIgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXzI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGlsZUdyaWQubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKHkpO1xuICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzEgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVfMS52YWx1ZTtcbiAgICB9XG59XG52YXIgZGVmYXVsdERyb3BTaGFkb3cgPSB7XG4gICAgc2hhZG93Y29sb3VyOiAnIzAwMDAwMCcsXG4gICAgc2hhZG93Qmx1cjogNixcbiAgICBzaGFkb3dPZmZzZXRYOiA0LFxuICAgIHNoYWRvd09mZnNldFk6IDRcbn07XG5mdW5jdGlvbiBzaGFkb3coY3R4LCBkcmF3aW5nT3BlcmF0aW9ucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHREcm9wU2hhZG93OyB9XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguc2hhZG93Q29sb3IgPSBvcHRpb25zLnNoYWRvd2NvbG91cjtcbiAgICBjdHguc2hhZG93Qmx1ciA9IG9wdGlvbnMuc2hhZG93Qmx1cjtcbiAgICBjdHguc2hhZG93T2Zmc2V0WCA9IG9wdGlvbnMuc2hhZG93T2Zmc2V0WDtcbiAgICBjdHguc2hhZG93T2Zmc2V0WSA9IG9wdGlvbnMuc2hhZG93T2Zmc2V0WTtcbiAgICBkcmF3aW5nT3BlcmF0aW9ucygpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG59XG5mdW5jdGlvbiBkb2RnZShjdHgsIGRyYXdpbmdPcGVyYXRpb25zKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvbG91ci1kb2RnZSc7XG4gICAgZHJhd2luZ09wZXJhdGlvbnMoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xufVxuZnVuY3Rpb24gb3ZlcmxheShjdHgsIGRyYXdpbmdPcGVyYXRpb25zKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ292ZXJsYXknO1xuICAgIGRyYXdpbmdPcGVyYXRpb25zKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbn1cbmZ1bmN0aW9uIHRyYW5zcGFyZW5jeShjdHgsIGRyYXdpbmdPcGVyYXRpb25zLCBhbHBoYSkge1xuICAgIGlmIChhbHBoYSA9PT0gdm9pZCAwKSB7IGFscGhhID0gMC4yNTsgfVxuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gICAgZHJhd2luZ09wZXJhdGlvbnMoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlKGN0eCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNpcmNsZTogZnVuY3Rpb24gKHBvc2l0aW9uLCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRDaXJjbGU7IH1cbiAgICAgICAgICAgIGNpcmNsZShjdHgsIHBvc2l0aW9uLCByYWRpdXMsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcjogZnVuY3Rpb24gKGNvbG91cikge1xuICAgICAgICAgICAgY2xlYXIoY3R4LCBjb2xvdXIpO1xuICAgICAgICB9LFxuICAgICAgICBzcXVhcmU6IGZ1bmN0aW9uIChwb3NpdGlvbiwgc2l6ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdFJlY3Q7IH1cbiAgICAgICAgICAgIHNxdWFyZShjdHgsIHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVjdDogZnVuY3Rpb24gKHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0UmVjdDsgfVxuICAgICAgICAgICAgcmVjdChjdHgsIHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IGZ1bmN0aW9uIChwb3NpdGlvbiwgc2l6ZSwgaW1nKSB7XG4gICAgICAgICAgICBpbWFnZShjdHgsIHBvc2l0aW9uLCBzaXplLCBpbWcpO1xuICAgICAgICB9LFxuICAgICAgICBsaW5lOiBmdW5jdGlvbiAoZnJvbSwgdG8sIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRMaW5lOyB9XG4gICAgICAgICAgICBsaW5lKGN0eCwgZnJvbSwgdG8sIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBzcHJpdGU6IGZ1bmN0aW9uIChzcHIpIHtcbiAgICAgICAgICAgIHNwcml0ZShjdHgsIHNwcik7XG4gICAgICAgIH0sXG4gICAgICAgIHN1YkltYWdlOiBmdW5jdGlvbiAocG9zaXRpb24sIHNpemUsIHN1YlBvc2l0aW9uLCBzdWJTaXplLCBpbWcpIHtcbiAgICAgICAgICAgIHN1YkltYWdlKGN0eCwgcG9zaXRpb24sIHNpemUsIHN1YlBvc2l0aW9uLCBzdWJTaXplLCBpbWcpO1xuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiBmdW5jdGlvbiAocG9zaXRpb24sIHRleHQsIGNvbG91ciwgZm9udCkge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSB2b2lkIDApIHsgcG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTsgfVxuICAgICAgICAgICAgaWYgKHRleHQgPT09IHZvaWQgMCkgeyB0ZXh0ID0gJyc7IH1cbiAgICAgICAgICAgIGlmIChjb2xvdXIgPT09IHZvaWQgMCkgeyBjb2xvdXIgPSAnIzAwMDAwMCc7IH1cbiAgICAgICAgICAgIGlmIChmb250ID09PSB2b2lkIDApIHsgZm9udCA9ICcxNnB0IHNhbnMtc2VyaWYnOyB9XG4gICAgICAgICAgICB0eHQoY3R4LCBwb3NpdGlvbiwgdGV4dCwgY29sb3VyLCBmb250KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGlsZXM6IGZ1bmN0aW9uIChwb3NpdGlvbiwgdGlsZUdyaWQsIHNwcml0ZVNoZWV0cywgc2NhbGUsIHRpbGVTaXplKSB7XG4gICAgICAgICAgICB0aWxlcyhjdHgsIHBvc2l0aW9uLCB0aWxlR3JpZCwgc3ByaXRlU2hlZXRzLCBzY2FsZSwgdGlsZVNpemUpO1xuICAgICAgICB9LFxuICAgICAgICBzaGFkb3c6IGZ1bmN0aW9uIChkcmF3aW5nT3BlcmF0aW9ucywgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdERyb3BTaGFkb3c7IH1cbiAgICAgICAgICAgIHNoYWRvdyhjdHgsIGRyYXdpbmdPcGVyYXRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG9kZ2U6IGZ1bmN0aW9uIChkcmF3aW5nT3BlcmF0aW9ucykge1xuICAgICAgICAgICAgZG9kZ2UoY3R4LCBkcmF3aW5nT3BlcmF0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IGZ1bmN0aW9uIChkcmF3aW5nT3BlcmF0aW9ucykge1xuICAgICAgICAgICAgb3ZlcmxheShjdHgsIGRyYXdpbmdPcGVyYXRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNwYXJlbmN5OiBmdW5jdGlvbiAoZHJhd2luZ09wZXJhdGlvbnMsIGFscGhhKSB7XG4gICAgICAgICAgICBpZiAoYWxwaGEgPT09IHZvaWQgMCkgeyBhbHBoYSA9IDAuMjU7IH1cbiAgICAgICAgICAgIHRyYW5zcGFyZW5jeShjdHgsIGRyYXdpbmdPcGVyYXRpb25zLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgIGNpcmNsZTogY2lyY2xlLFxuICAgIGNsZWFyOiBjbGVhcixcbiAgICBpbWFnZTogaW1hZ2UsXG4gICAgbGluZTogbGluZSxcbiAgICByZWN0OiByZWN0LFxuICAgIHNwcml0ZTogc3ByaXRlLFxuICAgIHNxdWFyZTogc3F1YXJlLFxuICAgIHN1YkltYWdlOiBzdWJJbWFnZSxcbiAgICB0ZXh0OiB0eHQsXG4gICAgdGlsZXM6IHRpbGVzLFxuICAgIHNoYWRvdzogc2hhZG93LFxuICAgIGRvZGdlOiBkb2RnZSxcbiAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgIHRyYW5zcGFyZW5jeTogdHJhbnNwYXJlbmN5XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWFrZTJEQXJyYXkod2lkdGgsIGhlaWdodCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSAxOyB9XG4gICAgaWYgKGhlaWdodCA9PT0gdm9pZCAwKSB7IGhlaWdodCA9IDE7IH1cbiAgICBpZiAoZGVmYXVsdFZhbHVlID09PSB2b2lkIDApIHsgZGVmYXVsdFZhbHVlID0gbnVsbDsgfVxuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgIHZhciByb3cgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICByb3cucHVzaChkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb3B5VGlsZXModGlsZXMpIHtcbiAgICByZXR1cm4gdGlsZXMubWFwKGZ1bmN0aW9uIChhcnIpIHsgcmV0dXJuIGFyci5zbGljZSgpOyB9KTtcbn1cbnZhciBkZWZhdWx0R3JpZCA9IHtcbiAgICBwb3M6IHsgeDogMCwgeTogMCB9LFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgZGl2aXNpb25zOiA0LFxuICAgIHRpbGVXaWR0aDogOCxcbiAgICB0aWxlSGVpZ2h0OiA4LFxuICAgIHNjYWxlOiAxXG59O1xuZnVuY3Rpb24gZmlsbCh0aWxlcywgcG9zaXRpb24sIHRhcmdldCwgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgZ3JpZENsb25lID0gY29weVRpbGVzKHRpbGVzKTtcbiAgICBmdW5jdGlvbiBmbG9vZEZpbGwocG9zaXRpb24sIHRhcmdldCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWVBdFBvc2l0aW9uID0gZ3JpZENsb25lW3Bvc2l0aW9uLnldW3Bvc2l0aW9uLnhdO1xuICAgICAgICBpZiAodmFsdWVBdFBvc2l0aW9uICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNXaXRoaW5Cb3VuZHMgPSBwb3NpdGlvbi54IDwgZ3JpZENsb25lW3Bvc2l0aW9uLnldLmxlbmd0aCAmJlxuICAgICAgICAgICAgcG9zaXRpb24ueCA+PSAwICYmXG4gICAgICAgICAgICBwb3NpdGlvbi55IDwgZ3JpZENsb25lLmxlbmd0aCAmJlxuICAgICAgICAgICAgcG9zaXRpb24ueSA+PSAwO1xuICAgICAgICBpZiAoaXNXaXRoaW5Cb3VuZHMpIHtcbiAgICAgICAgICAgIGdyaWRDbG9uZVtwb3NpdGlvbi55XVtwb3NpdGlvbi54XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCBncmlkQ2xvbmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGZsb29kRmlsbCh7IHg6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnkgKyAxIH0sIHRhcmdldCwgcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZmxvb2RGaWxsKHsgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSAtIDEgfSwgdGFyZ2V0LCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA8IGdyaWRDbG9uZVswXS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZmxvb2RGaWxsKHsgeDogcG9zaXRpb24ueCArIDEsIHk6IHBvc2l0aW9uLnkgfSwgdGFyZ2V0LCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA+IDApIHtcbiAgICAgICAgICAgICAgICBmbG9vZEZpbGwoeyB4OiBwb3NpdGlvbi54IC0gMSwgeTogcG9zaXRpb24ueSB9LCB0YXJnZXQsIHJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGZsb29kRmlsbChwb3NpdGlvbiwgdGFyZ2V0LCByZXBsYWNlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBncmlkQ2xvbmU7XG59XG5mdW5jdGlvbiBjcmVhdGUoc2l6ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRHcmlkOyB9XG4gICAgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0R3JpZCksIG9wdGlvbnMpO1xuICAgIHZhciB0aWxlcyA9IG1ha2UyREFycmF5KHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCAwKTtcbiAgICB2YXIgcG9zID0geyB4OiBvcHRpb25zLnBvcy54LCB5OiBvcHRpb25zLnBvcy55IH07XG4gICAgdmFyIHZpc2libGUgPSBvcHRpb25zLnZpc2libGU7XG4gICAgdmFyIGRpdmlzaW9ucyA9IG9wdGlvbnMuZGl2aXNpb25zO1xuICAgIHZhciB0aWxlV2lkdGggPSBvcHRpb25zLnRpbGVXaWR0aDtcbiAgICB2YXIgdGlsZUhlaWdodCA9IG9wdGlvbnMudGlsZUhlaWdodDtcbiAgICB2YXIgdGlsZVNpemUgPSBvcHRpb25zLnRpbGVXaWR0aDtcbiAgICB2YXIgc2NhbGUgPSBvcHRpb25zLnNjYWxlO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpdmlzaW9uczogZGl2aXNpb25zLFxuICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgdGlsZUhlaWdodDogdGlsZUhlaWdodCxcbiAgICAgICAgdGlsZXM6IHRpbGVzLFxuICAgICAgICB0aWxlV2lkdGg6IHRpbGVXaWR0aCxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgdGlsZVNpemU6IHRpbGVTaXplLFxuICAgICAgICBzY2FsZTogc2NhbGVcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgIGZpbGw6IGZpbGwsXG4gICAgY29weVRpbGVzOiBjb3B5VGlsZXNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMua2V5Ym9hcmQgPSBleHBvcnRzLm1vdXNlID0gdm9pZCAwO1xudmFyIG1vdXNlXzEgPSByZXF1aXJlKFwiLi9pbnB1dC9tb3VzZVwiKTtcbmZ1bmN0aW9uIGNyZWF0ZShjYW52YXMpIHtcbiAgICB2YXIgbW91c2VJbnB1dCA9IG1vdXNlXzEuZGVmYXVsdC5jcmVhdGUoY2FudmFzKTtcbiAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vdXNlSW5wdXQuc3RhcnQoKTtcbiAgICB9O1xuICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vdXNlSW5wdXQudXBkYXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgICAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbW91c2VJbnB1dC5nZXRTdGF0ZSgpOyB9XG4gICAgfTtcbn1cbmV4cG9ydHMubW91c2UgPSB7XG4gICAgY3JlYXRlOiBjcmVhdGVcbn07XG5leHBvcnRzLmtleWJvYXJkID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygna2V5Ym9hcmQgaW5wdXQgc3R1YicpO1xuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBjcmVhdGUoY2FudmFzKSB7XG4gICAgdmFyIGRlZmF1bHRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGxlZnQ6IGRlZmF1bHRCdXR0b25TdGF0ZSgpLFxuICAgICAgICAgICAgd2hlZWw6IGRlZmF1bHRXaGVlbFN0YXRlKCksXG4gICAgICAgICAgICByaWdodDogZGVmYXVsdEJ1dHRvblN0YXRlKClcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkZWZhdWx0QnV0dG9uU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGp1c3RQcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHJlbGVhc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGp1c3RSZWxlYXNlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkZWZhdWx0V2hlZWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ1dHRvblN0YXRlID0gZGVmYXVsdEJ1dHRvblN0YXRlKCk7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYnV0dG9uU3RhdGUpLCB7IG1vdmVkOiBmYWxzZSwgZGlyZWN0aW9uOiAndXAnIH0pO1xuICAgIH07XG4gICAgdmFyIHByZXZNb3VzZSA9IGRlZmF1bHRTdGF0ZSgpO1xuICAgIHZhciBtb3VzZSA9IGRlZmF1bHRTdGF0ZSgpO1xuICAgIHZhciBjbG9uZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuICAgIH07XG4gICAgdmFyIHJlbGF0aXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gYm91bmRzLmxlZnQsXG4gICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gYm91bmRzLnRvcFxuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG5ld1BvcyA9IHJlbGF0aXZlKGV2ZW50KTtcbiAgICAgICAgbW91c2UucG9zaXRpb24gPSBuZXdQb3M7XG4gICAgfTtcbiAgICB2YXIgZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbW91c2UubGVmdC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtb3VzZS53aGVlbC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBtb3VzZS5yaWdodC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtb3VzZS5sZWZ0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtb3VzZS53aGVlbC5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgbW91c2UucmlnaHQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgd2hlZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbW91c2Uud2hlZWwubW92ZWQgPSBldmVudC5kZWx0YVkgPT09IDAgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIGlmIChtb3VzZS53aGVlbC5tb3ZlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1vdXNlLndoZWVsLmRpcmVjdGlvbiA9IGV2ZW50LmRlbHRhWSA8IDAgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb3VzZS53aGVlbC5tb3ZlZCA9IGZhbHNlO1xuICAgICAgICBwcmV2TW91c2UgPSBjbG9uZShtb3VzZSk7XG4gICAgfTtcbiAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG1vdXNlIGV2ZW50c1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSk7XG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb3duKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1cCk7XG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsKTtcbiAgICAgICAgLy8gZGVmYXVsdCBtb3VzZSBwb3NpdGlvbiwgY2VudGVyIG9mIHNjcmVlblxuICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0U3RhdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlOyB9LFxuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHsgY3JlYXRlOiBjcmVhdGUgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gY3JlYXRlKHBvc2l0aW9uLCBzaXplLCByb3RhdGlvbiwgdGV4dHVyZSwgY29sb3VyKSB7XG4gICAgaWYgKHJvdGF0aW9uID09PSB2b2lkIDApIHsgcm90YXRpb24gPSAwOyB9XG4gICAgaWYgKGNvbG91ciA9PT0gdm9pZCAwKSB7IGNvbG91ciA9ICcjZmZmZmZmJzsgfVxuICAgIHZhciBmcmFtZXMgPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICB0ZXh0dXJlOiB0ZXh0dXJlLFxuICAgICAgICBjb2xvdXI6IGNvbG91cixcbiAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgc2V0RnJhbWVzOiBmdW5jdGlvbiAobmV3RnJhbWVzKSB7XG4gICAgICAgICAgICBmcmFtZXMgPSBuZXdGcmFtZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEZyYW1lOiBmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGZyYW1lcygpIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFtZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCByb3RhdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiByb3RhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHJvdGF0aW9uKGRlZ3JlZXMpIHtcbiAgICAgICAgICAgIHJvdGF0aW9uID0gZGVncmVlcyA+PSAzNjAgPyAzNjAgLSBkZWdyZWVzIDogZGVncmVlcztcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY3JlYXRlOiBjcmVhdGVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZCA9IGV4cG9ydHMuc2F2ZSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHNhdmUoKSB7XG59XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZnVuY3Rpb24gbG9hZCgpIHtcbn1cbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudG9EZWdyZWVzID0gZXhwb3J0cy50b1JhZGlhbnMgPSB2b2lkIDA7XG5mdW5jdGlvbiB0b1JhZGlhbnMoZGVncmVlcykge1xuICAgIHJldHVybiBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xufVxuZXhwb3J0cy50b1JhZGlhbnMgPSB0b1JhZGlhbnM7XG5mdW5jdGlvbiB0b0RlZ3JlZXMocmFkaWFucykge1xuICAgIHJldHVybiByYWRpYW5zICogKDE4MCAvIE1hdGguUEkpO1xufVxuZXhwb3J0cy50b0RlZ3JlZXMgPSB0b0RlZ3JlZXM7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdG9SYWRpYW5zOiB0b1JhZGlhbnMsXG4gICAgdG9EZWdyZWVzOiB0b0RlZ3JlZXNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNyZWF0ZShfeCwgX3kpIHtcbiAgICB2YXIgeCA9IF94O1xuICAgIHZhciB5ID0gX3k7XG4gICAgdmFyIGFkZCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHggKz0gdi54O1xuICAgICAgICB5ICs9IHYueTtcbiAgICB9O1xuICAgIHZhciBhZGRTY2FsYXIgPSBmdW5jdGlvbiAocykge1xuICAgICAgICB4ICs9IHM7XG4gICAgICAgIHkgKz0gcztcbiAgICB9O1xuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB4IC89IHYueDtcbiAgICAgICAgeSAvPSB2Lnk7XG4gICAgfTtcbiAgICB2YXIgZGl2aWRlU2NhbGFyID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgeCAvPSBzO1xuICAgICAgICB5IC89IHM7XG4gICAgfTtcbiAgICB2YXIgZG90ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHggKiB2LnggKyB5ICogdi55O1xuICAgIH07XG4gICAgdmFyIGdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIHZhciBnZXRPcHBvc2l0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGUoLXYueCwgLXYueSk7XG4gICAgfTtcbiAgICB2YXIgZ2V0UGVycCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZSgteSwgeCk7XG4gICAgfTtcbiAgICB2YXIgaXNFcXVhbFRvID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHggPT0gdi54ICYmIHkgPT0gdi55O1xuICAgIH07XG4gICAgdmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgeCAqPSB2Lng7XG4gICAgICAgIHkgKj0gdi55O1xuICAgIH07XG4gICAgdmFyIG11bHRpcGx5U2NhbGFyID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgeCAqPSBzO1xuICAgICAgICB5ICo9IHM7XG4gICAgfTtcbiAgICB2YXIgbm9ybWFsaXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbCA9IGdldExlbmd0aCgpO1xuICAgICAgICB4ID0geCAvIGw7XG4gICAgICAgIHkgPSB5IC8gbDtcbiAgICB9O1xuICAgIHZhciBzZXRMZW5ndGggPSBmdW5jdGlvbiAobCkge1xuICAgICAgICBub3JtYWxpc2UoKTtcbiAgICAgICAgbXVsdGlwbHlTY2FsYXIobCk7XG4gICAgfTtcbiAgICB2YXIgc3VidHJhY3QgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB4IC09IHYueDtcbiAgICAgICAgeSAtPSB2Lnk7XG4gICAgfTtcbiAgICB2YXIgc3VidHJhY3RTY2FsYXIgPSBmdW5jdGlvbiAocykge1xuICAgICAgICB4IC09IHM7XG4gICAgICAgIHkgLT0gcztcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZDogYWRkLFxuICAgICAgICBhZGRTY2FsYXI6IGFkZFNjYWxhcixcbiAgICAgICAgY2xvbmU6IGNsb25lLFxuICAgICAgICBkaXZpZGU6IGRpdmlkZSxcbiAgICAgICAgZGl2aWRlU2NhbGFyOiBkaXZpZGVTY2FsYXIsXG4gICAgICAgIGRvdDogZG90LFxuICAgICAgICBnZXRMZW5ndGg6IGdldExlbmd0aCxcbiAgICAgICAgZ2V0T3Bwb3NpdGU6IGdldE9wcG9zaXRlLFxuICAgICAgICBnZXRQZXJwOiBnZXRQZXJwLFxuICAgICAgICBpc0VxdWFsVG86IGlzRXF1YWxUbyxcbiAgICAgICAgbXVsdGlwbHk6IG11bHRpcGx5LFxuICAgICAgICBtdWx0aXBseVNjYWxhcjogbXVsdGlwbHlTY2FsYXIsXG4gICAgICAgIG5vcm1hbGlzZTogbm9ybWFsaXNlLFxuICAgICAgICBzZXRMZW5ndGg6IHNldExlbmd0aCxcbiAgICAgICAgc3VidHJhY3Q6IHN1YnRyYWN0LFxuICAgICAgICBzdWJ0cmFjdFNjYWxhcjogc3VidHJhY3RTY2FsYXIsXG4gICAgICAgIHNldCB4KF94KSB7XG4gICAgICAgICAgICB4ID0gX3g7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB5KF95KSB7XG4gICAgICAgICAgICB5ID0gX3k7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHk7XG4gICAgICAgIH1cbiAgICB9O1xufVxudmFyIGZyb21EZWdyZWVzID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICB2YXIgcmFkID0gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICByZXR1cm4gY3JlYXRlKE1hdGguY29zKHJhZCksIE1hdGguc2luKHJhZCkpO1xufTtcbnZhciBjbG9uZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGNyZWF0ZSh2LngsIHYueSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNsb25lOiBjbG9uZSxcbiAgICBjcmVhdGU6IGNyZWF0ZSxcbiAgICBmcm9tRGVncmVlczogZnJvbURlZ3JlZXNcbn07XG4iLCJjb25zdCB7IHZlYzIgfSA9IHJlcXVpcmUoJ0Blcmlrd2F0c29uL2JyYW1ibGUnKVxuXG4vLyB3b3Jrc1xuZnVuY3Rpb24gcG9pbnRWc1JlY3QgKHBvaW50LCByZWN0KSB7XG4gIHJldHVybiBwb2ludC54ID49IHJlY3QueCAmJlxuICAgIHBvaW50LnkgPj0gcmVjdC55ICYmXG4gICAgcG9pbnQueCA8IHJlY3QueCArIHJlY3Qud2lkdGggJiZcbiAgICBwb2ludC55IDwgcmVjdC55ICsgcmVjdC5oZWlnaHRcbn1cblxuLy8gd29ya3NcbmZ1bmN0aW9uIHJlY3RWc1JlY3QgKHJlY3RBLCByZWN0Qikge1xuICByZXR1cm4gcmVjdEEueCA8IHJlY3RCLnggKyByZWN0Qi53aWR0aCAmJlxuICAgIHJlY3RBLnggKyByZWN0QS53aWR0aCA+IHJlY3RCLnggJiZcbiAgICByZWN0QS55IDwgcmVjdEIueSArIHJlY3RCLmhlaWdodCAmJlxuICAgIHJlY3RBLnkgKyByZWN0QS5oZWlnaHQgPiByZWN0Qi55XG59XG5cbi8vIHdvcmtzXG4vLyByZXR1cm5zIGZhbHNlIGlmIG5vIGNvbGxpc2lvbiBvY2N1cnJlZCwgb3RoZXJ3aXNlIGl0IHJldHVybnMgYW4gb2JqZWN0XG4vLyBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mIHRoZSBjb2xsaXNpb25cbi8vIHsgbmVhciwgZmFyLCBub3JtYWwgfVxuZnVuY3Rpb24gbGluZVZzUmVjdCAobGluZSwgcmVjdCkge1xuICBjb25zdCBmcm9tID0gdmVjMi5jcmVhdGUobGluZS5mcm9tLngsIGxpbmUuZnJvbS55KVxuICBjb25zdCB0byA9IHZlYzIuY3JlYXRlKGxpbmUudG8ueCwgbGluZS50by55KVxuXG4gIGxldCBkaXIgPSB2ZWMyLmNsb25lKHRvKVxuICBkaXIuc3VidHJhY3QoZnJvbSlcblxuICBjb25zdCBpbnZkaXIgPSB7XG4gICAgeDogMS4wIC8gZGlyLngsXG4gICAgeTogMS4wIC8gZGlyLnlcbiAgfVxuXG4gIGxldCB0aW1lTmVhciA9IHtcbiAgICB4OiAocmVjdC54IC0gbGluZS5mcm9tLngpICogaW52ZGlyLngsXG4gICAgeTogKHJlY3QueSAtIGxpbmUuZnJvbS55KSAqIGludmRpci55XG4gIH1cblxuICBsZXQgdGltZUZhciA9IHtcbiAgICB4OiAocmVjdC54ICsgcmVjdC53aWR0aCAtIGxpbmUuZnJvbS54KSAqIGludmRpci54LFxuICAgIHk6IChyZWN0LnkgKyByZWN0LmhlaWdodCAtIGxpbmUuZnJvbS55KSAqIGludmRpci55XG4gIH1cblxuICBpZiAoaXNOYU4odGltZU5lYXIueCkgfHwgaXNOYU4odGltZU5lYXIueSkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGltZU5lYXIgaXMgTmFOJywgdGltZU5lYXIueCwgdGltZU5lYXIueSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChpc05hTih0aW1lRmFyLngpIHx8IGlzTmFOKHRpbWVGYXIueSkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGltZUZhciBpcyBOYU4nLCB0aW1lRmFyLngsIHRpbWVGYXIueSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIHNvcnQgdGhlIGRpc3RhbmNlc1xuICBsZXQgdGVtcE5lYXIgPSB7IC4uLnRpbWVOZWFyIH1cbiAgbGV0IHRlbXBGYXIgPSB7IC4uLnRpbWVGYXIgfVxuXG4gIGlmICh0ZW1wTmVhci54ID4gdGVtcEZhci54KSB7XG4gICAgdGltZU5lYXIueCA9IHRlbXBGYXIueFxuICAgIHRpbWVGYXIueCA9IHRlbXBOZWFyLnhcbiAgfVxuXG4gIHRlbXBOZWFyID0geyAuLi50aW1lTmVhciB9XG4gIHRlbXBGYXIgPSB7IC4uLnRpbWVGYXIgfVxuXG4gIGlmICh0ZW1wTmVhci55ID4gdGVtcEZhci55KSB7XG4gICAgdGltZU5lYXIueSA9IHRlbXBGYXIueVxuICAgIHRpbWVGYXIueSA9IHRlbXBOZWFyLnlcbiAgfVxuXG4gIC8vIG5vIGNvbGxpc2lvbiBkZXRlY3RlZFxuICBpZiAodGltZU5lYXIueCA+IHRpbWVGYXIueSB8fCB0aW1lTmVhci55ID4gdGltZUZhci54KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBoaXROZWFyID0gTWF0aC5tYXgodGltZU5lYXIueCwgdGltZU5lYXIueSlcbiAgY29uc3QgaGl0RmFyID0gTWF0aC5taW4odGltZUZhci54LCB0aW1lRmFyLnkpXG5cbiAgLy8gYWJvcnQgaWYgcmF5IGlzIGZhY2luZyBhd2F5IGZyb20gb3VyIG9iamVjdFxuICBpZiAoaGl0RmFyIDwgMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gYWJvcnQgaWYgdGhlIHJheSBkb2VzIG5vdCByZWFjaCB0aGUgb2JqZWN0XG4gIGlmIChoaXROZWFyID4gMSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gYWJvcnQgaWYgdGhlIHJheSdzIGZpcnN0IGNvbGxpc2lvbiBpcyBiZWhpbmQgdXNcbiAgaWYgKGhpdE5lYXIgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBjb25zdHJ1Y3QgYSB2ZWN0b3IgdG8gaG9sZCB0aGUgbm9ybWFsIG9mIHRoZSBzdXJmYWNlXG4gIGxldCBub3JtYWwgPSB2ZWMyLmNyZWF0ZSgwLCAwKVxuXG4gIGlmICh0aW1lTmVhci54ID4gdGltZU5lYXIueSkge1xuICAgIGlmIChpbnZkaXIueCA8IDApIHtcbiAgICAgIG5vcm1hbC54ID0gMVxuICAgICAgbm9ybWFsLnkgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vcm1hbC54ID0gLTFcbiAgICAgIG5vcm1hbC55ID0gMFxuICAgIH1cbiAgfSBlbHNlIGlmICh0aW1lTmVhci54IDwgdGltZU5lYXIueSkge1xuICAgIGlmIChpbnZkaXIueSA8IDApIHtcbiAgICAgIG5vcm1hbC54ID0gMFxuICAgICAgbm9ybWFsLnkgPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vcm1hbC54ID0gMFxuICAgICAgbm9ybWFsLnkgPSAtMVxuICAgIH1cbiAgfSBlbHNlIGlmICh0aW1lTmVhci54ID09PSB0aW1lTmVhci55KSB7XG4gICAgLy8gY29uc29sZS5sb2coaW52ZGlyLngsIGludmRpci55KVxuICAgIGlmIChpbnZkaXIueCA8IDAgJiYgaW52ZGlyLnkgPCAwKSB7XG4gICAgICBjb25zb2xlLmxvZygndGwnKVxuICAgICAgbm9ybWFsLnggPSAtMVxuICAgICAgbm9ybWFsLnkgPSAxXG4gICAgfSBlbHNlIGlmIChpbnZkaXIueCA+IDAgJiYgaW52ZGlyLnkgPCAwKSB7XG4gICAgICBjb25zb2xlLmxvZygndHInKVxuICAgICAgbm9ybWFsLnggPSAxXG4gICAgICBub3JtYWwueSA9IDFcbiAgICB9IGVsc2UgaWYgKGludmRpci54IDwgMCAmJiBpbnZkaXIueSA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdibCcpXG4gICAgICBub3JtYWwueCA9IC0xXG4gICAgICBub3JtYWwueSA9IC0xXG4gICAgfSBlbHNlIGlmIChpbnZkaXIueCA+IDAgJiYgaW52ZGlyLnkgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnYnInKVxuICAgICAgbm9ybWFsLnggPSAxXG4gICAgICBub3JtYWwueSA9IC0xXG4gICAgfVxuICB9XG5cbiAgLy8gY29sbGlkZWQgd2l0aCB0aGUgb2JqZWN0IVxuICByZXR1cm4ge1xuICAgIG5vcm1hbCxcbiAgICBuZWFyOiB2ZWMyLmNyZWF0ZShcbiAgICAgIGZyb20ueCArIGhpdE5lYXIgKiBkaXIueCxcbiAgICAgIGZyb20ueSArIGhpdE5lYXIgKiBkaXIueVxuICAgICksXG4gICAgZmFyOiB2ZWMyLmNyZWF0ZShcbiAgICAgIGZyb20ueCArIGhpdEZhciAqIGRpci54LFxuICAgICAgZnJvbS55ICsgaGl0RmFyICogZGlyLnlcbiAgICApLFxuICAgIHRpbWVPZkNvbGxpc2lvbjogaGl0TmVhclxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsaW5lVnNSZWN0LFxuICByZWN0VnNSZWN0LFxuICBwb2ludFZzUmVjdFxufSIsImNvbnN0IHsgZ2FtZSwgdmVjMiwgbW91c2UgfSA9IHJlcXVpcmUoJ0Blcmlrd2F0c29uL2JyYW1ibGUnKVxuY29uc3QgeyBsaW5lVnNSZWN0IH0gPSByZXF1aXJlKCcuL2FhYmInKVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJylcbmNvbnN0IGcgPSBnYW1lLmNyZWF0ZSgpXG5jb25zdCBtID0gbW91c2UuY3JlYXRlKClcblxuY29uc3QgbGV2ZWwgPSBbXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzEsIDAsIDAsIDIsIDIsIDAsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gIFsxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAyLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAxLCAwLCAyLCAwLCAwLCAyLCAwLCAxXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuXVxuXG5jb25zdCBjYW52YXNTaXplID0ge1xuICB3aWR0aDogMTI4MCxcbiAgaGVpZ2h0OiA3MjBcbn1cblxuY29uc3QgdGlsZVNpemUgPSAyNFxuXG5jb25zdCBjb2x1bW5XaWR0aCA9IDEwXG5jb25zdCBzY3JlZW5JbkNvbHVtbnMgPSBNYXRoLmNlaWwoY2FudmFzU2l6ZS53aWR0aCAvIGNvbHVtbldpZHRoKVxuXG5jb25zdCBoZXJvID0ge1xuICBwb3NpdGlvbjogdmVjMi5jcmVhdGUoMzIsIDMyKVxufVxuXG5mdW5jdGlvbiB0b1JhZGlhbnMgKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MClcbn1cblxuZnVuY3Rpb24gcmFuZ2UgKGZyb20sIHRvLCBsZW5ndGgpIHtcbiAgY29uc3QgcmFuZ2UgPSBNYXRoLmFicyhmcm9tIC0gdG8pXG4gIGNvbnN0IHN0ZXAgPSByYW5nZSAvIChsZW5ndGggLSAxKVxuICBcbiAgbGV0IHJlc3VsdCA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdC5wdXNoKGZyb20gKyAoaSAqIHN0ZXApKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBnZXRSYXlzIChmb3YsIGhvcml6b24sIGNvbHVtbnMpIHtcbiAgbGV0IHJlc3VsdCA9IFtdXG5cbiAgbGV0IGZyb20gPSAtKGZvdiAvIDIpXG4gIGxldCB0byA9IGZvdiAvIDJcblxuICBsZXQgc3RlcHMgPSByYW5nZShmcm9tLCB0bywgc2NyZWVuSW5Db2x1bW5zKVxuXG4gIHJldHVybiBzdGVwcy5tYXAoYW5nbGUgPT4ge1xuICAgIGNvbnN0IHRoZXRhID0gdG9SYWRpYW5zKGFuZ2xlKVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogaGVyby5wb3NpdGlvbixcbiAgICAgIHRvOiB7XG4gICAgICAgIHg6IGhlcm8ucG9zaXRpb24ueCArIGhvcml6b24gKiBNYXRoLmNvcyh0aGV0YSksXG4gICAgICAgIHk6IGhlcm8ucG9zaXRpb24ueSArIGhvcml6b24gKiBNYXRoLnNpbih0aGV0YSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmcuYXR0YWNoVG8oY29udGFpbmVyKVxuZy5zZXRTaXplKDEyODAsIDcyMClcblxubGV0IGNvbGxpc2lvbnMgPSBbXVxuXG5nLnNldFVwZGF0ZShkdCA9PiB7XG5cbiAgaGVyby5wb3NpdGlvbi55ICsrXG4gIGhlcm8ucG9zaXRpb24ueCArKyBcblxuICBjb2xsaXNpb25zID0gW11cblxuICBjb25zdCByYXlzID0gZ2V0UmF5cyg5MCwgMTUwLCBzY3JlZW5JbkNvbHVtbnMpXG5cbiAgcmF5cy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgIGNvbnN0IGNvbGxpc2lvbkNhbmRpZGF0ZXMgPSBbXVxuXG4gICAgbGV2ZWwuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgICBsZXZlbFt5XS5mb3JFYWNoKChjb2wsIHgpID0+IHtcbiAgICAgICAgaWYgKGxldmVsW3ldW3hdICE9PSAwKSB7XG4gICAgICAgICAgY29sbGlzaW9uQ2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHg6IHggKiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHk6IHkgKiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHdpZHRoOiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogdGlsZVNpemUsXG4gICAgICAgICAgICB0eXBlOiBsZXZlbFt5XVt4XVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbGxpc2lvbiA9IGNvbGxpc2lvbkNhbmRpZGF0ZXNcbiAgICAgIC5tYXAocmVjdCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVjdCwgXG4gICAgICAgICAgY29sbGlzaW9uOiBsaW5lVnNSZWN0KGxpbmUsIHJlY3QpIFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihjb2xsaXNpb24gPT4gY29sbGlzaW9uLmNvbGxpc2lvbiAhPT0gZmFsc2UpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5jb2xsaXNpb24udGltZU9mQ29sbGlzaW9uID4gYi5jb2xsaXNpb24udGltZU9mQ29sbGlzaW9uKVswXVxuXG4gICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbilcbiAgfSlcbn0pXG5cbmcuc2V0UmVuZGVyKGdmeCA9PiB7XG4gIGdmeC5jbGVhcignIzIzMjMyMycpXG4gXG4gIC8vIGRyYXcgaW4gM2RcbiAgXG4gIGNvbGxpc2lvbnMuZm9yRWFjaCgoY29sbGlzaW9uLCBpKSA9PiB7XG4gICAgaWYgKCFjb2xsaXNpb24pIHsgcmV0dXJuIH1cbiAgICBcbiAgICBjb25zdCByZWN0ID0gY29sbGlzaW9uLnJlY3RcbiAgICBjb2xsaXNpb24gPSBjb2xsaXNpb24uY29sbGlzaW9uXG5cbiAgICB2YXIgaGVpZ2h0ID0gY2FudmFzU2l6ZS5oZWlnaHQgLSAoY2FudmFzU2l6ZS5oZWlnaHQgKiBjb2xsaXNpb24udGltZU9mQ29sbGlzaW9uKVxuICAgIGxldCBjb2xvdXIgPSAocmVjdC50eXBlID09PSAyKSA/ICdwdXJwbGUnIDogJ3llbGxvdydcblxuICAgIGdmeC5yZWN0KFxuICAgICAgeyB4OiBpICogY29sdW1uV2lkdGgsIHk6IChjYW52YXNTaXplLmhlaWdodCAtIGhlaWdodCkgLyAyIH0sXG4gICAgICB7IHdpZHRoOiBjb2x1bW5XaWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSxcbiAgICAgIHsgZmlsbDogeyBjb2xvdXIgfSB9XG4gICAgKVxuICB9KVxuXG4gIC8vIGRyYXcgdGhlIG1pbmltYXBcbiAgZ2Z4LnJlY3QoXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB3aWR0aDogbGV2ZWxbMF0ubGVuZ3RoICogdGlsZVNpemUsIGhlaWdodDogbGV2ZWwubGVuZ3RoICogdGlsZVNpemUgfSxcbiAgICB7IGZpbGw6IHsgY29sb3VyOiAnYmxhY2snIH0gfVxuICApXG5cbiAgbGV2ZWwuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNvbHVtbiwgeCkgPT4ge1xuICAgICAgc3dpdGNoIChsZXZlbFt5XVt4XSkge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZ2Z4LnNxdWFyZShcbiAgICAgICAgICAgIHsgeDogeCAqIHRpbGVTaXplLCB5OiB5ICogdGlsZVNpemUgfSwgXG4gICAgICAgICAgICB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHsgZmlsbDogeyBjb2xvdXI6ICd5ZWxsb3cnIH0gfVxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgZ2Z4LnNxdWFyZShcbiAgICAgICAgICAgIHsgeDogeCAqIHRpbGVTaXplLCB5OiB5ICogdGlsZVNpemUgfSwgXG4gICAgICAgICAgICB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHsgZmlsbDogeyBjb2xvdXI6ICdwdXJwbGUnIH0gfVxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgICB9ICAgICAgXG4gICAgfSlcbiAgfSlcblxuICAvLyBkcmF3IHRoZSBoZXJvIFxuICBnZnguY2lyY2xlKGhlcm8ucG9zaXRpb24sIDgpXG5cbiAgLy8gZHJhdyB0aGUgY29sbGlzaW9ucyBcbiAgY29sbGlzaW9ucy5mb3JFYWNoKGNvbGxpc2lvbiA9PiB7XG4gICAgaWYgKCFjb2xsaXNpb24pIHsgcmV0dXJuIH1cblxuICAgIGNvbnN0IHJlY3QgPSBjb2xsaXNpb24ucmVjdFxuICAgIGNvbGxpc2lvbiA9IGNvbGxpc2lvbi5jb2xsaXNpb25cblxuICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgIGdmeC5saW5lKGhlcm8ucG9zaXRpb24sIGNvbGxpc2lvbi5uZWFyLCB7IGNvbG91cjogJ3JlZCcgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ2Z4LmxpbmUoaGVyby5wb3NpdGlvbiwgY29sbGlzaW9uLnRvLCB7IGNvbG91cjogJ3doaXRlJyB9KVxuICAgIH1cbiAgfSlcbn0pXG5cbmcuc3RhcnQoKSJdLCJzb3VyY2VSb290IjoiIn0=