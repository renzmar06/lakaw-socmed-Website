module.exports = [
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookNowPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function BookNowPage() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [tours, setTours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchTours = async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`https://golakaw.com/api/tourlist?page=${page}`);
                console.log("Tour fetch response:", res.data.data.data);
                // ✅ Real array is inside data.tours
                setTours(res.data.data.data);
            } catch (err) {
                console.error("Error fetching tours:", err);
                setTours([]);
            } finally{
                setLoading(false);
            }
        };
        fetchTours();
    }, [
        page
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-5 max-w-5xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-center text-gray-800",
                children: "Tour List"
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                lineNumber: 34,
                columnNumber: 3
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-lg text-gray-600",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: tours.map((tour)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 border rounded-xl shadow hover:shadow-lg bg-white transition duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-semibold text-xl text-gray-900 mb-2 text-color-black",
                                children: tour.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Price:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    tour.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Duration:"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    tour.duration
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition",
                                children: "Book Now"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, tour.id, true, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-4 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: page <= 1,
                        onClick: ()=>setPage(page - 1),
                        className: "px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 disabled:opacity-50 disabled:hover:bg-gray-300 transition",
                        children: "Prev"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                        lineNumber: 69,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-4 py-2 bg-white border rounded-lg shadow-sm text-lg",
                        children: [
                            "Page ",
                            page
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                        lineNumber: 77,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPage(page + 1),
                        className: "px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                        lineNumber: 81,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
                lineNumber: 68,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/booknow/page.tsx",
        lineNumber: 32,
        columnNumber: 4
    }, this);
}
}),
];

//# sourceMappingURL=57214_%20Technology_Repository_lakaw-socmed-Website_src_app_booknow_page_tsx_5c8c5d8a._.js.map