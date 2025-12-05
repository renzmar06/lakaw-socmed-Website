(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getSavesList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/api/fetchSavedList.ts
__turbopack_context__.s([
    "fetchSavedList",
    ()=>fetchSavedList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
;
const fetchSavedList = async (param)=>{
    let { pageParam = 1, myUserId } = param;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/save/saved-list"), {
        save_by: myUserId,
        include: "Social",
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SavedBookmarksPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getSavesList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getSavesList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SelectedReelDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ActiveCommentBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$explore$2f$SelectedReelModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/explore/SelectedReelModal.tsx [app-client] (ecmascript)");
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
;
function SavedBookmarksPage() {
    _s();
    const myUserId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id"); // Replace with logged-in user ID
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    // Saved list (infinite)
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "savedList",
            myUserId
        ],
        queryFn: {
            "SavedBookmarksPage.useInfiniteQuery": (param)=>{
                let { pageParam } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getSavesList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSavedList"])({
                    pageParam,
                    myUserId: Number(myUserId) || 0
                });
            }
        }["SavedBookmarksPage.useInfiniteQuery"],
        getNextPageParam: {
            "SavedBookmarksPage.useInfiniteQuery": (lastPage)=>{
                var _lastPage_data;
                const pagination = lastPage === null || lastPage === void 0 ? void 0 : (_lastPage_data = lastPage.data) === null || _lastPage_data === void 0 ? void 0 : _lastPage_data.Pagination;
                if (!pagination) return undefined; // no more pages / empty response
                const { current_page, total_pages } = pagination;
                return current_page < total_pages ? current_page + 1 : undefined;
            }
        }["SavedBookmarksPage.useInfiniteQuery"],
        initialPageParam: 1
    });
    // Infinite scroll trigger
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SavedBookmarksPage.useEffect": ()=>{
            if (!observerRef.current || !hasNextPage) return;
            const observer = new IntersectionObserver({
                "SavedBookmarksPage.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) fetchNextPage();
                }
            }["SavedBookmarksPage.useEffect"], {
                threshold: 1
            });
            observer.observe(observerRef.current);
            return ({
                "SavedBookmarksPage.useEffect": ()=>observer.disconnect()
            })["SavedBookmarksPage.useEffect"];
        }
    }["SavedBookmarksPage.useEffect"], [
        hasNextPage,
        fetchNextPage
    ]);
    var _data_pages_flatMap;
    const savedRecords = (_data_pages_flatMap = data === null || data === void 0 ? void 0 : data.pages.flatMap((p)=>p.data.Records)) !== null && _data_pages_flatMap !== void 0 ? _data_pages_flatMap : [];
    // ✅ Optimistic Unsave (no re-fetch to avoid adding back)
    const unsaveMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "SavedBookmarksPage.useMutation[unsaveMutation]": async (socialId)=>postData("/save/save-unsave", {
                    social_id: socialId
                })
        }["SavedBookmarksPage.useMutation[unsaveMutation]"],
        // Optimistically remove from cache
        onMutate: {
            "SavedBookmarksPage.useMutation[unsaveMutation]": async (socialId)=>{
                await queryClient.cancelQueries({
                    queryKey: [
                        "savedList",
                        myUserId
                    ]
                });
                const previous = queryClient.getQueryData([
                    "savedList",
                    myUserId
                ]);
                queryClient.setQueryData([
                    "savedList",
                    myUserId
                ], {
                    "SavedBookmarksPage.useMutation[unsaveMutation]": (oldData)=>{
                        if (!oldData) return oldData;
                        return {
                            ...oldData,
                            pages: oldData.pages.map({
                                "SavedBookmarksPage.useMutation[unsaveMutation]": (page)=>({
                                        ...page,
                                        data: {
                                            ...page.data,
                                            Records: page.data.Records.filter({
                                                "SavedBookmarksPage.useMutation[unsaveMutation]": (r)=>r.social_id !== socialId
                                            }["SavedBookmarksPage.useMutation[unsaveMutation]"])
                                        }
                                    })
                            }["SavedBookmarksPage.useMutation[unsaveMutation]"])
                        };
                    }
                }["SavedBookmarksPage.useMutation[unsaveMutation]"]);
                return {
                    previous
                };
            }
        }["SavedBookmarksPage.useMutation[unsaveMutation]"],
        // Rollback on error
        onError: {
            "SavedBookmarksPage.useMutation[unsaveMutation]": (_err, _socialId, ctx)=>{
                if (ctx === null || ctx === void 0 ? void 0 : ctx.previous) {
                    queryClient.setQueryData([
                        "savedList",
                        myUserId
                    ], ctx.previous);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Couldn't remove from saved. Restored.");
            }
        }["SavedBookmarksPage.useMutation[unsaveMutation]"],
        // Success toast only (don’t re-fetch)
        onSuccess: {
            "SavedBookmarksPage.useMutation[unsaveMutation]": (res)=>{
                if (res === null || res === void 0 ? void 0 : res.status) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success((res === null || res === void 0 ? void 0 : res.message) || "Removed from saved");
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((res === null || res === void 0 ? void 0 : res.message) || "Failed to remove");
                }
            }
        }["SavedBookmarksPage.useMutation[unsaveMutation]"]
    });
    const handleRemoveBookmark = (socialId)=>{
        unsaveMutation.mutate(socialId);
    };
    const handleOpenMedia = (record)=>{
        if (record.Social.social_type === "video") {
        // open your player
        } else {
        // open your images viewer
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-dark font-semibold text-lg px-4 sm:block hidden",
                children: "Saved Bookmark"
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            savedRecords.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:pt-4 p-4",
                        children: savedRecords.map((record)=>{
                            var _record_Social_Media_;
                            var _record_Social_Media__media_location;
                            const mediaUrl = (_record_Social_Media__media_location = (_record_Social_Media_ = record.Social.Media[0]) === null || _record_Social_Media_ === void 0 ? void 0 : _record_Social_Media_.media_location) !== null && _record_Social_Media__media_location !== void 0 ? _record_Social_Media__media_location : null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative cursor-pointer w-full rounded-lg overflow-hidden",
                                children: [
                                    mediaUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: mediaUrl,
                                                className: "h-full w-full object-contain",
                                                onClick: ()=>handleOpenMedia(record)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                                lineNumber: 177,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex items-center justify-center",
                                                onClick: ()=>{
                                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSelectedReel"])(record.Social));
                                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActiveCommentPostId"])(record.Social.social_id));
                                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActiveUserId"])(record.Social.user_id));
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: " w-14 h-14 flex justify-center items-center bg-dark/[0.5] backdrop-blur-md rounded-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/chat/play.png",
                                                        alt: "Pause",
                                                        height: 25,
                                                        width: 25,
                                                        className: "opacity-80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                                lineNumber: 184,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-gray-200 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "No Media"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                            lineNumber: 208,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                        lineNumber: 207,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleRemoveBookmark(record.social_id),
                                        className: "absolute top-3 right-3",
                                        "aria-label": "Unsave",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/home/filled_bookmark.png",
                                            alt: "saved",
                                            height: 24,
                                            width: 24
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                            lineNumber: 218,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, record.social_id, true, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                lineNumber: 171,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: observerRef,
                        className: "py-4 text-center",
                        children: isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                                color: "#1A9D77",
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                                lineNumber: 234,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                            lineNumber: 233,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                        lineNumber: 231,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center items-center py-56",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/Setting/NoBookmarks.png",
                        alt: "No bookmarks available",
                        className: " object-contain",
                        height: 80,
                        width: 80
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-normal text-dark",
                        children: "No Bookmarks Yet"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray text-sm",
                        children: "No bookmarks yet-start saving your favorites"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                lineNumber: 240,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$explore$2f$SelectedReelModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                setReels: function(value) {
                    throw new Error("Function not implemented.");
                }
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SavedBookmarksPage, "POHTsApjDzrrW2YjzRvA3HlrnGA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = SavedBookmarksPage;
var _c;
__turbopack_context__.k.register(_c, "SavedBookmarksPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getBlockedList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBlockedUsers",
    ()=>fetchBlockedUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
;
const fetchBlockedUsers = async (param)=>{
    let { pageParam = 1 } = param;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/block/block-list"), {
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlockedListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getBlockedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getBlockedList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
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
function BlockedListPage() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "blockedUsers"
        ],
        queryFn: {
            "BlockedListPage.useInfiniteQuery": (param)=>{
                let { pageParam } = param;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getBlockedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBlockedUsers"])({
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
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const handleBlockUnblock = async (userId)=>{
        try {
            const response = await postData("/block/block-unblock", {
                user_id: userId
            });
            if (response.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(response.message);
                queryClient.invalidateQueries({
                    queryKey: [
                        "blockedUsers"
                    ]
                }); // ✅ refresh list
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(response.message);
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Something went wrong");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-lg font-bold text-dark sm:block hidden p-6",
                children: "Blocked List"
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            blockedUsers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    blockedUsers.map((record)=>{
                        const user = record.blocked;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between border-b items-center py-2 sm:mx-12 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: user.profile_pic,
                                            alt: user.first_name,
                                            className: "h-12 w-12 object-cover rounded-full",
                                            width: 48,
                                            height: 48
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-semibold text-sm text-dark",
                                                    children: user.first_name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#747474] text-xs",
                                                    children: user.user_name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleBlockUnblock(user.user_id),
                                    className: "rounded-xl text-xs h-fit px-6 py-1.5 cursor-pointer border border-main-green text-dark",
                                    children: "Unblock"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, record.block_id, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: observerRef,
                        className: "py-4 text-center",
                        children: isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Loading more..."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                            lineNumber: 120,
                            columnNumber: 36
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 justify-center items-center py-52",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/Setting/NoBlocks.png",
                        alt: "No blocks",
                        width: 80,
                        height: 80
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-dark text-sm",
                        children: "No Blocked Users"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(BlockedListPage, "WKpeFw4KU4RGEWcnbnGwB4bMjg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = BlockedListPage;
var _c;
__turbopack_context__.k.register(_c, "BlockedListPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$blocked$2d$list$2f$BlockedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/BlockedList.tsx [app-client] (ecmascript)");
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$blocked$2d$list$2f$BlockedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/page.tsx",
            lineNumber: 6,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/PrivacyPolicyPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivacyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/dompurify/dist/purify.es.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PrivacyPage() {
    _s();
    const [privacyHtml, setPrivacyHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrivacyPage.useEffect": ()=>{
            if (!token) return;
            const fetchConfig = {
                "PrivacyPage.useEffect.fetchConfig": async ()=>{
                    try {
                        var _data_data;
                        const res = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/project_conf"), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const data = await res.json();
                        if ((data === null || data === void 0 ? void 0 : data.status) && ((_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.privacy_policy)) {
                            setPrivacyHtml(data.data.privacy_policy);
                        }
                    } catch (error) {}
                }
            }["PrivacyPage.useEffect.fetchConfig"];
            fetchConfig();
        }
    }["PrivacyPage.useEffect"], [
        token
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 place-items-center sm:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-lg font-bold text-dark sm:block hidden",
                    children: "Privacy Policy"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/PrivacyPolicyPage.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/PrivacyPolicyPage.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto py-6 px-4",
                children: privacyHtml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-sm sm:prose lg:prose-lg max-w-none text-dark-gray",
                    dangerouslySetInnerHTML: {
                        __html: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(privacyHtml || "")
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/PrivacyPolicyPage.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/PrivacyPolicyPage.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/PrivacyPolicyPage.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(PrivacyPage, "jpOAJhY2c/BqeQJjUX1iuX1utXU=");
_c = PrivacyPage;
var _c;
__turbopack_context__.k.register(_c, "PrivacyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$privacy$2d$policy$2f$PrivacyPolicyPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/PrivacyPolicyPage.tsx [app-client] (ecmascript)");
"use client";
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$privacy$2d$policy$2f$PrivacyPolicyPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/page.tsx",
            lineNumber: 6,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/TermsConditions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TermsConditionsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/dompurify/dist/purify.es.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TermsConditionsPage() {
    _s();
    const [privacyHtml, setPrivacyHtml] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TermsConditionsPage.useEffect": ()=>{
            if (!token) return;
            const fetchConfig = {
                "TermsConditionsPage.useEffect.fetchConfig": async ()=>{
                    try {
                        var _data_data;
                        const res = await fetch("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/project_conf"), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        });
                        const data = await res.json();
                        if ((data === null || data === void 0 ? void 0 : data.status) && ((_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.privacy_policy)) {
                            setPrivacyHtml(data.data.terms_and_conditions);
                        }
                    } catch (error) {}
                }
            }["TermsConditionsPage.useEffect.fetchConfig"];
            fetchConfig();
        }
    }["TermsConditionsPage.useEffect"], [
        token
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 place-items-center sm:pt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-lg font-bold text-dark sm:block hidden",
                    children: "Terms & Conditions"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/TermsConditions.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/TermsConditions.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4",
                children: privacyHtml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-sm sm:prose lg:prose-lg max-w-none text-dark-gray",
                    dangerouslySetInnerHTML: {
                        __html: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(privacyHtml || "")
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/TermsConditions.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/TermsConditions.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/TermsConditions.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TermsConditionsPage, "jpOAJhY2c/BqeQJjUX1iuX1utXU=");
_c = TermsConditionsPage;
var _c;
__turbopack_context__.k.register(_c, "TermsConditionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$terms$26$conditions$2f$TermsConditions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/TermsConditions.tsx [app-client] (ecmascript)");
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$terms$26$conditions$2f$TermsConditions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/page.tsx",
            lineNumber: 5,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$recharge$2f$RechargePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/RechargePage.tsx [app-client] (ecmascript)");
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$recharge$2f$RechargePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/page.tsx",
            lineNumber: 6,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getTransactionConf.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTransactionConfQuery",
    ()=>useTransactionConfQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
// API function
const fetchTransactionConf = async ()=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/transaction/transaction_conf"), {
        transaction_type: "withdrawal"
    }, {
        headers: {
            Authorization: "Bearer ".concat(token),
            "Content-Type": "application/json"
        }
    });
    return data;
};
const useTransactionConfQuery = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "transactionConf"
        ],
        queryFn: fetchTransactionConf,
        staleTime: 1000 * 60 * 5
    });
};
_s(useTransactionConfQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getTransactionConf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getTransactionConf.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/updateUser.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function WalletHeader() {
    var _confData_data_Records_, _confData_data, _confData_data_Records_1, _confData_data1;
    _s();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"])(token !== null && token !== void 0 ? token : "");
    // to fetch the 1 coin value to calculate balance ==================
    const { data: confData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getTransactionConf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionConfQuery"])();
    const [dollarValue, setDollarValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const coinValuePer1Currency = parseFloat(confData === null || confData === void 0 ? void 0 : (_confData_data = confData.data) === null || _confData_data === void 0 ? void 0 : (_confData_data_Records_ = _confData_data.Records[0]) === null || _confData_data_Records_ === void 0 ? void 0 : _confData_data_Records_.coin_value_per_1_currency);
    const coinsPerDollar = coinValuePer1Currency;
    const dollarPerCoin = coinsPerDollar ? (1 / coinsPerDollar).toFixed(3) : "0";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WalletHeader.useEffect": ()=>{
            var _confData_data_Records, _confData_data, _data_data;
            if ((confData === null || confData === void 0 ? void 0 : (_confData_data = confData.data) === null || _confData_data === void 0 ? void 0 : (_confData_data_Records = _confData_data.Records) === null || _confData_data_Records === void 0 ? void 0 : _confData_data_Records.length) && (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.available_coins)) {
                // usually only 1 config record, but picking first
                const coinValuePer1Currency = parseFloat(confData.data.Records[0].coin_value_per_1_currency);
                // Convert coins to dollars
                const calculatedDollar = (Number(data.data.available_coins) / coinValuePer1Currency).toFixed(2);
                setDollarValue(Number(calculatedDollar));
            }
        }
    }["WalletHeader.useEffect"], [
        confData,
        data
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-main-green rounded-xl px-4 py-3 flex-shrink-0  relative overflow-hidden",
            style: {
                background: "linear-gradient(141.72deg, #239C57 -1.01%, #019FC8 103.86%)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-90 pointer-events-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/gift/TopRightEllipse.png",
                            alt: "ellipse",
                            width: 60,
                            height: 60,
                            className: "absolute -top-2 right-0"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/gift/LeftBottom.png",
                            alt: "ellipse",
                            width: 100,
                            height: 100,
                            className: "absolute bottom-0 left-8"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/gift/LeftTop.png",
                            alt: "ellipse",
                            width: 80,
                            height: 80,
                            className: "absolute top-0 left-0"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-primary text-xs sm:text-sm font-semibold",
                                    children: "Total Available Coins"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 place-items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/gift/information.png",
                                            alt: "info",
                                            width: 16,
                                            height: 16
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-dark sm:text-[13px] text-xs font-medium ",
                                            children: [
                                                "Note: 1 coin = $ ",
                                                dollarPerCoin
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1.5 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/profile/coin.png",
                                    alt: "coin",
                                    width: 40,
                                    height: 40
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-primary text-lg",
                                    children: [
                                        data === null || data === void 0 ? void 0 : data.data.available_coins,
                                        " Coins"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#FCD227] rounded-xl sm:max-w-13/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-dark font-semibold px-4 sm:text-sm text-xs py-0.5 text-center",
                                children: [
                                    "Available Amount is ",
                                    confData === null || confData === void 0 ? void 0 : (_confData_data1 = confData.data) === null || _confData_data1 === void 0 ? void 0 : (_confData_data_Records_1 = _confData_data1.Records[0]) === null || _confData_data_Records_1 === void 0 ? void 0 : _confData_data_Records_1.currency_symbol,
                                    dollarValue,
                                    " = ",
                                    data === null || data === void 0 ? void 0 : data.data.available_coins,
                                    " coins"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(WalletHeader, "VKj+vFQBPeenItATQB6lFjGWpws=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getTransactionConf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransactionConfQuery"]
    ];
});
_c = WalletHeader;
const __TURBOPACK__default__export__ = WalletHeader;
var _c;
__turbopack_context__.k.register(_c, "WalletHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeWithdrawButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RechargeWithdrawButton() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-5 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "flex items-center justify-center gap-2 w-1/2 bg-main-green border border-main-green rounded-xl py-2.5 px-8 text-sm text-primary cursor-pointer",
                onClick: ()=>router.push('/setting/recharge'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/gift/Recharge.png",
                        alt: "recharge",
                        width: 24,
                        height: 24
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeWithdrawButton.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    "Recharge"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeWithdrawButton.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "flex items-center justify-center gap-2 w-1/2 border border-main-green rounded-xl py-2.5 px-8 text-sm text-main-green cursor-pointer",
                onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("PaymentGatewayForWithdraw")),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/gift/Withdraw.png",
                        alt: "withdraw",
                        width: 24,
                        height: 24
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeWithdrawButton.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    "Withdraw"
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeWithdrawButton.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeWithdrawButton.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(RechargeWithdrawButton, "JinMB4qLyJQOAEgLDHYs5ZVysKc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
    ];
});
_c = RechargeWithdrawButton;
const __TURBOPACK__default__export__ = RechargeWithdrawButton;
var _c;
__turbopack_context__.k.register(_c, "RechargeWithdrawButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$Shimmer$2f$RoundedShimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/Shimmer/RoundedShimmer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LatestGiftSender() {
    _s();
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const myUserId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
    const [senders, setSenders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LatestGiftSender.useEffect": ()=>{
            const handleFetchLatestSender = {
                "LatestGiftSender.useEffect.handleFetchLatestSender": async ()=>{
                    try {
                        var _res_data;
                        const res = await postData("/transaction/history", {
                            page: 1,
                            reciever_id: myUserId,
                            transaction_table: "coin"
                        });
                        if (res.status && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.Records)) {
                            const uniqueSenders = new Map();
                            res.data.Records.forEach({
                                "LatestGiftSender.useEffect.handleFetchLatestSender": (record)=>{
                                    const s = record.sender;
                                    if (s === null || s === void 0 ? void 0 : s.user_id) {
                                        uniqueSenders.set(s.user_id, {
                                            sender_id: s.user_id,
                                            user_name: s.user_name || "Unknown",
                                            profile_pic: s.profile_pic || "/extra/profilePic.png"
                                        });
                                    }
                                }
                            }["LatestGiftSender.useEffect.handleFetchLatestSender"]);
                            setSenders(Array.from(uniqueSenders.values()));
                        }
                    } catch (error) {} finally{
                        setLoading(false);
                    }
                }
            }["LatestGiftSender.useEffect.handleFetchLatestSender"];
            handleFetchLatestSender();
        }
    }["LatestGiftSender.useEffect"], [
        myUserId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-main-green/[0.36] rounded-md px-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-dark text-base font-semibold",
                children: "Latest Gift Sender"
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex overflow-x-auto gap-4 py-4",
                children: [
                    ...Array(3)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1 px-2 items-center flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$Shimmer$2f$RoundedShimmer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    }, i, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex overflow-x-auto gap-2 py-4",
                children: senders.length > 0 ? senders.map((sender)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1 px-2 items-center flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: sender.profile_pic,
                                alt: sender.user_name,
                                width: 45,
                                height: 45,
                                className: "rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-dark truncate w-14 text-center",
                                children: sender.user_name
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this)
                        ]
                    }, sender.sender_id, true, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                        lineNumber: 77,
                        columnNumber: 15
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray text-center mx-auto",
                    children: "You didn’t recieved any Gift"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                    lineNumber: 94,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(LatestGiftSender, "NxjPSI/BhpLJ6H9jPdut4igxskU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = LatestGiftSender;
const __TURBOPACK__default__export__ = LatestGiftSender;
var _c;
__turbopack_context__.k.register(_c, "LatestGiftSender");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getPaymentHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/api/getPaymentHistory.ts
__turbopack_context__.s([
    "usePaymentHistory",
    ()=>usePaymentHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
// store/api/getPaymentHistory.ts
const fetchPaymentHistory = async (param)=>{
    let { pageParam = 1, transactionType, startDate, endDate } = param;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/transaction/history"), {
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getPaymentHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
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
    const { startDate, endDate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "RechargeHistory.useAppSelector": (state)=>state.dateRange
    }["RechargeHistory.useAppSelector"]);
    // ✅ Only build params if dates exist
    const start = startDate !== null ? new Date(startDate).toISOString().split("T")[0] : undefined;
    const end = endDate !== null ? new Date(endDate).toISOString().split("T")[0] : undefined;
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentHistory"])("recharge", start, end);
    const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
            size: 10,
            color: "#1A9D77"
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
            lineNumber: 54,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
        lineNumber: 53,
        columnNumber: 25
    }, this);
    const allRecords = (data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data.Records)) || [];
    const displayedRecords = limit ? allRecords.slice(0, limit) : allRecords;
    if (allRecords.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-center py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/gift/NoRecharge.png",
                alt: "No withdraw available",
                className: " object-contain",
                height: 80,
                width: 80
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-normal text-dark",
                children: "No Recharge History"
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray sm:text-sm text-xs",
                children: "Recharge now to start your history."
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
        lineNumber: 63,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            displayedRecords.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border border-main-green/[0.36] rounded-lg px-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-[#C7EAD0] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/gift/received.png",
                                        alt: "recharge",
                                        width: 15,
                                        height: 15
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-dark text-xs font-medium",
                                            children: "Recharge Coin"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray text-xs",
                                            children: [
                                                "• ",
                                                new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleDateString(),
                                                " •",
                                                " ",
                                                new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleTimeString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-medium text-green",
                            children: [
                                "+$",
                                item === null || item === void 0 ? void 0 : item.acutal_money
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, item === null || item === void 0 ? void 0 : item.transaction_id, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)),
            isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-gray-500 py-2",
                children: "Loading more..."
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(RechargeHistory, "yEzvixKeb5ZWZQ9aoidhsijlV9g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentHistory"]
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getPaymentHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
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
    const { startDate, endDate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "WithdrawHistory.useAppSelector": (state)=>state.dateRange
    }["WithdrawHistory.useAppSelector"]);
    // ✅ Only build params if dates exist
    const start = startDate !== null ? new Date(startDate).toISOString().split("T")[0] : undefined;
    const end = endDate !== null ? new Date(endDate).toISOString().split("T")[0] : undefined;
    // ✅ Pass only the params that exist
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentHistory"])("withdrawal", start, end);
    const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
            size: 10,
            color: "#1A9D77"
        }, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
            lineNumber: 52,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
        lineNumber: 51,
        columnNumber: 7
    }, this);
    const allRecords = (data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data.Records)) || [];
    const displayedRecords = limit ? allRecords.slice(0, limit) : allRecords;
    if (displayedRecords.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-center py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/gift/NoWithdrawHistory.png",
                alt: "No withdraw available",
                className: "object-contain",
                height: 80,
                width: 80
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-normal text-dark",
                children: "No Withdraw History"
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray text-xs sm:text-sm",
                children: "Start transacting to track your withdrawals."
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
        lineNumber: 61,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            displayedRecords.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border border-[#FFC9C9] rounded-lg px-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-[#FFC9C9] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/gift/withdrawn.png",
                                        alt: "withdraw",
                                        width: 15,
                                        height: 15
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-dark text-xs font-medium",
                                            children: "Withdrawal payment"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray text-xs",
                                            children: [
                                                "• ",
                                                new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleDateString(),
                                                " •",
                                                " ",
                                                new Date(item === null || item === void 0 ? void 0 : item.createdAt).toLocaleTimeString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-red text-end",
                                    children: [
                                        "-$",
                                        item === null || item === void 0 ? void 0 : item.acutal_money
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "".concat((item === null || item === void 0 ? void 0 : item.success) === "rejected" ? "bg-red text-primary" : (item === null || item === void 0 ? void 0 : item.success) === "pending" ? "bg-yellow-400 text-dark" : "bg-main-green text-primary", " text-xs px-3 py-0.5 rounded-3xl"),
                                    children: item === null || item === void 0 ? void 0 : item.success
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, item === null || item === void 0 ? void 0 : item.transaction_id, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)),
            !limit && isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs text-gray-500 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                    size: 15,
                    color: "#1A9D77"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                    lineNumber: 117,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(WithdrawHistory, "DmoN6eoTJ1B64WV17cGNc7E7YBs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getPaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePaymentHistory"]
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$RechargeHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$WithdrawHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WithdrawHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/DateRangeSlice.tsx [app-client] (ecmascript)");
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
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("recharge");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex bg-main-green/[0.04] rounded-xl overflow-hidden mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setActiveTab("recharge");
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearDateRange"])());
                        },
                        className: "flex-1 py-2 text-sm font-medium transition cursor-pointer ".concat(activeTab === "recharge" ? "text-main-green" : "text-gray"),
                        children: "Recharge"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-4 my-2 bg-gray-300 self-stretch"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setActiveTab("withdraw");
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearDateRange"])());
                        },
                        className: "flex-1 py-2 text-sm rounded-xl font-medium transition cursor-pointer ".concat(activeTab === "withdraw" ? "text-main-green" : "text-gray"),
                        children: "Withdraw History"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                lineNumber: 15,
                columnNumber: 6
            }, this),
            activeTab === "recharge" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: pathname.includes("payment-history") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$RechargeHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                    lineNumber: 39,
                    columnNumber: 53
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$RechargeHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        limit: 3
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                        lineNumber: 39,
                        columnNumber: 80
                    }, this)
                }, void 0, false)
            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: pathname.includes("payment-history") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$WithdrawHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
                    lineNumber: 43,
                    columnNumber: 53
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$WithdrawHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        limit: 3
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx",
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/PaymentHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$PaymentWithdrawSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PaymentHistory() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-main-green/[0.36] rounded-md px-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-dark text-base font-semibold",
                        children: "Payment History"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/PaymentHistory.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-gray text-xs hover:underline cursor-pointer",
                        onClick: ()=>router.push("/setting/payment-history"),
                        children: "See all"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/PaymentHistory.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/PaymentHistory.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$PaymentWithdrawSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/PaymentHistory.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/PaymentHistory.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(PaymentHistory, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$WalletHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/WalletHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$RechargeWithdrawButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/RechargeWithdrawButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$LatestGiftSender$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/LatestGiftSender.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$PaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/PaymentHistory.tsx [app-client] (ecmascript)");
;
;
;
;
;
function Walletpage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-dark px-6 pt-6 font-semibold text-lg",
                children: "Wallet"
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:px-6 space-y-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$WalletHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/page.tsx",
                        lineNumber: 12,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$RechargeWithdrawButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/page.tsx",
                        lineNumber: 13,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$LatestGiftSender$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/page.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$PaymentHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/page.tsx",
                        lineNumber: 15,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Walletpage;
const __TURBOPACK__default__export__ = Walletpage;
var _c;
__turbopack_context__.k.register(_c, "Walletpage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/SignupField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/updateUser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/BankScreenSlice.tsx [app-client] (ecmascript)");
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
function AddBankDetails(param) {
    let { onSubmitSuccess } = param;
    _s();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    // Fetch user profile
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"])(token !== null && token !== void 0 ? token : "");
    const userBankDetails = data === null || data === void 0 ? void 0 : data.data;
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // Local state for form
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        account_name: "",
        bank_name: "",
        account_number: "",
        IFSC_code: "",
        swift_code: ""
    });
    // Populate form when API data arrives
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddBankDetails.useEffect": ()=>{
            if (userBankDetails) {
                setFormData({
                    account_name: userBankDetails.account_name || "",
                    bank_name: userBankDetails.bank_name || "",
                    account_number: userBankDetails.account_number || "",
                    IFSC_code: userBankDetails.IFSC_code || "",
                    swift_code: userBankDetails.swift_code || ""
                });
            }
        }
    }["AddBankDetails.useEffect"], [
        userBankDetails
    ]);
    // Handle input change
    const handleChange = (key, value)=>{
        setFormData((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    // Submit handler (no mutation, just API call)
    const handleSubmit = async ()=>{
        try {
            const res = await postData("/users/updateUser", {
                token,
                ...formData
            });
            if (res === null || res === void 0 ? void 0 : res.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.message);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setScreen"])("edit"));
                onSubmitSuccess();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res === null || res === void 0 ? void 0 : res.message);
            }
        } catch (error) {}
    };
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
        lineNumber: 69,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex relative flex-col gap-1 space-y-4 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-dark font-medium text-[13px]",
                        children: "Account Holder Name"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        iconSrc: "/signup/name.png",
                        placeholder: "Account Holder Name",
                        value: formData.account_name,
                        onChange: (e)=>handleChange("account_name", e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-dark font-medium text-[13px]",
                        children: "Bank Name"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        iconSrc: "/Setting/bankDetails.png",
                        placeholder: "Bank Name",
                        value: formData.bank_name,
                        onChange: (e)=>handleChange("bank_name", e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-dark font-medium text-[13px]",
                        children: "Account Number"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        iconSrc: "/Setting/AccountNumber.png",
                        placeholder: "Account Number",
                        value: formData.account_number,
                        onChange: (e)=>handleChange("account_number", e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-dark font-medium text-[13px]",
                        children: "IFSC Code / Routing Number"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        iconSrc: "/signup/email.png",
                        placeholder: "IFSC Code / Routing Number",
                        value: formData.IFSC_code,
                        onChange: (e)=>handleChange("IFSC_code", e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-dark font-medium text-[13px]",
                        children: "Swift/BIC Code"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        iconSrc: "/Setting/Swift.png",
                        placeholder: "Swift/BIC Code",
                        value: formData.swift_code,
                        onChange: (e)=>handleChange("swift_code", e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-main-green w-3/5 mx-auto p-3 rounded-xl mt-8 text-primary cursor-pointer",
                onClick: handleSubmit,
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(AddBankDetails, "oluadH8qUAZXN7/c87nCjUubADQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = AddBankDetails;
const __TURBOPACK__default__export__ = AddBankDetails;
var _c;
__turbopack_context__.k.register(_c, "AddBankDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/updateUser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$AddBankDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/AddBankDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$EditBankDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/EditBankDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/BankScreenSlice.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BankScreens() {
    _s();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const activeScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "BankScreens.useAppSelector[activeScreen]": (s)=>s.bankScreen.activeScreen
    }["BankScreens.useAppSelector[activeScreen]"]);
    // Fetch bank details
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"])(token !== null && token !== void 0 ? token : "");
    const userBankDetails = data === null || data === void 0 ? void 0 : data.data;
    // ✅ Check if all required fields are filled
    const isBankDetailsComplete = !!(userBankDetails === null || userBankDetails === void 0 ? void 0 : userBankDetails.account_name) && !!(userBankDetails === null || userBankDetails === void 0 ? void 0 : userBankDetails.bank_name) && !!(userBankDetails === null || userBankDetails === void 0 ? void 0 : userBankDetails.account_number) && !!(userBankDetails === null || userBankDetails === void 0 ? void 0 : userBankDetails.IFSC_code) && !!(userBankDetails === null || userBankDetails === void 0 ? void 0 : userBankDetails.swift_code);
    // ✅ Show Add screen ONLY if:
    // - Fields are incomplete
    // - OR user explicitly switched to "add" mode
    const shouldShowAddScreen = !isBankDetailsComplete || activeScreen === "add";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: shouldShowAddScreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-dark font-semibold text-lg",
                    children: "Add Bank Details"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$AddBankDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSubmitSuccess: ()=>{
                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setScreen"])("edit")); // switch to edit after submit
                    }
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-dark font-semibold text-lg",
                    children: "Bank Details"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$EditBankDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(BankScreens, "M5QdOHTjZMOaK1/uFYIm0Z1XSmg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserProfile"]
    ];
});
_c = BankScreens;
const __TURBOPACK__default__export__ = BankScreens;
var _c;
__turbopack_context__.k.register(_c, "BankScreens");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$bankScreens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/bankScreens.tsx [app-client] (ecmascript)");
;
;
function BankDetailsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$bankScreens$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/page.tsx",
            lineNumber: 7,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_c = BankDetailsPage;
const __TURBOPACK__default__export__ = BankDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "BankDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getCoinHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCoinHistory",
    ()=>useCoinHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const fetchCoinHistory = async (param)=>{
    let { pageParam = 1, startDate, endDate } = param;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const MyUserId = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:4112/api"), "/transaction/history"), {
        page: pageParam,
        receiver_id: MyUserId,
        sender_id: MyUserId,
        all: "true",
        transaction_table: "coin",
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
const useCoinHistory = (startDate, endDate)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "coinHistory",
            startDate,
            endDate
        ],
        queryFn: {
            "useCoinHistory.useInfiniteQuery": (param)=>{
                let { pageParam } = param;
                return(//@ts-ignore
                fetchCoinHistory({
                    pageParam,
                    startDate,
                    endDate
                }));
            }
        }["useCoinHistory.useInfiniteQuery"],
        enabled: true,
        initialPageParam: 1,
        getNextPageParam: {
            "useCoinHistory.useInfiniteQuery": (lastPage)=>{
                const { Pagination } = (lastPage === null || lastPage === void 0 ? void 0 : lastPage.data) || {};
                if (!Pagination) return undefined;
                if (Pagination.current_page < Pagination.total_pages) {
                    return Pagination.current_page + 1;
                }
                return undefined;
            }
        }["useCoinHistory.useInfiniteQuery"]
    });
};
_s(useCoinHistory, "xMCOiuh9cV5e8gBi6hogZoGnISk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$date$2d$range$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-date-range/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/date-fns/subDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
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
    let { onChange, initialStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$subDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(new Date(), 6), initialEnd = new Date() } = param;
    _s();
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            startDate: initialStart,
            endDate: initialEnd,
            key: "selection"
        }
    ]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _range__startDate, _range__endDate;
    const formattedRange = "".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((_range__startDate = range[0].startDate) !== null && _range__startDate !== void 0 ? _range__startDate : new Date(), "dd MMM"), " – ").concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])((_range__endDate = range[0].endDate) !== null && _range__endDate !== void 0 ? _range__endDate : new Date(), "dd MMM"));
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen(!open),
                className: "border cursor-pointer border-gray rounded-xl px-3 py-0.5 text-gray text-xs flex items-center gap-2 bg-primary",
                children: [
                    formattedRange,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/gift/DateArrowDown.png",
                        alt: "down",
                        width: 10,
                        height: 10
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 z-50 shadow-lg rounded-xl bg-primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$date$2d$range$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateRange"], {
                    ranges: range,
                    onChange: handleChange,
                    maxDate: new Date(),
                    rangeColors: [
                        "#1A9D77"
                    ],
                    direction: "horizontal"
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx",
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getCoinHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getCoinHistory.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/DateRangeSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
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
// Shimmer component
function CoinHistoryShimmer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-pulse space-y-3 px-6",
        children: Array.from({
            length: 4
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border p-3 rounded-xl flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-gray-200 rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32 h-3 bg-gray-200 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-3 bg-gray-200 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-5 bg-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = CoinHistoryShimmer;
function CoinHistoryPage() {
    _s();
    const { startDate, endDate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "CoinHistoryPage.useAppSelector": (state)=>state.dateRange
    }["CoinHistoryPage.useAppSelector"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // ✅ Only build params if dates exist
    const start = startDate !== null ? new Date(startDate).toISOString().split("T")[0] : undefined;
    const end = endDate !== null ? new Date(endDate).toISOString().split("T")[0] : undefined;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getCoinHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCoinHistory"])(start, end);
    // fetch the data as per dates seleted
    const [isAtBottom, setIsAtBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // scroll event listener for infinite scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoinHistoryPage.useEffect": ()=>{
            const handleScroll = {
                "CoinHistoryPage.useEffect.handleScroll": ()=>{
                    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
                    setIsAtBottom(bottom);
                }
            }["CoinHistoryPage.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "CoinHistoryPage.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["CoinHistoryPage.useEffect"];
        }
    }["CoinHistoryPage.useEffect"], []);
    // Trigger next page fetch when reaching bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoinHistoryPage.useEffect": ()=>{
            if (isAtBottom && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        }
    }["CoinHistoryPage.useEffect"], [
        isAtBottom,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoinHistoryShimmer, {}, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
        lineNumber: 80,
        columnNumber: 25
    }, this);
    const allRecords = (data === null || data === void 0 ? void 0 : data.pages.flatMap((page)=>page.data.Records)) || [];
    const handleUserRoute = (userId)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserId"])(userId));
        router.push("/profile/".concat(userId));
    };
    // if (!isLoading && allRecords.length === 0) {
    //   return (
    //     <div className="flex flex-col justify-center items-center py-56">
    //       <Image
    //         src="/gift/NoCoinHistory.png"
    //         alt="No coin history available"
    //         className=" object-contain"
    //         height={80}
    //         width={80}
    //       />
    //       <p className="text-sm font-normal text-dark">Coin History Not Found</p>
    //       <p className="text-gray text-sm">
    //         You don’t have any coin transactions yet.
    //       </p>
    //     </div>
    //   );
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between place-items-center px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "pb-4 pt-6 text-dark font-semibold text-lg",
                        children: "Coin History"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onChange: (range)=>{
                            if ((range === null || range === void 0 ? void 0 : range.startDate) && (range === null || range === void 0 ? void 0 : range.endDate)) {
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDateRange"])(range));
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            !isLoading && allRecords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-center items-center py-56",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/gift/NoCoinHistory.png",
                            alt: "No coin history available",
                            className: " object-contain",
                            height: 80,
                            width: 80
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-normal text-dark",
                            children: "Coin History Not Found"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray text-sm",
                            children: "You don’t have any coin transactions yet."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this)
            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: allRecords.map((record)=>{
                    var _record_reciever, _record_sender;
                    const isSent = String(record.sender_id) === __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border p-3 rounded-xl flex justify-between mx-6 ".concat(isSent ? "border-[#FFC9C9]" : "border-[#C7EAD0]"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/gift/giftBox.png",
                                        alt: "gift",
                                        width: 45,
                                        height: 45
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                        lineNumber: 155,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-dark font-semibold text-sm cursor-pointer",
                                                onClick: ()=>handleUserRoute(isSent ? record.reciever_id : record.sender_id),
                                                children: isSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-dark",
                                                            children: [
                                                                "You sent a gift to",
                                                                " "
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 27
                                                        }, this),
                                                        (_record_reciever = record.reciever) === null || _record_reciever === void 0 ? void 0 : _record_reciever.user_name
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        (_record_sender = record.sender) === null || _record_sender === void 0 ? void 0 : _record_sender.user_name,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-dark",
                                                            children: "sent a gift"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                                lineNumber: 162,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: isSent ? "/gift/withdrawn.png" : "/gift/received.png",
                                                        alt: "",
                                                        width: 15,
                                                        height: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray",
                                                        children: [
                                                            "• ",
                                                            new Date(record.createdAt).toLocaleDateString(),
                                                            " •",
                                                            " ",
                                                            new Date(record.createdAt).toLocaleTimeString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                        lineNumber: 161,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                lineNumber: 154,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/profile/coin.png",
                                        alt: "coin",
                                        width: 20,
                                        height: 20
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                        lineNumber: 205,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs ".concat(isSent ? "text-red" : "text-green"),
                                        children: [
                                            record.coin,
                                            " ",
                                            record.coin > "1" ? "Coins" : "Coin"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                        lineNumber: 211,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                                lineNumber: 204,
                                columnNumber: 17
                            }, this)
                        ]
                    }, record.transaction_id, true, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                        lineNumber: 147,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false),
            isFetchingNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm",
                    children: "Loading more..."
                }, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                    lineNumber: 226,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(CoinHistoryPage, "sWVpd0Y3aZiDTSxN7jPDUiWCMC4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$api$2f$getCoinHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCoinHistory"]
    ];
});
_c1 = CoinHistoryPage;
const __TURBOPACK__default__export__ = CoinHistoryPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CoinHistoryShimmer");
__turbopack_context__.k.register(_c1, "CoinHistoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$coin$2d$history$2f$CoinHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/CoinHistory.tsx [app-client] (ecmascript)");
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$coin$2d$history$2f$CoinHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/page.tsx",
            lineNumber: 6,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/DateRangeSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$PaymentWithdrawSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/PaymentWithdrawSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/components/DatePicker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PaymentHistory() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-main-green/[0.36] rounded-lg px-4 py-4 mt-6 sm:mx-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-dark text-base font-semibold pb-3",
                        children: "Payment History"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onChange: (range)=>{
                            if ((range === null || range === void 0 ? void 0 : range.startDate) && (range === null || range === void 0 ? void 0 : range.endDate)) {
                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDateRange"])(range));
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$PaymentWithdrawSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(PaymentHistory, "BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"]
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
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$payment$2d$history$2f$PaymentHistoryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/PaymentHistoryPage.tsx [app-client] (ecmascript)");
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$payment$2d$history$2f$PaymentHistoryPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/page.tsx",
            lineNumber: 6,
            columnNumber: 10
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = page;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsMain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$SavedBookmarksPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SavedBookmarksPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$SettingSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/SettingSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$blocked$2d$list$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/blocked-list/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$privacy$2d$policy$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/privacy-policy/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$terms$26$conditions$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/terms&conditions/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$recharge$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/recharge/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/wallet/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/bank-details/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$coin$2d$history$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/coin-history/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$payment$2d$history$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/payment-history/page.tsx [app-client] (ecmascript)");
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
;
;
function SettingsMain() {
    _s();
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("/setting"); // default SavedBookmark
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pageTitles = {
        "/setting": "Saved Bookmarks",
        "/setting/blocked-list": "Blocked List",
        "/setting/privacy-policy": "Privacy Policy",
        "/setting/terms&conditions": "Terms & Conditions"
    };
    const renderContent = ()=>{
        switch(activePage){
            case "/setting":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$SavedBookmarksPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 30,
                    columnNumber: 16
                }, this);
            case "/setting/blocked-list":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$blocked$2d$list$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 32,
                    columnNumber: 16
                }, this);
            case "/setting/privacy-policy":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$privacy$2d$policy$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 34,
                    columnNumber: 16
                }, this);
            case "/setting/terms&conditions":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$terms$26$conditions$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 36,
                    columnNumber: 16
                }, this);
            case "/setting/recharge":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$recharge$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 38,
                    columnNumber: 16
                }, this);
            case "/setting/wallet":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$wallet$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 40,
                    columnNumber: 16
                }, this);
            case "/setting/bank-details":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 42,
                    columnNumber: 16
                }, this);
            case "/setting/coin-history":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$coin$2d$history$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 44,
                    columnNumber: 16
                }, this);
            case "/setting/payment-history":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$payment$2d$history$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 46,
                    columnNumber: 16
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-4",
                    children: [
                        activePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-4 sm:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push("/profile"),
                                    className: "text-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoChevronBackOutline"], {}, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: pageTitles[activePage]
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        renderContent()
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 block md:hidden",
                children: !activePage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$setting$2f$SettingSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onBack: ()=>router.push("/profile"),
                    onSelect: setActivePage
                }, "settings", false, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-4 sm:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActivePage(null),
                                    className: "text-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoChevronBackOutline"], {
                                        className: "text-dark"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold text-dark ",
                                    children: pageTitles[activePage]
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        renderContent()
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/setting/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(SettingsMain, "cbpdngSQfkHIkzEcyCjQhGszhcc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SettingsMain;
var _c;
__turbopack_context__.k.register(_c, "SettingsMain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_TIKTOK%20%282%29_TIKTOK_reel-boost-website_src_app_970a0012._.js.map