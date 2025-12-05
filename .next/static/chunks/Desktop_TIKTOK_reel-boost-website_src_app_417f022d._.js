(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/api/getPaymentHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/api/getPaymentHistory.ts
__turbopack_context__.s([
    "usePaymentHistory",
    ()=>usePaymentHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
// store/api/getPaymentHistory.ts
const fetchPaymentHistory = async (param)=>{
    let { pageParam = 1, transactionType, startDate, endDate } = param;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/transaction/history"), {
        page: pageParam,
        transaction_table: "money",
        transaction_type: transactionType,
        start_date: startDate,
        end_date: endDate
    }, {
        headers: {
            Authorization: "Bearer ".concat(token),
            "Content-Type": "application/json"
        }
    });
    return data;
};
const usePaymentHistory = (transactionType, startDate, endDate)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "paymentHistory",
            transactionType,
            startDate,
            endDate
        ],
        queryFn: {
            "usePaymentHistory.useInfiniteQuery": (param)=>{
                let { pageParam } = param;
                return(//@ts-ignore
                fetchPaymentHistory({
                    pageParam,
                    transactionType,
                    startDate,
                    endDate
                }));
            }
        }["usePaymentHistory.useInfiniteQuery"],
        initialPageParam: 1,
        getNextPageParam: {
            "usePaymentHistory.useInfiniteQuery": (lastPage)=>{
                const { Pagination } = (lastPage === null || lastPage === void 0 ? void 0 : lastPage.data) || {};
                if (!Pagination) return undefined;
                return Pagination.current_page < Pagination.total_pages ? Pagination.current_page + 1 : undefined;
            }
        }["usePaymentHistory.useInfiniteQuery"]
    });
};
_s(usePaymentHistory, "xMCOiuh9cV5e8gBi6hogZoGnISk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/api/getPaymentHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function RechargeHistory(param) {
    let { limit } = param;
    _s();
    const { startDate, endDate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "RechargeHistory.useAppSelector": (state)=>state.dateRange
    }["RechargeHistory.useAppSelector"]);
    // ✅ Only build params if dates exist
    const start = startDate !== null ? new Date(startDate).toISOString().split("T")[0] : undefined;
    const end = endDate !== null ? new Date(endDate).toISOString().split("T")[0] : undefined;
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentHistory"])("recharge", start, end);
    const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RechargeHistory.useEffect": ()=>{
            if (limit) return;
            const handleScroll = {
                "RechargeHistory.useEffect.handleScroll": ()=>{
                    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
                    setIsAtBottom(bottom);
                }
            }["RechargeHistory.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "RechargeHistory.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["RechargeHistory.useEffect"];
        }
    }["RechargeHistory.useEffect"], [
        limit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RechargeHistory.useEffect": ()=>{
            if (!limit && isAtBottom && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        }
    }["RechargeHistory.useEffect"], [
        limit,
        isAtBottom,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
            size: 10,
            color: "#1A9D77"
        }, void 0, false, {
            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
            lineNumber: 54,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
        lineNumber: 53,
        columnNumber: 25
    }, this);
    const allRecords = (data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data.Records)) || [];
    const displayedRecords = limit ? allRecords.slice(0, limit) : allRecords;
    if (allRecords.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-center py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/gift/NoRecharge.png",
                alt: "No withdraw available",
                className: " object-contain",
                height: 80,
                width: 80
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-normal text-dark",
                children: "No Recharge History"
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray sm:text-sm text-xs",
                children: "Recharge now to start your history."
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
        lineNumber: 63,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            displayedRecords.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border border-main-green/[0.36] rounded-lg px-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-[#C7EAD0] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/gift/received.png",
                                        alt: "recharge",
                                        width: 15,
                                        height: 15
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-dark text-xs font-medium",
                                            children: "Recharge Coin"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray text-xs",
                                            children: [
                                                "• ",
                                                new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleDateString(),
                                                " •",
                                                " ",
                                                new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleTimeString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-green",
                            children: [
                                "+$",
                                item === null || item === void 0 ? void 0 : item.acutal_money
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, item === null || item === void 0 ? void 0 : item.transaction_id, true, {
                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)),
            isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-gray-500 py-2",
                children: "Loading more..."
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(RechargeHistory, "yEzvixKeb5ZWZQ9aoidhsijlV9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentHistory"]
    ];
});
_c = RechargeHistory;
const __TURBOPACK__default__export__ = RechargeHistory;
var _c;
__turbopack_context__.k.register(_c, "RechargeHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/api/getPaymentHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function WithdrawHistory(param) {
    let { limit } = param;
    _s();
    const { startDate, endDate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "WithdrawHistory.useAppSelector": (state)=>state.dateRange
    }["WithdrawHistory.useAppSelector"]);
    // ✅ Only build params if dates exist
    const start = startDate !== null ? new Date(startDate).toISOString().split("T")[0] : undefined;
    const end = endDate !== null ? new Date(endDate).toISOString().split("T")[0] : undefined;
    // ✅ Pass only the params that exist
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentHistory"])("withdrawal", start, end);
    const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WithdrawHistory.useEffect": ()=>{
            if (limit) return;
            const handleScroll = {
                "WithdrawHistory.useEffect.handleScroll": ()=>{
                    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
                    setIsAtBottom(bottom);
                }
            }["WithdrawHistory.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "WithdrawHistory.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["WithdrawHistory.useEffect"];
        }
    }["WithdrawHistory.useEffect"], [
        limit
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WithdrawHistory.useEffect": ()=>{
            if (!limit && isAtBottom && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        }
    }["WithdrawHistory.useEffect"], [
        limit,
        isAtBottom,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
            size: 10,
            color: "#1A9D77"
        }, void 0, false, {
            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
            lineNumber: 52,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
        lineNumber: 51,
        columnNumber: 7
    }, this);
    const allRecords = (data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data.Records)) || [];
    const displayedRecords = limit ? allRecords.slice(0, limit) : allRecords;
    if (displayedRecords.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-center py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/gift/NoWithdrawHistory.png",
                alt: "No withdraw available",
                className: "object-contain",
                height: 80,
                width: 80
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-normal text-dark",
                children: "No Withdraw History"
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray text-xs sm:text-sm",
                children: "Start transacting to track your withdrawals."
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
        lineNumber: 61,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            displayedRecords.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border border-[#FFC9C9] rounded-lg px-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-[#FFC9C9] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/gift/withdrawn.png",
                                        alt: "withdraw",
                                        width: 15,
                                        height: 15
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-dark text-xs font-medium",
                                            children: "Withdrawal payment"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray text-xs",
                                            children: [
                                                "• ",
                                                new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleDateString(),
                                                " •",
                                                " ",
                                                new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleTimeString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-red text-end",
                                    children: [
                                        "-$",
                                        item === null || item === void 0 ? void 0 : item.acutal_money
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat((item === null || item === void 0 ? void 0 : item.success) === "rejected" ? "bg-red text-primary" : (item === null || item === void 0 ? void 0 : item.success) === "pending" ? "bg-yellow-400 text-dark" : "bg-main-green text-primary", " text-xs px-3 py-0.5 rounded-3xl"),
                                    children: item === null || item === void 0 ? void 0 : item.success
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, item === null || item === void 0 ? void 0 : item.transaction_id, true, {
                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)),
            !limit && isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-gray-500 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                    size: 15,
                    color: "#1A9D77"
                }, void 0, false, {
                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(WithdrawHistory, "DmoN6eoTJ1B64WV17cGNc7E7YBs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentHistory"]
    ];
});
_c = WithdrawHistory;
const __TURBOPACK__default__export__ = WithdrawHistory;
var _c;
__turbopack_context__.k.register(_c, "WithdrawHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$RechargeHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$WithdrawHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/Slice/DateRangeSlice.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function PaymentWithdrawSelect() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("recharge");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex bg-main-green/[0.04] rounded-xl overflow-hidden mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setActiveTab("recharge");
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearDateRange"])());
                        },
                        className: "flex-1 py-2 text-sm font-medium transition cursor-pointer ".concat(activeTab === "recharge" ? "text-main-green" : "text-gray"),
                        children: "Recharge"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-4 my-2 bg-gray-300 self-stretch"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setActiveTab("withdraw");
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearDateRange"])());
                        },
                        className: "flex-1 py-2 text-sm rounded-xl font-medium transition cursor-pointer ".concat(activeTab === "withdraw" ? "text-main-green" : "text-gray"),
                        children: "Withdraw History"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                lineNumber: 15,
                columnNumber: 6
            }, this),
            activeTab === "recharge" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: pathname.includes("payment-history") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$RechargeHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                    lineNumber: 39,
                    columnNumber: 53
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$RechargeHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        limit: 3
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 39,
                        columnNumber: 80
                    }, this)
                }, void 0, false)
            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: pathname.includes("payment-history") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$WithdrawHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                    lineNumber: 43,
                    columnNumber: 53
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$WithdrawHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        limit: 3
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 43,
                        columnNumber: 80
                    }, this)
                }, void 0, false)
            }, void 0, false)
        ]
    }, void 0, true);
}
_s(PaymentWithdrawSelect, "4N2oPqfHL1XDE5lA9nExZxW+9gE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = PaymentWithdrawSelect;
const __TURBOPACK__default__export__ = PaymentWithdrawSelect;
var _c;
__turbopack_context__.k.register(_c, "PaymentWithdrawSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * DateRangePicker component using `react-date-range`.
 *
 * Features:
 * - Shows a button with the selected date range.
 * - Opens a calendar dropdown when clicked.
 * - Normalizes `endDate` to the end of the day (23:59:59.999).
 * - Closes automatically on outside click.
 * - Supports initial start/end dates via props.
 *
 * @param {DateRangePickerProps} props
 */ __turbopack_context__.s([
    "default",
    ()=>DateRangePicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$date$2d$range$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/react-date-range/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/date-fns/subDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function DateRangePicker(param) {
    let { onChange, initialStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(new Date(), 6), initialEnd = new Date() } = param;
    _s();
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            startDate: initialStart,
            endDate: initialEnd,
            key: "selection"
        }
    ]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _range__startDate, _range__endDate;
    const formattedRange = "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((_range__startDate = range[0].startDate) !== null && _range__startDate !== void 0 ? _range__startDate : new Date(), "dd MMM"), " – ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((_range__endDate = range[0].endDate) !== null && _range__endDate !== void 0 ? _range__endDate : new Date(), "dd MMM"));
    const handleChange = (item)=>{
        const selection = item.selection;
        var _selection_startDate;
        const safeStart = (_selection_startDate = selection.startDate) !== null && _selection_startDate !== void 0 ? _selection_startDate : new Date();
        var _selection_endDate;
        let safeEnd = (_selection_endDate = selection.endDate) !== null && _selection_endDate !== void 0 ? _selection_endDate : new Date();
        // ✅ Normalize endDate to end of the day (23:59:59.999)
        safeEnd = new Date(safeEnd.getFullYear(), safeEnd.getMonth(), safeEnd.getDate(), 23, 59, 59, 999);
        setRange([
            {
                ...selection,
                startDate: safeStart,
                endDate: safeEnd
            }
        ]);
        if (onChange) {
            onChange({
                startDate: safeStart,
                endDate: safeEnd
            }); // ✅ Pass corrected dates
        }
        setOpen(false);
    };
    // ✅ Close on outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateRangePicker.useEffect": ()=>{
            const handleClickOutside = {
                "DateRangePicker.useEffect.handleClickOutside": (event)=>{
                    if (ref.current && !ref.current.contains(event.target)) {
                        setOpen(false);
                    }
                }
            }["DateRangePicker.useEffect.handleClickOutside"];
            document.addEventListener("click", handleClickOutside); // 👈 changed to "click"
            return ({
                "DateRangePicker.useEffect": ()=>document.removeEventListener("click", handleClickOutside)
            })["DateRangePicker.useEffect"];
        }
    }["DateRangePicker.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen(!open),
                className: "border cursor-pointer border-gray rounded-xl px-3 py-0.5 text-gray text-xs flex items-center gap-2 bg-primary",
                children: [
                    formattedRange,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/gift/DateArrowDown.png",
                        alt: "down",
                        width: 10,
                        height: 10
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 z-50 shadow-lg rounded-xl bg-primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$date$2d$range$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateRange"], {
                    ranges: range,
                    onChange: handleChange,
                    maxDate: new Date(),
                    rangeColors: [
                        "#1A9D77"
                    ],
                    direction: "horizontal"
                }, void 0, false, {
                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(DateRangePicker, "RUFp0DN4wxmqzNfcMjUqvYRj/Dc=");
_c = DateRangePicker;
var _c;
__turbopack_context__.k.register(_c, "DateRangePicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/Slice/DateRangeSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$PaymentWithdrawSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PaymentHistory() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-main-green/[0.36] rounded-lg px-4 py-4 mt-6 sm:mx-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-dark text-base font-semibold pb-3",
                        children: "Payment History"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onChange: (range)=>{
                            if ((range === null || range === void 0 ? void 0 : range.startDate) && (range === null || range === void 0 ? void 0 : range.endDate)) {
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDateRange"])(range));
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$PaymentWithdrawSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(PaymentHistory, "BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = PaymentHistory;
const __TURBOPACK__default__export__ = PaymentHistory;
var _c;
__turbopack_context__.k.register(_c, "PaymentHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_TIKTOK_reel-boost-website_src_app_417f022d._.js.map