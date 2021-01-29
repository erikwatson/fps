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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9icmFtYmxlLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi4vQnJhbWJsZS9kaXN0L2dyYXBoaWNzLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi4vQnJhbWJsZS9kaXN0L2lucHV0LmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvaW5wdXQvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL0JyYW1ibGUvZGlzdC9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvdXRpbHMvbnVtYmVyLmpzIiwid2VicGFjazovLy8uLi9CcmFtYmxlL2Rpc3QvdmVjMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWFiYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidmVjMiIsInBvaW50VnNSZWN0IiwicG9pbnQiLCJyZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsInJlY3RWc1JlY3QiLCJyZWN0QSIsInJlY3RCIiwibGluZVZzUmVjdCIsImxpbmUiLCJmcm9tIiwiY3JlYXRlIiwidG8iLCJkaXIiLCJjbG9uZSIsInN1YnRyYWN0IiwiaW52ZGlyIiwidGltZU5lYXIiLCJ0aW1lRmFyIiwiaXNOYU4iLCJ0ZW1wTmVhciIsInRlbXBGYXIiLCJoaXROZWFyIiwiTWF0aCIsIm1heCIsImhpdEZhciIsIm1pbiIsIm5vcm1hbCIsImNvbnNvbGUiLCJsb2ciLCJuZWFyIiwiZmFyIiwidGltZU9mQ29sbGlzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsImdhbWUiLCJtb3VzZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImciLCJtIiwibGV2ZWwiLCJjYW52YXNTaXplIiwidGlsZVNpemUiLCJjb2x1bW5XaWR0aCIsInNjcmVlbkluQ29sdW1ucyIsImNlaWwiLCJoZXJvIiwicG9zaXRpb24iLCJsZW5ndGgiLCJhbmdsZSIsInNoYWRlQ29sb3IiLCJjb2xvciIsInBlcmNlbnQiLCJSIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJHIiwiQiIsIlJSIiwidG9TdHJpbmciLCJHRyIsIkJCIiwidG9SYWRpYW5zIiwiZGVncmVlcyIsIlBJIiwicmFuZ2UiLCJhYnMiLCJzdGVwIiwicmVzdWx0IiwiaSIsInB1c2giLCJnZXRSYXlzIiwiZm92IiwiaG9yaXpvbiIsImNvbHVtbnMiLCJzdGVwcyIsIm1hcCIsInRoZXRhIiwiY29zIiwic2luIiwiYXR0YWNoVG8iLCJzZXRTaXplIiwiY29sbGlzaW9ucyIsInNldFVwZGF0ZSIsImR0IiwicmF5cyIsImZvckVhY2giLCJjb2xsaXNpb25DYW5kaWRhdGVzIiwicm93IiwiY29sIiwidHlwZSIsImNvbGxpc2lvbiIsInJheSIsImZpbHRlciIsInNvcnQiLCJhIiwiYiIsInNldFJlbmRlciIsImdmeCIsImNsZWFyIiwiZmlsbCIsImNvbG91ciIsInJheUFuZ2xlIiwiYXRhbjIiLCJjb3JyZWN0ZWRBbmdsZSIsIm5ld0Rpc3RhbmNlIiwic2hhZGUiLCJyb3VuZCIsImNvbHVtbiIsInNxdWFyZSIsImNpcmNsZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUc2RixTQUFTLENBQUM3RixJQUF2QjtBQUNBNkYsYUFBUyxHQUFHQSxTQUFTLENBQUNBLFNBQXRCOztBQUVBLFFBQUlBLFNBQUosRUFBZTtBQUNiTyxTQUFHLENBQUMzRixJQUFKLENBQVN1QyxJQUFJLENBQUNDLFFBQWQsRUFBd0I0QyxTQUFTLENBQUMvRCxJQUFsQyxFQUF3QztBQUFFeUUsY0FBTSxFQUFFO0FBQVYsT0FBeEM7QUFDRCxLQUZELE1BRU87QUFDTEgsU0FBRyxDQUFDM0YsSUFBSixDQUFTdUMsSUFBSSxDQUFDQyxRQUFkLEVBQXdCNEMsU0FBUyxDQUFDakYsRUFBbEMsRUFBc0M7QUFBRTJGLGNBQU0sRUFBRTtBQUFWLE9BQXRDO0FBQ0Q7QUFDRixHQVhELEVBckVpQixDQWtGakI7O0FBQ0FILEtBQUcsQ0FBQ1ksTUFBSixDQUFXaEUsSUFBSSxDQUFDQyxRQUFoQixFQUEwQixDQUExQixFQW5GaUIsQ0FxRmpCO0FBQ0E7O0FBRUFtRCxLQUFHLENBQUMzRixJQUFKLENBQ0V1QyxJQUFJLENBQUNDLFFBRFAsRUFFRTtBQUNFaEQsS0FBQyxFQUFFK0MsSUFBSSxDQUFDQyxRQUFMLENBQWNoRCxDQUFkLEdBQWtCLEtBQUtzQixJQUFJLENBQUN5RCxHQUFMLENBQVNoQixTQUFTLENBQUNoQixJQUFJLENBQUNHLEtBQU4sQ0FBbEIsQ0FENUI7QUFFRWpELEtBQUMsRUFBRThDLElBQUksQ0FBQ0MsUUFBTCxDQUFjL0MsQ0FBZCxHQUFrQixLQUFLcUIsSUFBSSxDQUFDMEQsR0FBTCxDQUFTakIsU0FBUyxDQUFDaEIsSUFBSSxDQUFDRyxLQUFOLENBQWxCO0FBRjVCLEdBRkYsRUFNRTtBQUFFb0QsVUFBTSxFQUFFO0FBQVYsR0FORjtBQVFELENBaEdEO0FBa0dBL0QsQ0FBQyxDQUFDeUUsS0FBRixHIiwiZmlsZSI6ImZwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZEFsbFRlcnJhaW4gPSBleHBvcnRzLmxvYWRUZXJyYWluID0gZXhwb3J0cy5sb2FkQWxsSW1hZ2VzID0gZXhwb3J0cy5sb2FkSW1hZ2UgPSBleHBvcnRzLmxvYWRBbGxUZXh0ID0gZXhwb3J0cy5sb2FkU3RyaW5nID0gdm9pZCAwO1xuZnVuY3Rpb24gbG9hZFN0cmluZyhwYXRoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJlamVjdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHBhdGgpO1xuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZFN0cmluZyA9IGxvYWRTdHJpbmc7XG5mdW5jdGlvbiBsb2FkQWxsVGV4dChwYXRocykge1xuICAgIGlmIChwYXRocyA9PT0gdm9pZCAwKSB7IHBhdGhzID0gW107IH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocGF0aHMubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBsb2FkU3RyaW5nKHgpOyB9KSk7XG59XG5leHBvcnRzLmxvYWRBbGxUZXh0ID0gbG9hZEFsbFRleHQ7XG5mdW5jdGlvbiBsb2FkSW1hZ2UocGF0aCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gcGF0aDtcbiAgICB9KTtcbn1cbmV4cG9ydHMubG9hZEltYWdlID0gbG9hZEltYWdlO1xuZnVuY3Rpb24gbG9hZEFsbEltYWdlcyhwYXRocykge1xuICAgIGlmIChwYXRocyA9PT0gdm9pZCAwKSB7IHBhdGhzID0gW107IH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocGF0aHMubWFwKGZ1bmN0aW9uICh4KSB7IHJldHVybiBsb2FkSW1hZ2UoeCk7IH0pKTtcbn1cbmV4cG9ydHMubG9hZEFsbEltYWdlcyA9IGxvYWRBbGxJbWFnZXM7XG4vLyBEb3dubG9hZHMgYSBUZXJyYWluIGZpbGUsXG4vLyByZWFkcyBpdCxcbi8vIGRvd25sb2FkcyB0aGUgcmVsYXRlZCBpbWFnZSBmaWxlLFxuLy8gcmV0dXJucyBhIG5ldyBUZXJyYWluIG9iamVjdFxuZnVuY3Rpb24gbG9hZFRlcnJhaW4ocGF0aCkge1xuICAgIHZhciBkZXNjcmlwdGlvbjtcbiAgICByZXR1cm4gbG9hZFN0cmluZyhwYXRoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoZGVzY3JpcHRpb24ucGF0aCk7XG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGltYWdlKSB7IHJldHVybiAoe1xuICAgICAgICBuYW1lOiBkZXNjcmlwdGlvbi5uYW1lLFxuICAgICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlLFxuICAgICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICAgIHRpbGVzOiBkZXNjcmlwdGlvbi50aWxlc1xuICAgIH0pOyB9KTtcbn1cbmV4cG9ydHMubG9hZFRlcnJhaW4gPSBsb2FkVGVycmFpbjtcbmZ1bmN0aW9uIGxvYWRBbGxUZXJyYWluKHBhdGhzKSB7XG4gICAgaWYgKHBhdGhzID09PSB2b2lkIDApIHsgcGF0aHMgPSBbXTsgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChwYXRocy5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIGxvYWRUZXJyYWluKHgpOyB9KSk7XG59XG5leHBvcnRzLmxvYWRBbGxUZXJyYWluID0gbG9hZEFsbFRlcnJhaW47XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgbG9hZEltYWdlOiBsb2FkSW1hZ2UsXG4gICAgbG9hZFN0cmluZzogbG9hZFN0cmluZyxcbiAgICBsb2FkQWxsVGV4dDogbG9hZEFsbFRleHQsXG4gICAgbG9hZEFsbEltYWdlczogbG9hZEFsbEltYWdlcyxcbiAgICBsb2FkVGVycmFpbjogbG9hZFRlcnJhaW4sXG4gICAgbG9hZEFsbFRlcnJhaW46IGxvYWRBbGxUZXJyYWluXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9hc3NldHNcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhc3NldHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFzc2V0c18xLmRlZmF1bHQ7IH0gfSk7XG52YXIgZ2FtZV8xID0gcmVxdWlyZShcIi4vZ2FtZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdhbWVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdhbWVfMS5kZWZhdWx0OyB9IH0pO1xudmFyIGdyaWRfMSA9IHJlcXVpcmUoXCIuL2dyaWRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJncmlkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBncmlkXzEuZGVmYXVsdDsgfSB9KTtcbnZhciBncmFwaGljc18xID0gcmVxdWlyZShcIi4vZ3JhcGhpY3NcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJncmFwaGljc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZ3JhcGhpY3NfMS5kZWZhdWx0OyB9IH0pO1xudmFyIGlucHV0XzEgPSByZXF1aXJlKFwiLi9pbnB1dFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImtleWJvYXJkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbnB1dF8xLmtleWJvYXJkOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibW91c2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlucHV0XzEubW91c2U7IH0gfSk7XG52YXIgc3ByaXRlXzEgPSByZXF1aXJlKFwiLi9zcHJpdGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzcHJpdGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNwcml0ZV8xLmRlZmF1bHQ7IH0gfSk7XG52YXIgdmVjMl8xID0gcmVxdWlyZShcIi4vdmVjMlwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlYzJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZlYzJfMS5kZWZhdWx0OyB9IH0pO1xudmFyIHN0b3JhZ2VfMSA9IHJlcXVpcmUoXCIuL3N0b3JhZ2VcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzYXZlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yYWdlXzEuc2F2ZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImxvYWRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JhZ2VfMS5sb2FkOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ3JhcGhpY3NfMSA9IHJlcXVpcmUoXCIuL2dyYXBoaWNzXCIpO1xudmFyIGlucHV0XzEgPSByZXF1aXJlKFwiLi9pbnB1dFwiKTtcbnZhciBjcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJhY2tncm91bmRDb2xvciA9ICcjMDAwMDAwJztcbiAgICB2YXIgdXBkYXRlID0gbnVsbDtcbiAgICB2YXIgcmVuZGVyID0gbnVsbDtcbiAgICAvLyBUaGVzZSBhcmUgdXNlZCBmb3IgY2FsY3VsYXRpbmcgdGhlIERlbHRhIFRpbWUgZm9yIHRoZSBGcmFtZVxuICAgIHZhciBwcmV2VGltZSA9IDA7XG4gICAgdmFyIGZyYW1lVGltZSA9IDA7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgZ3JhcGhpY3MgPSBncmFwaGljc18xLmRlZmF1bHQuY3JlYXRlKGN0eCk7XG4gICAgY2FudmFzLmlkID0gJ2JyYW1ibGUtZ2FtZSc7XG4gICAgdmFyIG1vdXNlSW5wdXQgPSBpbnB1dF8xLm1vdXNlLmNyZWF0ZShjYW52YXMpO1xuICAgIHZhciBzZXRCYWNrZ3JvdW5kQ29sb3IgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgfTtcbiAgICB2YXIgc2V0VXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHVwZGF0ZSA9IGNhbGxiYWNrO1xuICAgIH07XG4gICAgdmFyIHNldFJlbmRlciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZW5kZXIgPSBjYWxsYmFjaztcbiAgICB9O1xuICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICB1cGRhdGUoMSAvIDYwKTsgLy8gVE9ETzogZmFrZSBpdCBhdCA2MGZwcyBmb3Igbm93XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICAgICAgZ3JhcGhpY3MuY2xlYXIoYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICAgIHJlbmRlcihncmFwaGljcyk7XG4gICAgICAgIH1cbiAgICAgICAgbW91c2VJbnB1dC51cGRhdGUoKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9O1xuICAgIHZhciBzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW91c2VJbnB1dCA9IGlucHV0XzEubW91c2UuY3JlYXRlKGNhbnZhcyk7XG4gICAgICAgIG1vdXNlSW5wdXQuc3RhcnQoKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICB9O1xuICAgIHZhciBzZXRTaXplID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfTtcbiAgICB2YXIgYXR0YWNoVG8gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgfTtcbiAgICAvLyBOT1RFOiBNdXN0IGJlIGNhbGxlZCBBRlRFUiBhbnl0aGluZyB0aGF0IHdvdWxkIGNoYW5nZSBvdXIgY29udGV4dC5cbiAgICAvLyAgICAgICBzZXRTaXplIGZvciBleGFtcGxlLlxuICAgIHZhciBzZXRTbW9vdGhpbmcgPSBmdW5jdGlvbiAodG8pIHtcbiAgICAgICAgaWYgKHRvID09PSB2b2lkIDApIHsgdG8gPSB0cnVlOyB9XG4gICAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0bztcbiAgICB9O1xuICAgIHZhciBkaXNhYmxlQ29udGV4dE1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0U2l6ZTogc2V0U2l6ZSxcbiAgICAgICAgc2V0VXBkYXRlOiBzZXRVcGRhdGUsXG4gICAgICAgIHNldFJlbmRlcjogc2V0UmVuZGVyLFxuICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I6IHNldEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgYXR0YWNoVG86IGF0dGFjaFRvLFxuICAgICAgICBkaXNhYmxlQ29udGV4dE1lbnU6IGRpc2FibGVDb250ZXh0TWVudSxcbiAgICAgICAgc2V0U21vb3RoaW5nOiBzZXRTbW9vdGhpbmcsXG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgZ2V0TW91c2VTdGF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbW91c2VJbnB1dC5nZXRTdGF0ZSgpOyB9XG4gICAgfTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgY3JlYXRlOiBjcmVhdGVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBudW1iZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL251bWJlclwiKTtcbmZ1bmN0aW9uIGNsZWFyKGN0eCwgY29sb3VyKSB7XG4gICAgcmVjdChjdHgsIHsgeDogMCwgeTogMCB9LCB7IHdpZHRoOiBjdHguY2FudmFzLndpZHRoLCBoZWlnaHQ6IGN0eC5jYW52YXMuaGVpZ2h0IH0sIHtcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgY29sb3VyOiBjb2xvdXJcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gc3F1YXJlKGN0eCwgcG9zaXRpb24sIHNpemUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0UmVjdDsgfVxuICAgIHJlY3QoY3R4LCB7IHg6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnkgfSwgeyB3aWR0aDogc2l6ZSwgaGVpZ2h0OiBzaXplIH0sIG9wdGlvbnMpO1xufVxudmFyIGRlZmF1bHRSZWN0ID0ge1xuICAgIGZpbGw6IHtcbiAgICAgICAgY29sb3VyOiAnI2ZmZmZmZicsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIGxpbmU6IHtcbiAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgIGNvbG91cjogJyMwMDAwMDAnLFxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfVxufTtcbmZ1bmN0aW9uIHJlY3QoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRSZWN0OyB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZpbGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBvcHRpb25zLmZpbGwuY29sb3VyO1xuICAgICAgICBjdHguZmlsbFJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gb3B0aW9ucy5saW5lLmNvbG91cjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IG9wdGlvbnMubGluZS53aWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICAgIH1cbn1cbnZhciBkZWZhdWx0TGluZSA9IHtcbiAgICB3aWR0aDogMixcbiAgICBjb2xvdXI6ICcjMDAwMDAwJ1xufTtcbmZ1bmN0aW9uIGxpbmUoY3R4LCBmcm9tLCB0bywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRMaW5lOyB9XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gb3B0aW9ucy5jb2xvdXI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oZnJvbS54LCBmcm9tLnkpO1xuICAgIGN0eC5saW5lVG8odG8ueCwgdG8ueSk7XG4gICAgY3R4LnN0cm9rZSgpO1xufVxudmFyIGRlZmF1bHRDaXJjbGUgPSB7XG4gICAgZmlsbDoge1xuICAgICAgICBjb2xvdXI6ICcjMDAwMDAwJyxcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgbGluZToge1xuICAgICAgICBjb2xvdXI6ICcjZmZmZmZmJyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgd2lkdGg6IDJcbiAgICB9XG59O1xuZnVuY3Rpb24gY2lyY2xlKGN0eCwgcG9zaXRpb24sIHJhZGl1cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRDaXJjbGU7IH1cbiAgICAvLyBub3QgaGFwcHkgd2l0aCB0aGlzIHJlYWxseSwgbWFrZSBhbm90aGVyIGZ1bmN0aW9uIGkgdGhpbmtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wdGlvbnMuZmlsbC5jb2xvdXI7XG4gICAgfVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBvcHRpb25zLmxpbmUuY29sb3VyO1xuICAgIGN0eC5saW5lV2lkdGggPSBvcHRpb25zLmxpbmUud2lkdGg7XG4gICAgY3R4LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZpbGwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbn1cbmZ1bmN0aW9uIGltYWdlKGN0eCwgcG9zaXRpb24sIHNpemUsIGltYWdlKSB7XG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xufVxuZnVuY3Rpb24gc3ViSW1hZ2UoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgc3ViUG9zaXRpb24sIHN1YlNpemUsIGltYWdlKSB7XG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgc3ViUG9zaXRpb24ueCwgc3ViUG9zaXRpb24ueSwgc3ViU2l6ZS53aWR0aCwgc3ViU2l6ZS5oZWlnaHQsIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbn1cbmZ1bmN0aW9uIHNwcml0ZShjdHgsIHNwcml0ZSkge1xuICAgIHZhciBoYWxmV2lkdGggPSBzcHJpdGUuc2l6ZS53aWR0aCAvIDI7XG4gICAgdmFyIGhhbGZIZWlnaHQgPSBzcHJpdGUuc2l6ZS5oZWlnaHQgLyAyO1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZShzcHJpdGUucG9zaXRpb24ueCArIGhhbGZXaWR0aCwgc3ByaXRlLnBvc2l0aW9uLnkgKyBoYWxmSGVpZ2h0KTtcbiAgICBjdHgucm90YXRlKG51bWJlcl8xLmRlZmF1bHQudG9SYWRpYW5zKHNwcml0ZS5yb3RhdGlvbikpO1xuICAgIGlmIChzcHJpdGUuZnJhbWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgc3ViSW1hZ2UoY3R4LCB7XG4gICAgICAgICAgICB4OiAtaGFsZldpZHRoLFxuICAgICAgICAgICAgeTogLWhhbGZIZWlnaHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgd2lkdGg6IHNwcml0ZS5zaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBzcHJpdGUuc2l6ZS5oZWlnaHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgeDogc3ByaXRlLmZyYW1lc1tzcHJpdGUuZnJhbWVdLnBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiBzcHJpdGUuZnJhbWVzW3Nwcml0ZS5mcmFtZV0ucG9zaXRpb24ueVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB3aWR0aDogc3ByaXRlLmZyYW1lc1tzcHJpdGUuZnJhbWVdLnNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNwcml0ZS5mcmFtZXNbc3ByaXRlLmZyYW1lXS5zaXplLmhlaWdodFxuICAgICAgICB9LCBzcHJpdGUudGV4dHVyZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbWFnZShjdHgsIHtcbiAgICAgICAgICAgIHg6IC1oYWxmV2lkdGgsXG4gICAgICAgICAgICB5OiAtaGFsZkhlaWdodFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB3aWR0aDogc3ByaXRlLnNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHNwcml0ZS5zaXplLmhlaWdodFxuICAgICAgICB9LCBzcHJpdGUudGV4dHVyZSk7XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG59XG5mdW5jdGlvbiB0eHQoY3R4LCBwb3NpdGlvbiwgdGV4dCwgY29sb3VyLCBmb250KSB7XG4gICAgaWYgKHRleHQgPT09IHZvaWQgMCkgeyB0ZXh0ID0gJyc7IH1cbiAgICBpZiAoY29sb3VyID09PSB2b2lkIDApIHsgY29sb3VyID0gJyMwMDAwMDAnOyB9XG4gICAgaWYgKGZvbnQgPT09IHZvaWQgMCkgeyBmb250ID0gJzE2cHQgc2Fucy1zZXJpZic7IH1cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3VyO1xuICAgIGN0eC5mb250ID0gZm9udDtcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICBjdHguZmlsbFRleHQodGV4dCwgcG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG59XG5mdW5jdGlvbiB0aWxlKGN0eCwgcG9zaXRpb24sIHRpbGVzaGVldCwgZ3JpZFBvc2l0aW9uLCB0aWxlc2hlZXRQb3NpdGlvbiwgc2NhbGUsIHRpbGVTaXplKSB7XG4gICAgc3ViSW1hZ2UoY3R4LCB7XG4gICAgICAgIHg6IHBvc2l0aW9uLnggKyBzY2FsZSAqIChncmlkUG9zaXRpb24ueCAqIHRpbGVTaXplLndpZHRoKSxcbiAgICAgICAgeTogcG9zaXRpb24ueSArIHNjYWxlICogKGdyaWRQb3NpdGlvbi55ICogdGlsZVNpemUuaGVpZ2h0KVxuICAgIH0sIHtcbiAgICAgICAgd2lkdGg6IHNjYWxlICogdGlsZVNpemUud2lkdGgsXG4gICAgICAgIGhlaWdodDogc2NhbGUgKiB0aWxlU2l6ZS5oZWlnaHRcbiAgICB9LCB7XG4gICAgICAgIHg6IHRpbGVTaXplLndpZHRoICogdGlsZXNoZWV0UG9zaXRpb24ueCxcbiAgICAgICAgeTogdGlsZVNpemUuaGVpZ2h0ICogdGlsZXNoZWV0UG9zaXRpb24ueVxuICAgIH0sIHtcbiAgICAgICAgd2lkdGg6IHRpbGVTaXplLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRpbGVTaXplLmhlaWdodFxuICAgIH0sIHRpbGVzaGVldCk7XG59XG4vLyB0aWxlZ3JpZDogYSAyZCBhcnJheSBvZiBudW1iZXJzIHJlcHJlc2VudGluZyB0ZXJyYWluIHR5cGVzXG4vLyBzcHJpdGVzaGVldHM6IEFuIG9iamVjdCwgZWFjaCBrZXkgaXMgdGhlIHZhbHVlIHRoYXQgcmVwcmVzZW50cyBhIHRpbGUgZnJvbSB0aGlzIHNoZWV0XG5mdW5jdGlvbiB0aWxlcyhjdHgsIHBvc2l0aW9uLCB0aWxlR3JpZCwgc3ByaXRlU2hlZXRzLCBzY2FsZSwgdGlsZVNpemUpIHtcbiAgICB2YXIgZGlyVmFsdWVzID0ge1xuICAgICAgICBOVzogMSxcbiAgICAgICAgTjogMixcbiAgICAgICAgTkU6IDQsXG4gICAgICAgIEU6IDgsXG4gICAgICAgIFNFOiAxNixcbiAgICAgICAgUzogMzIsXG4gICAgICAgIFNXOiA2NCxcbiAgICAgICAgVzogMTI4XG4gICAgfTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICh5KSB7XG4gICAgICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgIGlmICh0aWxlR3JpZFt5XVt4XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSRUFMIFZBTFVFU1xuICAgICAgICAgICAgdmFyIHRsID0geSA+IDAgPyB0aWxlR3JpZFt5IC0gMV1beCAtIDFdIDogMDtcbiAgICAgICAgICAgIHZhciB0bSA9IHkgPiAwID8gdGlsZUdyaWRbeSAtIDFdW3hdIDogMDtcbiAgICAgICAgICAgIHZhciB0ciA9IHkgPiAwID8gdGlsZUdyaWRbeSAtIDFdW3ggKyAxXSA6IDA7XG4gICAgICAgICAgICB2YXIgbWwgPSB0aWxlR3JpZFt5XVt4IC0gMV07XG4gICAgICAgICAgICB2YXIgbSA9IHRpbGVHcmlkW3ldW3hdO1xuICAgICAgICAgICAgdmFyIG1yID0gdGlsZUdyaWRbeV1beCArIDFdO1xuICAgICAgICAgICAgdmFyIGJsID0geSA8IHRpbGVHcmlkLmxlbmd0aCAtIDEgPyB0aWxlR3JpZFt5ICsgMV1beCAtIDFdIDogMDtcbiAgICAgICAgICAgIHZhciBibSA9IHkgPCB0aWxlR3JpZC5sZW5ndGggLSAxID8gdGlsZUdyaWRbeSArIDFdW3hdIDogMDtcbiAgICAgICAgICAgIHZhciBiciA9IHkgPCB0aWxlR3JpZC5sZW5ndGggLSAxID8gdGlsZUdyaWRbeSArIDFdW3ggKyAxXSA6IDA7XG4gICAgICAgICAgICAvLyBCSU5BUlkgVkFMVUVTXG4gICAgICAgICAgICB2YXIgbiA9IG0gPT09IHRtID8gMSA6IDA7XG4gICAgICAgICAgICB2YXIgZSA9IG0gPT09IG1yID8gMSA6IDA7XG4gICAgICAgICAgICB2YXIgcyA9IG0gPT09IGJtID8gMSA6IDA7XG4gICAgICAgICAgICB2YXIgdyA9IG0gPT09IG1sID8gMSA6IDA7XG4gICAgICAgICAgICB2YXIgbncgPSBtID09PSB0bSAmJiBtID09PSBtbCA/IChtID09PSB0bCA/IDEgOiAwKSA6IDA7XG4gICAgICAgICAgICB2YXIgbmUgPSBtID09PSB0bSAmJiBtID09PSBtciA/IChtID09PSB0ciA/IDEgOiAwKSA6IDA7XG4gICAgICAgICAgICB2YXIgc3cgPSBtID09PSBibSAmJiBtID09PSBtbCA/IChtID09PSBibCA/IDEgOiAwKSA6IDA7XG4gICAgICAgICAgICB2YXIgc2UgPSBtID09PSBibSAmJiBtID09PSBtciA/IChtID09PSBiciA/IDEgOiAwKSA6IDA7XG4gICAgICAgICAgICB2YXIgc3VtID0gZGlyVmFsdWVzLk5XICogbncgK1xuICAgICAgICAgICAgICAgIGRpclZhbHVlcy5OICogbiArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLk5FICogbmUgK1xuICAgICAgICAgICAgICAgIGRpclZhbHVlcy5FICogZSArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLlNFICogc2UgK1xuICAgICAgICAgICAgICAgIGRpclZhbHVlcy5TICogcyArXG4gICAgICAgICAgICAgICAgZGlyVmFsdWVzLlNXICogc3cgK1xuICAgICAgICAgICAgICAgIGRpclZhbHVlcy5XICogdztcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgd2hpY2ggc2hlZXQgd2UncmUgc3VwcG9zZWQgdG8gYmUgZHJhd2luZyBmcm9tXG4gICAgICAgICAgICB2YXIgc2hlZXQgPSBzcHJpdGVTaGVldHMuZmlsdGVyKGZ1bmN0aW9uIChzaGVldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaGVldC50eXBlID09PSB0aWxlR3JpZFt5XVt4XTtcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgaWYgKCFzaGVldCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTaGVldCBcIiArIHRpbGVHcmlkW3ldW3hdICsgXCIgbm90IGZvdW5kIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdm9pZCAwIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9ucyA9IHNoZWV0LnRpbGVzLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geC50eXBlID09PSBzdW07IH0pO1xuICAgICAgICAgICAgLy8gTm90ZTogSnVzdCBwaWNraW5nIGEgcmFuZG9tIG9uZSBvZiB0aGUgdmFyaWFudHMgZXZlcnkgdGltZSB3ZSByZW5kZXIgZm9yIG5vd1xuICAgICAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHNlbGVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2VsZWN0aW9ucy5sZW5ndGgpXTtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aWxlKGN0eCwgcG9zaXRpb24sIHNoZWV0LmltYWdlLCB7IHg6IHgsIHk6IHkgfSwgc2VsZWN0aW9uLnBvc2l0aW9uLCBzY2FsZSwgc2VsZWN0aW9uLnNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaWxlIG5vdCBkZWZpbmVkIFwiICsgc3VtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aWxlR3JpZFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgdmFyIHN0YXRlXzIgPSBfbG9vcF8yKHgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZV8yID09PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZV8yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRpbGVHcmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMSh5KTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZV8xID09PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXzEudmFsdWU7XG4gICAgfVxufVxudmFyIGRlZmF1bHREcm9wU2hhZG93ID0ge1xuICAgIHNoYWRvd2NvbG91cjogJyMwMDAwMDAnLFxuICAgIHNoYWRvd0JsdXI6IDYsXG4gICAgc2hhZG93T2Zmc2V0WDogNCxcbiAgICBzaGFkb3dPZmZzZXRZOiA0XG59O1xuZnVuY3Rpb24gc2hhZG93KGN0eCwgZHJhd2luZ09wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0RHJvcFNoYWRvdzsgfVxuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnNoYWRvd0NvbG9yID0gb3B0aW9ucy5zaGFkb3djb2xvdXI7XG4gICAgY3R4LnNoYWRvd0JsdXIgPSBvcHRpb25zLnNoYWRvd0JsdXI7XG4gICAgY3R4LnNoYWRvd09mZnNldFggPSBvcHRpb25zLnNoYWRvd09mZnNldFg7XG4gICAgY3R4LnNoYWRvd09mZnNldFkgPSBvcHRpb25zLnNoYWRvd09mZnNldFk7XG4gICAgZHJhd2luZ09wZXJhdGlvbnMoKTtcbiAgICBjdHgucmVzdG9yZSgpO1xufVxuZnVuY3Rpb24gZG9kZ2UoY3R4LCBkcmF3aW5nT3BlcmF0aW9ucykge1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdjb2xvdXItZG9kZ2UnO1xuICAgIGRyYXdpbmdPcGVyYXRpb25zKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbn1cbmZ1bmN0aW9uIG92ZXJsYXkoY3R4LCBkcmF3aW5nT3BlcmF0aW9ucykge1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdvdmVybGF5JztcbiAgICBkcmF3aW5nT3BlcmF0aW9ucygpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG59XG5mdW5jdGlvbiB0cmFuc3BhcmVuY3koY3R4LCBkcmF3aW5nT3BlcmF0aW9ucywgYWxwaGEpIHtcbiAgICBpZiAoYWxwaGEgPT09IHZvaWQgMCkgeyBhbHBoYSA9IDAuMjU7IH1cbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5nbG9iYWxBbHBoYSA9IGFscGhhO1xuICAgIGRyYXdpbmdPcGVyYXRpb25zKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZShjdHgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjaXJjbGU6IGZ1bmN0aW9uIChwb3NpdGlvbiwgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0Q2lyY2xlOyB9XG4gICAgICAgICAgICBjaXJjbGUoY3R4LCBwb3NpdGlvbiwgcmFkaXVzLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXI6IGZ1bmN0aW9uIChjb2xvdXIpIHtcbiAgICAgICAgICAgIGNsZWFyKGN0eCwgY29sb3VyKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3F1YXJlOiBmdW5jdGlvbiAocG9zaXRpb24sIHNpemUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHRSZWN0OyB9XG4gICAgICAgICAgICBzcXVhcmUoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlY3Q6IGZ1bmN0aW9uIChwb3NpdGlvbiwgc2l6ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gZGVmYXVsdFJlY3Q7IH1cbiAgICAgICAgICAgIHJlY3QoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiBmdW5jdGlvbiAocG9zaXRpb24sIHNpemUsIGltZykge1xuICAgICAgICAgICAgaW1hZ2UoY3R4LCBwb3NpdGlvbiwgc2l6ZSwgaW1nKTtcbiAgICAgICAgfSxcbiAgICAgICAgbGluZTogZnVuY3Rpb24gKGZyb20sIHRvLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0TGluZTsgfVxuICAgICAgICAgICAgbGluZShjdHgsIGZyb20sIHRvLCBvcHRpb25zKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3ByaXRlOiBmdW5jdGlvbiAoc3ByKSB7XG4gICAgICAgICAgICBzcHJpdGUoY3R4LCBzcHIpO1xuICAgICAgICB9LFxuICAgICAgICBzdWJJbWFnZTogZnVuY3Rpb24gKHBvc2l0aW9uLCBzaXplLCBzdWJQb3NpdGlvbiwgc3ViU2l6ZSwgaW1nKSB7XG4gICAgICAgICAgICBzdWJJbWFnZShjdHgsIHBvc2l0aW9uLCBzaXplLCBzdWJQb3NpdGlvbiwgc3ViU2l6ZSwgaW1nKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDogZnVuY3Rpb24gKHBvc2l0aW9uLCB0ZXh0LCBjb2xvdXIsIGZvbnQpIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdm9pZCAwKSB7IHBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07IH1cbiAgICAgICAgICAgIGlmICh0ZXh0ID09PSB2b2lkIDApIHsgdGV4dCA9ICcnOyB9XG4gICAgICAgICAgICBpZiAoY29sb3VyID09PSB2b2lkIDApIHsgY29sb3VyID0gJyMwMDAwMDAnOyB9XG4gICAgICAgICAgICBpZiAoZm9udCA9PT0gdm9pZCAwKSB7IGZvbnQgPSAnMTZwdCBzYW5zLXNlcmlmJzsgfVxuICAgICAgICAgICAgdHh0KGN0eCwgcG9zaXRpb24sIHRleHQsIGNvbG91ciwgZm9udCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRpbGVzOiBmdW5jdGlvbiAocG9zaXRpb24sIHRpbGVHcmlkLCBzcHJpdGVTaGVldHMsIHNjYWxlLCB0aWxlU2l6ZSkge1xuICAgICAgICAgICAgdGlsZXMoY3R4LCBwb3NpdGlvbiwgdGlsZUdyaWQsIHNwcml0ZVNoZWV0cywgc2NhbGUsIHRpbGVTaXplKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hhZG93OiBmdW5jdGlvbiAoZHJhd2luZ09wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IGRlZmF1bHREcm9wU2hhZG93OyB9XG4gICAgICAgICAgICBzaGFkb3coY3R4LCBkcmF3aW5nT3BlcmF0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvZGdlOiBmdW5jdGlvbiAoZHJhd2luZ09wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGRvZGdlKGN0eCwgZHJhd2luZ09wZXJhdGlvbnMpO1xuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5OiBmdW5jdGlvbiAoZHJhd2luZ09wZXJhdGlvbnMpIHtcbiAgICAgICAgICAgIG92ZXJsYXkoY3R4LCBkcmF3aW5nT3BlcmF0aW9ucyk7XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zcGFyZW5jeTogZnVuY3Rpb24gKGRyYXdpbmdPcGVyYXRpb25zLCBhbHBoYSkge1xuICAgICAgICAgICAgaWYgKGFscGhhID09PSB2b2lkIDApIHsgYWxwaGEgPSAwLjI1OyB9XG4gICAgICAgICAgICB0cmFuc3BhcmVuY3koY3R4LCBkcmF3aW5nT3BlcmF0aW9ucywgYWxwaGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBjcmVhdGU6IGNyZWF0ZSxcbiAgICBjaXJjbGU6IGNpcmNsZSxcbiAgICBjbGVhcjogY2xlYXIsXG4gICAgaW1hZ2U6IGltYWdlLFxuICAgIGxpbmU6IGxpbmUsXG4gICAgcmVjdDogcmVjdCxcbiAgICBzcHJpdGU6IHNwcml0ZSxcbiAgICBzcXVhcmU6IHNxdWFyZSxcbiAgICBzdWJJbWFnZTogc3ViSW1hZ2UsXG4gICAgdGV4dDogdHh0LFxuICAgIHRpbGVzOiB0aWxlcyxcbiAgICBzaGFkb3c6IHNoYWRvdyxcbiAgICBkb2RnZTogZG9kZ2UsXG4gICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICB0cmFuc3BhcmVuY3k6IHRyYW5zcGFyZW5jeVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1ha2UyREFycmF5KHdpZHRoLCBoZWlnaHQsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7IHdpZHRoID0gMTsgfVxuICAgIGlmIChoZWlnaHQgPT09IHZvaWQgMCkgeyBoZWlnaHQgPSAxOyB9XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSA9PT0gdm9pZCAwKSB7IGRlZmF1bHRWYWx1ZSA9IG51bGw7IH1cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgICAgICB2YXIgcm93ID0gW107XG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgICAgICAgcm93LnB1c2goZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY29weVRpbGVzKHRpbGVzKSB7XG4gICAgcmV0dXJuIHRpbGVzLm1hcChmdW5jdGlvbiAoYXJyKSB7IHJldHVybiBhcnIuc2xpY2UoKTsgfSk7XG59XG52YXIgZGVmYXVsdEdyaWQgPSB7XG4gICAgcG9zOiB7IHg6IDAsIHk6IDAgfSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGRpdmlzaW9uczogNCxcbiAgICB0aWxlV2lkdGg6IDgsXG4gICAgdGlsZUhlaWdodDogOCxcbiAgICBzY2FsZTogMVxufTtcbmZ1bmN0aW9uIGZpbGwodGlsZXMsIHBvc2l0aW9uLCB0YXJnZXQsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIGdyaWRDbG9uZSA9IGNvcHlUaWxlcyh0aWxlcyk7XG4gICAgZnVuY3Rpb24gZmxvb2RGaWxsKHBvc2l0aW9uLCB0YXJnZXQsIHJlcGxhY2VtZW50KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlQXRQb3NpdGlvbiA9IGdyaWRDbG9uZVtwb3NpdGlvbi55XVtwb3NpdGlvbi54XTtcbiAgICAgICAgaWYgKHZhbHVlQXRQb3NpdGlvbiAhPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzV2l0aGluQm91bmRzID0gcG9zaXRpb24ueCA8IGdyaWRDbG9uZVtwb3NpdGlvbi55XS5sZW5ndGggJiZcbiAgICAgICAgICAgIHBvc2l0aW9uLnggPj0gMCAmJlxuICAgICAgICAgICAgcG9zaXRpb24ueSA8IGdyaWRDbG9uZS5sZW5ndGggJiZcbiAgICAgICAgICAgIHBvc2l0aW9uLnkgPj0gMDtcbiAgICAgICAgaWYgKGlzV2l0aGluQm91bmRzKSB7XG4gICAgICAgICAgICBncmlkQ2xvbmVbcG9zaXRpb24ueV1bcG9zaXRpb24ueF0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi55IDwgZ3JpZENsb25lLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBmbG9vZEZpbGwoeyB4OiBwb3NpdGlvbi54LCB5OiBwb3NpdGlvbi55ICsgMSB9LCB0YXJnZXQsIHJlcGxhY2VtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi55ID4gMCkge1xuICAgICAgICAgICAgICAgIGZsb29kRmlsbCh7IHg6IHBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnkgLSAxIH0sIHRhcmdldCwgcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPCBncmlkQ2xvbmVbMF0ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGZsb29kRmlsbCh7IHg6IHBvc2l0aW9uLnggKyAxLCB5OiBwb3NpdGlvbi55IH0sIHRhcmdldCwgcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLnggPiAwKSB7XG4gICAgICAgICAgICAgICAgZmxvb2RGaWxsKHsgeDogcG9zaXRpb24ueCAtIDEsIHk6IHBvc2l0aW9uLnkgfSwgdGFyZ2V0LCByZXBsYWNlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHJ1ZSkge1xuICAgICAgICBmbG9vZEZpbGwocG9zaXRpb24sIHRhcmdldCwgcmVwbGFjZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZ3JpZENsb25lO1xufVxuZnVuY3Rpb24gY3JlYXRlKHNpemUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBkZWZhdWx0R3JpZDsgfVxuICAgIG9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdEdyaWQpLCBvcHRpb25zKTtcbiAgICB2YXIgdGlsZXMgPSBtYWtlMkRBcnJheShzaXplLndpZHRoLCBzaXplLmhlaWdodCwgMCk7XG4gICAgdmFyIHBvcyA9IHsgeDogb3B0aW9ucy5wb3MueCwgeTogb3B0aW9ucy5wb3MueSB9O1xuICAgIHZhciB2aXNpYmxlID0gb3B0aW9ucy52aXNpYmxlO1xuICAgIHZhciBkaXZpc2lvbnMgPSBvcHRpb25zLmRpdmlzaW9ucztcbiAgICB2YXIgdGlsZVdpZHRoID0gb3B0aW9ucy50aWxlV2lkdGg7XG4gICAgdmFyIHRpbGVIZWlnaHQgPSBvcHRpb25zLnRpbGVIZWlnaHQ7XG4gICAgdmFyIHRpbGVTaXplID0gb3B0aW9ucy50aWxlV2lkdGg7XG4gICAgdmFyIHNjYWxlID0gb3B0aW9ucy5zY2FsZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkaXZpc2lvbnM6IGRpdmlzaW9ucyxcbiAgICAgICAgcG9zOiBwb3MsXG4gICAgICAgIHRpbGVIZWlnaHQ6IHRpbGVIZWlnaHQsXG4gICAgICAgIHRpbGVzOiB0aWxlcyxcbiAgICAgICAgdGlsZVdpZHRoOiB0aWxlV2lkdGgsXG4gICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgIHRpbGVTaXplOiB0aWxlU2l6ZSxcbiAgICAgICAgc2NhbGU6IHNjYWxlXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBjcmVhdGU6IGNyZWF0ZSxcbiAgICBmaWxsOiBmaWxsLFxuICAgIGNvcHlUaWxlczogY29weVRpbGVzXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmtleWJvYXJkID0gZXhwb3J0cy5tb3VzZSA9IHZvaWQgMDtcbnZhciBtb3VzZV8xID0gcmVxdWlyZShcIi4vaW5wdXQvbW91c2VcIik7XG5mdW5jdGlvbiBjcmVhdGUoY2FudmFzKSB7XG4gICAgdmFyIG1vdXNlSW5wdXQgPSBtb3VzZV8xLmRlZmF1bHQuY3JlYXRlKGNhbnZhcyk7XG4gICAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb3VzZUlucHV0LnN0YXJ0KCk7XG4gICAgfTtcbiAgICB2YXIgdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtb3VzZUlucHV0LnVwZGF0ZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgICAgZ2V0U3RhdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlSW5wdXQuZ2V0U3RhdGUoKTsgfVxuICAgIH07XG59XG5leHBvcnRzLm1vdXNlID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlXG59O1xuZXhwb3J0cy5rZXlib2FyZCA9IHtcbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2tleWJvYXJkIGlucHV0IHN0dWInKTtcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gY3JlYXRlKGNhbnZhcykge1xuICAgIHZhciBkZWZhdWx0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBsZWZ0OiBkZWZhdWx0QnV0dG9uU3RhdGUoKSxcbiAgICAgICAgICAgIHdoZWVsOiBkZWZhdWx0V2hlZWxTdGF0ZSgpLFxuICAgICAgICAgICAgcmlnaHQ6IGRlZmF1bHRCdXR0b25TdGF0ZSgpXG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgZGVmYXVsdEJ1dHRvblN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgICAgICBqdXN0UHJlc3NlZDogZmFsc2UsXG4gICAgICAgICAgICByZWxlYXNlZDogZmFsc2UsXG4gICAgICAgICAgICBqdXN0UmVsZWFzZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgZGVmYXVsdFdoZWVsU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidXR0b25TdGF0ZSA9IGRlZmF1bHRCdXR0b25TdGF0ZSgpO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGJ1dHRvblN0YXRlKSwgeyBtb3ZlZDogZmFsc2UsIGRpcmVjdGlvbjogJ3VwJyB9KTtcbiAgICB9O1xuICAgIHZhciBwcmV2TW91c2UgPSBkZWZhdWx0U3RhdGUoKTtcbiAgICB2YXIgbW91c2UgPSBkZWZhdWx0U3RhdGUoKTtcbiAgICB2YXIgY2xvbmUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcbiAgICB9O1xuICAgIHZhciByZWxhdGl2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgYm91bmRzID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIGJvdW5kcy5sZWZ0LFxuICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIGJvdW5kcy50b3BcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBtb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBuZXdQb3MgPSByZWxhdGl2ZShldmVudCk7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uID0gbmV3UG9zO1xuICAgIH07XG4gICAgdmFyIGRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIG1vdXNlLmxlZnQucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbW91c2Uud2hlZWwucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgbW91c2UucmlnaHQucHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciB1cCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbW91c2UubGVmdC5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgbW91c2Uud2hlZWwucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIG1vdXNlLnJpZ2h0LnByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHdoZWVsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIG1vdXNlLndoZWVsLm1vdmVkID0gZXZlbnQuZGVsdGFZID09PSAwID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICBpZiAobW91c2Uud2hlZWwubW92ZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtb3VzZS53aGVlbC5kaXJlY3Rpb24gPSBldmVudC5kZWx0YVkgPCAwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbW91c2Uud2hlZWwubW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcHJldk1vdXNlID0gY2xvbmUobW91c2UpO1xuICAgIH07XG4gICAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBtb3VzZSBldmVudHNcbiAgICAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmUpO1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG93bik7XG4gICAgICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXApO1xuICAgICAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB3aGVlbCk7XG4gICAgICAgIC8vIGRlZmF1bHQgbW91c2UgcG9zaXRpb24sIGNlbnRlciBvZiBzY3JlZW5cbiAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IGNhbnZhcy53aWR0aCAvIDI7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFN0YXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZTsgfSxcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZVxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSB7IGNyZWF0ZTogY3JlYXRlIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGNyZWF0ZShwb3NpdGlvbiwgc2l6ZSwgcm90YXRpb24sIHRleHR1cmUsIGNvbG91cikge1xuICAgIGlmIChyb3RhdGlvbiA9PT0gdm9pZCAwKSB7IHJvdGF0aW9uID0gMDsgfVxuICAgIGlmIChjb2xvdXIgPT09IHZvaWQgMCkgeyBjb2xvdXIgPSAnI2ZmZmZmZic7IH1cbiAgICB2YXIgZnJhbWVzID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgdGV4dHVyZTogdGV4dHVyZSxcbiAgICAgICAgY29sb3VyOiBjb2xvdXIsXG4gICAgICAgIGZyYW1lOiAwLFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIHNldEZyYW1lczogZnVuY3Rpb24gKG5ld0ZyYW1lcykge1xuICAgICAgICAgICAgZnJhbWVzID0gbmV3RnJhbWVzO1xuICAgICAgICB9LFxuICAgICAgICBhZGRGcmFtZTogZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBmcmFtZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJhbWVzO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcm90YXRpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcm90YXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldCByb3RhdGlvbihkZWdyZWVzKSB7XG4gICAgICAgICAgICByb3RhdGlvbiA9IGRlZ3JlZXMgPj0gMzYwID8gMzYwIC0gZGVncmVlcyA6IGRlZ3JlZXM7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGNyZWF0ZTogY3JlYXRlXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWQgPSBleHBvcnRzLnNhdmUgPSB2b2lkIDA7XG5mdW5jdGlvbiBzYXZlKCkge1xufVxuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmZ1bmN0aW9uIGxvYWQoKSB7XG59XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRvRGVncmVlcyA9IGV4cG9ydHMudG9SYWRpYW5zID0gdm9pZCAwO1xuZnVuY3Rpb24gdG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKTtcbn1cbmV4cG9ydHMudG9SYWRpYW5zID0gdG9SYWRpYW5zO1xuZnVuY3Rpb24gdG9EZWdyZWVzKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqICgxODAgLyBNYXRoLlBJKTtcbn1cbmV4cG9ydHMudG9EZWdyZWVzID0gdG9EZWdyZWVzO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHRvUmFkaWFuczogdG9SYWRpYW5zLFxuICAgIHRvRGVncmVlczogdG9EZWdyZWVzXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBjcmVhdGUoX3gsIF95KSB7XG4gICAgdmFyIHggPSBfeDtcbiAgICB2YXIgeSA9IF95O1xuICAgIHZhciBhZGQgPSBmdW5jdGlvbiAodikge1xuICAgICAgICB4ICs9IHYueDtcbiAgICAgICAgeSArPSB2Lnk7XG4gICAgfTtcbiAgICB2YXIgYWRkU2NhbGFyID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgeCArPSBzO1xuICAgICAgICB5ICs9IHM7XG4gICAgfTtcbiAgICB2YXIgZGl2aWRlID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgeCAvPSB2Lng7XG4gICAgICAgIHkgLz0gdi55O1xuICAgIH07XG4gICAgdmFyIGRpdmlkZVNjYWxhciA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHggLz0gcztcbiAgICAgICAgeSAvPSBzO1xuICAgIH07XG4gICAgdmFyIGRvdCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB4ICogdi54ICsgeSAqIHYueTtcbiAgICB9O1xuICAgIHZhciBnZXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfTtcbiAgICB2YXIgZ2V0T3Bwb3NpdGUgPSBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gY3JlYXRlKC12LngsIC12LnkpO1xuICAgIH07XG4gICAgdmFyIGdldFBlcnAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGUoLXksIHgpO1xuICAgIH07XG4gICAgdmFyIGlzRXF1YWxUbyA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB4ID09IHYueCAmJiB5ID09IHYueTtcbiAgICB9O1xuICAgIHZhciBtdWx0aXBseSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHggKj0gdi54O1xuICAgICAgICB5ICo9IHYueTtcbiAgICB9O1xuICAgIHZhciBtdWx0aXBseVNjYWxhciA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHggKj0gcztcbiAgICAgICAgeSAqPSBzO1xuICAgIH07XG4gICAgdmFyIG5vcm1hbGlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGwgPSBnZXRMZW5ndGgoKTtcbiAgICAgICAgeCA9IHggLyBsO1xuICAgICAgICB5ID0geSAvIGw7XG4gICAgfTtcbiAgICB2YXIgc2V0TGVuZ3RoID0gZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgbm9ybWFsaXNlKCk7XG4gICAgICAgIG11bHRpcGx5U2NhbGFyKGwpO1xuICAgIH07XG4gICAgdmFyIHN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgeCAtPSB2Lng7XG4gICAgICAgIHkgLT0gdi55O1xuICAgIH07XG4gICAgdmFyIHN1YnRyYWN0U2NhbGFyID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgeCAtPSBzO1xuICAgICAgICB5IC09IHM7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQ6IGFkZCxcbiAgICAgICAgYWRkU2NhbGFyOiBhZGRTY2FsYXIsXG4gICAgICAgIGNsb25lOiBjbG9uZSxcbiAgICAgICAgZGl2aWRlOiBkaXZpZGUsXG4gICAgICAgIGRpdmlkZVNjYWxhcjogZGl2aWRlU2NhbGFyLFxuICAgICAgICBkb3Q6IGRvdCxcbiAgICAgICAgZ2V0TGVuZ3RoOiBnZXRMZW5ndGgsXG4gICAgICAgIGdldE9wcG9zaXRlOiBnZXRPcHBvc2l0ZSxcbiAgICAgICAgZ2V0UGVycDogZ2V0UGVycCxcbiAgICAgICAgaXNFcXVhbFRvOiBpc0VxdWFsVG8sXG4gICAgICAgIG11bHRpcGx5OiBtdWx0aXBseSxcbiAgICAgICAgbXVsdGlwbHlTY2FsYXI6IG11bHRpcGx5U2NhbGFyLFxuICAgICAgICBub3JtYWxpc2U6IG5vcm1hbGlzZSxcbiAgICAgICAgc2V0TGVuZ3RoOiBzZXRMZW5ndGgsXG4gICAgICAgIHN1YnRyYWN0OiBzdWJ0cmFjdCxcbiAgICAgICAgc3VidHJhY3RTY2FsYXI6IHN1YnRyYWN0U2NhbGFyLFxuICAgICAgICBzZXQgeChfeCkge1xuICAgICAgICAgICAgeCA9IF94O1xuICAgICAgICB9LFxuICAgICAgICBnZXQgeCgpIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeShfeSkge1xuICAgICAgICAgICAgeSA9IF95O1xuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiB5O1xuICAgICAgICB9XG4gICAgfTtcbn1cbnZhciBmcm9tRGVncmVlcyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgdmFyIHJhZCA9IGRlZ3JlZXMgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgcmV0dXJuIGNyZWF0ZShNYXRoLmNvcyhyYWQpLCBNYXRoLnNpbihyYWQpKTtcbn07XG52YXIgY2xvbmUgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBjcmVhdGUodi54LCB2LnkpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBjbG9uZTogY2xvbmUsXG4gICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgZnJvbURlZ3JlZXM6IGZyb21EZWdyZWVzXG59O1xuIiwiY29uc3QgeyB2ZWMyIH0gPSByZXF1aXJlKCdAZXJpa3dhdHNvbi9icmFtYmxlJylcblxuLy8gd29ya3NcbmZ1bmN0aW9uIHBvaW50VnNSZWN0IChwb2ludCwgcmVjdCkge1xuICByZXR1cm4gcG9pbnQueCA+PSByZWN0LnggJiZcbiAgICBwb2ludC55ID49IHJlY3QueSAmJlxuICAgIHBvaW50LnggPCByZWN0LnggKyByZWN0LndpZHRoICYmXG4gICAgcG9pbnQueSA8IHJlY3QueSArIHJlY3QuaGVpZ2h0XG59XG5cbi8vIHdvcmtzXG5mdW5jdGlvbiByZWN0VnNSZWN0IChyZWN0QSwgcmVjdEIpIHtcbiAgcmV0dXJuIHJlY3RBLnggPCByZWN0Qi54ICsgcmVjdEIud2lkdGggJiZcbiAgICByZWN0QS54ICsgcmVjdEEud2lkdGggPiByZWN0Qi54ICYmXG4gICAgcmVjdEEueSA8IHJlY3RCLnkgKyByZWN0Qi5oZWlnaHQgJiZcbiAgICByZWN0QS55ICsgcmVjdEEuaGVpZ2h0ID4gcmVjdEIueVxufVxuXG4vLyB3b3Jrc1xuLy8gcmV0dXJucyBmYWxzZSBpZiBubyBjb2xsaXNpb24gb2NjdXJyZWQsIG90aGVyd2lzZSBpdCByZXR1cm5zIGFuIG9iamVjdFxuLy8gY29udGFpbmluZyB0aGUgcmVzdWx0cyBvZiB0aGUgY29sbGlzaW9uXG4vLyB7IG5lYXIsIGZhciwgbm9ybWFsIH1cbmZ1bmN0aW9uIGxpbmVWc1JlY3QgKGxpbmUsIHJlY3QpIHtcbiAgY29uc3QgZnJvbSA9IHZlYzIuY3JlYXRlKGxpbmUuZnJvbS54LCBsaW5lLmZyb20ueSlcbiAgY29uc3QgdG8gPSB2ZWMyLmNyZWF0ZShsaW5lLnRvLngsIGxpbmUudG8ueSlcblxuICBsZXQgZGlyID0gdmVjMi5jbG9uZSh0bylcbiAgZGlyLnN1YnRyYWN0KGZyb20pXG5cbiAgY29uc3QgaW52ZGlyID0ge1xuICAgIHg6IDEuMCAvIGRpci54LFxuICAgIHk6IDEuMCAvIGRpci55XG4gIH1cblxuICBsZXQgdGltZU5lYXIgPSB7XG4gICAgeDogKHJlY3QueCAtIGxpbmUuZnJvbS54KSAqIGludmRpci54LFxuICAgIHk6IChyZWN0LnkgLSBsaW5lLmZyb20ueSkgKiBpbnZkaXIueVxuICB9XG5cbiAgbGV0IHRpbWVGYXIgPSB7XG4gICAgeDogKHJlY3QueCArIHJlY3Qud2lkdGggLSBsaW5lLmZyb20ueCkgKiBpbnZkaXIueCxcbiAgICB5OiAocmVjdC55ICsgcmVjdC5oZWlnaHQgLSBsaW5lLmZyb20ueSkgKiBpbnZkaXIueVxuICB9XG5cbiAgaWYgKGlzTmFOKHRpbWVOZWFyLngpIHx8IGlzTmFOKHRpbWVOZWFyLnkpKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3RpbWVOZWFyIGlzIE5hTicsIHRpbWVOZWFyLngsIHRpbWVOZWFyLnkpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAoaXNOYU4odGltZUZhci54KSB8fCBpc05hTih0aW1lRmFyLnkpKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3RpbWVGYXIgaXMgTmFOJywgdGltZUZhci54LCB0aW1lRmFyLnkpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBzb3J0IHRoZSBkaXN0YW5jZXNcbiAgbGV0IHRlbXBOZWFyID0geyAuLi50aW1lTmVhciB9XG4gIGxldCB0ZW1wRmFyID0geyAuLi50aW1lRmFyIH1cblxuICBpZiAodGVtcE5lYXIueCA+IHRlbXBGYXIueCkge1xuICAgIHRpbWVOZWFyLnggPSB0ZW1wRmFyLnhcbiAgICB0aW1lRmFyLnggPSB0ZW1wTmVhci54XG4gIH1cblxuICB0ZW1wTmVhciA9IHsgLi4udGltZU5lYXIgfVxuICB0ZW1wRmFyID0geyAuLi50aW1lRmFyIH1cblxuICBpZiAodGVtcE5lYXIueSA+IHRlbXBGYXIueSkge1xuICAgIHRpbWVOZWFyLnkgPSB0ZW1wRmFyLnlcbiAgICB0aW1lRmFyLnkgPSB0ZW1wTmVhci55XG4gIH1cblxuICAvLyBubyBjb2xsaXNpb24gZGV0ZWN0ZWRcbiAgaWYgKHRpbWVOZWFyLnggPiB0aW1lRmFyLnkgfHwgdGltZU5lYXIueSA+IHRpbWVGYXIueCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgaGl0TmVhciA9IE1hdGgubWF4KHRpbWVOZWFyLngsIHRpbWVOZWFyLnkpXG4gIGNvbnN0IGhpdEZhciA9IE1hdGgubWluKHRpbWVGYXIueCwgdGltZUZhci55KVxuXG4gIC8vIGFib3J0IGlmIHJheSBpcyBmYWNpbmcgYXdheSBmcm9tIG91ciBvYmplY3RcbiAgaWYgKGhpdEZhciA8IDApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGFib3J0IGlmIHRoZSByYXkgZG9lcyBub3QgcmVhY2ggdGhlIG9iamVjdFxuICBpZiAoaGl0TmVhciA+IDEpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGFib3J0IGlmIHRoZSByYXkncyBmaXJzdCBjb2xsaXNpb24gaXMgYmVoaW5kIHVzXG4gIGlmIChoaXROZWFyIDwgMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gY29uc3RydWN0IGEgdmVjdG9yIHRvIGhvbGQgdGhlIG5vcm1hbCBvZiB0aGUgc3VyZmFjZVxuICBsZXQgbm9ybWFsID0gdmVjMi5jcmVhdGUoMCwgMClcblxuICBpZiAodGltZU5lYXIueCA+IHRpbWVOZWFyLnkpIHtcbiAgICBpZiAoaW52ZGlyLnggPCAwKSB7XG4gICAgICBub3JtYWwueCA9IDFcbiAgICAgIG5vcm1hbC55ID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICBub3JtYWwueCA9IC0xXG4gICAgICBub3JtYWwueSA9IDBcbiAgICB9XG4gIH0gZWxzZSBpZiAodGltZU5lYXIueCA8IHRpbWVOZWFyLnkpIHtcbiAgICBpZiAoaW52ZGlyLnkgPCAwKSB7XG4gICAgICBub3JtYWwueCA9IDBcbiAgICAgIG5vcm1hbC55ID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBub3JtYWwueCA9IDBcbiAgICAgIG5vcm1hbC55ID0gLTFcbiAgICB9XG4gIH0gZWxzZSBpZiAodGltZU5lYXIueCA9PT0gdGltZU5lYXIueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGludmRpci54LCBpbnZkaXIueSlcbiAgICBpZiAoaW52ZGlyLnggPCAwICYmIGludmRpci55IDwgMCkge1xuICAgICAgY29uc29sZS5sb2coJ3RsJylcbiAgICAgIG5vcm1hbC54ID0gLTFcbiAgICAgIG5vcm1hbC55ID0gMVxuICAgIH0gZWxzZSBpZiAoaW52ZGlyLnggPiAwICYmIGludmRpci55IDwgMCkge1xuICAgICAgY29uc29sZS5sb2coJ3RyJylcbiAgICAgIG5vcm1hbC54ID0gMVxuICAgICAgbm9ybWFsLnkgPSAxXG4gICAgfSBlbHNlIGlmIChpbnZkaXIueCA8IDAgJiYgaW52ZGlyLnkgPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnYmwnKVxuICAgICAgbm9ybWFsLnggPSAtMVxuICAgICAgbm9ybWFsLnkgPSAtMVxuICAgIH0gZWxzZSBpZiAoaW52ZGlyLnggPiAwICYmIGludmRpci55ID4gMCkge1xuICAgICAgY29uc29sZS5sb2coJ2JyJylcbiAgICAgIG5vcm1hbC54ID0gMVxuICAgICAgbm9ybWFsLnkgPSAtMVxuICAgIH1cbiAgfVxuXG4gIC8vIGNvbGxpZGVkIHdpdGggdGhlIG9iamVjdCFcbiAgcmV0dXJuIHtcbiAgICBub3JtYWwsXG4gICAgbmVhcjogdmVjMi5jcmVhdGUoXG4gICAgICBmcm9tLnggKyBoaXROZWFyICogZGlyLngsXG4gICAgICBmcm9tLnkgKyBoaXROZWFyICogZGlyLnlcbiAgICApLFxuICAgIGZhcjogdmVjMi5jcmVhdGUoXG4gICAgICBmcm9tLnggKyBoaXRGYXIgKiBkaXIueCxcbiAgICAgIGZyb20ueSArIGhpdEZhciAqIGRpci55XG4gICAgKSxcbiAgICB0aW1lT2ZDb2xsaXNpb246IGhpdE5lYXJcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGluZVZzUmVjdCxcbiAgcmVjdFZzUmVjdCxcbiAgcG9pbnRWc1JlY3Rcbn0iLCJjb25zdCB7IGdhbWUsIHZlYzIsIG1vdXNlIH0gPSByZXF1aXJlKCdAZXJpa3dhdHNvbi9icmFtYmxlJylcbmNvbnN0IHsgbGluZVZzUmVjdCB9ID0gcmVxdWlyZSgnLi9hYWJiJylcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpXG5jb25zdCBnID0gZ2FtZS5jcmVhdGUoKVxuY29uc3QgbSA9IG1vdXNlLmNyZWF0ZSgpXG5cbmNvbnN0IGxldmVsID0gW1xuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXG4gIFsxLCAwLCAwLCAyLCAyLCAwLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMCwgMCwgMCwgMCwgMiwgMiwgMCwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDFdLFxuICBbMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMiwgMV0sXG4gIFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxXSxcbiAgWzEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDFdLFxuICBbMSwgMCwgMSwgMCwgMiwgMCwgMCwgMiwgMCwgMV0sXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcbl1cblxuY29uc3QgY2FudmFzU2l6ZSA9IHtcbiAgd2lkdGg6IDEyODAsXG4gIGhlaWdodDogNzIwXG59XG5cbmNvbnN0IHRpbGVTaXplID0gMjRcblxuY29uc3QgY29sdW1uV2lkdGggPSAxMFxuY29uc3Qgc2NyZWVuSW5Db2x1bW5zID0gTWF0aC5jZWlsKGNhbnZhc1NpemUud2lkdGggLyBjb2x1bW5XaWR0aClcblxuY29uc3QgaGVybyA9IHtcbiAgcG9zaXRpb246IHZlYzIuY3JlYXRlKFxuICAgICh0aWxlU2l6ZSAqIChsZXZlbFswXS5sZW5ndGggLyAyKSksIFxuICAgIHRpbGVTaXplICogKGxldmVsLmxlbmd0aCAvIDIpXG4gICksXG4gIGFuZ2xlOiAtOTBcbn1cblxuZnVuY3Rpb24gc2hhZGVDb2xvcihjb2xvciwgcGVyY2VudCkge1xuICBsZXQgUiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLDMpLDE2KTtcbiAgbGV0IEcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMyw1KSwxNik7XG4gIGxldCBCID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsNyksMTYpO1xuXG4gIFIgPSBwYXJzZUludChSICogKDEwMCArIHBlcmNlbnQpIC8gMTAwKTtcbiAgRyA9IHBhcnNlSW50KEcgKiAoMTAwICsgcGVyY2VudCkgLyAxMDApO1xuICBCID0gcGFyc2VJbnQoQiAqICgxMDAgKyBwZXJjZW50KSAvIDEwMCk7XG5cbiAgUiA9IChSIDwgMjU1KSA/IFIgOiAyNTU7ICBcbiAgRyA9IChHIDwgMjU1KSA/IEcgOiAyNTU7ICBcbiAgQiA9IChCIDwgMjU1KSA/IEIgOiAyNTU7ICBcblxuICBsZXQgUlIgPSAoKFIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrUi50b1N0cmluZygxNik6Ui50b1N0cmluZygxNikpO1xuICBsZXQgR0cgPSAoKEcudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrRy50b1N0cmluZygxNik6Ry50b1N0cmluZygxNikpO1xuICBsZXQgQkIgPSAoKEIudG9TdHJpbmcoMTYpLmxlbmd0aD09MSk/XCIwXCIrQi50b1N0cmluZygxNik6Qi50b1N0cmluZygxNikpO1xuXG4gIHJldHVybiBgIyR7UlJ9JHtHR30ke0JCfWA7XG59XG5cbmZ1bmN0aW9uIHRvUmFkaWFucyAoZGVncmVlcykge1xuICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKVxufVxuXG5mdW5jdGlvbiByYW5nZSAoZnJvbSwgdG8sIGxlbmd0aCkge1xuICBjb25zdCByYW5nZSA9IE1hdGguYWJzKGZyb20gLSB0bylcbiAgY29uc3Qgc3RlcCA9IHJhbmdlIC8gKGxlbmd0aCAtIDEpXG4gIFxuICBsZXQgcmVzdWx0ID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0LnB1c2goZnJvbSArIChpICogc3RlcCkpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGdldFJheXMgKGZvdiwgaG9yaXpvbiwgY29sdW1ucykge1xuICBsZXQgcmVzdWx0ID0gW11cblxuICBsZXQgZnJvbSA9IC0oZm92IC8gMilcbiAgbGV0IHRvID0gZm92IC8gMlxuXG4gIGxldCBzdGVwcyA9IHJhbmdlKGZyb20sIHRvLCBzY3JlZW5JbkNvbHVtbnMpXG5cbiAgcmV0dXJuIHN0ZXBzLm1hcChhbmdsZSA9PiB7XG4gICAgY29uc3QgdGhldGEgPSB0b1JhZGlhbnMoaGVyby5hbmdsZSArIGFuZ2xlKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZyb206IGhlcm8ucG9zaXRpb24sXG4gICAgICB0bzoge1xuICAgICAgICB4OiBoZXJvLnBvc2l0aW9uLnggKyBob3Jpem9uICogTWF0aC5jb3ModGhldGEpLFxuICAgICAgICB5OiBoZXJvLnBvc2l0aW9uLnkgKyBob3Jpem9uICogTWF0aC5zaW4odGhldGEpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5nLmF0dGFjaFRvKGNvbnRhaW5lcilcbmcuc2V0U2l6ZSgxMjgwLCA3MjApXG5cbmxldCBjb2xsaXNpb25zID0gW11cblxuZy5zZXRVcGRhdGUoZHQgPT4ge1xuICBoZXJvLmFuZ2xlICs9IDFcblxuICBjb2xsaXNpb25zID0gW11cblxuICBjb25zdCByYXlzID0gZ2V0UmF5cyg2MCwgMTUwLCBzY3JlZW5JbkNvbHVtbnMpXG5cbiAgcmF5cy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgIGNvbnN0IGNvbGxpc2lvbkNhbmRpZGF0ZXMgPSBbXVxuXG4gICAgbGV2ZWwuZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgICBsZXZlbFt5XS5mb3JFYWNoKChjb2wsIHgpID0+IHtcbiAgICAgICAgaWYgKGxldmVsW3ldW3hdICE9PSAwKSB7XG4gICAgICAgICAgY29sbGlzaW9uQ2FuZGlkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgIHg6IHggKiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHk6IHkgKiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIHdpZHRoOiB0aWxlU2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogdGlsZVNpemUsXG4gICAgICAgICAgICB0eXBlOiBsZXZlbFt5XVt4XVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbGxpc2lvbiA9IGNvbGxpc2lvbkNhbmRpZGF0ZXNcbiAgICAgIC5tYXAocmVjdCA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmF5OiBsaW5lLFxuICAgICAgICAgIHJlY3QsIFxuICAgICAgICAgIGNvbGxpc2lvbjogbGluZVZzUmVjdChsaW5lLCByZWN0KSBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoY29sbGlzaW9uID0+IGNvbGxpc2lvbi5jb2xsaXNpb24gIT09IGZhbHNlKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuY29sbGlzaW9uLnRpbWVPZkNvbGxpc2lvbiA+IGIuY29sbGlzaW9uLnRpbWVPZkNvbGxpc2lvbilbMF1cblxuICAgIGNvbGxpc2lvbnMucHVzaChjb2xsaXNpb24pXG4gIH0pXG59KVxuXG5nLnNldFJlbmRlcihnZnggPT4ge1xuICBnZnguY2xlYXIoJyMyMzIzMjMnKVxuICBcbiAgLy8gZHJhdyBhIFwiZmxvb3JcIlxuICBnZngucmVjdCh7IHg6IDAsIHk6IGNhbnZhc1NpemUuaGVpZ2h0IC8gMiB9LCB7IHdpZHRoOiBjYW52YXNTaXplLndpZHRoLCBoZWlnaHQ6IGNhbnZhc1NpemUuaGVpZ2h0IC8gMn0sIHsgZmlsbDogeyBjb2xvdXI6ICcjNGMyMDA4JyB9IH0pIFxuXG4gIC8vIGRyYXcgYSBcImNlaWxpbmdcIlxuICBnZngucmVjdCh7IHg6IDAsIHk6IDAgfSwgeyB3aWR0aDogY2FudmFzU2l6ZS53aWR0aCwgaGVpZ2h0OiBjYW52YXNTaXplLmhlaWdodCAvIDJ9LCB7IGZpbGw6IHsgY29sb3VyOiAnIzMwOGRjYycgfSB9KVxuIFxuXG4gIC8vIGRyYXcgdGhlIHdhbGxzIFxuXG4gIGNvbGxpc2lvbnMuZm9yRWFjaCgoeyBjb2xsaXNpb24sIHJlY3QsIHJheSB9LCBpKSA9PiB7XG4gICAgaWYgKCFjb2xsaXNpb24pIHsgcmV0dXJuIH1cblxuICAgIGNvbnN0IHJheUFuZ2xlID0gTWF0aC5hdGFuMihcbiAgICAgIHJheS50by55IC0gcmF5LmZyb20ueSxcbiAgICAgIHJheS50by54IC0gcmF5LmZyb20ueFxuICAgIClcblxuICAgIGNvbnN0IGNvcnJlY3RlZEFuZ2xlID0gcmF5QW5nbGUgLSB0b1JhZGlhbnMoaGVyby5hbmdsZSlcbiAgICBjb25zdCBuZXdEaXN0YW5jZSA9IGNvbGxpc2lvbi50aW1lT2ZDb2xsaXNpb24gKiBNYXRoLmNvcyhjb3JyZWN0ZWRBbmdsZSlcblxuICAgIHZhciBoZWlnaHQgPSAoMC4yNCAqIGNhbnZhc1NpemUuaGVpZ2h0KSAvIG5ld0Rpc3RhbmNlXG4gICAgbGV0IGNvbG91ciA9IChyZWN0LnR5cGUgPT09IDIpID8gJyM4MDAwODAnIDogJyNGRkVGMDAnXG5cbiAgICBjb25zdCBzaGFkZSA9IE1hdGgucm91bmQobmV3RGlzdGFuY2UgKiAxMDApXG4gICAgY29sb3VyID0gc2hhZGVDb2xvcihjb2xvdXIsIDUwIC0gc2hhZGUpXG5cbiAgICBnZngucmVjdChcbiAgICAgIHsgeDogaSAqIGNvbHVtbldpZHRoLCB5OiAoY2FudmFzU2l6ZS5oZWlnaHQgLSBoZWlnaHQpIC8gMiB9LFxuICAgICAgeyB3aWR0aDogY29sdW1uV2lkdGgsIGhlaWdodDogaGVpZ2h0IH0sXG4gICAgICB7IGZpbGw6IHsgY29sb3VyIH0gfVxuICAgIClcbiAgfSlcblxuICAvLyBkcmF3IHRoZSBtaW5pbWFwXG4gIGdmeC5yZWN0KFxuICAgIHsgeDogMCwgeTogMCB9LFxuICAgIHsgd2lkdGg6IGxldmVsWzBdLmxlbmd0aCAqIHRpbGVTaXplLCBoZWlnaHQ6IGxldmVsLmxlbmd0aCAqIHRpbGVTaXplIH0sXG4gICAgeyBmaWxsOiB7IGNvbG91cjogJ2JsYWNrJyB9IH1cbiAgKVxuXG4gIGxldmVsLmZvckVhY2goKHJvdywgeSkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIHgpID0+IHtcbiAgICAgIHN3aXRjaCAobGV2ZWxbeV1beF0pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGdmeC5zcXVhcmUoXG4gICAgICAgICAgICB7IHg6IHggKiB0aWxlU2l6ZSwgeTogeSAqIHRpbGVTaXplIH0sIFxuICAgICAgICAgICAgdGlsZVNpemUsXG4gICAgICAgICAgICB7IGZpbGw6IHsgY29sb3VyOiAnI0ZGRUYwMCcgfSB9XG4gICAgICAgICAgKVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAyOiBcbiAgICAgICAgICBnZnguc3F1YXJlKFxuICAgICAgICAgICAgeyB4OiB4ICogdGlsZVNpemUsIHk6IHkgKiB0aWxlU2l6ZSB9LCBcbiAgICAgICAgICAgIHRpbGVTaXplLFxuICAgICAgICAgICAgeyBmaWxsOiB7IGNvbG91cjogJyM4MDAwODAnIH0gfVxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgICB9ICAgICAgXG4gICAgfSlcbiAgfSlcblxuXG4gIC8vIGRyYXcgdGhlIGNvbGxpc2lvbnMgXG4gIGNvbGxpc2lvbnMuZm9yRWFjaChjb2xsaXNpb24gPT4ge1xuICAgIGlmICghY29sbGlzaW9uKSB7IHJldHVybiB9XG5cbiAgICBjb25zdCByZWN0ID0gY29sbGlzaW9uLnJlY3RcbiAgICBjb2xsaXNpb24gPSBjb2xsaXNpb24uY29sbGlzaW9uXG5cbiAgICBpZiAoY29sbGlzaW9uKSB7XG4gICAgICBnZngubGluZShoZXJvLnBvc2l0aW9uLCBjb2xsaXNpb24ubmVhciwgeyBjb2xvdXI6ICdyZWQnIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGdmeC5saW5lKGhlcm8ucG9zaXRpb24sIGNvbGxpc2lvbi50bywgeyBjb2xvdXI6ICd3aGl0ZScgfSlcbiAgICB9XG4gIH0pXG4gIFxuICAvLyBkcmF3IHRoZSBoZXJvIFxuICBnZnguY2lyY2xlKGhlcm8ucG9zaXRpb24sIDgpXG5cbiAgLy8geDogaGVyby5wb3NpdGlvbi54ICsgaG9yaXpvbiAqIE1hdGguY29zKHRoZXRhKSxcbiAgLy8geTogaGVyby5wb3NpdGlvbi55ICsgaG9yaXpvbiAqIE1hdGguc2luKHRoZXRhKVxuXG4gIGdmeC5saW5lKFxuICAgIGhlcm8ucG9zaXRpb24sIFxuICAgIHsgXG4gICAgICB4OiBoZXJvLnBvc2l0aW9uLnggKyAxNSAqIE1hdGguY29zKHRvUmFkaWFucyhoZXJvLmFuZ2xlKSksIFxuICAgICAgeTogaGVyby5wb3NpdGlvbi55ICsgMTUgKiBNYXRoLnNpbih0b1JhZGlhbnMoaGVyby5hbmdsZSkpXG4gICAgfSxcbiAgICB7IGNvbG91cjogJ3doaXRlJyB9XG4gIClcbn0pXG5cbmcuc3RhcnQoKSJdLCJzb3VyY2VSb290IjoiIn0=