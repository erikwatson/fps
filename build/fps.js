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
  var rays = getRays(60, 150, screenInColumns);
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
  gfx.clear('#232323'); // draw a "floor"

  gfx.rect({
    x: 0,
    y: canvasSize.height / 2
  }, {
    width: canvasSize.width,
    height: canvasSize.height / 2
  }, {
    fill: {
      colour: '#4c2008'
    }
  }); // draw a "ceiling"

  gfx.rect({
    x: 0,
    y: 0
  }, {
    width: canvasSize.width,
    height: canvasSize.height / 2
  }, {
    fill: {
      colour: '#308dcc'
    }
  }); // draw the walls 

  collisions.forEach(function (_ref, i) {
    var collision = _ref.collision,
        rect = _ref.rect,
        ray = _ref.ray;

    if (!collision) {
      return;
    }

    var rayAngle = Math.atan2(ray.to.y - ray.from.y, ray.to.x - ray.from.x);
    var correctedAngle = rayAngle - toRadians(hero.angle);
    var newDistance = collision.timeOfCollision * Math.cos(correctedAngle);
    var height = 0.24 * canvasSize.height / newDistance;
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

      gfx.line({
        x: x * tileSize,
        y: 0
      }, {
        x: x * tileSize,
        y: level.length * tileSize
      }, {
        colour: '#999999'
      });
    });
    gfx.line({
      x: 0,
      y: y * tileSize
    }, {
      x: row.length * tileSize,
      y: y * tileSize
    }, {
      colour: '#999999'
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9icmFtYmxlLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi4vQnJhbWJsZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi4vQnJhbWJsZS9kaXN0L2lucHV0LmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvdXRpbHMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvdmVjMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWFiYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidmVjMiIsInBvaW50VnNSZWN0IiwicG9pbnQiLCJyZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJlY3RWc1JlY3QiLCJyZWN0QSIsInJlY3RCIiwibGluZVZzUmVjdCIsImxpbmUiLCJmcm9tIiwiY3JlYXRlIiwidG8iLCJkaXIiLCJjbG9uZSIsInN1YnRyYWN0IiwiaW52ZGlyIiwidGltZU5lYXIiLCJ0aW1lRmFyIiwiaXNOYU4iLCJ0ZW1wTmVhciIsInRlbXBGYXIiLCJoaXROZWFyIiwiTWF0aCIsIm1heCIsImhpdEZhciIsIm1pbiIsIm5vcm1hbCIsImNvbnNvbGUiLCJsb2ciLCJuZWFyIiwiZmFyIiwidGltZU9mQ29sbGlzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImdhbWUiLCJtb3VzZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImciLCJtIiwibGV2ZWwiLCJjYW52YXNTaXplIiwidGlsZVNpemUiLCJjb2x1bW5XaWR0aCIsInNjcmVlbkluQ29sdW1ucyIsImNlaWwiLCJoZXJvIiwicG9zaXRpb24iLCJsZW5ndGgiLCJhbmdsZSIsInNoYWRlQ29sb3IiLCJjb2xvciIsInBlcmNlbnQiLCJSIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJHIiwiQiIsIlJSIiwidG9TdHJpbmciLCJHRyIsIkJCIiwidG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwicmFuZ2UiLCJhYnMiLCJzdGVwIiwicmVzdWx0IiwiaSIsInB1c2giLCJnZXRSYXlzIiwiZm92IiwiaG9yaXpvbiIsImNvbHVtbnMiLCJzdGVwcyIsIm1hcCIsInRoZXRhIiwiY29zIiwic2luIiwiYXR0YWNoVG8iLCJzZXRTaXplIiwiY29sbGlzaW9ucyIsInNldFVwZGF0ZSIsImR0IiwicmF5cyIsImZvckVhY2giLCJjb2xsaXNpb25DYW5kaWRhdGVzIiwicm93IiwiY29sIiwidHlwZSIsImNvbGxpc2lvbiIsInJheSIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsInNldFJlbmRlciIsImdmeCIsImNsZWFyIiwiZmlsbCIsImNvbG91ciIsInJheUFuZ2xlIiwiYXRhbjIiLCJjb3JyZWN0ZWRBbmdsZSIsIm5ld0Rpc3RhbmNlIiwic2hhZGUiLCJyb3VuZCIsImNvbHVtbiIsInNxdWFyZSIsImNpcmNsZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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Q0VoRCxLQUFDLEVBQUUrQyxJQUFJLENBQUNDLFFBQUwsQ0FBY2hELENBQWQsR0FBa0IsS0FBS3NCLElBQUksQ0FBQ3lELEdBQUwsQ0FBU2hCLFNBQVMsQ0FBQ2hCLElBQUksQ0FBQ0csS0FBTixDQUFsQixDQUQ1QjtBQUVFakQsS0FBQyxFQUFFOEMsSUFBSSxDQUFDQyxRQUFMLENBQWMvQyxDQUFkLEdBQWtCLEtBQUtxQixJQUFJLENBQUMwRCxHQUFMLENBQVNqQixTQUFTLENBQUNoQixJQUFJLENBQUNHLEtBQU4sQ0FBbEI7QUFGNUIsR0FGRixFQU1FO0FBQUVvRCxVQUFNLEVBQUU7QUFBVixHQU5GO0FBUUQsQ0EzR0Q7QUE2R0EvRCxDQUFDLENBQUN5RSxLQUFGLEciLCJmaWxlIjoiZnBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2FkQWxsVGVycmFpbiA9IGV4cG9ydHMubG9hZFRlcnJhaW4gPSBleHBvcnRzLmxvYWRBbGxJbWFnZXMgPSBleHBvcnRzLmxvYWRJbWFnZSA9IGV4cG9ydHMubG9hZEFsbFRleHQgPSBleHBvcnRzLmxvYWRTdHJpbmcgPSB2b2lkIDA7XG5mdW5jdGlvbiBsb2FkU3RyaW5nKHBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgcmVqZWN0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcGF0aCk7XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkU3RyaW5nID0gbG9hZFN0cmluZztcbmZ1bmN0aW9uIGxvYWRBbGxUZXh0KHBhdGhzKSB7XG4gICAgaWYgKHBhdGhzID09PSB2b2lkIDApIHsgcGF0aHMgPSBbXTsgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwYXRocy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGxvYWRTdHJpbmcoeCk7IH0pKTtcbn1cbmV4cG9ydHMubG9hZEFsbFRleHQgPSBsb2FkQWxsVGV4dDtcbmZ1bmN0aW9uIGxvYWRJbWFnZShwYXRoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXNvbHZlKGltZyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltZy5zcmMgPSBwYXRoO1xuICAgIH0pO1xufVxuZXhwb3J0cy5sb2FkSW1hZ2UgPSBsb2FkSW1hZ2U7XG5mdW5jdGlvbiBsb2FkQWxsSW1hZ2VzKHBhdGhzKSB7XG4gICAgaWYgKHBhdGhzID09PSB2b2lkIDApIHsgcGF0aHMgPSBbXTsgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwYXRocy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGxvYWRJbWFnZSh4KTsgfSkpO1xufVxuZXhwb3J0cy5sb2FkQWxsSW1hZ2VzID0gbG9hZEFsbEltYWdlcztcbi8vIERvd25sb2FkcyBhIFRlcnJhaW4gZmlsZSxcbi8vIHJlYWRzIGl0LFxuLy8gZG93bmxvYWRzIHRoZSByZWxhdGVkIGltYWdlIGZpbGUsXG4vLyByZXR1cm5zIGEgbmV3IFRlcnJhaW4gb2JqZWN0XG5mdW5jdGlvbiBsb2FkVGVycmFpbihwYXRoKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uO1xuICAgIHJldHVybiBsb2FkU3RyaW5nKHBhdGgpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShkZXNjcmlwdGlvbi5wYXRoKTtcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoaW1hZ2UpIHsgcmV0dXJuICh7XG4gICAgICAgIG5hbWU6IGRlc2NyaXB0aW9uLm5hbWUsXG4gICAgICAgIHR5cGU6IGRlc2NyaXB0aW9uLnR5cGUsXG4gICAgICAgIGltYWdlOiBpbWFnZSxcbiAgICAgICAgdGlsZXM6IGRlc2NyaXB0aW9uLnRpbGVzXG4gICAgfSk7IH0pO1xufVxuZXhwb3J0cy5sb2FkVGVycmFpbiA9IGxvYWRUZXJyYWluO1xuZnVuY3Rpb24gbG9hZEFsbFRlcnJhaW4ocGF0aHMpIHtcbiAgICBpZiAocGF0aHMgPT09IHZvaWQgMCkgeyBwYXRocyA9IFtdOyB9XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBhdGhzLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gbG9hZFRlcnJhaW4oeCk7IH0pKTtcbn1cbmV4cG9ydHMubG9hZEFsbFRlcnJhaW4gPSBsb2FkQWxsVGVycmFpbjtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBsb2FkSW1hZ2U6IGxvYWRJbWFnZSxcbiAgICBsb2FkU3RyaW5nOiBsb2FkU3RyaW5nLFxuICAgIGxvYWRBbGxUZXh0OiBsb2FkQWxsVGV4dCxcbiAgICBsb2FkQWxsSW1hZ2VzOiBsb2FkQWxsSW1hZ2VzLFxuICAgIGxvYWRUZXJyYWluOiBsb2FkVGVycmFpbixcbiAgICBsb2FkQWxsVGVycmFpbjogbG9hZEFsbFRlcnJhaW5cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhc3NldHNfMSA9IHJlcXVpcmUoXCIuL2Fzc2V0c1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFzc2V0c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYXNzZXRzXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBnYW1lXzEgPSByZXF1aXJlKFwiLi9nYW1lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZ2FtZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2FtZV8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgZ3JpZF8xID0gcmVxdWlyZShcIi4vZ3JpZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdyaWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdyaWRfMS5kZWZhdWx0OyB9IH0pO1xudmFyIGdyYXBoaWNzXzEgPSByZXF1aXJlKFwiLi9ncmFwaGljc1wiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdyYXBoaWNzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBncmFwaGljc18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgaW5wdXRfMSA9IHJlcXVpcmUoXCIuL2lucHV0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwia2V5Ym9hcmRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlucHV0XzEua2V5Ym9hcmQ7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtb3VzZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5wdXRfMS5tb3VzZTsgfSB9KTtcbnZhciBzcHJpdGVfMSA9IHJlcXVpcmUoXCIuL3Nwcml0ZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNwcml0ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3ByaXRlXzEuZGVmYXVsdDsgfSB9KTtcbnZhciB2ZWMyXzEgPSByZXF1aXJlKFwiLi92ZWMyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVjMlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmVjMl8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgc3RvcmFnZV8xID0gcmVxdWlyZShcIi4vc3RvcmFnZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNhdmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JhZ2VfMS5zYXZlOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibG9hZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmFnZV8xLmxvYWQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBncmFwaGljc18xID0gcmVxdWlyZShcIi4vZ3JhcGhpY3NcIik7XG52YXIgaW5wdXRfMSA9IHJlcXVpcmUoXCIuL2lucHV0XCIpO1xudmFyIGNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gJyMwMDAwMDAnO1xuICAgIHZhciB1cGRhdGUgPSBudWxsO1xuICAgIHZhciByZW5kZXIgPSBudWxsO1xuICAgIC8vIFRoZXNlIGFyZSB1c2VkIGZvciBjYWxjdWxhdGluZyB0aGUgRGVsdGEgVGltZSBmb3IgdGhlIEZyYW1lXG4gICAgdmFyIHByZXZUaW1lID0gMDtcbiAgICB2YXIgZnJhbWVUaW1lID0gMDtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBncmFwaGljcyA9IGdyYXBoaWNzXzEuZGVmYXVsdC5jcmVhdGUoY3R4KTtcbiAgICBjYW52YXMuaWQgPSAnYnJhbWJsZS1nYW1lJztcbiAgICB2YXIgbW91c2VJbnB1dCA9IGlucHV0XzEubW91c2UuY3JlYXRlKGNhbnZhcyk7XG4gICAgdmFyIHNldEJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uIChjb2xvcikge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICB9O1xuICAgIHZhciBzZXRVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdXBkYXRlID0gY2FsbGJhY2s7XG4gICAgfTtcbiAgICB2YXIgc2V0UmVuZGVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJlbmRlciA9IGNhbGxiYWNrO1xuICAgIH07XG4gICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgIHVwZGF0ZSgxIC8gNjApOyAvLyBUT0RPOiBmYWtlIGl0IGF0IDYwZnBzIGZvciBub3dcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICBncmFwaGljcy5jbGVhcihiYWNrZ3JvdW5kQ29sb3IpO1xuICAgICAgICAgICAgcmVuZGVyKGdyYXBoaWNzKTtcbiAgICAgICAgfVxuICAgICAgICBtb3VzZUlucHV0LnVwZGF0ZSgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH07XG4gICAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb3VzZUlucHV0ID0gaW5wdXRfMS5tb3VzZS5jcmVhdGUoY2FudmFzKTtcbiAgICAgICAgbW91c2VJbnB1dC5zdGFydCgpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH07XG4gICAgdmFyIHNldFNpemUgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICB9O1xuICAgIHZhciBhdHRhY2hUbyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICB9O1xuICAgIC8vIE5PVEU6IE11c3QgYmUgY2FsbGVkIEFGVEVSIGFueXRoaW5nIHRoYXQgd291bGQgY2hhbmdlIG91ciBjb250ZXh0LlxuICAgIC8vICAgICAgIHNldFNpemUgZm9yIGV4YW1wbGUuXG4gICAgdmFyIHNldFNtb290aGluZyA9IGZ1bmN0aW9uICh0bykge1xuICAgICAgICBpZiAodG8gPT09IHZvaWQgMCkgeyB0byA9IHRydWU7IH1cbiAgICAgICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRvO1xuICAgIH07XG4gICAgdmFyIGRpc2FibGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRTaXplOiBzZXRTaXplLFxuICAgICAgICBzZXRVcGRhdGU6IHNldFVwZGF0ZSxcbiAgICAgICAgc2V0UmVuZGVyOiBzZXRSZW5kZXIsXG4gICAgICAgIHNldEJhY2tncm91bmRDb2xvcjogc2V0QmFja2dyb3VuZENvbG9yLFxuICAgICAgICBhdHRhY2hUbzogYXR0YWNoVG8sXG4gICAgICAgIGRpc2FibGVDb250ZXh0TWVudTogZGlzYWJsZUNvbnRleHRNZW51LFxuICAgICAgICBzZXRTbW9vdGhpbmc6IHNldFNtb290aGluZyxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICBnZXRNb3VzZVN0YXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZUlucHV0LmdldFN0YXRlKCk7IH1cbiAgICB9O1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBjcmVhdGU6IGNyZWF0ZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG51bWJlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvbnVtYmVyXCIpO1xuZnVuY3Rpb24gY2xlYXIoY3R4LCBjb2xvdXIpIHtcbiAgICByZWN0KGN0eCwgeyB4OiAwLCB5OiAwIH0sIHsgd2lkdGg6IGN0eC5jYW52YXMud2lkdGgsIGhlaWdodDogY3R4LmNhbnZhcy5oZWlnaHQgfSwge1xuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBjb2xvdXI6IGNvbG91clxuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzcXVhcmUoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRSZWN0OyB9XG4gICAgcmVjdChjdHgsIHsgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSB9LCB7IHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfSwgb3B0aW9ucyk7XG59XG52YXIgZGVmYXVsdFJlY3QgPSB7XG4gICAgZmlsbDoge1xuICAgICAgICBjb2xvdXI6ICcjZmZmZmZmJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgICB3aWR0aDogMixcbiAgICAgICAgY29sb3VyOiAnIzAwMDAwMCcsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG59O1xuZnVuY3Rpb24gcmVjdChjdHgsIHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdFJlY3Q7IH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wdGlvbnMuZmlsbC5jb2xvdXI7XG4gICAgICAgIGN0eC5maWxsUmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5saW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBvcHRpb25zLmxpbmUuY29sb3VyO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy5saW5lLndpZHRoO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdChwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgfVxufVxudmFyIGRlZmF1bHRMaW5lID0ge1xuICAgIHdpZHRoOiAyLFxuICAgIGNvbG91cjogJyMwMDAwMDAnXG59O1xuZnVuY3Rpb24gbGluZShjdHgsIGZyb20sIHRvLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdExpbmU7IH1cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBvcHRpb25zLmNvbG91cjtcbiAgICBjdHgubGluZVdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyhmcm9tLngsIGZyb20ueSk7XG4gICAgY3R4LmxpbmVUbyh0by54LCB0by55KTtcbiAgICBjdHguc3Ryb2tlKCk7XG59XG52YXIgZGVmYXVsdENpcmNsZSA9IHtcbiAgICBmaWxsOiB7XG4gICAgICAgIGNvbG91cjogJyMwMDAwMDAnLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfSxcbiAgICBsaW5lOiB7XG4gICAgICAgIGNvbG91cjogJyNmZmZmZmYnLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB3aWR0aDogMlxuICAgIH1cbn07XG5mdW5jdGlvbiBjaXJjbGUoY3R4LCBwb3NpdGlvbiwgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdENpcmNsZTsgfVxuICAgIC8vIG5vdCBoYXBweSB3aXRoIHRoaXMgcmVhbGx5LCBtYWtlIGFub3RoZXIgZnVuY3Rpb24gaSB0aGlua1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWxsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gb3B0aW9ucy5maWxsLmNvbG91cjtcbiAgICB9XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IG9wdGlvbnMubGluZS5jb2xvdXI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IG9wdGlvbnMubGluZS53aWR0aDtcbiAgICBjdHguYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgY3R4LnN0cm9rZSgpO1xufVxuZnVuY3Rpb24gaW1hZ2UoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgaW1hZ2UpIHtcbiAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG59XG5mdW5jdGlvbiBzdWJJbWFnZShjdHgsIHBvc2l0aW9uLCBzaXplLCBzdWJQb3NpdGlvbiwgc3ViU2l6ZSwgaW1hZ2UpIHtcbiAgICBjdHguZHJhd0ltYWdlKGltYWdlLCBzdWJQb3NpdGlvbi54LCBzdWJQb3NpdGlvbi55LCBzdWJTaXplLndpZHRoLCBzdWJTaXplLmhlaWdodCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xufVxuZnVuY3Rpb24gc3ByaXRlKGN0eCwgc3ByaXRlKSB7XG4gICAgdmFyIGhhbGZXaWR0aCA9IHNwcml0ZS5zaXplLndpZHRoIC8gMjtcbiAgICB2YXIgaGFsZkhlaWdodCA9IHNwcml0ZS5zaXplLmhlaWdodCAvIDI7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHNwcml0ZS5wb3NpdGlvbi54ICsgaGFsZldpZHRoLCBzcHJpdGUucG9zaXRpb24ueSArIGhhbGZIZWlnaHQpO1xuICAgIGN0eC5yb3RhdGUobnVtYmVyXzEuZGVmYXVsdC50b1JhZGlhbnMoc3ByaXRlLnJvdGF0aW9uKSk7XG4gICAgaWYgKHNwcml0ZS5mcmFtZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBzdWJJbWFnZShjdHgsIHtcbiAgICAgICAgICAgIHg6IC1oYWxmV2lkdGgsXG4gICAgICAgICAgICB5OiAtaGFsZkhlaWdodFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB3aWR0aDogc3ByaXRlLnNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNwcml0ZS5zaXplLmhlaWdodFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB4OiBzcHJpdGUuZnJhbWVzW3Nwcml0ZS5mcmFtZV0ucG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHNwcml0ZS5mcmFtZXNbc3ByaXRlLmZyYW1lXS5wb3NpdGlvbi55XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHdpZHRoOiBzcHJpdGUuZnJhbWVzW3Nwcml0ZS5mcmFtZV0uc2l6ZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc3ByaXRlLmZyYW1lc1tzcHJpdGUuZnJhbWVdLnNpemUuaGVpZ2h0XG4gICAgICAgIH0sIHNwcml0ZS50ZXh0dXJlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGltYWdlKGN0eCwge1xuICAgICAgICAgICAgeDogLWhhbGZXaWR0aCxcbiAgICAgICAgICAgIHk6IC1oYWxmSGVpZ2h0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHdpZHRoOiBzcHJpdGUuc2l6ZS53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogc3ByaXRlLnNpemUuaGVpZ2h0XG4gICAgICAgIH0sIHNwcml0ZS50ZXh0dXJlKTtcbiAgICB9XG4gICAgY3R4LnJlc3RvcmUoKTtcbn1cbmZ1bmN0aW9uIHR4dChjdHgsIHBvc2l0aW9uLCB0ZXh0LCBjb2xvdXIsIGZvbnQpIHtcbiAgICBpZiAodGV4dCA9PT0gdm9pZCAwKSB7IHRleHQgPSAnJzsgfVxuICAgIGlmIChjb2xvdXIgPT09IHZvaWQgMCkgeyBjb2xvdXIgPSAnIzAwMDAwMCc7IH1cbiAgICBpZiAoZm9udCA9PT0gdm9pZCAwKSB7IGZvbnQgPSAnMTZwdCBzYW5zLXNlcmlmJzsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvdXI7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbn1cbmZ1bmN0aW9uIHRpbGUoY3R4LCBwb3NpdGlvbiwgdGlsZXNoZWV0LCBncmlkUG9zaXRpb24sIHRpbGVzaGVldFBvc2l0aW9uLCBzY2FsZSwgdGlsZVNpemUpIHtcbiAgICBzdWJJbWFnZShjdHgsIHtcbiAgICAgICAgeDogcG9zaXRpb24ueCArIHNjYWxlICogKGdyaWRQb3NpdGlvbi54ICogdGlsZVNpemUud2lkdGgpLFxuICAgICAgICB5OiBwb3NpdGlvbi55ICsgc2NhbGUgKiAoZ3JpZFBvc2l0aW9uLnkgKiB0aWxlU2l6ZS5oZWlnaHQpXG4gICAgfSwge1xuICAgICAgICB3aWR0aDogc2NhbGUgKiB0aWxlU2l6ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzY2FsZSAqIHRpbGVTaXplLmhlaWdodFxuICAgIH0sIHtcbiAgICAgICAgeDogdGlsZVNpemUud2lkdGggKiB0aWxlc2hlZXRQb3NpdGlvbi54LFxuICAgICAgICB5OiB0aWxlU2l6ZS5oZWlnaHQgKiB0aWxlc2hlZXRQb3NpdGlvbi55XG4gICAgfSwge1xuICAgICAgICB3aWR0aDogdGlsZVNpemUud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGlsZVNpemUuaGVpZ2h0XG4gICAgfSwgdGlsZXNoZWV0KTtcbn1cbi8vIHRpbGVncmlkOiBhIDJkIGFycmF5IG9mIG51bWJlcnMgcmVwcmVzZW50aW5nIHRlcnJhaW4gdHlwZXNcbi8vIHNwcml0ZXNoZWV0czogQW4gb2JqZWN0LCBlYWNoIGtleSBpcyB0aGUgdmFsdWUgdGhhdCByZXByZXNlbnRzIGEgdGlsZSBmcm9tIHRoaXMgc2hlZXRcbmZ1bmN0aW9uIHRpbGVzKGN0eCwgcG9zaXRpb24sIHRpbGVHcmlkLCBzcHJpdGVTaGVldHMsIHNjYWxlLCB0aWxlU2l6ZSkge1xuICAgIHZhciBkaXJWYWx1ZXMgPSB7XG4gICAgICAgIE5XOiAxLFxuICAgICAgICBOOiAyLFxuICAgICAgICBORTogNCxcbiAgICAgICAgRTogOCxcbiAgICAgICAgU0U6IDE2LFxuICAgICAgICBTOiAzMixcbiAgICAgICAgU1c6IDY0LFxuICAgICAgICBXOiAxMjhcbiAgICB9O1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHkpIHtcbiAgICAgICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgaWYgKHRpbGVHcmlkW3ldW3hdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJFQUwgVkFMVUVTXG4gICAgICAgICAgICB2YXIgdGwgPSB5ID4gMCA/IHRpbGVHcmlkW3kgLSAxXVt4IC0gMV0gOiAwO1xuICAgICAgICAgICAgdmFyIHRtID0geSA+IDAgPyB0aWxlR3JpZFt5IC0gMV1beF0gOiAwO1xuICAgICAgICAgICAgdmFyIHRyID0geSA+IDAgPyB0aWxlR3JpZFt5IC0gMV1beCArIDFdIDogMDtcbiAgICAgICAgICAgIHZhciBtbCA9IHRpbGVHcmlkW3ldW3ggLSAxXTtcbiAgICAgICAgICAgIHZhciBtID0gdGlsZUdyaWRbeV1beF07XG4gICAgICAgICAgICB2YXIgbXIgPSB0aWxlR3JpZFt5XVt4ICsgMV07XG4gICAgICAgICAgICB2YXIgYmwgPSB5IDwgdGlsZUdyaWQubGVuZ3RoIC0gMSA/IHRpbGVHcmlkW3kgKyAxXVt4IC0gMV0gOiAwO1xuICAgICAgICAgICAgdmFyIGJtID0geSA8IHRpbGVHcmlkLmxlbmd0aCAtIDEgPyB0aWxlR3JpZFt5ICsgMV1beF0gOiAwO1xuICAgICAgICAgICAgdmFyIGJyID0geSA8IHRpbGVHcmlkLmxlbmd0aCAtIDEgPyB0aWxlR3JpZFt5ICsgMV1beCArIDFdIDogMDtcbiAgICAgICAgICAgIC8vIEJJTkFSWSBWQUxVRVNcbiAgICAgICAgICAgIHZhciBuID0gbSA9PT0gdG0gPyAxIDogMDtcbiAgICAgICAgICAgIHZhciBlID0gbSA9PT0gbXIgPyAxIDogMDtcbiAgICAgICAgICAgIHZhciBzID0gbSA9PT0gYm0gPyAxIDogMDtcbiAgICAgICAgICAgIHZhciB3ID0gbSA9PT0gbWwgPyAxIDogMDtcbiAgICAgICAgICAgIHZhciBudyA9IG0gPT09IHRtICYmIG0gPT09IG1sID8gKG0gPT09IHRsID8gMSA6IDApIDogMDtcbiAgICAgICAgICAgIHZhciBuZSA9IG0gPT09IHRtICYmIG0gPT09IG1yID8gKG0gPT09IHRyID8gMSA6IDApIDogMDtcbiAgICAgICAgICAgIHZhciBzdyA9IG0gPT09IGJtICYmIG0gPT09IG1sID8gKG0gPT09IGJsID8gMSA6IDApIDogMDtcbiAgICAgICAgICAgIHZhciBzZSA9IG0gPT09IGJtICYmIG0gPT09IG1yID8gKG0gPT09IGJyID8gMSA6IDApIDogMDtcbiAgICAgICAgICAgIHZhciBzdW0gPSBkaXJWYWx1ZXMuTlcgKiBudyArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLk4gKiBuICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuTkUgKiBuZSArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLkUgKiBlICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuU0UgKiBzZSArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLlMgKiBzICtcbiAgICAgICAgICAgICAgICBkaXJWYWx1ZXMuU1cgKiBzdyArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLlcgKiB3O1xuICAgICAgICAgICAgLy8gRmlndXJlIG91dCB3aGljaCBzaGVldCB3ZSdyZSBzdXBwb3NlZCB0byBiZSBkcmF3aW5nIGZyb21cbiAgICAgICAgICAgIHZhciBzaGVldCA9IHNwcml0ZVNoZWV0cy5maWx0ZXIoZnVuY3Rpb24gKHNoZWV0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoZWV0LnR5cGUgPT09IHRpbGVHcmlkW3ldW3hdO1xuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICBpZiAoIXNoZWV0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlNoZWV0IFwiICsgdGlsZUdyaWRbeV1beF0gKyBcIiBub3QgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2b2lkIDAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb25zID0gc2hlZXQudGlsZXMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LnR5cGUgPT09IHN1bTsgfSk7XG4gICAgICAgICAgICAvLyBOb3RlOiBKdXN0IHBpY2tpbmcgYSByYW5kb20gb25lIG9mIHRoZSB2YXJpYW50cyBldmVyeSB0aW1lIHdlIHJlbmRlciBmb3Igbm93XG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gc2VsZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzZWxlY3Rpb25zLmxlbmd0aCldO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHRpbGUoY3R4LCBwb3NpdGlvbiwgc2hlZXQuaW1hZ2UsIHsgeDogeCwgeTogeSB9LCBzZWxlY3Rpb24ucG9zaXRpb24sIHNjYWxlLCBzZWxlY3Rpb24uc2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbGUgbm90IGRlZmluZWQgXCIgKyBzdW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRpbGVHcmlkW3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGVfMiA9IF9sb29wXzIoeCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzIgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXzI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGlsZUdyaWQubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKHkpO1xuICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzEgPT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVfMS52YWx1ZTtcbiAgICB9XG59XG52YXIgZGVmYXVsdERyb3BTaGFkb3cgPSB7XG4gICAgc2hhZG93Y29sb3VyOiAnIzAwMDAwMCcsXG4gICAgc2hhZG93Qmx1cjogNixcbiAgICBzaGFkb3dPZmZzZXRYOiA0LFxuICAgIHNoYWRvd09mZnNldFk6IDRcbn07XG5mdW5jdGlvbiBzaGFkb3coY3R4LCBkcmF3aW5nT3BlcmF0aW9ucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHREcm9wU2hhZG93OyB9XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguc2hhZG93Q29sb3IgPSBvcHRpb25zLnNoYWRvd2NvbG91cjtcbiAgICBjdHguc2hhZG93Qmx1ciA9IG9wdGlvbnMuc2hhZG93Qmx1cjtcbiAgICBjdHguc2hhZG93T2Zmc2V0WCA9IG9wdGlvbnMuc2hhZG93T2Zmc2V0WDtcbiAgICBjdHguc2hhZG93T2Zmc2V0WSA9IG9wdGlvbnMuc2hhZG93T2Zmc2V0WTtcbiAgICBkcmF3aW5nT3BlcmF0aW9ucygpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG59XG5mdW5jdGlvbiBkb2RnZShjdHgsIGRyYXdpbmdPcGVyYXRpb25zKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2NvbG91ci1kb2RnZSc7XG4gICAgZHJhd2luZ09wZXJhdGlvbnMoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xufVxuZnVuY3Rpb24gb3ZlcmxheShjdHgsIGRyYXdpbmdPcGVyYXRpb25zKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ292ZXJsYXknO1xuICAgIGRyYXdpbmdPcGVyYXRpb25zKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbn1cbmZ1bmN0aW9uIHRyYW5zcGFyZW5jeShjdHgsIGRyYXdpbmdPcGVyYXRpb25zLCBhbHBoYSkge1xuICAgIGlmIChhbHBoYSA9PT0gdm9pZCAwKSB7IGFscGhhID0gMC4yNTsgfVxuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4Lmdsb2JhbEFscGhhID0gYWxwaGE7XG4gICAgZHJhd2luZ09wZXJhdGlvbnMoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlKGN0eCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNpcmNsZTogZnVuY3Rpb24gKHBvc2l0aW9uLCByYWRpdXMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRDaXJjbGU7IH1cbiAgICAgICAgICAgIGNpcmNsZShjdHgsIHBvc2l0aW9uLCByYWRpdXMsIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhcjogZnVuY3Rpb24gKGNvbG91cikge1xuICAgICAgICAgICAgY2xlYXIoY3R4LCBjb2xvdXIpO1xuICAgICAgICB9LFxuICAgICAgICBzcXVhcmU6IGZ1bmN0aW9uIChwb3NpdGlvbiwgc2l6ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdFJlY3Q7IH1cbiAgICAgICAgICAgIHNxdWFyZShjdHgsIHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVjdDogZnVuY3Rpb24gKHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0UmVjdDsgfVxuICAgICAgICAgICAgcmVjdChjdHgsIHBvc2l0aW9uLCBzaXplLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IGZ1bmN0aW9uIChwb3NpdGlvbiwgc2l6ZSwgaW1nKSB7XG4gICAgICAgICAgICBpbWFnZShjdHgsIHBvc2l0aW9uLCBzaXplLCBpbWcpO1xuICAgICAgICB9LFxuICAgICAgICBsaW5lOiBmdW5jdGlvbiAoZnJvbSwgdG8sIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRMaW5lOyB9XG4gICAgICAgICAgICBsaW5lKGN0eCwgZnJvbSwgdG8sIG9wdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBzcHJpdGU6IGZ1bmN0aW9uIChzcHIpIHtcbiAgICAgICAgICAgIHNwcml0ZShjdHgsIHNwcik7XG4gICAgICAgIH0sXG4gICAgICAgIHN1YkltYWdlOiBmdW5jdGlvbiAocG9zaXRpb24sIHNpemUsIHN1YlBvc2l0aW9uLCBzdWJTaXplLCBpbWcpIHtcbiAgICAgICAgICAgIHN1YkltYWdlKGN0eCwgcG9zaXRpb24sIHNpemUsIHN1YlBvc2l0aW9uLCBzdWJTaXplLCBpbWcpO1xuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiBmdW5jdGlvbiAocG9zaXRpb24sIHRleHQsIGNvbG91ciwgZm9udCkge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSB2b2lkIDApIHsgcG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTsgfVxuICAgICAgICAgICAgaWYgKHRleHQgPT09IHZvaWQgMCkgeyB0ZXh0ID0gJyc7IH1cbiAgICAgICAgICAgIGlmIChjb2xvdXIgPT09IHZvaWQgMCkgeyBjb2xvdXIgPSAnIzAwMDAwMCc7IH1cbiAgICAgICAgICAgIGlmIChmb250ID09PSB2b2lkIDApIHsgZm9udCA9ICcxNnB0IHNhbnMtc2VyaWYnOyB9XG4gICAgICAgICAgICB0eHQoY3R4LCBwb3NpdGlvbiwgdGV4dCwgY29sb3VyLCBmb250KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGlsZXM6IGZ1bmN0aW9uIChwb3NpdGlvbiwgdGlsZUdyaWQsIHNwcml0ZVNoZWV0cywgc2NhbGUsIHRpbGVTaXplKSB7XG4gICAgICAgICAgICB0aWxlcyhjdHgsIHBvc2l0aW9uLCB0aWxlR3JpZCwgc3ByaXRlU2hlZXRzLCBzY2FsZSwgdGlsZVNpemUpO1xuICAgICAgICB9LFxuICAgICAgICBzaGFkb3c6IGZ1bmN0aW9uIChkcmF3aW5nT3BlcmF0aW9ucywgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdERyb3BTaGFkb3c7IH1cbiAgICAgICAgICAgIHNoYWRvdyhjdHgsIGRyYXdpbmdPcGVyYXRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG9kZ2U6IGZ1bmN0aW9uIChkcmF3aW5nT3BlcmF0aW9ucykge1xuICAgICAgICAgICAgZG9kZ2UoY3R4LCBkcmF3aW5nT3BlcmF0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IGZ1bmN0aW9uIChkcmF3aW5nT3BlcmF0aW9ucykge1xuICAgICAgICAgICAgb3ZlcmxheShjdHgsIGRyYXdpbmdPcGVyYXRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNwYXJlbmN5OiBmdW5jdGlvbiAoZHJhd2luZ09wZXJhdGlvbnMsIGFscGhhKSB7XG4gICAgICAgICAgICBpZiAoYWxwaGEgPT09IHZvaWQgMCkgeyBhbHBoYSA9IDAuMjU7IH1cbiAgICAgICAgICAgIHRyYW5zcGFyZW5jeShjdHgsIGRyYXdpbmdPcGVyYXRpb25zLCBhbHBoYSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgIGNpcmNsZTogY2lyY2xlLFxuICAgIGNsZWFyOiBjbGVhcixcbiAgICBpbWFnZTogaW1hZ2UsXG4gICAgbGluZTogbGluZSxcbiAgICByZWN0OiByZWN0LFxuICAgIHNwcml0ZTogc3ByaXRlLFxuICAgIHNxdWFyZTogc3F1YXJlLFxuICAgIHN1YkltYWdlOiBzdWJJbWFnZSxcbiAgICB0ZXh0OiB0eHQsXG4gICAgdGlsZXM6IHRpbGVzLFxuICAgIHNoYWRvdzogc2hhZG93LFxuICAgIGRvZGdlOiBkb2RnZSxcbiAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgIHRyYW5zcGFyZW5jeTogdHJhbnNwYXJlbmN5XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWFrZTJEQXJyYXkod2lkdGgsIGhlaWdodCwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHdpZHRoID09PSB2b2lkIDApIHsgd2lkdGggPSAxOyB9XG4gICAgaWYgKGhlaWdodCA9PT0gdm9pZCAwKSB7IGhlaWdodCA9IDE7IH1cbiAgICBpZiAoZGVmYXVsdFZhbHVlID09PSB2b2lkIDApIHsgZGVmYXVsdFZhbHVlID0gbnVsbDsgfVxuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICAgIHZhciByb3cgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XG4gICAgICAgICAgICByb3cucHVzaChkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjb3B5VGlsZXModGlsZXMpIHtcbiAgICByZXR1cm4gdGlsZXMubWFwKGZ1bmN0aW9uIChhcnIpIHsgcmV0dXJuIGFyci5zbGljZSgpOyB9KTtcbn1cbnZhciBkZWZhdWx0R3JpZCA9IHtcbiAgICBwb3M6IHsgeDogMCwgeTogMCB9LFxuICAgIHZpc2libGU6IHRydWUsXG4gICAgZGl2aXNpb25zOiA0LFxuICAgIHRpbGVXaWR0aDogOCxcbiAgICB0aWxlSGVpZ2h0OiA4LFxuICAgIHNjYWxlOiAxXG59O1xuZnVuY3Rpb24gZmlsbCh0aWxlcywgcG9zaXRpb24sIHRhcmdldCwgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgZ3JpZENsb25lID0gY29weVRpbGVzKHRpbGVzKTtcbiAgICBmdW5jdGlvbiBmbG9vZEZpbGwocG9zaXRpb24sIHRhcmdldCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWVBdFBvc2l0aW9uID0gZ3JpZENsb25lW3Bvc2l0aW9uLnldW3Bvc2l0aW9uLnhdO1xuICAgICAgICBpZiAodmFsdWVBdFBvc2l0aW9uICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNXaXRoaW5Cb3VuZHMgPSBwb3NpdGlvbi54IDwgZ3JpZENsb25lW3Bvc2l0aW9uLnldLmxlbmd0aCAmJlxuICAgICAgICAgICAgcG9zaXRpb24ueCA+PSAwICYmXG4gICAgICAgICAgICBwb3NpdGlvbi55IDwgZ3JpZENsb25lLmxlbmd0aCAmJlxuICAgICAgICAgICAgcG9zaXRpb24ueSA+PSAwO1xuICAgICAgICBpZiAoaXNXaXRoaW5Cb3VuZHMpIHtcbiAgICAgICAgICAgIGdyaWRDbG9uZVtwb3NpdGlvbi55XVtwb3NpdGlvbi54XSA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPCBncmlkQ2xvbmUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGZsb29kRmlsbCh7IHg6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnkgKyAxIH0sIHRhcmdldCwgcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgZmxvb2RGaWxsKHsgeDogcG9zaXRpb24ueCwgeTogcG9zaXRpb24ueSAtIDEgfSwgdGFyZ2V0LCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA8IGdyaWRDbG9uZVswXS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZmxvb2RGaWxsKHsgeDogcG9zaXRpb24ueCArIDEsIHk6IHBvc2l0aW9uLnkgfSwgdGFyZ2V0LCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zaXRpb24ueCA+IDApIHtcbiAgICAgICAgICAgICAgICBmbG9vZEZpbGwoeyB4OiBwb3NpdGlvbi54IC0gMSwgeTogcG9zaXRpb24ueSB9LCB0YXJnZXQsIHJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0cnVlKSB7XG4gICAgICAgIGZsb29kRmlsbChwb3NpdGlvbiwgdGFyZ2V0LCByZXBsYWNlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBncmlkQ2xvbmU7XG59XG5mdW5jdGlvbiBjcmVhdGUoc2l6ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRHcmlkOyB9XG4gICAgb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0R3JpZCksIG9wdGlvbnMpO1xuICAgIHZhciB0aWxlcyA9IG1ha2UyREFycmF5KHNpemUud2lkdGgsIHNpemUuaGVpZ2h0LCAwKTtcbiAgICB2YXIgcG9zID0geyB4OiBvcHRpb25zLnBvcy54LCB5OiBvcHRpb25zLnBvcy55IH07XG4gICAgdmFyIHZpc2libGUgPSBvcHRpb25zLnZpc2libGU7XG4gICAgdmFyIGRpdmlzaW9ucyA9IG9wdGlvbnMuZGl2aXNpb25zO1xuICAgIHZhciB0aWxlV2lkdGggPSBvcHRpb25zLnRpbGVXaWR0aDtcbiAgICB2YXIgdGlsZUhlaWdodCA9IG9wdGlvbnMudGlsZUhlaWdodDtcbiAgICB2YXIgdGlsZVNpemUgPSBvcHRpb25zLnRpbGVXaWR0aDtcbiAgICB2YXIgc2NhbGUgPSBvcHRpb25zLnNjYWxlO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpdmlzaW9uczogZGl2aXNpb25zLFxuICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgdGlsZUhlaWdodDogdGlsZUhlaWdodCxcbiAgICAgICAgdGlsZXM6IHRpbGVzLFxuICAgICAgICB0aWxlV2lkdGg6IHRpbGVXaWR0aCxcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgdGlsZVNpemU6IHRpbGVTaXplLFxuICAgICAgICBzY2FsZTogc2NhbGVcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgIGZpbGw6IGZpbGwsXG4gICAgY29weVRpbGVzOiBjb3B5VGlsZXNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMua2V5Ym9hcmQgPSBleHBvcnRzLm1vdXNlID0gdm9pZCAwO1xudmFyIG1vdXNlXzEgPSByZXF1aXJlKFwiLi9pbnB1dC9tb3VzZVwiKTtcbmZ1bmN0aW9uIGNyZWF0ZShjYW52YXMpIHtcbiAgICB2YXIgbW91c2VJbnB1dCA9IG1vdXNlXzEuZGVmYXVsdC5jcmVhdGUoY2FudmFzKTtcbiAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vdXNlSW5wdXQuc3RhcnQoKTtcbiAgICB9O1xuICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1vdXNlSW5wdXQudXBkYXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgICAgICBnZXRTdGF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbW91c2VJbnB1dC5nZXRTdGF0ZSgpOyB9XG4gICAgfTtcbn1cbmV4cG9ydHMubW91c2UgPSB7XG4gICAgY3JlYXRlOiBjcmVhdGVcbn07XG5leHBvcnRzLmtleWJvYXJkID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygna2V5Ym9hcmQgaW5wdXQgc3R1YicpO1xuICAgIH1cbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBjcmVhdGUoY2FudmFzKSB7XG4gICAgdmFyIGRlZmF1bHRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGxlZnQ6IGRlZmF1bHRCdXR0b25TdGF0ZSgpLFxuICAgICAgICAgICAgd2hlZWw6IGRlZmF1bHRXaGVlbFN0YXRlKCksXG4gICAgICAgICAgICByaWdodDogZGVmYXVsdEJ1dHRvblN0YXRlKClcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkZWZhdWx0QnV0dG9uU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGp1c3RQcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHJlbGVhc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGp1c3RSZWxlYXNlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBkZWZhdWx0V2hlZWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ1dHRvblN0YXRlID0gZGVmYXVsdEJ1dHRvblN0YXRlKCk7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYnV0dG9uU3RhdGUpLCB7IG1vdmVkOiBmYWxzZSwgZGlyZWN0aW9uOiAndXAnIH0pO1xuICAgIH07XG4gICAgdmFyIHByZXZNb3VzZSA9IGRlZmF1bHRTdGF0ZSgpO1xuICAgIHZhciBtb3VzZSA9IGRlZmF1bHRTdGF0ZSgpO1xuICAgIHZhciBjbG9uZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xuICAgIH07XG4gICAgdmFyIHJlbGF0aXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gYm91bmRzLmxlZnQsXG4gICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gYm91bmRzLnRvcFxuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG5ld1BvcyA9IHJlbGF0aXZlKGV2ZW50KTtcbiAgICAgICAgbW91c2UucG9zaXRpb24gPSBuZXdQb3M7XG4gICAgfTtcbiAgICB2YXIgZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbW91c2UubGVmdC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtb3VzZS53aGVlbC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBtb3VzZS5yaWdodC5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBtb3VzZS5sZWZ0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBtb3VzZS53aGVlbC5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgbW91c2UucmlnaHQucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgd2hlZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbW91c2Uud2hlZWwubW92ZWQgPSBldmVudC5kZWx0YVkgPT09IDAgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIGlmIChtb3VzZS53aGVlbC5tb3ZlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1vdXNlLndoZWVsLmRpcmVjdGlvbiA9IGV2ZW50LmRlbHRhWSA8IDAgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb3VzZS53aGVlbC5tb3ZlZCA9IGZhbHNlO1xuICAgICAgICBwcmV2TW91c2UgPSBjbG9uZShtb3VzZSk7XG4gICAgfTtcbiAgICB2YXIgc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG1vdXNlIGV2ZW50c1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSk7XG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb3duKTtcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1cCk7XG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHdoZWVsKTtcbiAgICAgICAgLy8gZGVmYXVsdCBtb3VzZSBwb3NpdGlvbiwgY2VudGVyIG9mIHNjcmVlblxuICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0U3RhdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlOyB9LFxuICAgICAgICBzdGFydDogc3RhcnQsXG4gICAgICAgIHVwZGF0ZTogdXBkYXRlXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHsgY3JlYXRlOiBjcmVhdGUgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gY3JlYXRlKHBvc2l0aW9uLCBzaXplLCByb3RhdGlvbiwgdGV4dHVyZSwgY29sb3VyKSB7XG4gICAgaWYgKHJvdGF0aW9uID09PSB2b2lkIDApIHsgcm90YXRpb24gPSAwOyB9XG4gICAgaWYgKGNvbG91ciA9PT0gdm9pZCAwKSB7IGNvbG91ciA9ICcjZmZmZmZmJzsgfVxuICAgIHZhciBmcmFtZXMgPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICB0ZXh0dXJlOiB0ZXh0dXJlLFxuICAgICAgICBjb2xvdXI6IGNvbG91cixcbiAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgc2V0RnJhbWVzOiBmdW5jdGlvbiAobmV3RnJhbWVzKSB7XG4gICAgICAgICAgICBmcmFtZXMgPSBuZXdGcmFtZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEZyYW1lOiBmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGZyYW1lcygpIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFtZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCByb3RhdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiByb3RhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHJvdGF0aW9uKGRlZ3JlZXMpIHtcbiAgICAgICAgICAgIHJvdGF0aW9uID0gZGVncmVlcyA+PSAzNjAgPyAzNjAgLSBkZWdyZWVzIDogZGVncmVlcztcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY3JlYXRlOiBjcmVhdGVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZCA9IGV4cG9ydHMuc2F2ZSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHNhdmUoKSB7XG59XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZnVuY3Rpb24gbG9hZCgpIHtcbn1cbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudG9EZWdyZWVzID0gZXhwb3J0cy50b1JhZGlhbnMgPSB2b2lkIDA7XG5mdW5jdGlvbiB0b1JhZGlhbnMoZGVncmVlcykge1xuICAgIHJldHVybiBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xufVxuZXhwb3J0cy50b1JhZGlhbnMgPSB0b1JhZGlhbnM7XG5mdW5jdGlvbiB0b0RlZ3JlZXMocmFkaWFucykge1xuICAgIHJldHVybiByYWRpYW5zICogKDE4MCAvIE1hdGguUEkpO1xufVxuZXhwb3J0cy50b0RlZ3JlZXMgPSB0b0RlZ3JlZXM7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdG9SYWRpYW5zOiB0b1JhZGlhbnMsXG4gICAgdG9EZWdyZWVzOiB0b0RlZ3JlZXNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNyZWF0ZShfeCwgX3kpIHtcbiAgICB2YXIgeCA9IF94O1xuICAgIHZhciB5ID0gX3k7XG4gICAgdmFyIGFkZCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHggKz0gdi54O1xuICAgICAgICB5ICs9IHYueTtcbiAgICB9O1xuICAgIHZhciBhZGRTY2FsYXIgPSBmdW5jdGlvbiAocykge1xuICAgICAgICB4ICs9IHM7XG4gICAgICAgIHkgKz0gcztcbiAgICB9O1xuICAgIHZhciBkaXZpZGUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB4IC89IHYueDtcbiAgICAgICAgeSAvPSB2Lnk7XG4gICAgfTtcbiAgICB2YXIgZGl2aWRlU2NhbGFyID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgeCAvPSBzO1xuICAgICAgICB5IC89IHM7XG4gICAgfTtcbiAgICB2YXIgZG90ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHggKiB2LnggKyB5ICogdi55O1xuICAgIH07XG4gICAgdmFyIGdldExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9O1xuICAgIHZhciBnZXRPcHBvc2l0ZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGUoLXYueCwgLXYueSk7XG4gICAgfTtcbiAgICB2YXIgZ2V0UGVycCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZSgteSwgeCk7XG4gICAgfTtcbiAgICB2YXIgaXNFcXVhbFRvID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHggPT0gdi54ICYmIHkgPT0gdi55O1xuICAgIH07XG4gICAgdmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgeCAqPSB2Lng7XG4gICAgICAgIHkgKj0gdi55O1xuICAgIH07XG4gICAgdmFyIG11bHRpcGx5U2NhbGFyID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgeCAqPSBzO1xuICAgICAgICB5ICo9IHM7XG4gICAgfTtcbiAgICB2YXIgbm9ybWFsaXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbCA9IGdldExlbmd0aCgpO1xuICAgICAgICB4ID0geCAvIGw7XG4gICAgICAgIHkgPSB5IC8gbDtcbiAgICB9O1xuICAgIHZhciBzZXRMZW5ndGggPSBmdW5jdGlvbiAobCkge1xuICAgICAgICBub3JtYWxpc2UoKTtcbiAgICAgICAgbXVsdGlwbHlTY2FsYXIobCk7XG4gICAgfTtcbiAgICB2YXIgc3VidHJhY3QgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB4IC09IHYueDtcbiAgICAgICAgeSAtPSB2Lnk7XG4gICAgfTtcbiAgICB2YXIgc3VidHJhY3RTY2FsYXIgPSBmdW5jdGlvbiAocykge1xuICAgICAgICB4IC09IHM7XG4gICAgICAgIHkgLT0gcztcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZDogYWRkLFxuICAgICAgICBhZGRTY2FsYXI6IGFkZFNjYWxhcixcbiAgICAgICAgY2xvbmU6IGNsb25lLFxuICAgICAgICBkaXZpZGU6IGRpdmlkZSxcbiAgICAgICAgZGl2aWRlU2NhbGFyOiBkaXZpZGVTY2FsYXIsXG4gICAgICAgIGRvdDogZG90LFxuICAgICAgICBnZXRMZW5ndGg6IGdldExlbmd0aCxcbiAgICAgICAgZ2V0T3Bwb3NpdGU6IGdldE9wcG9zaXRlLFxuICAgICAgICBnZXRQZXJwOiBnZXRQZXJwLFxuICAgICAgICBpc0VxdWFsVG86IGlzRXF1YWxUbyxcbiAgICAgICAgbXVsdGlwbHk6IG11bHRpcGx5LFxuICAgICAgICBtdWx0aXBseVNjYWxhcjogbXVsdGlwbHlTY2FsYXIsXG4gICAgICAgIG5vcm1hbGlzZTogbm9ybWFsaXNlLFxuICAgICAgICBzZXRMZW5ndGg6IHNldExlbmd0aCxcbiAgICAgICAgc3VidHJhY3Q6IHN1YnRyYWN0LFxuICAgICAgICBzdWJ0cmFjdFNjYWxhcjogc3VidHJhY3RTY2FsYXIsXG4gICAgICAgIHNldCB4KF94KSB7XG4gICAgICAgICAgICB4ID0gX3g7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB5KF95KSB7XG4gICAgICAgICAgICB5ID0gX3k7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHk7XG4gICAgICAgIH1cbiAgICB9O1xufVxudmFyIGZyb21EZWdyZWVzID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICB2YXIgcmFkID0gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICByZXR1cm4gY3JlYXRlKE1hdGguY29zKHJhZCksIE1hdGguc2luKHJhZCkpO1xufTtcbnZhciBjbG9uZSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIGNyZWF0ZSh2LngsIHYueSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNsb25lOiBjbG9uZSxcbiAgICBjcmVhdGU6IGNyZWF0ZSxcbiAgICBmcm9tRGVncmVlczogZnJvbURlZ3JlZXNcbn07XG4iLCJjb25zdCB7IHZlYzIgfSA9IHJlcXVpcmUoJ0Blcmlrd2F0c29uL2JyYW1ibGUnKVxuXG4vLyB3b3Jrc1xuZnVuY3Rpb24gcG9pbnRWc1JlY3QgKHBvaW50LCByZWN0KSB7XG4gIHJldHVybiBwb2ludC54ID49IHJlY3QueCAmJlxuICAgIHBvaW50LnkgPj0gcmVjdC55ICYmXG4gICAgcG9pbnQueCA8IHJlY3QueCArIHJlY3Qud2lkdGggJiZcbiAgICBwb2ludC55IDwgcmVjdC55ICsgcmVjdC5oZWlnaHRcbn1cblxuLy8gd29ya3NcbmZ1bmN0aW9uIHJlY3RWc1JlY3QgKHJlY3RBLCByZWN0Qikge1xuICByZXR1cm4gcmVjdEEueCA8IHJlY3RCLnggKyByZWN0Qi53aWR0aCAmJlxuICAgIHJlY3RBLnggKyByZWN0QS53aWR0aCA+IHJlY3RCLnggJiZcbiAgICByZWN0QS55IDwgcmVjdEIueSArIHJlY3RCLmhlaWdodCAmJlxuICAgIHJlY3RBLnkgKyByZWN0QS5oZWlnaHQgPiByZWN0Qi55XG59XG5cbi8vIHdvcmtzXG4vLyByZXR1cm5zIGZhbHNlIGlmIG5vIGNvbGxpc2lvbiBvY2N1cnJlZCwgb3RoZXJ3aXNlIGl0IHJldHVybnMgYW4gb2JqZWN0XG4vLyBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mIHRoZSBjb2xsaXNpb25cbi8vIHsgbmVhciwgZmFyLCBub3JtYWwgfVxuZnVuY3Rpb24gbGluZVZzUmVjdCAobGluZSwgcmVjdCkge1xuICBjb25zdCBmcm9tID0gdmVjMi5jcmVhdGUobGluZS5mcm9tLngsIGxpbmUuZnJvbS55KVxuICBjb25zdCB0byA9IHZlYzIuY3JlYXRlKGxpbmUudG8ueCwgbGluZS50by55KVxuXG4gIGxldCBkaXIgPSB2ZWMyLmNsb25lKHRvKVxuICBkaXIuc3VidHJhY3QoZnJvbSlcblxuICBjb25zdCBpbnZkaXIgPSB7XG4gICAgeDogMS4wIC8gZGlyLngsXG4gICAgeTogMS4wIC8gZGlyLnlcbiAgfVxuXG4gIGxldCB0aW1lTmVhciA9IHtcbiAgICB4OiAocmVjdC54IC0gbGluZS5mcm9tLngpICogaW52ZGlyLngsXG4gICAgeTogKHJlY3QueSAtIGxpbmUuZnJvbS55KSAqIGludmRpci55XG4gIH1cblxuICBsZXQgdGltZUZhciA9IHtcbiAgICB4OiAocmVjdC54ICsgcmVjdC53aWR0aCAtIGxpbmUuZnJvbS54KSAqIGludmRpci54LFxuICAgIHk6IChyZWN0LnkgKyByZWN0LmhlaWdodCAtIGxpbmUuZnJvbS55KSAqIGludmRpci55XG4gIH1cblxuICBpZiAoaXNOYU4odGltZU5lYXIueCkgfHwgaXNOYU4odGltZU5lYXIueSkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGltZU5lYXIgaXMgTmFOJywgdGltZU5lYXIueCwgdGltZU5lYXIueSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmIChpc05hTih0aW1lRmFyLngpIHx8IGlzTmFOKHRpbWVGYXIueSkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGltZUZhciBpcyBOYU4nLCB0aW1lRmFyLngsIHRpbWVGYXIueSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIHNvcnQgdGhlIGRpc3RhbmNlc1xuICBsZXQgdGVtcE5lYXIgPSB7IC4uLnRpbWVOZWFyIH1cbiAgbGV0IHRlbXBGYXIgPSB7IC4uLnRpbWVGYXIgfVxuXG4gIGlmICh0ZW1wTmVhci54ID4gdGVtcEZhci54KSB7XG4gICAgdGltZU5lYXIueCA9IHRlbXBGYXIueFxuICAgIHRpbWVGYXIueCA9IHRlbXBOZWFyLnhcbiAgfVxuXG4gIHRlbXBOZWFyID0geyAuLi50aW1lTmVhciB9XG4gIHRlbXBGYXIgPSB7IC4uLnRpbWVGYXIgfVxuXG4gIGlmICh0ZW1wTmVhci55ID4gdGVtcEZhci55KSB7XG4gICAgdGltZU5lYXIueSA9IHRlbXBGYXIueVxuICAgIHRpbWVGYXIueSA9IHRlbXBOZWFyLnlcbiAgfVxuXG4gIC8vIG5vIGNvbGxpc2lvbiBkZXRlY3RlZFxuICBpZiAodGltZU5lYXIueCA+IHRpbWVGYXIueSB8fCB0aW1lTmVhci55ID4gdGltZUZhci54KSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBoaXROZWFyID0gTWF0aC5tYXgodGltZU5lYXIueCwgdGltZU5lYXIueSlcbiAgY29uc3QgaGl0RmFyID0gTWF0aC5taW4odGltZUZhci54LCB0aW1lRmFyLnkpXG5cbiAgLy8gYWJvcnQgaWYgcmF5IGlzIGZhY2luZyBhd2F5IGZyb20gb3VyIG9iamVjdFxuICBpZiAoaGl0RmFyIDwgMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gYWJvcnQgaWYgdGhlIHJheSBkb2VzIG5vdCByZWFjaCB0aGUgb2JqZWN0XG4gIGlmIChoaXROZWFyID4gMSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gYWJvcnQgaWYgdGhlIHJheSdzIGZpcnN0IGNvbGxpc2lvbiBpcyBiZWhpbmQgdXNcbiAgaWYgKGhpdE5lYXIgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBjb25zdHJ1Y3QgYSB2ZWN0b3IgdG8gaG9sZCB0aGUgbm9ybWFsIG9mIHRoZSBzdXJmYWNlXG4gIGxldCBub3JtYWwgPSB2ZWMyLmNyZWF0ZSgwLCAwKVxuXG4gIGlmICh0aW1lTmVhci54ID4gdGltZU5lYXIueSkge1xuICAgIGlmIChpbnZkaXIueCA8IDApIHtcbiAgICAgIG5vcm1hbC54ID0gMVxuICAgICAgbm9ybWFsLnkgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vcm1hbC54ID0gLTFcbiAgICAgIG5vcm1hbC55ID0gMFxuICAgIH1cbiAgfSBlbHNlIGlmICh0aW1lTmVhci54IDwgdGltZU5lYXIueSkge1xuICAgIGlmIChpbnZkaXIueSA8IDApIHtcbiAgICAgIG5vcm1hbC54ID0gMFxuICAgICAgbm9ybWFsLnkgPSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIG5vcm1hbC54ID0gMFxuICAgICAgbm9ybWFsLnkgPSAtMVxuICAgIH1cbiAgfSBlbHNlIGlmICh0aW1lTmVhci54ID09PSB0aW1lTmVhci55KSB7XG4gICAgLy8gY29uc29sZS5sb2coaW52ZGlyLngsIGludmRpci55KVxuICAgIGlmIChpbnZkaXIueCA8IDAgJiYgaW52ZGlyLnkgPCAwKSB7XG4gICAgICBjb25zb2xlLmxvZygndGwnKVxuICAgICAgbm9ybWFsLnggPSAtMVxuICAgICAgbm9ybWFsLnkgPSAxXG4gICAgfSBlbHNlIGlmIChpbnZkaXIueCA+IDAgJiYgaW52ZGlyLnkgPCAwKSB7XG4gICAgICBjb25zb2xlLmxvZygndHInKVxuICAgICAgbm9ybWFsLnggPSAxXG4gICAgICBub3JtYWwueSA9IDFcbiAgICB9IGVsc2UgaWYgKGludmRpci54IDwgMCAmJiBpbnZkaXIueSA+IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdibCcpXG4gICAgICBub3JtYWwueCA9IC0xXG4gICAgICBub3JtYWwueSA9IC0xXG4gICAgfSBlbHNlIGlmIChpbnZkaXIueCA+IDAgJiYgaW52ZGlyLnkgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnYnInKVxuICAgICAgbm9ybWFsLnggPSAxXG4gICAgICBub3JtYWwueSA9IC0xXG4gICAgfVxuICB9XG5cbiAgLy8gY29sbGlkZWQgd2l0aCB0aGUgb2JqZWN0IVxuICByZXR1cm4ge1xuICAgIG5vcm1hbCxcbiAgICBuZWFyOiB2ZWMyLmNyZWF0ZShcbiAgICAgIGZyb20ueCArIGhpdE5lYXIgKiBkaXIueCxcbiAgICAgIGZyb20ueSArIGhpdE5lYXIgKiBkaXIueVxuICAgICksXG4gICAgZmFyOiB2ZWMyLmNyZWF0ZShcbiAgICAgIGZyb20ueCArIGhpdEZhciAqIGRpci54LFxuICAgICAgZnJvbS55ICsgaGl0RmFyICogZGlyLnlcbiAgICApLFxuICAgIHRpbWVPZkNvbGxpc2lvbjogaGl0TmVhclxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsaW5lVnNSZWN0LFxuICByZWN0VnNSZWN0LFxuICBwb2ludFZzUmVjdFxufSIsImNvbnN0IHsgZ2FtZSwgdmVjMiwgbW91c2UgfSA9IHJlcXVpcmUoJ0Blcmlrd2F0c29uL2JyYW1ibGUnKVxuY29uc3QgeyBsaW5lVnNSZWN0IH0gPSByZXF1aXJlKCcuL2FhYmInKVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJylcbmNvbnN0IGcgPSBnYW1lLmNyZWF0ZSgpXG5jb25zdCBtID0gbW91c2UuY3JlYXRlKClcblxuY29uc3QgbGV2ZWwgPSBbXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbiAgWzEsIDAsIDAsIDIsIDIsIDAsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAyLCAyLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMV0sXG4gIFsxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAyLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMV0sXG4gIFsxLCAwLCAxLCAwLCAyLCAwLCAwLCAyLCAwLCAxXSxcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxuXVxuXG5jb25zdCBjYW52YXNTaXplID0ge1xuICB3aWR0aDogMTI4MCxcbiAgaGVpZ2h0OiA3MjBcbn1cblxuY29uc3QgdGlsZVNpemUgPSAyNFxuXG5jb25zdCBjb2x1bW5XaWR0aCA9IDEwXG5jb25zdCBzY3JlZW5JbkNvbHVtbnMgPSBNYXRoLmNlaWwoY2FudmFzU2l6ZS53aWR0aCAvIGNvbHVtbldpZHRoKVxuXG5jb25zdCBoZXJvID0ge1xuICBwb3NpdGlvbjogdmVjMi5jcmVhdGUoXG4gICAgKHRpbGVTaXplICogKGxldmVsWzBdLmxlbmd0aCAvIDIpKSwgXG4gICAgdGlsZVNpemUgKiAobGV2ZWwubGVuZ3RoIC8gMilcbiAgKSxcbiAgYW5nbGU6IC05MFxufVxuXG5mdW5jdGlvbiBzaGFkZUNvbG9yKGNvbG9yLCBwZXJjZW50KSB7XG4gIGxldCBSID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsMyksMTYpO1xuICBsZXQgRyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLDUpLDE2KTtcbiAgbGV0IEIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoNSw3KSwxNik7XG5cbiAgUiA9IHBhcnNlSW50KFIgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICBHID0gcGFyc2VJbnQoRyAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG4gIEIgPSBwYXJzZUludChCICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcblxuICBSID0gKFIgPCAyNTUpID8gUiA6IDI1NTsgIFxuICBHID0gKEcgPCAyNTUpID8gRyA6IDI1NTsgIFxuICBCID0gKEIgPCAyNTUpID8gQiA6IDI1NTsgIFxuXG4gIGxldCBSUiA9ICgoUi50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitSLnRvU3RyaW5nKDE2KTpSLnRvU3RyaW5nKDE2KSk7XG4gIGxldCBHRyA9ICgoRy50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitHLnRvU3RyaW5nKDE2KTpHLnRvU3RyaW5nKDE2KSk7XG4gIGxldCBCQiA9ICgoQi50b1N0cmluZygxNikubGVuZ3RoPT0xKT9cIjBcIitCLnRvU3RyaW5nKDE2KTpCLnRvU3RyaW5nKDE2KSk7XG5cbiAgcmV0dXJuIGAjJHtSUn0ke0dHfSR7QkJ9YDtcbn1cblxuZnVuY3Rpb24gdG9SYWRpYW5zIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogKE1hdGguUEkgLyAxODApXG59XG5cbmZ1bmN0aW9uIHJhbmdlIChmcm9tLCB0bywgbGVuZ3RoKSB7XG4gIGNvbnN0IHJhbmdlID0gTWF0aC5hYnMoZnJvbSAtIHRvKVxuICBjb25zdCBzdGVwID0gcmFuZ2UgLyAobGVuZ3RoIC0gMSlcbiAgXG4gIGxldCByZXN1bHQgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQucHVzaChmcm9tICsgKGkgKiBzdGVwKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gZ2V0UmF5cyAoZm92LCBob3Jpem9uLCBjb2x1bW5zKSB7XG4gIGxldCByZXN1bHQgPSBbXVxuXG4gIGxldCBmcm9tID0gLShmb3YgLyAyKVxuICBsZXQgdG8gPSBmb3YgLyAyXG5cbiAgbGV0IHN0ZXBzID0gcmFuZ2UoZnJvbSwgdG8sIHNjcmVlbkluQ29sdW1ucylcblxuICByZXR1cm4gc3RlcHMubWFwKGFuZ2xlID0+IHtcbiAgICBjb25zdCB0aGV0YSA9IHRvUmFkaWFucyhoZXJvLmFuZ2xlICsgYW5nbGUpXG5cbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogaGVyby5wb3NpdGlvbixcbiAgICAgIHRvOiB7XG4gICAgICAgIHg6IGhlcm8ucG9zaXRpb24ueCArIGhvcml6b24gKiBNYXRoLmNvcyh0aGV0YSksXG4gICAgICAgIHk6IGhlcm8ucG9zaXRpb24ueSArIGhvcml6b24gKiBNYXRoLnNpbih0aGV0YSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmcuYXR0YWNoVG8oY29udGFpbmVyKVxuZy5zZXRTaXplKDEyODAsIDcyMClcblxubGV0IGNvbGxpc2lvbnMgPSBbXVxuXG5nLnNldFVwZGF0ZShkdCA9PiB7XG4gIGhlcm8uYW5nbGUgKz0gMVxuXG4gIGNvbGxpc2lvbnMgPSBbXVxuXG4gIGNvbnN0IHJheXMgPSBnZXRSYXlzKDYwLCAxNTAsIHNjcmVlbkluQ29sdW1ucylcblxuICByYXlzLmZvckVhY2gobGluZSA9PiB7XG4gICAgY29uc3QgY29sbGlzaW9uQ2FuZGlkYXRlcyA9IFtdXG5cbiAgICBsZXZlbC5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICAgIGxldmVsW3ldLmZvckVhY2goKGNvbCwgeCkgPT4ge1xuICAgICAgICBpZiAobGV2ZWxbeV1beF0gIT09IDApIHtcbiAgICAgICAgICBjb2xsaXNpb25DYW5kaWRhdGVzLnB1c2goe1xuICAgICAgICAgICAgeDogeCAqIHRpbGVTaXplLFxuICAgICAgICAgICAgeTogeSAqIHRpbGVTaXplLFxuICAgICAgICAgICAgd2lkdGg6IHRpbGVTaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHR5cGU6IGxldmVsW3ldW3hdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgY29uc3QgY29sbGlzaW9uID0gY29sbGlzaW9uQ2FuZGlkYXRlc1xuICAgICAgLm1hcChyZWN0ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByYXk6IGxpbmUsXG4gICAgICAgICAgcmVjdCwgXG4gICAgICAgICAgY29sbGlzaW9uOiBsaW5lVnNSZWN0KGxpbmUsIHJlY3QpIFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihjb2xsaXNpb24gPT4gY29sbGlzaW9uLmNvbGxpc2lvbiAhPT0gZmFsc2UpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5jb2xsaXNpb24udGltZU9mQ29sbGlzaW9uID4gYi5jb2xsaXNpb24udGltZU9mQ29sbGlzaW9uKVswXVxuXG4gICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbilcbiAgfSlcbn0pXG5cbmcuc2V0UmVuZGVyKGdmeCA9PiB7XG4gIGdmeC5jbGVhcignIzIzMjMyMycpXG4gIFxuICAvLyBkcmF3IGEgXCJmbG9vclwiXG4gIGdmeC5yZWN0KHsgeDogMCwgeTogY2FudmFzU2l6ZS5oZWlnaHQgLyAyIH0sIHsgd2lkdGg6IGNhbnZhc1NpemUud2lkdGgsIGhlaWdodDogY2FudmFzU2l6ZS5oZWlnaHQgLyAyfSwgeyBmaWxsOiB7IGNvbG91cjogJyM0YzIwMDgnIH0gfSkgXG5cbiAgLy8gZHJhdyBhIFwiY2VpbGluZ1wiXG4gIGdmeC5yZWN0KHsgeDogMCwgeTogMCB9LCB7IHdpZHRoOiBjYW52YXNTaXplLndpZHRoLCBoZWlnaHQ6IGNhbnZhc1NpemUuaGVpZ2h0IC8gMn0sIHsgZmlsbDogeyBjb2xvdXI6ICcjMzA4ZGNjJyB9IH0pXG4gXG5cbiAgLy8gZHJhdyB0aGUgd2FsbHMgXG5cbiAgY29sbGlzaW9ucy5mb3JFYWNoKCh7IGNvbGxpc2lvbiwgcmVjdCwgcmF5IH0sIGkpID0+IHtcbiAgICBpZiAoIWNvbGxpc2lvbikgeyByZXR1cm4gfVxuXG4gICAgY29uc3QgcmF5QW5nbGUgPSBNYXRoLmF0YW4yKFxuICAgICAgcmF5LnRvLnkgLSByYXkuZnJvbS55LFxuICAgICAgcmF5LnRvLnggLSByYXkuZnJvbS54XG4gICAgKVxuXG4gICAgY29uc3QgY29ycmVjdGVkQW5nbGUgPSByYXlBbmdsZSAtIHRvUmFkaWFucyhoZXJvLmFuZ2xlKVxuICAgIGNvbnN0IG5ld0Rpc3RhbmNlID0gY29sbGlzaW9uLnRpbWVPZkNvbGxpc2lvbiAqIE1hdGguY29zKGNvcnJlY3RlZEFuZ2xlKVxuXG4gICAgdmFyIGhlaWdodCA9ICgwLjI0ICogY2FudmFzU2l6ZS5oZWlnaHQpIC8gbmV3RGlzdGFuY2VcbiAgICBsZXQgY29sb3VyID0gKHJlY3QudHlwZSA9PT0gMikgPyAnIzgwMDA4MCcgOiAnI0ZGRUYwMCdcblxuICAgIGNvbnN0IHNoYWRlID0gTWF0aC5yb3VuZChuZXdEaXN0YW5jZSAqIDEwMClcbiAgICBjb2xvdXIgPSBzaGFkZUNvbG9yKGNvbG91ciwgNTAgLSBzaGFkZSlcblxuICAgIGdmeC5yZWN0KFxuICAgICAgeyB4OiBpICogY29sdW1uV2lkdGgsIHk6IChjYW52YXNTaXplLmhlaWdodCAtIGhlaWdodCkgLyAyIH0sXG4gICAgICB7IHdpZHRoOiBjb2x1bW5XaWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSxcbiAgICAgIHsgZmlsbDogeyBjb2xvdXIgfSB9XG4gICAgKVxuICB9KVxuXG4gIC8vIGRyYXcgdGhlIG1pbmltYXBcbiAgZ2Z4LnJlY3QoXG4gICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgeyB3aWR0aDogbGV2ZWxbMF0ubGVuZ3RoICogdGlsZVNpemUsIGhlaWdodDogbGV2ZWwubGVuZ3RoICogdGlsZVNpemUgfSxcbiAgICB7IGZpbGw6IHsgY29sb3VyOiAnYmxhY2snIH0gfVxuICApXG5cbiAgLy8gZHJhdyB0aGUgY29sbGlzaW9ucyBcbiAgY29sbGlzaW9ucy5mb3JFYWNoKGNvbGxpc2lvbiA9PiB7XG4gICAgaWYgKCFjb2xsaXNpb24pIHsgcmV0dXJuIH1cblxuICAgIGNvbnN0IHJlY3QgPSBjb2xsaXNpb24ucmVjdFxuICAgIGNvbGxpc2lvbiA9IGNvbGxpc2lvbi5jb2xsaXNpb25cblxuICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgIGdmeC5saW5lKGhlcm8ucG9zaXRpb24sIGNvbGxpc2lvbi5uZWFyLCB7IGNvbG91cjogJ3JlZCcgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ2Z4LmxpbmUoaGVyby5wb3NpdGlvbiwgY29sbGlzaW9uLnRvLCB7IGNvbG91cjogJ3doaXRlJyB9KVxuICAgIH1cbiAgfSlcbiAgXG4gIGxldmVsLmZvckVhY2goKHJvdywgeSkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIHgpID0+IHtcbiAgICAgIHN3aXRjaCAobGV2ZWxbeV1beF0pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGdmeC5zcXVhcmUoXG4gICAgICAgICAgICB7IHg6IHggKiB0aWxlU2l6ZSwgeTogeSAqIHRpbGVTaXplIH0sIFxuICAgICAgICAgICAgdGlsZVNpemUsXG4gICAgICAgICAgICB7IGZpbGw6IHsgY29sb3VyOiAnI0ZGRUYwMCcgfSB9XG4gICAgICAgICAgKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICBnZnguc3F1YXJlKFxuICAgICAgICAgICAgeyB4OiB4ICogdGlsZVNpemUsIHk6IHkgKiB0aWxlU2l6ZSB9LCBcbiAgICAgICAgICAgIHRpbGVTaXplLFxuICAgICAgICAgICAgeyBmaWxsOiB7IGNvbG91cjogJyM4MDAwODAnIH0gfVxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGdmeC5saW5lKFxuICAgICAgICB7IHg6IHggKiB0aWxlU2l6ZSwgeTogMCB9LFxuICAgICAgICB7IHg6IHggKiB0aWxlU2l6ZSwgeTogbGV2ZWwubGVuZ3RoICogdGlsZVNpemUgfSxcbiAgICAgICAgeyBjb2xvdXI6ICcjOTk5OTk5JyB9XG4gICAgICApICAgXG4gICAgfSlcblxuICAgIGdmeC5saW5lKFxuICAgICAgeyB4OiAwLCB5OiB5ICogdGlsZVNpemUgfSxcbiAgICAgIHsgeDogcm93Lmxlbmd0aCAqIHRpbGVTaXplLCB5OiB5ICogdGlsZVNpemUgfSxcbiAgICAgIHsgY29sb3VyOiAnIzk5OTk5OScgfVxuICAgIClcbiAgfSlcblxuICAvLyBkcmF3IHRoZSBoZXJvIFxuICBnZnguY2lyY2xlKGhlcm8ucG9zaXRpb24sIDgpXG5cbiAgLy8geDogaGVyby5wb3NpdGlvbi54ICsgaG9yaXpvbiAqIE1hdGguY29zKHRoZXRhKSxcbiAgLy8geTogaGVyby5wb3NpdGlvbi55ICsgaG9yaXpvbiAqIE1hdGguc2luKHRoZXRhKVxuXG4gIGdmeC5saW5lKFxuICAgIGhlcm8ucG9zaXRpb24sIFxuICAgIHsgXG4gICAgICB4OiBoZXJvLnBvc2l0aW9uLnggKyAxNSAqIE1hdGguY29zKHRvUmFkaWFucyhoZXJvLmFuZ2xlKSksIFxuICAgICAgeTogaGVyby5wb3NpdGlvbi55ICsgMTUgKiBNYXRoLnNpbih0b1JhZGlhbnMoaGVyby5hbmdsZSkpXG4gICAgfSxcbiAgICB7IGNvbG91cjogJ3doaXRlJyB9XG4gIClcbn0pXG5cbmcuc3RhcnQoKSJdLCJzb3VyY2VSb290IjoiIn0=