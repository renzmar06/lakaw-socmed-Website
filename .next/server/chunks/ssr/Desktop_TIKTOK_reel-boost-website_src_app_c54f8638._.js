module.exports = [
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/api/LiveReels.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLiveApi",
    ()=>useLiveApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
;
const useLiveApi = ()=>{
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const fetchLive = async (page)=>{
        const payload = {
            social_type: "reel",
            page
        };
        return await postData("/live/live-list", payload);
    };
    return {
        fetchLive
    };
};
}),
"[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$LiveReels$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/api/LiveReels.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/components/VideoPlayer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/Slice/ModalsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TIKTOK/reel-boost-website/src/app/store/Slice/LiveSlice.tsx [app-ssr] (ecmascript)");
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
function Live() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { fetchLive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$LiveReels$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLiveApi"])();
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "liveReels"
        ],
        queryFn: ({ pageParam })=>fetchLive(pageParam),
        getNextPageParam: (lastPage)=>{
            const currentPage = lastPage.data.Pagination.current_page;
            const totalPages = lastPage.data.Pagination.total_pages;
            return currentPage < totalPages ? currentPage + 1 : undefined;
        },
        initialPageParam: 1
    });
    // flatten pages
    const live = data?.pages.flatMap((page)=>page.data.Records) || [];
    // infinite scroll
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const handleScroll = ()=>{
            const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
            if (bottom && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    ]);
    const ShimmerCard = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse bg-gray-300 h-[250px] w-full rounded-lg"
        }, void 0, false, {
            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
            lineNumber: 48,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "px-4 text-xl text-dark font-semibold 2xl:pt-8 pt-3",
                children: "Live"
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 p-4",
                children: isLoading ? // Render 8 shimmer cards
                Array.from({
                    length: 8
                }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerCard, {}, idx, false, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                        lineNumber: 60,
                        columnNumber: 53
                    }, this)) : live.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 justify-center items-center sm:py-56 py-36 w-full col-span-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/ReelBoost/NoLive.png",
                            alt: "No live available",
                            className: "object-contain",
                            height: 80,
                            width: 80
                        }, void 0, false, {
                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-dark",
                            children: "No Live"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this) : live.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-lg overflow-hidden h-[250px] bg-dark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cursor-pointer",
                                onClick: ()=>{
                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSelectedLive"])(item));
                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setLiveData"])({
                                        socket_room_id: item.socket_room_id,
                                        user_id: item.Live_hosts[0].user_id
                                    }));
                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showModal"])("LivePopup"));
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.Live_hosts[0].peer_id,
                                    autoPlay: true,
                                    muted: true,
                                    controls: false
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 items-center absolute bottom-3 left-3 z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full overflow-hidden shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.Live_hosts[0]?.User.profile_pic,
                                            alt: "Profile",
                                            width: 32,
                                            height: 32,
                                            className: "object-cover w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-primary px-2 py-0.5 rounded-lg",
                                        children: item.Live_hosts[0]?.User.user_name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 rounded-l-md py-1 px-2 absolute top-2 right-0 bg-dark/70 z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/SidebarIcons/heart.png",
                                                alt: "heart",
                                                width: 12,
                                                height: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-primary text-[10px]",
                                                children: item.likes
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineEye"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-primary text-[10px]",
                                                children: item.total_viewers
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-red absolute top-2 left-2 py-1 px-4 text-primary font-medium text-[10px] rounded-md z-20",
                                children: "Live"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-4 text-gray-500 text-sm",
                children: "Loading more..."
            }, void 0, false, {
                fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TIKTOK/reel-boost-website/src/app/live/Live.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Live;
}),
];

//# sourceMappingURL=Desktop_TIKTOK_reel-boost-website_src_app_c54f8638._.js.map