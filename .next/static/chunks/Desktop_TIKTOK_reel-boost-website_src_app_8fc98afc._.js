(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/api/getBlockedList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBlockedUsers",
    ()=>fetchBlockedUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
;
const fetchBlockedUsers = async (param)=>{
    let { pageParam = 1 } = param;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/block/block-list"), {
        page: pageParam
    }, {
        headers: {
            Authorization: "Bearer ".concat(token),
            "Content-Type": "application/json"
        }
    });
    return data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlockedListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getBlockedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/api/getBlockedList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BlockedListPage() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "blockedUsers"
        ],
        queryFn: {
            "BlockedListPage.useInfiniteQuery": (param)=>{
                let { pageParam } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getBlockedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBlockedUsers"])({
                    pageParam: pageParam
                });
            }
        }["BlockedListPage.useInfiniteQuery"],
        getNextPageParam: {
            "BlockedListPage.useInfiniteQuery": (lastPage)=>{
                const { current_page, total_pages } = lastPage.data.Pagination;
                return current_page < total_pages ? current_page + 1 : undefined;
            }
        }["BlockedListPage.useInfiniteQuery"],
        initialPageParam: 1
    });
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const handleBlockUnblock = async (userId)=>{
        try {
            const response = await postData("/block/block-unblock", {
                user_id: userId
            });
            if (response.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(response.message);
                queryClient.invalidateQueries({
                    queryKey: [
                        "blockedUsers"
                    ]
                }); // ✅ refresh list
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(response.message);
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Something went wrong");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlockedListPage.useEffect": ()=>{
            if (!observerRef.current || !hasNextPage) return;
            const observer = new IntersectionObserver({
                "BlockedListPage.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) fetchNextPage();
                }
            }["BlockedListPage.useEffect"], {
                threshold: 1
            });
            observer.observe(observerRef.current);
            return ({
                "BlockedListPage.useEffect": ()=>observer.disconnect()
            })["BlockedListPage.useEffect"];
        }
    }["BlockedListPage.useEffect"], [
        hasNextPage,
        fetchNextPage
    ]);
    var _data_pages_flatMap;
    const blockedUsers = (_data_pages_flatMap = data === null || data === void 0 ? void 0 : data.pages.flatMap((p)=>p.data.Records)) !== null && _data_pages_flatMap !== void 0 ? _data_pages_flatMap : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-lg font-bold text-dark sm:block hidden p-6",
                children: "Blocked List"
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            blockedUsers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    blockedUsers.map((record)=>{
                        const user = record.blocked;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b items-center py-2 sm:mx-12 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: user.profile_pic,
                                            alt: user.first_name,
                                            className: "h-12 w-12 object-cover rounded-full",
                                            width: 48,
                                            height: 48
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-semibold text-sm text-dark",
                                                    children: user.first_name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#747474] text-xs",
                                                    children: user.user_name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleBlockUnblock(user.user_id),
                                    className: "rounded-xl text-xs h-fit px-6 py-1.5 cursor-pointer border border-main-green text-dark",
                                    children: "Unblock"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, record.block_id, true, {
                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: observerRef,
                        className: "py-4 text-center",
                        children: isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Loading more..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                            lineNumber: 120,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 justify-center items-center py-52",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/Setting/NoBlocks.png",
                        alt: "No blocks",
                        width: 80,
                        height: 80
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-dark text-sm",
                        children: "No Blocked Users"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(BlockedListPage, "WKpeFw4KU4RGEWcnbnGwB4bMjg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = BlockedListPage;
var _c;
__turbopack_context__.k.register(_c, "BlockedListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_TIKTOK_reel-boost-website_src_app_8fc98afc._.js.map