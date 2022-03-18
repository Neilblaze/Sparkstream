"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// generate a random sequence of characters
function makeId() {
    var result = [];
    var characters = '0123456789abcdef';
    for (var i = 0; i < 40; i++)
        result.push(characters[Math.floor(Math.random() * characters.length)]);
    return result.join('');
}
function hexToBase64(hex) {
    return Buffer.from(hex, 'hex').toString('base64');
}
function base64ToHex(base64) {
    return Buffer.from(base64, 'base64').toString('hex');
}
var peerId = makeId();
var tracker = null;
var connections = new Map();
var name = null;
var editor = null;
var editorModel = null;
var languagesSelect = document.querySelector('select#languages');
var trackingChanges = true;
var connectedTrackers = new Set();
console.info('peerId:', peerId);
function updatePeersDisplay() {
    var frags = ["<li>".concat(name, "</li>")];
    for (var _i = 0, _a = connections.values(); _i < _a.length; _i++) {
        var peer = _a[_i];
        frags.push("<li>".concat(peer.displayName, "</li>"));
    }
    document.querySelector('#peers').innerHTML = frags.join('');
}
function createRoom() {
    var newRoomId = makeId();
    window.location.href = window.location.pathname + '?room=' + encodeURIComponent(hexToBase64(newRoomId));
}
function joinRoom(roomId) {
    return __awaiter(this, void 0, void 0, function () {
        var cachedName, Tracker;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cachedName = localStorage.getItem('editor-name');
                    if (cachedName == null)
                        name = prompt('Your name is...');
                    else
                        name = prompt('Your name is...', cachedName);
                    if (name == null || name === '')
                        name = "Peer ".concat(peerId.slice(0, 8));
                    localStorage.setItem('editor-name', name);
                    updatePeersDisplay();
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('bittorrent-tracker'); })];
                case 1:
                    Tracker = _a.sent();
                    tracker = new Tracker({
                        infoHash: base64ToHex(roomId),
                        peerId: peerId,
                        announce: ['wss://tracker.openwebtorrent.com', 'wss://tracker.btorrent.xyz'],
                    });
                    console.debug('tracker:', tracker);
                    tracker.setInterval(15 * 60 * 1000); // every 15 minutes
                    tracker.on('warning', console.warn);
                    tracker.on('error', function (e) {
                        connectedTrackers.delete(e.announce);
                        console.log('num connected trackers:', connectedTrackers.size);
                        if (connectedTrackers.size === 0)
                            document.querySelector('#connection-status').textContent = 'Connecting...';
                    });
                    tracker.on('peer', function (peer) {
                        console.debug('peer:', peer);
                        var peerId = peer.id;
                        if (peerId.length !== 40 || connections.has(peerId))
                            return;
                        peer.on('connect', function () {
                            setupConnection(peer);
                            updatePeersDisplay();
                        });
                    });
                    tracker.on('update', function (e) {
                        connectedTrackers.add(e.announce);
                        document.querySelector('#connection-status').textContent = 'connected';
                        console.log('num connected trackers:', connectedTrackers.size);
                    });
                    tracker.start();
                    return [2 /*return*/];
            }
        });
    });
}
function setupConnection(peer) {
    var peerId = peer.id;
    var defaultPosition = { lineNumber: 1, column: 1 };
    var defaultSelection = {
        selectionStartLineNumber: 0,
        selectionStartColumn: 0,
        positionLineNumber: 0,
        positionColumn: 0,
    };
    connections.set(peerId, {
        displayName: '',
        conn: peer,
        position: defaultPosition,
        positionDecorations: [],
        selection: defaultSelection,
        selectionDecorations: [],
    });
    peer.on('data', function (data) { return receiveData(peerId, data); });
    peer.on('close', function () {
        console.debug('peer closed:', peer.id);
        var peerObject = connections.get(peer.id);
        if (peerObject) {
            editor === null || editor === void 0 ? void 0 : editor.deltaDecorations(peerObject.positionDecorations, []);
            connections.delete(peer.id);
        }
        updatePeersDisplay();
    });
    peer.on('error', function (err) {
        if (!connections.has(peer.id))
            return;
        console.error('peer error:', err);
    });
    peer.send(JSON.stringify({ type: 'greet', value: name }));
    var existingValue = editorModel.getValue();
    if (existingValue.length > 0)
        peer.send(JSON.stringify({ type: 'state', value: existingValue, language: languagesSelect.value }));
    var cursorPosition = editor === null || editor === void 0 ? void 0 : editor.getPosition();
    if (cursorPosition != null)
        peer.send(JSON.stringify({ type: 'cursor', value: cursorPosition }));
}
function broadcast(data) {
    console.debug('broadcasting to:', connections);
    var data_ = JSON.stringify(data);
    for (var _i = 0, _a = connections.values(); _i < _a.length; _i++) {
        var peer = _a[_i];
        try {
            peer.conn.send(data_);
        }
        catch (_b) {
        }
    }
}
function updatePeerCursor(peer) {
    return __awaiter(this, void 0, void 0, function () {
        var monaco;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('monaco-editor'); })];
                case 1:
                    monaco = _a.sent();
                    console.debug('new peer position:', peer.position);
                    peer.positionDecorations = editor.deltaDecorations(peer.positionDecorations, [{
                        range: new monaco.Range(peer.position.lineNumber, peer.position.column, peer.position.lineNumber, peer.position.column),
                        options: { className: 'peer-cursor' }
                    }]);
                    return [2 /*return*/];
            }
        });
    });
}
function updatePeerSelection(peer) {
    return __awaiter(this, void 0, void 0, function () {
        var monaco;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('monaco-editor'); })];
                case 1:
                    monaco = _a.sent();
                    console.debug('new peer selection:', peer.selection);
                    peer.selectionDecorations = editor.deltaDecorations(peer.selectionDecorations, [{
                        range: new monaco.Range(peer.selection.selectionStartLineNumber, peer.selection.selectionStartColumn, peer.selection.positionLineNumber, peer.selection.positionColumn),
                        options: { className: 'peer-selection' }
                    }]);
                    return [2 /*return*/];
            }
        });
    });
}
function receiveData(peerId, data_) {
    return __awaiter(this, void 0, void 0, function () {
        var data, peer, monaco, edits;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = JSON.parse(new TextDecoder('utf-8').decode(data_));
                    console.debug('incoming:', data);
                    peer = connections.get(peerId);
                    if (peer == null)
                        return [2 /*return*/];
                    if (editorModel == null)
                        return [2 /*return*/];
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('monaco-editor'); })];
                case 1:
                    monaco = _a.sent();
                    trackingChanges = false;
                    if (data.type === 'edits') {
                        edits = data.value.map(function (change) {
                            var range = change.range;
                            return {
                                range: new monaco.Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn),
                                text: change.text,
                                forceMoveMarkers: true
                            };
                        });
                        editorModel.pushEditOperations([], edits, function () { return null; });
                        console.debug('incoming done');
                    }
                    else if (data.type === 'greet') {
                        peer.displayName = data.value;
                        updatePeersDisplay();
                    }
                    else if (data.type === 'state') {
                        editorModel.setValue(data.value);
                        languagesSelect.value = data.language;
                        monaco.editor.setModelLanguage(editorModel, data.language);
                    }
                    else if (data.type === 'cursor') {
                        peer.position = data.value;
                        updatePeerCursor(peer);
                    }
                    else if (data.type === 'changeLanguage') {
                        languagesSelect.value = data.value;
                        monaco.editor.setModelLanguage(editorModel, data.value);
                    }
                    else if (data.type === 'selection') {
                        peer.selection = data.value;
                        updatePeerSelection(peer);
                    }
                    trackingChanges = true;
                    return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var urlParams, roomId, newButton, container, monaco, editorConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    urlParams = new URLSearchParams(window.location.search);
                    roomId = urlParams.get('room');
                    if (!roomId) {
                        newButton = document.querySelector('#new-room');
                        newButton.addEventListener('click', createRoom, false);
                        newButton.style.display = 'block';
                        return [2 /*return*/];
                    }
                    else {
                        container = document.querySelector('#container');
                        container.style.display = 'grid';
                    }
                    joinRoom(roomId);
                    return [4 /*yield*/, Promise.resolve().then(function () { return require('monaco-editor'); })];
                case 1:
                    monaco = _a.sent();
                    editorConfig = {
                        value: '',
                        language: 'plaintext',
                        scrollBeyondLastLine: false,
                    };
                    editor = monaco.editor.create(document.getElementById('editor'), editorConfig);
                    console.debug('editor:', editor);
                    editorModel = editor.getModel();
                    console.debug('model:', editorModel);
                    // listen to events on the editor
                    editorModel.onDidChangeContent(function (event) {
                        console.debug('changeContent:', event);
                        if (!trackingChanges)
                            return;
                        broadcast({ type: 'edits', value: event.changes });
                    });
                    editor.onDidChangeCursorPosition(function (event) {
                        console.debug('changeCursor:', event);
                        broadcast({ type: 'cursor', value: event.position });
                    });
                    editor.onDidChangeCursorSelection(function (event) {
                        console.debug('selection:', event.selection);
                        broadcast({ type: 'selection', value: event.selection });
                    });
                    // populate langauges list
                    languagesSelect.innerHTML = monaco.languages.getLanguages()
                        .filter(function (lang) { return lang.aliases !== undefined; })
                        .map(function (lang) {
                            return "<option value=\"".concat(lang.id, "\">").concat(lang.aliases[0], "</option>");
                        })
                        .join('');
                    languagesSelect.addEventListener('change', function (event) {
                        monaco.editor.setModelLanguage(editorModel, languagesSelect.value);
                        broadcast({ type: 'changeLanguage', value: languagesSelect.value });
                    });
                    window.addEventListener('beforeunload', function () {
                        for (var _i = 0, _a = connections.values(); _i < _a.length; _i++) {
                            var peer = _a[_i];
                            peer.conn.destroy();
                        }
                        tracker.stop();
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main();
