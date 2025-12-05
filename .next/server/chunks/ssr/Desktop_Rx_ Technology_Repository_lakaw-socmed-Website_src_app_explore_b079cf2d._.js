module.exports = [
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AllHashtagsName() {
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { postData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [hashtags, setHashtags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [startIndex, setStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const selectedHashtagFromStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.userId.hashtag_name);
    const [selectedHashtag, setSelectedHashtag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(selectedHashtagFromStore || "All");
    const itemsToShow = 10;
    const fetchedPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fetchHashtags = async (pageNum)=>{
        if (loading || fetchedPages.current.has(pageNum)) return;
        fetchedPages.current.add(pageNum);
        try {
            const response = await postData("/hashtag/get-hashtags", {
                token,
                page: pageNum,
                pageSize: 5000,
                add_social: true
            });
            if (response.status) {
                setHashtags((prev)=>[
                        ...prev,
                        ...response.data.Records
                    ]);
                setPagination(response.data.Pagination);
            }
        } catch (error) {}
    };
    // Initial load
    // Initial load
    // Initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchHashtags(1);
        if (!selectedHashtagFromStore) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setHashtag"])({
                hashtag_name: "All",
                count: "0"
            }));
        }
    }, []);
    // Sync local state with Redux
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedHashtagFromStore) {
            setSelectedHashtag(selectedHashtagFromStore);
        }
    }, [
        selectedHashtagFromStore
    ]);
    // Scroll-based fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const grid = gridRef.current;
            if (!grid || !pagination || loading) return;
            const { scrollLeft, scrollWidth, clientWidth } = grid;
            const scrollThreshold = 100;
            if (scrollWidth - (scrollLeft + clientWidth) < scrollThreshold) {
                if (page < (pagination.total_pages ?? 0)) {
                    const nextPage = page + 1;
                    setPage(nextPage);
                    fetchHashtags(nextPage);
                }
            }
        };
        const grid = gridRef.current;
        grid?.addEventListener("scroll", handleScroll);
        return ()=>grid?.removeEventListener("scroll", handleScroll);
    }, [
        page,
        loading,
        pagination
    ]);
    const handleNext = ()=>{
        const nextIndex = startIndex + 1;
        if (nextIndex + itemsToShow > hashtags.length && pagination && page < pagination.total_pages) {
            const nextPage = page + 1;
            setPage(nextPage);
            fetchHashtags(nextPage);
        }
        if (nextIndex < hashtags.length) {
            setStartIndex(nextIndex);
        }
    };
    const handlePrev = ()=>{
        if (startIndex > 0) {
            setStartIndex((prev)=>prev - 1);
        }
    };
    // Remove selected hashtag from main list
    const filteredHashtags = hashtags.filter((h)=>h.hashtag_name !== selectedHashtag);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative py-4 max-w-xs sm:max-w-xl mx-auto xl:max-w-full",
        children: [
            startIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePrev,
                className: "absolute md:-left-12 left-0 top-1/2 -translate-y-1/2 z-10 bg-primary shadow p-2 rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowBack"], {
                    className: "text-dark text-base"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this),
            (startIndex + itemsToShow < filteredHashtags.length || pagination && page < pagination.total_pages) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleNext,
                className: "absolute md:-right-12 right-0 top-1/2 -translate-y-1/2 z-10 bg-primary shadow p-2 rounded-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowBack"], {
                    className: "text-base text-dark rotate-180"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gridRef,
                className: "flex gap-3 overflow-x-auto scrollbar-hide",
                style: {
                    maxHeight: "60px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSelectedHashtag("All");
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setHashtag"])({
                                hashtag_name: "",
                                count: "0"
                            }));
                        },
                        className: `px-6 py-2 rounded-xl cursor-pointer text-xs whitespace-nowrap transition ${selectedHashtag === "All" ? "bg-main-green text-primary" : "bg-dark/[0.04] text-dark"}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    selectedHashtag !== "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-main-green text-primary cursor-pointer px-6 py-2 text-xs rounded-xl whitespace-nowrap",
                        onClick: ()=>{
                            setSelectedHashtag("All");
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setHashtag"])({
                                hashtag_name: "",
                                count: "0"
                            }));
                        },
                        children: [
                            "#",
                            selectedHashtag
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    loading && hashtags.length === 0 ? Array.from({
                        length: itemsToShow
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-6 bg-gray-200 animate-pulse rounded-xl"
                        }, i, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                            lineNumber: 190,
                            columnNumber: 15
                        }, this)) : filteredHashtags.slice(startIndex, startIndex + itemsToShow).map((hashtag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSelectedHashtag(hashtag.hashtag_name);
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setHashtag"])({
                                    hashtag_name: hashtag.hashtag_name,
                                    count: hashtag.total_socials
                                }));
                            },
                            className: "cursor-pointer px-6 py-2 rounded-xl text-xs whitespace-nowrap transition bg-dark/[0.04] text-dark",
                            children: [
                                "#",
                                hashtag.hashtag_name
                            ]
                        }, hashtag.hashtag_name + i, true, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                            lineNumber: 198,
                            columnNumber: 17
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = AllHashtagsName;
}),
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$explore$2f$AllHashtagsName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/AllHashtagsName.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/SelectedReelDetail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/ActiveCommentBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$explore$2f$SelectedReelModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/SelectedReelModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/handleCommentCount.tsx [app-ssr] (ecmascript)");
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
function Explore() {
    const { postData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [reels, setReels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fetching, setFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasInitialLoad, setHasInitialLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(1);
    const observer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hashtagName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.userId.hashtag_name);
    const isAllSelected = !hashtagName || hashtagName.trim() === "";
    const commentAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.commentAdded.commentAdded);
    const ReelSharedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.commentAdded.ReelSharedId);
    const activeCommentPostId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.comment.activeCommentPostId);
    const fetchReels = async (pageToFetch)=>{
        setFetching(true);
        try {
            const payload = {
                social_type: "reel",
                page: pageToFetch
            };
            if (!isAllSelected) {
                payload.hashtag = hashtagName;
            }
            const response = await postData("/social/get-social", payload);
            if (response.status) {
                setReels((prev)=>[
                        ...prev,
                        ...response.data.Records
                    ]);
                const totalPages = response.data.Pagination?.total_pages ?? 1;
                setHasMore(pageToFetch < totalPages);
            } else {}
        } catch (error) {} finally{
            setFetching(false);
        }
    };
    // Track already fetched hashtags to prevent duplicate calls
    const fetchedHashtags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchInitial = async ()=>{
            const safeHashtagName = hashtagName ?? "";
            if (fetchedHashtags.current.has(safeHashtagName)) return;
            fetchedHashtags.current.add(safeHashtagName);
            setReels([]);
            setHasInitialLoad(false);
            pageRef.current = 1;
            await fetchReels(1);
            await fetchReels(2);
            pageRef.current = 3;
            setHasInitialLoad(true);
        };
        fetchInitial();
    }, [
        hashtagName
    ]);
    // Handle comment count increment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (commentAdded && activeCommentPostId) {
            setReels((prevReels)=>prevReels.map((r)=>r.social_id === activeCommentPostId ? {
                        ...r,
                        total_comments: (Number(r.total_comments) || 0) + 1
                    } : r));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCommentAddedFalse"])());
        }
    }, [
        commentAdded,
        activeCommentPostId,
        dispatch
    ]);
    // Handle share count increment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (ReelSharedId) {
            setReels((prevReels)=>prevReels.map((r)=>r.social_id === ReelSharedId ? {
                        ...r,
                        total_shares: (Number(r.total_shares) || 0) + 1
                    } : r));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setReelSharedFalse"])());
        }
    }, [
        ReelSharedId,
        dispatch
    ]);
    const lastReelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        if (!hasInitialLoad || fetching) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting && hasMore && !fetching) {
                fetchReels(pageRef.current);
                pageRef.current += 1;
            }
        });
        if (node) observer.current.observe(node);
    }, [
        hasMore,
        fetching,
        hasInitialLoad
    ]);
    const ShimmerCard = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1 animate-pulse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-lg overflow-hidden h-[250px] bg-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                            lineNumber: 130,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 w-full h-[70px] bg-gradient-to-t from-gray-300 via-gray-200 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                            lineNumber: 131,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                    lineNumber: 129,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-1 place-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 rounded-full bg-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                            lineNumber: 134,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 w-16 rounded bg-gray-300"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                            lineNumber: 135,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
            lineNumber: 128,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-4 px-4 2xl:px-0 mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl text-dark font-semibold",
                        children: "Explore"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$explore$2f$AllHashtagsName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 xl:grid-cols-4 gap-4 py-4",
                        children: [
                            loading && reels.length === 0 || !hasInitialLoad ? Array.from({
                                length: 8
                            }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerCard, {}, idx, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                    lineNumber: 147,
                                    columnNumber: 55
                                }, this)) : reels.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-center items-center py-32 col-span-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/profile/NoReels.png",
                                        alt: "no reels",
                                        width: 80,
                                        height: 80
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-dark text-[11px] text-center font-normal max-w-3xs",
                                        children: "Begin your journey to become a Lakaw creator today"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this) : reels.map((reel, idx)=>{
                                const isLast = idx === reels.length - 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: isLast ? lastReelRef : null,
                                    className: "flex flex-col gap-1 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative rounded-lg overflow-hidden 2xl:max-w-96 xl:max-w-60 h-[250px] bg-dark",
                                            onClick: ()=>{
                                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSelectedReel"])(reel));
                                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveCommentPostId"])(reel.social_id));
                                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveUserId"])(reel.User.user_id));
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: reel.Media[0]?.media_location,
                                                    className: "h-full w-full object-cover",
                                                    playsInline: true,
                                                    autoPlay: true,
                                                    muted: true,
                                                    loop: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 left-0 w-full sm:h-[70px] bg-gradient-to-t from-dark via-dark/40 to-transparent z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 place-items-center absolute bottom-3 left-3 z-20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiHeart3Line"], {}, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-primary font-medium text-xs",
                                                            children: reel.total_likes
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 place-items-center cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: reel.User.profile_pic,
                                                        className: "w-5.5 h-5.5 rounded-full object-cover",
                                                        alt: reel.User.user_name,
                                                        width: 50,
                                                        height: 50
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-dark text-[12px]",
                                                    children: reel.User.user_name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, this);
                            }),
                            fetching && reels.length > 0 && Array.from({
                                length: 4
                            }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerCard, {}, "fetching-" + idx, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                                    lineNumber: 207,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$explore$2f$SelectedReelModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                setReels: setReels
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/explore/Explore.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = Explore;
}),
];

//# sourceMappingURL=Desktop_Rx_%20Technology_Repository_lakaw-socmed-Website_src_app_explore_b079cf2d._.js.map