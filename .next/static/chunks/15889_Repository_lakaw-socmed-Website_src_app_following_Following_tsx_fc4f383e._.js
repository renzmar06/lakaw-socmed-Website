(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
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
function Following() {
    _s();
    const { postData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [fetching, setFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    const hasFetchedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false); // prevent multiple calls for page 1
    const MyUserId = Number(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id"));
    // Fetch users not following (with socials)
    const fetchPage = async (pageToFetch)=>{
        if (pageToFetch === 1 && hasFetchedRef.current) return;
        setFetching(true);
        try {
            const response = await postData("/users/find-user-not-following", {
                page: pageToFetch
            });
            // inside fetchPage
            if (response.status) {
                const filteredRecords = response.data.Records.filter((user)=>user.user_id !== MyUserId).filter((user)=>user.user_name && user.user_name.trim() !== "");
                // only append once
                setUsers((prev)=>[
                        ...prev,
                        ...filteredRecords
                    ]);
                const totalPages = response.data.Pagination.total_pages;
                setHasMore(pageToFetch < totalPages);
                if (pageToFetch === 1) hasFetchedRef.current = true;
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to fetch users");
        } finally{
            setFetching(false);
        }
    };
    // Initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Following.useEffect": ()=>{
            fetchPage(1);
            pageRef.current = 2;
        }
    }["Following.useEffect"], []);
    // Infinite scroll
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Infinite scroll - window-based
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Following.useCallback[handleScroll]": ()=>{
            if (!hasMore || fetching) return;
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            if (scrollTop + windowHeight >= fullHeight - 150) {
                fetchPage(pageRef.current);
                pageRef.current += 1;
            }
        }
    }["Following.useCallback[handleScroll]"], [
        fetching,
        hasMore
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Following.useEffect": ()=>{
            window.addEventListener("scroll", handleScroll);
            return ({
                "Following.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Following.useEffect"];
        }
    }["Following.useEffect"], [
        handleScroll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Following.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            container.addEventListener("scroll", handleScroll);
            return ({
                "Following.useEffect": ()=>container.removeEventListener("scroll", handleScroll)
            })["Following.useEffect"];
        }
    }["Following.useEffect"], [
        handleScroll
    ]);
    // Navigate to user profile
    const handleUserRoute = (userId)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserId"])(userId));
        router.push("/profile/".concat(userId));
    };
    // Follow / Remove user
    // inside handleFollow
    const handleFollow = async (userId)=>{
        try {
            const res = await postData("/follow/follow-unfollow", {
                user_id: userId
            });
            if (res.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message);
                // ✅ immediately remove followed user
                setUsers((prev)=>prev.filter((u)=>u.user_id !== userId));
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to follow user");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Something went wrong");
        }
    };
    // Shimmer for loading
    const ShimmerCard = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-[320px] rounded-lg overflow-hidden bg-gray-300 animate-pulse relative"
        }, void 0, false, {
            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
            lineNumber: 121,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "grid lg:grid-cols-3 md:grid-cols-2 gap-4 py-4 overflow-y-auto h-full",
        children: [
            loading && users.length === 0 ? Array.from({
                length: 6
            }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerCard, {}, idx, false, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                    lineNumber: 130,
                    columnNumber: 51
                }, this)) : users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center items-center py-72 col-span-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/profile/NoReels.png",
                        width: 80,
                        height: 80,
                        alt: "no reels"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-dark text-[11px] text-center font-normal max-w-3xs",
                        children: "Begin your journey to become a Lakaw creator today"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this) : users.map((user)=>{
                var _firstSocial_Media_, _firstSocial_Media;
                const firstSocial = user.Socials[0];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-lg overflow-hidden h-[320px] mx-4 bg-dark",
                    children: [
                        firstSocial && ((_firstSocial_Media = firstSocial.Media) === null || _firstSocial_Media === void 0 ? void 0 : (_firstSocial_Media_ = _firstSocial_Media[0]) === null || _firstSocial_Media_ === void 0 ? void 0 : _firstSocial_Media_.media_location) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: firstSocial.Media[0].media_location,
                            className: "h-full w-full object-cover",
                            playsInline: true,
                            autoPlay: true,
                            muted: true,
                            loop: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                            lineNumber: 152,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full w-full bg-dark"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                            lineNumber: 161,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 items-center absolute bottom-3 w-full z-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 place-items-center cursor-pointer",
                                    onClick: ()=>handleUserRoute(user.user_id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: user.profile_pic || "/default-avatar.png",
                                            className: "w-8 h-8 rounded-full border border-primary",
                                            alt: "profile",
                                            width: 20,
                                            height: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-sm font-medium text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]",
                                            children: user.user_name.replace(" ", "").toLowerCase()
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleFollow(user.user_id),
                                    className: "cursor-pointer py-1.5 px-14 rounded-xl font-medium text-sm text-primary bg-main-green",
                                    children: "Follow"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                                    lineNumber: 182,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this)
                    ]
                }, user.user_id, true, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                    lineNumber: 147,
                    columnNumber: 13
                }, this);
            }),
            fetching && users.length > 0 && Array.from({
                length: 3
            }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerCard, {}, "next-".concat(idx), false, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/following/Following.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(Following, "0Q/ypVxDNR2CnXQJpQFngkjDy6U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Following;
const __TURBOPACK__default__export__ = Following;
var _c;
__turbopack_context__.k.register(_c, "Following");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=15889_Repository_lakaw-socmed-Website_src_app_following_Following_tsx_fc4f383e._.js.map