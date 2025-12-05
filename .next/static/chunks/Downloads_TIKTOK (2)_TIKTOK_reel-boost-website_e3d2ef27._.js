(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getTransactionPlans.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransactionPlans",
    ()=>useTransactionPlans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const fetchTransactionPlans = async (page)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/transaction/get-transaction-plan"), {
        page
    }, {
        headers: {
            Authorization: "Bearer ".concat(token),
            "Content-Type": "application/json"
        }
    });
    return data;
};
const useTransactionPlans = (page)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "transactionPlans",
            page
        ],
        queryFn: {
            "useTransactionPlans.useQuery": ()=>fetchTransactionPlans(page)
        }["useTransactionPlans.useQuery"],
        // keepPreviousData: true, // prevents flicker when switching pages
        staleTime: 1000 * 60
    });
};
_s(useTransactionPlans, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RechargePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getTransactionPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getTransactionPlans.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$TransactionPlanSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/TransactionPlanSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$currency$2d$symbol$2d$map$2f$currency$2d$symbol$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/currency-symbol-map/currency-symbol-map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
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
function RechargePage() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { plans, selectedPlanId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "RechargePage.useAppSelector": (state)=>state.transactionPlans
    }["RechargePage.useAppSelector"]);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const loaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { data, isLoading, isFetching } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getTransactionPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionPlans"])(page);
    // Append new records into Redux
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RechargePage.useEffect": ()=>{
            var _data_data;
            if (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.Records) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$TransactionPlanSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appendPlans"])(data.data.Records));
            }
        }
    }["RechargePage.useEffect"], [
        data,
        dispatch
    ]);
    // Infinite scroll observer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RechargePage.useEffect": ()=>{
            if (!loaderRef.current) return;
            const observer = new IntersectionObserver({
                "RechargePage.useEffect": (entries)=>{
                    var _data_data;
                    const target = entries[0];
                    const pagination = data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.Pagination;
                    if (target.isIntersecting && !isFetching && pagination && pagination.current_page < pagination.total_pages) {
                        setPage({
                            "RechargePage.useEffect": (prev)=>prev + 1
                        }["RechargePage.useEffect"]);
                    }
                }
            }["RechargePage.useEffect"], {
                threshold: 1
            });
            observer.observe(loaderRef.current);
            return ({
                "RechargePage.useEffect": ()=>observer.disconnect()
            })["RechargePage.useEffect"];
        }
    }["RechargePage.useEffect"], [
        data,
        isFetching
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-bold text-dark sm:block hidden",
                        children: "Recharge"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-main-green text-base",
                        children: "Upgrade to Premium & Unlock Full Access"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray text-sm",
                        children: "Get the Premium Plan for unlimited access to advanced features and exclusive content."
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid sm:grid-cols-3 grid-cols-2 gap-6 mt-4 overflow-y-auto scrollbar-hide",
                    children: plans.map((plan)=>{
                        // Get currency symbol dynamically from package
                        const symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$currency$2d$symbol$2d$map$2f$currency$2d$symbol$2d$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(plan.currency) || plan.currency;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$TransactionPlanSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSelectedPlanId"])(plan.plan_id));
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$TransactionPlanSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSelectedPlanAmount"])(plan.corresponding_money));
                            },
                            className: "flex flex-col items-center gap-3 h-fit py-8 px-12 border rounded-lg cursor-pointer transition \n                  ".concat(selectedPlanId === plan.plan_id ? "border-main-green bg-main-green/[0.1]" : "border-main-green/[0.36]"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/profile/coin.png",
                                    alt: plan.plan_name,
                                    width: 50,
                                    height: 50,
                                    className: "rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-sm text-dark",
                                            children: [
                                                plan.coins,
                                                " Coins"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-main-green",
                                            children: [
                                                symbol,
                                                plan.corresponding_money
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, plan.plan_id, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loaderRef,
                className: "flex justify-center p-4",
                children: isLoading || isFetching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                    lineNumber: 116,
                    columnNumber: 36
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            selectedPlanId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky bottom-0 w-full p-4 bg-primary shadow-lg flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full max-w-sm bg-main-green text-primary py-3 rounded-xl font-medium hover:opacity-90 transition cursor-pointer",
                    onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("PaymentGateway")),
                    children: "Pay Now"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(RechargePage, "2UioFJVpnDKIcrPVeCUBEGgQdbc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getTransactionPlans$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionPlans"]
    ];
});
_c = RechargePage;
var _c;
__turbopack_context__.k.register(_c, "RechargePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/currency-symbol-map/map.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    AED: 'د.إ',
    AFN: '؋',
    ALL: 'L',
    AMD: '֏',
    ANG: 'ƒ',
    AOA: 'Kz',
    ARS: '$',
    AUD: '$',
    AWG: 'ƒ',
    AZN: '₼',
    BAM: 'KM',
    BBD: '$',
    BDT: '৳',
    BGN: 'лв',
    BHD: '.د.ب',
    BIF: 'FBu',
    BMD: '$',
    BND: '$',
    BOB: '$b',
    BOV: 'BOV',
    BRL: 'R$',
    BSD: '$',
    BTC: '₿',
    BTN: 'Nu.',
    BWP: 'P',
    BYN: 'Br',
    BYR: 'Br',
    BZD: 'BZ$',
    CAD: '$',
    CDF: 'FC',
    CHE: 'CHE',
    CHF: 'CHF',
    CHW: 'CHW',
    CLF: 'CLF',
    CLP: '$',
    CNH: '¥',
    CNY: '¥',
    COP: '$',
    COU: 'COU',
    CRC: '₡',
    CUC: '$',
    CUP: '₱',
    CVE: '$',
    CZK: 'Kč',
    DJF: 'Fdj',
    DKK: 'kr',
    DOP: 'RD$',
    DZD: 'دج',
    EEK: 'kr',
    EGP: '£',
    ERN: 'Nfk',
    ETB: 'Br',
    ETH: 'Ξ',
    EUR: '€',
    FJD: '$',
    FKP: '£',
    GBP: '£',
    GEL: '₾',
    GGP: '£',
    GHC: '₵',
    GHS: 'GH₵',
    GIP: '£',
    GMD: 'D',
    GNF: 'FG',
    GTQ: 'Q',
    GYD: '$',
    HKD: '$',
    HNL: 'L',
    HRK: 'kn',
    HTG: 'G',
    HUF: 'Ft',
    IDR: 'Rp',
    ILS: '₪',
    IMP: '£',
    INR: '₹',
    IQD: 'ع.د',
    IRR: '﷼',
    ISK: 'kr',
    JEP: '£',
    JMD: 'J$',
    JOD: 'JD',
    JPY: '¥',
    KES: 'KSh',
    KGS: 'лв',
    KHR: '៛',
    KMF: 'CF',
    KPW: '₩',
    KRW: '₩',
    KWD: 'KD',
    KYD: '$',
    KZT: '₸',
    LAK: '₭',
    LBP: '£',
    LKR: '₨',
    LRD: '$',
    LSL: 'M',
    LTC: 'Ł',
    LTL: 'Lt',
    LVL: 'Ls',
    LYD: 'LD',
    MAD: 'MAD',
    MDL: 'lei',
    MGA: 'Ar',
    MKD: 'ден',
    MMK: 'K',
    MNT: '₮',
    MOP: 'MOP$',
    MRO: 'UM',
    MRU: 'UM',
    MUR: '₨',
    MVR: 'Rf',
    MWK: 'MK',
    MXN: '$',
    MXV: 'MXV',
    MYR: 'RM',
    MZN: 'MT',
    NAD: '$',
    NGN: '₦',
    NIO: 'C$',
    NOK: 'kr',
    NPR: '₨',
    NZD: '$',
    OMR: '﷼',
    PAB: 'B/.',
    PEN: 'S/.',
    PGK: 'K',
    PHP: '₱',
    PKR: '₨',
    PLN: 'zł',
    PYG: 'Gs',
    QAR: '﷼',
    RMB: '￥',
    RON: 'lei',
    RSD: 'Дин.',
    RUB: '₽',
    RWF: 'R₣',
    SAR: '﷼',
    SBD: '$',
    SCR: '₨',
    SDG: 'ج.س.',
    SEK: 'kr',
    SGD: 'S$',
    SHP: '£',
    SLL: 'Le',
    SOS: 'S',
    SRD: '$',
    SSP: '£',
    STD: 'Db',
    STN: 'Db',
    SVC: '$',
    SYP: '£',
    SZL: 'E',
    THB: '฿',
    TJS: 'SM',
    TMT: 'T',
    TND: 'د.ت',
    TOP: 'T$',
    TRL: '₤',
    TRY: '₺',
    TTD: 'TT$',
    TVD: '$',
    TWD: 'NT$',
    TZS: 'TSh',
    UAH: '₴',
    UGX: 'USh',
    USD: '$',
    UYI: 'UYI',
    UYU: '$U',
    UYW: 'UYW',
    UZS: 'лв',
    VEF: 'Bs',
    VES: 'Bs.S',
    VND: '₫',
    VUV: 'VT',
    WST: 'WS$',
    XAF: 'FCFA',
    XBT: 'Ƀ',
    XCD: '$',
    XOF: 'CFA',
    XPF: '₣',
    XSU: 'Sucre',
    XUA: 'XUA',
    YER: '﷼',
    ZAR: 'R',
    ZMW: 'ZK',
    ZWD: 'Z$',
    ZWL: '$'
};
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/currency-symbol-map/currency-symbol-map.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const currencySymbolMap = __turbopack_context__.r("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/currency-symbol-map/map.js [app-client] (ecmascript)");
module.exports = function getSymbolFromCurrency(currencyCode) {
    if (typeof currencyCode !== 'string') {
        return undefined;
    }
    const code = currencyCode.toUpperCase();
    if (!Object.prototype.hasOwnProperty.call(currencySymbolMap, code)) {
        return undefined;
    }
    return currencySymbolMap[code];
};
module.exports.currencySymbolMap = currencySymbolMap;
}),
]);

//# sourceMappingURL=Downloads_TIKTOK%20%282%29_TIKTOK_reel-boost-website_e3d2ef27._.js.map