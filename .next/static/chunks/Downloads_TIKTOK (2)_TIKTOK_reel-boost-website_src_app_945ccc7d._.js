(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/socket/socket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck
__turbopack_context__.s([
    "socketInstance",
    ()=>socketInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
;
let socket;
const socketInstance = ()=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    if (!socket) {
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
        socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("".concat(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api")), {
            path: "/socket",
            transports: [
                "websocket"
            ],
            auth: {
                token
            }
        });
        socket.on("connect", ()=>{
            if (socket) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("socketId", socket.id);
            }
        });
        socket.on("connect_error", (err)=>{
        // console.error("❌ Socket connection error:", err.message);
        });
    }
    return socket;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/socket/ListenAllEvents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListenAllEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/socket/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ChatListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ChatListSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/setChatIdMessageLoading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageListSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/OnlineUserSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$messageSeenStatusSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/messageSeenStatusSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function ListenAllEvents() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const page = 1;
    const pageSize = 1000;
    const currentChatId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "ListenAllEvents.useAppSelector[currentChatId]": (state)=>state.selectedChat.chat_id
    }["ListenAllEvents.useAppSelector[currentChatId]"]);
    const myUserId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListenAllEvents.useEffect": ()=>{
            const unlockAudio = {
                "ListenAllEvents.useEffect.unlockAudio": ()=>{
                    const a = new Audio();
                    a.play().catch({
                        "ListenAllEvents.useEffect.unlockAudio": ()=>{}
                    }["ListenAllEvents.useEffect.unlockAudio"]); // unlock audio context silently
                    document.removeEventListener("click", unlockAudio);
                }
            }["ListenAllEvents.useEffect.unlockAudio"];
            document.addEventListener("click", unlockAudio);
        }
    }["ListenAllEvents.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListenAllEvents.useEffect": ()=>{
            function newMessageCommingSound() {
                const audio = new Audio("/audio/achive-sound-132273.mp3");
                audio.muted = false;
                audio.play();
            }
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socketInstance"])();
            if (!socket) return;
            // Emit to get chat list on mount
            socket.emit("chat_list", {
                page,
                pageSize
            });
            const chatListHandler = {
                "ListenAllEvents.useEffect.chatListHandler": (res)=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ChatListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateChatList"])(res.Chats));
                }
            }["ListenAllEvents.useEffect.chatListHandler"];
            socket.on("chat_list", chatListHandler);
            socket.on("message_list", {
                "ListenAllEvents.useEffect": (res)=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageList"])(res.Records));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMessageLoading"])(true));
                }
            }["ListenAllEvents.useEffect"]);
            // ✅ Handle new incoming message
            socket.on("recieve", {
                "ListenAllEvents.useEffect": (res)=>{
                    if (Array.isArray(res.Records) && res.Records.length > 0) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageList"])(res.Records));
                        const latestMsg = res.Records[0];
                        const myId = Number(myUserId);
                        if ((latestMsg === null || latestMsg === void 0 ? void 0 : latestMsg.sender_id) !== myId) {
                            newMessageCommingSound();
                        }
                    }
                }
            }["ListenAllEvents.useEffect"]);
            socket.on("initial_online_user", {
                "ListenAllEvents.useEffect": (onlineUsers)=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setOnlineUsers"])(Array.isArray(onlineUsers) ? onlineUsers : []));
                }
            }["ListenAllEvents.useEffect"]);
            socket.on("online_user", {
                "ListenAllEvents.useEffect": (user)=>{
                    if (user) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addOnlineUser"])(user));
                }
            }["ListenAllEvents.useEffect"]);
            socket.on("offline_user", {
                "ListenAllEvents.useEffect": (data)=>{
                    if (data === null || data === void 0 ? void 0 : data.user_id) {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeOnlineUser"])(data.user_id));
                    }
                }
            }["ListenAllEvents.useEffect"]);
            socket.on("typing", {
                "ListenAllEvents.useEffect": (data)=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTypingState"])(data));
                }
            }["ListenAllEvents.useEffect"]);
            socket.on("message_seen_status", {
                "ListenAllEvents.useEffect": (data)=>{
                    if ((data === null || data === void 0 ? void 0 : data.message_id) && data.message_seen_status === "seen") {
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$messageSeenStatusSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageSeenStatus"])({
                            message_id: data.message_id,
                            message_seen_status: data.message_seen_status
                        }));
                    }
                }
            }["ListenAllEvents.useEffect"]);
            return ({
                "ListenAllEvents.useEffect": ()=>{
                    socket.off("chat_list", chatListHandler);
                    socket.off("message_list");
                    socket.off("recieve");
                    socket.off("initial_online_user");
                    socket.off("online_user");
                    socket.off("offline_user");
                    socket.off("typing");
                    socket.off("message_seen_status");
                }
            })["ListenAllEvents.useEffect"];
        }
    }["ListenAllEvents.useEffect"], [
        page,
        pageSize,
        dispatch
    ]);
    // Emit "message_list" whenever currentChatId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ListenAllEvents.useEffect": ()=>{
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socketInstance"])();
            if (!socket) return;
            if (!currentChatId) {
                // no chat selected yet, don't emit
                return;
            }
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMessageLoading"])(true));
            socket.emit("message_list", {
                chat_id: currentChatId,
                page,
                pageSize
            });
        }
    }["ListenAllEvents.useEffect"], [
        currentChatId,
        page,
        pageSize,
        dispatch
    ]);
    return null;
}
_s(ListenAllEvents, "bpHXwNZpYQK0BUZPrLO7laE95qc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = ListenAllEvents;
var _c;
__turbopack_context__.k.register(_c, "ListenAllEvents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
const useAppStore = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].withTypes();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/generateVideoThumbnail.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const generateVideoThumbnail = function(videoFile) {
    let videoTimeInSeconds = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, retries = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;
    return new Promise((resolve, reject)=>{
        if (!videoFile.type.includes("video")) {
            return reject("File is not a valid video");
        }
        const url = URL.createObjectURL(videoFile);
        const video = document.createElement("video");
        let retryCount = 0;
        video.preload = "metadata";
        video.src = url;
        video.muted = true;
        video.playsInline = true;
        video.crossOrigin = "anonymous"; // Optional: Helps with CORS issues
        video.load();
        const capture = ()=>{
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");
            if (!ctx) return reject("Could not get canvas context");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const thumbnail = canvas.toDataURL("image/png");
            // If blank image, retry
            if ((thumbnail.length < 100000 || thumbnail.includes("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAB")) && retryCount < retries) {
                retryCount++;
                video.currentTime = videoTimeInSeconds + retryCount; // Try next second
            } else {
                URL.revokeObjectURL(url);
                resolve(thumbnail);
            }
        };
        video.addEventListener("loadeddata", ()=>{
            try {
                // If video duration is too short, fallback to first frame
                video.currentTime = Math.min(video.duration - 0.1, videoTimeInSeconds);
            } catch (e) {
                video.currentTime = 0;
            }
        });
        video.addEventListener("seeked", capture);
        video.onerror = (err)=>{
            URL.revokeObjectURL(url);
            reject("Error loading video: " + err);
        };
    });
};
const __TURBOPACK__default__export__ = generateVideoThumbnail;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/QueryProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/QueryProvider.tsx
__turbopack_context__.s([
    "default",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function QueryProvider(param) {
    let { children } = param;
    _s();
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QueryProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]()
    }["QueryProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/QueryProvider.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(QueryProvider, "qFhNRSk+4hqflxYLL9+zYF5AcuQ=");
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/StoreProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// export default function StoreProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <GoogleOAuthProvider
//       clientId={`${process.env.NEXT_PUBLIC_GOOGLE_SIGNIN_ID}`}
//     >
//       <Provider store={store}>
//         {children}
//       </Provider>
//     </GoogleOAuthProvider>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>StoreProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@react-oauth/google/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$ListenAllEvents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/socket/ListenAllEvents.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$QueryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/QueryProvider.tsx [app-client] (ecmascript)"); // import your QueryClientProvider wrapper
"use client";
;
;
;
;
;
;
function StoreProvider(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleOAuthProvider"], {
        clientId: ("TURBOPACK compile-time value", "Google Sign-In Client ID"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$QueryProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$ListenAllEvents$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/StoreProvider.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/StoreProvider.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/StoreProvider.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/StoreProvider.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = StoreProvider;
var _c;
__turbopack_context__.k.register(_c, "StoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const useApiPost = ()=>{
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const postData = async function(url, bodyData) {
        let contentType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "application/json";
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
        try {
            setLoading(true);
            setError(null);
            const headers = {
                "Content-Type": contentType,
                ...token && {
                    Authorization: "Bearer ".concat(token)
                }
            };
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api") + url, bodyData, {
                headers
            });
            // ✅ Check for JSON response
            const contentTypeResponse = response.headers["content-type"] || "";
            if (!contentTypeResponse.includes("application/json")) {
                // Redirect silently
                router.replace("/not-found");
                return;
            }
            setData(response.data);
            return response.data;
        } catch (err) {
            var _err_response_headers, _err_response, _err_response1;
            const contentTypeError = (err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_headers = _err_response.headers) === null || _err_response_headers === void 0 ? void 0 : _err_response_headers["content-type"]) || "";
            // ✅ Redirect if not JSON
            if (!contentTypeError.includes("application/json")) {
                router.replace("/not-found");
                return;
            }
            // ✅ Redirect on Unauthorized (401)
            if ((err === null || err === void 0 ? void 0 : (_err_response1 = err.response) === null || _err_response1 === void 0 ? void 0 : _err_response1.status) === 401) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("Reelboost_auth_token");
                router.replace("/");
                return;
            }
            // ✅ Other error handling
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error("An unknown error occurred."));
            }
            // Re-throw if you want calling components to handle it
            throw err;
        } finally{
            setLoading(false);
        }
    };
    return {
        loading,
        error,
        data,
        postData
    };
};
_s(useApiPost, "la+bRNud8WRXcm3aopCy+q7ur9k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
const __TURBOPACK__default__export__ = useApiPost;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/useFFmpegVideo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//@ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>useFFmpegVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@ffmpeg/util/dist/esm/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useFFmpegVideo() {
    _s();
    const [ffmpeg, setFfmpeg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFFmpegVideo.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
             // ✅ Prevents running on server
            ({
                "useFFmpegVideo.useEffect": async ()=>{
                    try {
                        const { FFmpeg } = await __turbopack_context__.A("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@ffmpeg/ffmpeg/dist/esm/index.js [app-client] (ecmascript, async loader)"); // ✅ Dynamic import
                        const ffmpegInstance = new FFmpeg();
                        await ffmpegInstance.load();
                        setFfmpeg(ffmpegInstance);
                        setReady(true);
                    } catch (err) {}
                }
            })["useFFmpegVideo.useEffect"]();
        }
    }["useFFmpegVideo.useEffect"], []);
    const processVideo = async (param)=>{
        let { videoFile, start, end, mute, musicUrl } = param;
        if (!ready || !ffmpeg || !videoFile) return null;
        await ffmpeg.writeFile("input.mp4", await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchFile"])(videoFile));
        let args;
        if (musicUrl) {
            const musicData = await fetch(musicUrl).then((res)=>res.arrayBuffer());
            await ffmpeg.writeFile("music.mp3", new Uint8Array(musicData));
            args = [
                ...start !== undefined ? [
                    "-ss",
                    start.toString()
                ] : [],
                ...end !== undefined ? [
                    "-to",
                    end.toString()
                ] : [],
                "-i",
                "input.mp4",
                "-i",
                "music.mp3",
                "-map",
                "0:v:0",
                "-map",
                "1:a:0",
                "-c:v",
                "libx264",
                "-preset",
                "ultrafast",
                "-crf",
                "28",
                "-c:a",
                "aac",
                "-shortest",
                "output.mp4"
            ];
        } else if (mute) {
            args = [
                ...start !== undefined ? [
                    "-ss",
                    start.toString()
                ] : [],
                ...end !== undefined ? [
                    "-to",
                    end.toString()
                ] : [],
                "-i",
                "input.mp4",
                "-c:v",
                "copy",
                "-an",
                "output.mp4"
            ];
        } else {
            args = [
                ...start !== undefined ? [
                    "-ss",
                    start.toString()
                ] : [],
                ...end !== undefined ? [
                    "-to",
                    end.toString()
                ] : [],
                "-i",
                "input.mp4",
                "-c:v",
                "copy",
                "-c:a",
                "copy",
                "output.mp4"
            ];
        }
        await ffmpeg.exec(args);
        const data = await ffmpeg.readFile("output.mp4");
        const blob = new Blob([
            data
        ], {
            type: "video/mp4"
        });
        return new File([
            blob
        ], "processed_output.mp4", {
            type: "video/mp4"
        });
    };
    return {
        ready,
        processVideo
    };
}
_s(useFFmpegVideo, "VFiaRQhFCx+bzLLuempdMhs8XPM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/usePeerId.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePeerId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$peerjs$2f$dist$2f$bundler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/peerjs/dist/bundler.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function usePeerId() {
    _s();
    const [peerId, setPeerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePeerId.useEffect": ()=>{
            // Check if we already have a peer_id in cookies
            const existingPeerId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("peer_id");
            if (existingPeerId) {
                setPeerId(existingPeerId);
                return;
            }
            // Generate a new peer_id
            const peer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$peerjs$2f$dist$2f$bundler$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
            peer.on("open", {
                "usePeerId.useEffect": (id)=>{
                    // Save in state + cookie
                    setPeerId(id);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("peer_id", id, {
                        secure: true,
                        sameSite: "Strict",
                        expires: 30
                    });
                }
            }["usePeerId.useEffect"]);
            peer.on("error", {
                "usePeerId.useEffect": (err)=>{}
            }["usePeerId.useEffect"]);
            // Cleanup on unmount
            return ({
                "usePeerId.useEffect": ()=>{
                    peer.destroy();
                }
            })["usePeerId.useEffect"];
        }
    }["usePeerId.useEffect"], []);
    return peerId;
}
_s(usePeerId, "KGLqhM7a5EFhElUEIxUagDxkKjU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NearbyPlaces
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function NearbyPlaces(param) {
    let { nearbyPlaces } = param;
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const handleSelectPlace = (place)=>{
        if (!place.geometry || !place.geometry.location) return;
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
            latitude: lat,
            longitude: lng,
            message: place.formatted_address || place.name,
            message_type: "location"
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: nearbyPlaces.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "my-3 px-5 text-sm font-medium",
                    children: "Nearby Places"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-96 flex-col gap-y-3 overflow-scroll pb-24",
                    children: nearbyPlaces.map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex cursor-pointer gap-2 px-5",
                                    onClick: ()=>handleSelectPlace(place),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "h-5 w-5",
                                            src: (place === null || place === void 0 ? void 0 : place.icon) || "",
                                            alt: "",
                                            width: 10,
                                            height: 10
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                                            lineNumber: 41,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: [
                                                place.name,
                                                place.vicinity !== place.name && ", ".concat(place.vicinity)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                                            lineNumber: 42,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                    className: "border-t border-borderColor"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, place.place_id, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid h-96 place-content-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "mx-auto h-16 w-16",
                    src: "/home/Empty.png",
                    alt: "",
                    width: 100,
                    height: 100
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "No nearby places found"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(NearbyPlaces, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = NearbyPlaces;
var _c;
__turbopack_context__.k.register(_c, "NearbyPlaces");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShowMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import GoogleMapReact from "google-map-react";
// import { useAppSelector } from "@/app/utils/hooks";
// import Image from "next/image";
// interface MarkerProps {
//   lat: number;
//   lng: number;
// }
// interface MarkerProps {
//   lat: number;
//   lng: number;
// }
// const Marker: React.FC<MarkerProps> = () => (
//   <div className="relative">
//     <Image
//       src="/chat/filled_location.png"
//       width={100}
//       height={100}
//       alt="Marker"
//       className="h-10 w-10 object-contain"
//     />
//   </div>
// );
// const Marker = (MarkerProps) => (
//   <div className="relative">
//     <Image
//       src="/chat/filled_location.png"
//       width={100}
//       height={100}
//       alt="Marker"
//       className="h-10 w-10 object-contain"
//     />
//   </div>
// );
// export default function ShowMap() {
//   const sendMessageData = useAppSelector((state) => state.SendMessageData);
//   const lat = Number(sendMessageData.latitude); // fallback to Delhi
//   const lng = Number(sendMessageData.longitude);
//   return (
//     <div className="h-96 w-full ">
//       <GoogleMapReact
//         bootstrapURLKeys={{
//           key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY || "",
//         }}
//         defaultCenter={{ lat, lng }}
//         center={{ lat, lng }}
//         defaultZoom={13}
//         options={{ fullscreenControl: false }}
//         draggable={false}
//       >
//         <Marker lat={lat} lng={lng} />
//       </GoogleMapReact>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>ShowMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$google$2d$map$2d$react$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/google-map-react/dist/index.modern.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Marker = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/chat/filled_location.png",
            width: 100,
            height: 100,
            alt: "Marker",
            className: "h-10 w-10 object-contain"
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShowMap.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShowMap.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Marker;
function ShowMap() {
    _s();
    const sendMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "ShowMap.useAppSelector[sendMessageData]": (state)=>state.SendMessageData
    }["ShowMap.useAppSelector[sendMessageData]"]);
    const lat = Number(sendMessageData.latitude) || 28.6139; // fallback to Delhi
    const lng = Number(sendMessageData.longitude) || 77.209;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-96 w-full ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$google$2d$map$2d$react$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            bootstrapURLKeys: {
                key: ("TURBOPACK compile-time value", "Google Map API Key") || ""
            },
            defaultCenter: {
                lat,
                lng
            },
            center: {
                lat,
                lng
            },
            defaultZoom: 13,
            options: {
                fullscreenControl: false
            },
            draggable: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                lat: lat,
                lng: lng
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShowMap.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShowMap.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShowMap.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(ShowMap, "jsmtameRJrggyqvp4KVgBVW59Vk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c1 = ShowMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "Marker");
__turbopack_context__.k.register(_c1, "ShowMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/GetUserLocation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GetUserLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function GetUserLocation() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GetUserLocation.useEffect": ()=>{
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition({
                    "GetUserLocation.useEffect": (position)=>{
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                            latitude: lat,
                            longitude: lng,
                            message_type: "location"
                        }));
                    }
                }["GetUserLocation.useEffect"], {
                    "GetUserLocation.useEffect": (error)=>{
                        setError("Location access denied. Enable GPS and refresh.");
                    }
                }["GetUserLocation.useEffect"]);
            } else {
                setError("Geolocation is not supported by your browser.");
            }
        }
    }["GetUserLocation.useEffect"], [
        dispatch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/GetUserLocation.tsx",
            lineNumber: 33,
            columnNumber: 22
        }, this)
    }, void 0, false);
}
_s(GetUserLocation, "+OSH5tezsgOgU8z2ak0ZOneyar4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = GetUserLocation;
var _c;
__turbopack_context__.k.register(_c, "GetUserLocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/socket/socket.ts [app-client] (ecmascript)");
// import scrollToMessage from "../../../utils/scrollToMessage";
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/CurrentConversationSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageListSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageOptionsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function ShareLocation() {
    _s();
    const sendMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "ShareLocation.useAppSelector[sendMessageData]": (state)=>state.SendMessageData
    }["ShareLocation.useAppSelector[sendMessageData]"]);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const currentConversationData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "ShareLocation.useAppSelector[currentConversationData]": (state)=>state.CurrentConversation
    }["ShareLocation.useAppSelector[currentConversationData]"]);
    async function shareLocationApiCall() {
        // Show instantly in UI
        // dispatch(prependMessageList([tempMessage]));
        const messageFormData = new FormData();
        if (currentConversationData.chat_id !== -1 && currentConversationData.chat_id !== 0) {
            messageFormData.append("chat_id", String(currentConversationData.chat_id));
        } else {
            var _currentConversationData_PeerUserData;
            messageFormData.append("user_id", String((_currentConversationData_PeerUserData = currentConversationData.PeerUserData) === null || _currentConversationData_PeerUserData === void 0 ? void 0 : _currentConversationData_PeerUserData.user_id));
            messageFormData.append("chat_type", "private");
        }
        messageFormData.append("message_type", String(sendMessageData.message_type || "location"));
        messageFormData.set("message_content", "".concat(sendMessageData.latitude, ",").concat(sendMessageData.longitude));
        try {
            const sendMessageRes = await postData("/chat/send-message", messageFormData, "multipart/form-data");
            if (sendMessageRes) {
                if (currentConversationData.chat_id === 0 || currentConversationData.chat_id === -1) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCurrentConversation"])({
                        chat_id: sendMessageRes.chat_id
                    }));
                }
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendMessageWithDateCheck"])(sendMessageRes));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageOptions"])({
                    show_send_location_modal: false
                }));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                    message: "",
                    message_type: "",
                    reply_id: 0
                }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socketInstance"])().emit("chat_list", {});
            }
        } catch (err) {
        // Optional: remove temp message or mark as failed
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[97%]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-3 left-2 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-14 items-center justify-between rounded-lg border border-[#FCC604] bg-[#FFF8E0] px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "h-7 w-7 object-contain",
                                src: "/chat/border_location.png",
                                alt: "",
                                width: 25,
                                height: 25
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-dark",
                                children: sendMessageData.message
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: shareLocationApiCall,
                            className: "!h-9 text-dark w-fit text-nowrap rounded-xl !px-4 !text-sm",
                            children: "Share location"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(ShareLocation, "k1W7NgSFBbvekJn+G33McS+u4UI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = ShareLocation;
var _c;
__turbopack_context__.k.register(_c, "ShareLocation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@react-google-maps/api/dist/esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$NearbyPlaces$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/NearbyPlaces.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$ShowMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShowMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$GetUserLocation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/GetUserLocation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$ShareLocation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/ShareLocation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
const libraries = [
    "places"
];
const SearchLocationDropdown = (param)=>{
    let {} = param;
    _s();
    const { isLoaded, loadError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadScript"])({
        googleMapsApiKey: ("TURBOPACK compile-time value", "Google Map API Key") || "",
        libraries
    });
    const sendMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "SearchLocationDropdown.useAppSelector[sendMessageData]": (state)=>state.SendMessageData
    }["SearchLocationDropdown.useAppSelector[sendMessageData]"]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sendMessageData.message || "");
    const [nearbyPlaces, setNearbyPlaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const autocompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchLocationDropdown.useEffect": ()=>{
            if (isLoaded && sendMessageData.latitude && sendMessageData.longitude) {
                fetchNearbyPlaces();
            }
        }
    }["SearchLocationDropdown.useEffect"], [
        isLoaded,
        sendMessageData.latitude,
        sendMessageData.longitude
    ]);
    const fetchNearbyPlaces = ()=>{
        if (!window.google || !window.google.maps || !window.google.maps.places) {
            return;
        }
        const map = new window.google.maps.Map(document.createElement("div"), {
            center: {
                lat: Number(sendMessageData.latitude),
                lng: Number(sendMessageData.longitude)
            },
            zoom: 15
        });
        mapRef.current = map;
        const service = new window.google.maps.places.PlacesService(map);
        // const request = {
        //   location: new window.google.maps.LatLng(
        //     Number(sendMessageData.latitude),
        //     Number(sendMessageData.longitude),
        //   ),
        //   radius: 5000, // 5km radius (adjust as needed)
        //   type: ["restaurant", "store", "hospital"], // You can customize this
        // };
        service.nearbySearch({
            location: new window.google.maps.LatLng(Number(sendMessageData.latitude), Number(sendMessageData.longitude)),
            radius: 5000
        }, (results, status)=>{
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                setNearbyPlaces(results);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                    message: results[0].name,
                    message_type: "location"
                }));
            } else {}
        });
    };
    const onPlaceChanged = ()=>{
        const place = autocompleteRef.current.getPlace();
        if (!place.geometry) return;
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setInputValue(place.formatted_address);
        // setLat(lat);
        // setLon(lng);
        fetchNearbyPlaces();
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
            latitude: lat,
            longitude: lng,
            message: place.formatted_address,
            message_type: "location"
        }));
    };
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    };
    if (loadError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Error loading maps"
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
            lineNumber: 116,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return isLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-full w-full flex-col gap-y-3 bg-primary min-w-[450px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-5 z-10 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Autocomplete"], {
                    className: "mx-auto w-[90%]",
                    onLoad: (autocomplete)=>{
                        autocompleteRef.current = autocomplete;
                    },
                    onPlaceChanged: onPlaceChanged,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-2 top-3.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/home/Location.png",
                                    alt: "location",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: inputValue,
                                onChange: handleInputChange,
                                className: "h-12 w-full rounded-lg bg-primary px-4 py-2 pl-8 text-sm text-darkText shadow-xl outline-none transition-all duration-300 focus:border-[#B5843F]",
                                type: "text",
                                placeholder: "Add Location"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$ShowMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$ShareLocation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$NearbyPlaces$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                nearbyPlaces: nearbyPlaces
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$GetUserLocation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SearchLocationDropdown, "VwYGHujHuQw2E+ieUWGvPS+5F6I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoadScript"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = SearchLocationDropdown;
const __TURBOPACK__default__export__ = SearchLocationDropdown;
var _c;
__turbopack_context__.k.register(_c, "SearchLocationDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SendLocationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SendLocationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageOptionsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$SearchLocationDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SearchLocationDropdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function SendLocationModal() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const MessageOptionsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "SendLocationModal.useAppSelector[MessageOptionsData]": (state)=>state.MessageOptions
    }["SendLocationModal.useAppSelector[MessageOptionsData]"]);
    const close = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMessageOptions"])({
            show_send_location_modal: false
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: MessageOptionsData.show_send_location_modal,
        className: "relative z-10",
        onClose: close,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " z-10 flex min-h-full items-center justify-center p-4 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "data-[closed]:transform-[scale(95%)] max-h-[80vh] w-full max-w-lg rounded-xl bg-modalBg overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out data-[closed]:opacity-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Location$2f$SearchLocationDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SendLocationModal.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SendLocationModal.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SendLocationModal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Location/SendLocationModal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(SendLocationModal, "9Sj0MDhe0KwLYlURPYjYajAxKWM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = SendLocationModal;
var _c;
__turbopack_context__.k.register(_c, "SendLocationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GiphyComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageListSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/socket/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/CurrentConversationSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/updateUser.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const GIPHY_API_KEY = ("TURBOPACK compile-time value", "Giphy API Key");
function GiphyComponent() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const SendMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "GiphyComponent.useAppSelector[SendMessageData]": (state)=>state.SendMessageData
    }["GiphyComponent.useAppSelector[SendMessageData]"]);
    const sendMessageDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(SendMessageData);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gifs, setGifs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedGif, setSelectedGif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const myUserId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
    const currentConversationData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "GiphyComponent.useAppSelector[currentConversationData]": (state)=>state.CurrentConversation
    }["GiphyComponent.useAppSelector[currentConversationData]"]);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data: userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"])(token !== null && token !== void 0 ? token : "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GiphyComponent.useEffect": ()=>{
            sendMessageDataRef.current = SendMessageData;
        }
    }["GiphyComponent.useEffect"], [
        SendMessageData
    ]);
    // Fetch GIFs
    const fetchGifs = async (endpoint)=>{
        setLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(endpoint);
            setGifs(res.data.data);
        } catch (e) {}
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GiphyComponent.useEffect": ()=>{
            fetchGifs("https://api.giphy.com/v1/gifs/trending?api_key=".concat(GIPHY_API_KEY, "&limit=18"));
        }
    }["GiphyComponent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GiphyComponent.useEffect": ()=>{
            if (searchTerm.trim()) {
                fetchGifs("https://api.giphy.com/v1/gifs/search?q=".concat(searchTerm, "&api_key=").concat(GIPHY_API_KEY, "&limit=18"));
            }
        }
    }["GiphyComponent.useEffect"], [
        searchTerm
    ]);
    const sendSelectedGif = async ()=>{
        if (!selectedGif) return;
        try {
            var _userData_data, _userData_data1, _currentConversationData_PeerUserData;
            const response = await fetch(selectedGif.images.original.url);
            const blob = await response.blob();
            const file = new File([
                blob
            ], "giphy.gif", {
                type: "image/gif"
            });
            const tempMessage = {
                message_id: Date.now(),
                message_type: "gif",
                message_content: selectedGif.images.original.url,
                message_thumbnail: selectedGif.images.original.url,
                sender_id: parseInt(myUserId || "0"),
                createdAt: new Date().toISOString(),
                User: {
                    profile_pic: (userData === null || userData === void 0 ? void 0 : (_userData_data = userData.data) === null || _userData_data === void 0 ? void 0 : _userData_data.profile_pic) || "",
                    user_name: (userData === null || userData === void 0 ? void 0 : (_userData_data1 = userData.data) === null || _userData_data1 === void 0 ? void 0 : _userData_data1.user_name) || ""
                }
            };
            // dispatch(prependMessageList([tempMessage]));
            const formData = new FormData();
            formData.append("message_type", "gif");
            const userId = currentConversationData === null || currentConversationData === void 0 ? void 0 : (_currentConversationData_PeerUserData = currentConversationData.PeerUserData) === null || _currentConversationData_PeerUserData === void 0 ? void 0 : _currentConversationData_PeerUserData.user_id;
            if (userId) {
                formData.append("user_id", String(userId));
            }
            formData.append("files", file);
            formData.append("message_content", "");
            const sendMessageRes = await postData("/chat/send-message", formData, "multipart/form-data");
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                showGifPicker: false
            }));
            if (sendMessageRes) {
                if (currentConversationData.chat_id === 0 || currentConversationData.chat_id === -1) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCurrentConversation"])({
                        chat_id: sendMessageRes.chat_id
                    }));
                }
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendMessageWithDateCheck"])(sendMessageRes));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                    message: "",
                    message_type: "",
                    reply_id: 0
                }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socketInstance"])().emit("chat_list", {});
            }
            setSelectedGif(null);
        } catch (error) {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "z-10 w-full max-w-xl bg-pr transition duration-500",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                padding: "20px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Send GIFs"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-6 mt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoSearchOutline"], {
                            className: "absolute left-3 top-2 text-2xl text-lightText"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "bg-[#F2F2F2] w-full rounded-xl border border-borderColor py-2 pl-11 placeholder-lightText outline-none",
                            type: "text",
                            placeholder: "Search Gif"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "red"
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 161,
                    columnNumber: 19
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid h-96 place-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                        size: 19,
                        color: "black"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid max-h-[30rem] min-h-96 grid-cols-3 gap-3 overflow-auto",
                    children: gifs.map((gif)=>{
                        const isSelected = (selectedGif === null || selectedGif === void 0 ? void 0 : selectedGif.id) === gif.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative cursor-pointer",
                            onClick: ()=>setSelectedGif(isSelected ? null : gif),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: gif.images.fixed_height.url,
                                    alt: gif.title,
                                    className: "h-full w-full rounded-lg object-cover",
                                    width: 150,
                                    height: 150
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                                    lineNumber: 177,
                                    columnNumber: 19
                                }, this),
                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-dark/40 flex items-center justify-center rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                        className: "text-primary text-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                                        lineNumber: 186,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                                    lineNumber: 185,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, gif.id, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                            lineNumber: 172,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: sendSelectedGif,
                        disabled: !selectedGif,
                        className: "mt-4 flex items-center justify-center gap-2 px-24 py-2 rounded-xl text-primary ".concat(selectedGif ? "bg-main-green" : "bg-gray-400 cursor-not-allowed"),
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_s(GiphyComponent, "YiBDV+AG8UQSaYDY/5czUHxWnUw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"]
    ];
});
_c = GiphyComponent;
var _c;
__turbopack_context__.k.register(_c, "GiphyComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponentModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GiphyComponentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Gif$2f$GiphyComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function GiphyComponentModal() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const close = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
            showGifPicker: false
        }));
    };
    var _useAppSelector;
    const open = (_useAppSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "GiphyComponentModal.useAppSelector": (state)=>state.SendMessageData.showGifPicker
    }["GiphyComponentModal.useAppSelector"])) !== null && _useAppSelector !== void 0 ? _useAppSelector : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: close,
        maxWidth: "sm",
        fullWidth: true,
        PaperProps: {
            className: "rounded-xl bg-modalBg backdrop-blur shadow-lg overflow-hidden",
            style: {
                maxHeight: '80vh'
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$message$2f$Gif$2f$GiphyComponent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponentModal.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponentModal.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/message/Gif/GiphyComponentModal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(GiphyComponentModal, "YGLbk/QEw+zencEnDMCmjCXAZLY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = GiphyComponentModal;
var _c;
__turbopack_context__.k.register(_c, "GiphyComponentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/socket/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/LiveSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/updateUser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function LiveLikeComment() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { liveEvents, commentDraft, user_id, socket_room_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "LiveLikeComment.useAppSelector": (state)=>state.live
    }["LiveLikeComment.useAppSelector"]);
    const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socketInstance"])();
    const [hearts, setHearts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const commentsEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { selectedGiftId, quantity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "LiveLikeComment.useAppSelector": (state)=>state.gift
    }["LiveLikeComment.useAppSelector"]);
    const { data: userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"])(token !== null && token !== void 0 ? token : "");
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // 📌 Listen for activity_on_live updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveLikeComment.useEffect": ()=>{
            socket.on("activity_on_live", {
                "LiveLikeComment.useEffect": (data)=>{
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLiveEvent"])(data));
                    if (data.like) {
                        setHearts({
                            "LiveLikeComment.useEffect": (prev)=>[
                                    ...prev,
                                    Date.now()
                                ]
                        }["LiveLikeComment.useEffect"]);
                    }
                }
            }["LiveLikeComment.useEffect"]);
            return ({
                "LiveLikeComment.useEffect": ()=>{
                    socket.off("activity_on_live");
                }
            })["LiveLikeComment.useEffect"];
        }
    }["LiveLikeComment.useEffect"], [
        socket,
        dispatch
    ]);
    // 📌 Auto scroll to bottom (newest comment visible)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveLikeComment.useEffect": ()=>{
            var _commentsEndRef_current;
            (_commentsEndRef_current = commentsEndRef.current) === null || _commentsEndRef_current === void 0 ? void 0 : _commentsEndRef_current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["LiveLikeComment.useEffect"], [
        liveEvents
    ]);
    // 📌 Send comment
    const handleSendComment = ()=>{
        if (!commentDraft.trim() || !socket_room_id) return;
        socket.emit("activity_on_live", {
            socket_room_id,
            user_id,
            comment: commentDraft
        });
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCommentDraft"])());
    };
    // 📌 Handle Enter key
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleSendComment();
        }
    };
    // 📌 Send like
    const handleSendLike = ()=>{
        if (!socket_room_id) return;
        socket.emit("activity_on_live", {
            socket_room_id,
            user_id,
            like: true
        });
        setHearts((prev)=>[
                ...prev,
                Date.now()
            ]);
    };
    // 📌 All comments
    const comments = liveEvents.filter((event)=>event.comment);
    // send gift ==============
    const handleGiftSend = async ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("SendGift"));
        try {
            const res = await postData("/transaction/send-gift", {
                reciever_id: user_id,
                gift_id: selectedGiftId,
                transaction_ref: "live",
                quatity: quantity
            });
            if (res.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message);
            }
        } catch (error) {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[500px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-10 bottom-20 pointer-events-none",
                children: hearts.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        animate: {
                            opacity: 0,
                            y: -150,
                            x: Math.random() * 40 - 20,
                            scale: 1.5
                        },
                        transition: {
                            duration: 2,
                            ease: "easeOut"
                        },
                        onAnimationComplete: ()=>setHearts((prev)=>prev.filter((h)=>h !== id)),
                        className: "absolute text-primary text-lg",
                        children: "❤️"
                    }, id, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 p-2 overflow-y-auto max-h-[250px]",
                children: [
                    comments.map((event, i)=>{
                        const faded = comments.length > 5 && i < 2; // fade first 2 only if total > 5
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 ".concat(faded ? "" : "opacity-100"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: event.profile_pic,
                                    alt: event.user_name,
                                    width: 28,
                                    height: 28,
                                    className: "rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col text-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,3)]",
                                            children: event.user_name
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,3)]",
                                            children: event.comment_cotent
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: commentsEndRef
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 rounded-b-lg rounded-t-3xl p-2",
                style: {
                    backdropFilter: "blur(18px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: (userData === null || userData === void 0 ? void 0 : userData.data.profile_pic) || "",
                        alt: "",
                        width: 25,
                        height: 25,
                        className: "w-8 h-8 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary/[0.4] w-full flex place-items-center rounded-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: commentDraft,
                                onChange: (e)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCommentDraft"])(e.target.value)),
                                onKeyDown: handleKeyDown,
                                placeholder: "Add a comment...",
                                className: "flex-1 text-primary text-sm p-2.5 outline-none rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-primary w-8 h-8 flex justify-center place-items-center rounded-full text-lg hover:scale-110 absolute right-2 transition",
                                style: {
                                    background: "linear-gradient(141.72deg, #239C57 -1.01%, #019FC8 103.86%)"
                                },
                                onClick: handleSendComment,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/chat/send.png",
                                    alt: "send",
                                    width: 60,
                                    height: 60,
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-primary text-2xl transition cursor-pointer",
                        onClick: ()=>handleGiftSend(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/home/gift.png",
                            alt: "heart",
                            width: 100,
                            height: 100,
                            className: "w-8 h-7"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-primary text-2xl transition",
                        onClick: handleSendLike,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/ReelBoost/borderHeart.png",
                            alt: "heart",
                            width: 100,
                            height: 100,
                            className: "w-8 h-6.5"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(LiveLikeComment, "RX2HN3GtXNsFPKqr98P07jjntCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = LiveLikeComment;
const __TURBOPACK__default__export__ = LiveLikeComment;
var _c;
__turbopack_context__.k.register(_c, "LiveLikeComment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// OpenLiveVideo.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/LiveSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/VideoPlayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$live$2f$LiveLikeComment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/LiveLikeComment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/socket/socket.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$usePeerId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/usePeerId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
function OpenLiveVideo() {
    _s();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OpenLiveVideo.useAppSelector[open]": (state)=>state.modals.LivePopup
    }["OpenLiveVideo.useAppSelector[open]"]);
    const selectedLive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OpenLiveVideo.useAppSelector[selectedLive]": (state)=>state.live.selectedLive
    }["OpenLiveVideo.useAppSelector[selectedLive]"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const socket_room_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OpenLiveVideo.useAppSelector[socket_room_id]": (state)=>state.live.socket_room_id
    }["OpenLiveVideo.useAppSelector[socket_room_id]"]);
    const user_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OpenLiveVideo.useAppSelector[user_id]": (state)=>state.live.user_id
    }["OpenLiveVideo.useAppSelector[user_id]"]);
    const liveUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OpenLiveVideo.useAppSelector[liveUser]": (state)=>state.live.joinLiveResponse
    }["OpenLiveVideo.useAppSelector[liveUser]"]);
    const activeResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OpenLiveVideo.useAppSelector[activeResponse]": (state)=>state.live.liveEvents
    }["OpenLiveVideo.useAppSelector[activeResponse]"]);
    const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socketInstance"])();
    const peerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$usePeerId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const MyUserId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
    //  useEffect(() => {
    //     socket.on("activity_on_live");
    //     return () => {
    //       socket.off("activity_on_live");
    //     };
    //   }, [selectedLive, socket_room_id, dispatch]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OpenLiveVideo.useEffect": ()=>{
            if (!open || !selectedLive || !socket_room_id) return;
            // join live event
            socket.emit("join_live", {
                socket_room_id: socket_room_id,
                user_id: MyUserId,
                peer_id: peerId
            });
            socket.on("join_live", {
                "OpenLiveVideo.useEffect": (data)=>{
                    // update Redux with confirmed response
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setJoinLiveResponse"])(data));
                }
            }["OpenLiveVideo.useEffect"]);
        }
    }["OpenLiveVideo.useEffect"], [
        open,
        selectedLive,
        socket_room_id,
        user_id,
        socket
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("LivePopup"));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSelectedLive"])());
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearLiveEvents"])());
        },
        fullWidth: true,
        PaperProps: {
            sx: {
                p: 0,
                overflow: "visible",
                borderRadius: 3,
                width: "500px",
                maxWidth: "100%",
                maxHeight: "700px"
            }
        },
        BackdropProps: {
            sx: {
                background: "#000000BD"
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[700px] bg-dark sm:block hidden relative rounded-lg",
                children: [
                    selectedLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: selectedLive.Live_hosts[0].peer_id,
                        autoPlay: true,
                        height: "h-[700px]"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary p-4",
                        children: "No live selected"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 flex justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 flex gap-3 place-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoIosArrowBack"], {
                                        className: "text-primary text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,3)]",
                                        onClick: ()=>{
                                            dispatch(dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("LivePopup")));
                                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearLiveEvents"])());
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 place-items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: (liveUser === null || liveUser === void 0 ? void 0 : liveUser.peer_id[0].User.profile_pic) || "",
                                                    alt: "",
                                                    width: 50,
                                                    height: 50,
                                                    className: "w-8 h-8 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-primary inline-block drop-shadow-[0_1px_2px_rgba(0,0,0,3)]",
                                                children: liveUser === null || liveUser === void 0 ? void 0 : liveUser.peer_id[0].User.user_name
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 rounded-l-md py-1 px-2 absolute top-2 right-0 bg-dark/70 z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/SidebarIcons/heart.png",
                                                alt: "heart",
                                                width: 12,
                                                height: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-primary text-[10px]",
                                                children: activeResponse && activeResponse.length > 0 && activeResponse[activeResponse.length - 1].like ? activeResponse[activeResponse.length - 1].current_like : liveUser === null || liveUser === void 0 ? void 0 : liveUser.likes
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineEye"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-primary text-[10px]",
                                                children: liveUser === null || liveUser === void 0 ? void 0 : liveUser.total_viewers
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$live$2f$LiveLikeComment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/live/OpenLiveVideo.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(OpenLiveVideo, "zT3jdS8l3YYwrDKKng7OQlBg410=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$usePeerId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = OpenLiveVideo;
const __TURBOPACK__default__export__ = OpenLiveVideo;
var _c;
__turbopack_context__.k.register(_c, "OpenLiveVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SelectedReelDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$home$2f$Comment$2f$CommentBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/home/Comment/CommentBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/handleCommentCount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const ReelDetailsModal = (param)=>{
    let { setReels } = param;
    var _reel_Media, _reel_User, _reel_User1, _reel_User2, _reel_social_desc;
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const reel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "ReelDetailsModal.useAppSelector[reel]": (state)=>state.selectedReel.reel
    }["ReelDetailsModal.useAppSelector[reel]"]);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Like Unlike
    const handleLike = async (socialId, userId)=>{
        const previousState = {
            isLiked: reel === null || reel === void 0 ? void 0 : reel.isLiked,
            total_likes: reel === null || reel === void 0 ? void 0 : reel.total_likes
        };
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLikeStatus"])()); // Optimistic update for UI
        setReels((prevReels)=>prevReels.map((r)=>r.social_id === socialId ? {
                    ...r,
                    isLiked: !r.isLiked,
                    total_likes: Number(r.total_likes) + (r.isLiked ? -1 : 1)
                } : r));
        try {
            const response = await postData("/like/like-unlike", {
                social_id: socialId,
                social_type: "reel",
                user_id: userId
            });
            if (response.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(response.message);
            } else {
                throw new Error(response.message || "Failed to update like status");
            }
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLikeStatus"])()); // Revert Redux state
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
             // stop if not found
            setReels((prevReels)=>prevReels.map((r)=>{
                    var _previousState_isLiked, _previousState_total_likes;
                    return r.social_id === socialId ? {
                        ...r,
                        isLiked: (_previousState_isLiked = previousState.isLiked) !== null && _previousState_isLiked !== void 0 ? _previousState_isLiked : r.isLiked,
                        total_likes: (_previousState_total_likes = previousState.total_likes) !== null && _previousState_total_likes !== void 0 ? _previousState_total_likes : r.total_likes
                    } : r;
                }));
        }
    };
    // Follow Unfollow User
    const handleFollowUnfollow = async (userId)=>{
        const previousState = typeof (reel === null || reel === void 0 ? void 0 : reel.isFollowing) === "boolean" ? reel.isFollowing : false;
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFollowStatus"])());
        setReels((prevReels)=>prevReels.map((r)=>r.User.user_id === userId ? {
                    ...r,
                    isFollowing: typeof r.isFollowing === "boolean" ? !r.isFollowing : true
                } : r));
        try {
            const res = await postData("/follow/follow-unfollow", {
                user_id: userId
            });
            if (res.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message);
            } else {
                throw new Error(res.message || "Failed to update follow status");
            }
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateFollowStatus"])()); // Revert Redux state
            setReels((prevReels)=>prevReels.map((r)=>r.User.user_id === userId ? {
                        ...r,
                        isFollowing: typeof previousState === "boolean" ? previousState : false
                    } : r)); // Revert Explore state
        }
    };
    // Save Reel
    const handleBookmark = async (socialId)=>{
        const previousState = {
            isSaved: reel === null || reel === void 0 ? void 0 : reel.isSaved,
            total_saves: reel === null || reel === void 0 ? void 0 : reel.total_saves
        };
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateBookmarkStatus"])()); // Optimistic update for UI
        setReels((prevReels)=>prevReels.map((r)=>r.social_id === socialId ? {
                    ...r,
                    isSaved: !r.isSaved,
                    total_saves: Number(r.total_saves) + (r.isSaved ? -1 : 1)
                } : r)); // Update Explore state
        try {
            const response = await postData("/save/save-unsave", {
                social_id: socialId
            });
            if (response.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(response.message);
            } else {
                throw new Error(response.message || "Failed to update bookmark status");
            }
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateBookmarkStatus"])()); // Revert Redux state
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
             // stop if not found
            setReels((prevReels)=>prevReels.map((r)=>{
                    var _previousState_isSaved, _previousState_total_saves;
                    return r.social_id === socialId ? {
                        ...r,
                        isSaved: (_previousState_isSaved = previousState.isSaved) !== null && _previousState_isSaved !== void 0 ? _previousState_isSaved : r.isSaved,
                        total_saves: (_previousState_total_saves = previousState.total_saves) !== null && _previousState_total_saves !== void 0 ? _previousState_total_saves : r.total_saves
                    } : r;
                }));
        }
    };
    // Comment Count
    const commentAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "ReelDetailsModal.useAppSelector[commentAdded]": (state)=>state.commentAdded.commentAdded
    }["ReelDetailsModal.useAppSelector[commentAdded]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReelDetailsModal.useEffect": ()=>{
            if (commentAdded && (reel === null || reel === void 0 ? void 0 : reel.social_id)) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["incrementCommentCount"])()); // Update Redux state
                setReels({
                    "ReelDetailsModal.useEffect": (prevReels)=>prevReels.map({
                            "ReelDetailsModal.useEffect": (r)=>r.social_id === reel.social_id ? {
                                    ...r,
                                    total_comments: (Number(r.total_comments) || 0) + 1
                                } : r
                        }["ReelDetailsModal.useEffect"])
                }["ReelDetailsModal.useEffect"]); // Update Explore state
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCommentAddedFalse"])()); // Reset flag
            }
        }
    }["ReelDetailsModal.useEffect"], [
        commentAdded,
        reel === null || reel === void 0 ? void 0 : reel.social_id,
        dispatch,
        setReels
    ]);
    // useEffect(() => {
    //   const fetchReelDetails = async () => {
    //     if (!reel?.social_id) return;
    //     try {
    //       const response = await postData("/social/get-social", {
    //         social_id: reel.social_id,
    //       });
    //       if (response.status) {
    //         dispatch(setSelectedReel(response.data)); // ✅ update Redux with latest
    //       }
    //     } catch (err) {
    //       console.error("Failed to fetch reel details", err);
    //     }
    //   };
    //   fetchReelDetails();
    // }, [reel?.social_id]);
    if (!reel) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: Boolean(reel),
        onClose: ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSelectedReel"])());
        },
        fullWidth: true,
        PaperProps: {
            sx: {
                p: 0,
                overflow: "visible",
                borderRadius: 3,
                maxHeight: "90vh",
                width: "1500px",
                maxWidth: "100%"
            }
        },
        BackdropProps: {
            sx: {
                background: "#000000BD"
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-primary rounded-lg shadow-lg flex overflow-hidden relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSelectedReel"])()),
                    className: "absolute top-1 right-2 text-dark text-sm z-50 cursor-pointer",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:w-7/10 bg-dark relative sm:block hidden",
                    children: [
                        (reel === null || reel === void 0 ? void 0 : (_reel_Media = reel.Media) === null || _reel_Media === void 0 ? void 0 : _reel_Media.length) > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: reel.Media[0].media_location,
                            autoPlay: true,
                            muted: true,
                            className: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-full h-full text-white",
                            children: "No Media"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/home/play.png",
                            alt: "play",
                            width: 60,
                            height: 60,
                            className: "bg-dark bg-opacity-[30%] rounded-full p-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:w-1/2 flex flex-col max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 pt-4 pr-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between place-items-center pr-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: reel === null || reel === void 0 ? void 0 : (_reel_User = reel.User) === null || _reel_User === void 0 ? void 0 : _reel_User.profile_pic,
                                                    alt: reel === null || reel === void 0 ? void 0 : (_reel_User1 = reel.User) === null || _reel_User1 === void 0 ? void 0 : _reel_User1.user_name,
                                                    width: 40,
                                                    height: 40,
                                                    className: "rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-base font-medium text-dark",
                                                    children: reel === null || reel === void 0 ? void 0 : (_reel_User2 = reel.User) === null || _reel_User2 === void 0 ? void 0 : _reel_User2.user_name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "cursor-pointer sm:w-[20%] p-1 rounded-xl ".concat((reel === null || reel === void 0 ? void 0 : reel.isFollowing) ? "bg-transparent border-main-green border text-main-green" : "bg-main-green text-primary"),
                                            onClick: ()=>{
                                                var _reel_User;
                                                return handleFollowUnfollow(reel === null || reel === void 0 ? void 0 : (_reel_User = reel.User) === null || _reel_User === void 0 ? void 0 : _reel_User.user_id);
                                            },
                                            children: (reel === null || reel === void 0 ? void 0 : reel.isFollowing) ? "Following" : "Follow"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm my-4 text-gray-700",
                                    children: (_reel_social_desc = reel.social_desc) === null || _reel_social_desc === void 0 ? void 0 : _reel_social_desc.split(/(\s+)/).map((part, index)=>part.startsWith("#") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-main-green cursor-pointer",
                                            onClick: ()=>{
                                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setHashtag"])({
                                                    hashtag_name: part.replace("#", "")
                                                }));
                                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSelectedReel"])());
                                                router.push("/explore");
                                            },
                                            children: part
                                        }, index, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : part)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 place-items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: (reel === null || reel === void 0 ? void 0 : reel.isLiked) ? "/home/filled_heart.png" : "/home/like.png",
                                                    alt: "like",
                                                    width: 18,
                                                    height: 18,
                                                    onClick: ()=>{
                                                        var _reel_User;
                                                        return handleLike(reel === null || reel === void 0 ? void 0 : reel.social_id, reel === null || reel === void 0 ? void 0 : (_reel_User = reel.User) === null || _reel_User === void 0 ? void 0 : _reel_User.user_id);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:text-sm text-xs font-medium text-dark",
                                                    children: [
                                                        reel === null || reel === void 0 ? void 0 : reel.total_likes,
                                                        " likes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/home/comment.png",
                                                    alt: "comment",
                                                    width: 18,
                                                    height: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:text-sm text-xs font-medium text-dark",
                                                    children: [
                                                        reel === null || reel === void 0 ? void 0 : reel.total_comments,
                                                        " comments"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: (reel === null || reel === void 0 ? void 0 : reel.isSaved) ? "/home/filled_bookmark.png" : "/home/bookmark.png",
                                                    alt: "save",
                                                    width: 18,
                                                    height: 18,
                                                    className: "",
                                                    onClick: ()=>handleBookmark(reel === null || reel === void 0 ? void 0 : reel.social_id)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:text-sm text-xs font-medium text-dark",
                                                    children: [
                                                        reel === null || reel === void 0 ? void 0 : reel.total_saves,
                                                        " saves"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "text-[#F0F0F0] w-full"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " flex-1 overflow-hidden ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$home$2f$Comment$2f$CommentBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
            lineNumber: 227,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ReelDetailsModal, "2poY+zcCGgxFl8BT2nseZTTA3oE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = ReelDetailsModal;
const __TURBOPACK__default__export__ = ReelDetailsModal;
var _c;
__turbopack_context__.k.register(_c, "ReelDetailsModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LayoutContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$DialogContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DialogContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/Header/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$SidebarComponents$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/SidebarComponents/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$SettingSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SettingSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function LayoutContent(param) {
    let { children } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isSettingsPage = pathname.startsWith("/setting");
    const isNotFound = pathname === "/not-found";
    // ✅ Redirect logic here
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutContent.useEffect": ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
            const publicRoutes = [
                "/",
                "/not-found"
            ];
            const isPublicRoute = publicRoutes.includes(pathname);
            if (!token && !isPublicRoute) {
                if (pathname !== "/") {
                    router.replace("/");
                }
            }
        }
    }["LayoutContent.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$DialogContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            !isNotFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                lineNumber: 42,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: [
                    !isNotFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "".concat(isSettingsPage ? "flex" : ""),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$SidebarComponents$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    onNavigate: ()=>{}
                                }, "main", false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                isSettingsPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:pl-[270px] hidden sm:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$SettingSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onBack: ()=>history.back()
                                    }, "settings", false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 ".concat(!isNotFound && !isSettingsPage ? "lg:ml-[270px]" : ""),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "bottom-right",
                reverseOrder: false
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                newestOnTop: true,
                closeOnClick: true,
                rtl: false,
                draggable: true,
                pauseOnHover: true,
                theme: "dark",
                closeButton: true,
                limit: 3,
                toastStyle: {
                    background: "#1e293b",
                    color: "#fff"
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/LayoutContent.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(LayoutContent, "qIbXzL/glMgPmW/TFWAi/FqCkIk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LayoutContent;
var _c;
__turbopack_context__.k.register(_c, "LayoutContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_TIKTOK%20%282%29_TIKTOK_reel-boost-website_src_app_945ccc7d._.js.map