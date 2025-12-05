(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "hideModal",
    ()=>hideModal,
    "showModal",
    ()=>showModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    Signin: false,
    Signup: false,
    Avtar: false,
    OTP: false,
    Profile: false,
    LogoutProfile: false,
    SearchHashtag: false,
    SearchAccounts: false,
    ShareReel: false,
    EditProfile: false,
    MyFollowers: false,
    MyFollowing: false,
    OtherUserFollowers: false,
    OtherUserFollowing: false,
    Logout: false,
    ReportUser: false,
    ReportConfirmation: false,
    BlockUser: false,
    Options: false,
    OpenImageFromChat: false,
    OpenVideoFromChat: false,
    MainSearch: false,
    BlockedList: false,
    DeleteAccount: false,
    Notification: false,
    DeleteSocial: false,
    ViewAudio: false,
    LivePopup: false,
    LeaveLive: false,
    FreeCoin: true,
    SendGift: false,
    InsufficientBalance: false,
    GiftSentSuccessfully: false,
    PaymentGateway: false,
    RechargeSuccessful: false,
    MyGifts: false,
    PaymentGatewayForWithdraw: false,
    UploadReel: false,
    UploadVideo: false,
    TrimVideo: false,
    MusicList: false
};
const dialogSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "modals",
    initialState,
    reducers: {
        showModal: (state, action)=>{
            state[action.payload] = true;
        },
        hideModal: (state, action)=>{
            state[action.payload] = false;
        }
    }
});
const { showModal, hideModal } = dialogSlice.actions;
const __TURBOPACK__default__export__ = dialogSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ActiveCommentBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/slices/commentSlice.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setActiveCommentPostId",
    ()=>setActiveCommentPostId,
    "setActiveReelId",
    ()=>setActiveReelId,
    "setActiveUserId",
    ()=>setActiveUserId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    activeCommentPostId: null,
    activeReelId: null,
    activeReelUserId: null
};
const commentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "comment",
    initialState,
    reducers: {
        setActiveCommentPostId: (state, action)=>{
            state.activeCommentPostId = action.payload;
        },
        setActiveUserId: (state, action)=>{
            state.activeReelUserId = action.payload;
        },
        setActiveReelId: (state, action)=>{
            state.activeReelId = action.payload.activeReelId;
            state.activeReelUserId = action.payload.activeReelUserId;
        }
    }
});
const { setActiveCommentPostId, setActiveReelId, setActiveUserId } = commentSlice.actions;
const __TURBOPACK__default__export__ = commentSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/PhoneEmailSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearUserInfo",
    ()=>clearUserInfo,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setUserEmail",
    ()=>setUserEmail,
    "setUserPhone",
    ()=>setUserPhone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    phone: "",
    email: "",
    country_code: "",
    country_short_name: "",
    country: ""
};
const PhoneEmailSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "user",
    initialState,
    reducers: {
        setUserPhone: (state, action)=>{
            state.phone = action.payload.phone;
            state.country_code = action.payload.country_code;
            state.country_short_name = action.payload.country_short_name;
            state.country = action.payload.country;
        },
        setUserEmail: (state, action)=>{
            state.email = action.payload;
        },
        clearUserInfo: (state)=>{
            state.phone = "";
            state.email = "";
        }
    }
});
const { setUserPhone, setUserEmail, clearUserInfo } = PhoneEmailSlice.actions;
const __TURBOPACK__default__export__ = PhoneEmailSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserDataSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/UserSlice.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setUserData",
    ()=>setUserData,
    "updateUserData",
    ()=>updateUserData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    user: null
};
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "userData",
    initialState,
    reducers: {
        setUserData (state, action) {
            state.user = action.payload;
        },
        updateUserData (state, action) {
            if (state.user) {
                state.user = {
                    ...state.user,
                    ...action.payload
                };
            }
        }
    }
});
const { setUserData, updateUserData } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearHashtagId",
    ()=>clearHashtagId,
    "clearUserId",
    ()=>clearUserId,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setHashtag",
    ()=>setHashtag,
    "setUserId",
    ()=>setUserId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    user_id: null,
    hashtag_name: null,
    count: null,
    hashtag_version: 0
};
const userIdSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "userId",
    initialState,
    reducers: {
        setUserId: (state, action)=>{
            state.user_id = action.payload;
        },
        clearUserId: (state)=>{
            state.user_id = null;
        },
        setHashtag: (state, action)=>{
            state.hashtag_name = action.payload.hashtag_name;
            var _action_payload_count;
            state.count = (_action_payload_count = action.payload.count) !== null && _action_payload_count !== void 0 ? _action_payload_count : null; // default to null if not provided
        },
        clearHashtagId: (state)=>{
            state.hashtag_name = null;
            state.count = null;
        }
    }
});
const { setUserId, clearUserId, setHashtag, clearHashtagId } = userIdSlice.actions;
const __TURBOPACK__default__export__ = userIdSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/FollowFollowingCount.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/FollowCountSlice.ts
__turbopack_context__.s([
    "decrementFollowers",
    ()=>decrementFollowers,
    "decrementFollowing",
    ()=>decrementFollowing,
    "default",
    ()=>__TURBOPACK__default__export__,
    "incrementFollowers",
    ()=>incrementFollowers,
    "incrementFollowing",
    ()=>incrementFollowing,
    "setFollowersCount",
    ()=>setFollowersCount,
    "setFollowingCount",
    ()=>setFollowingCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    followersCount: 0,
    followingCount: 0
};
const followFollowingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "followFollowingCount",
    initialState,
    reducers: {
        setFollowersCount: (state, action)=>{
            state.followersCount = action.payload;
        },
        incrementFollowers: (state)=>{
            state.followersCount += 1;
        },
        decrementFollowers: (state)=>{
            state.followersCount -= 1;
        },
        setFollowingCount: (state, action)=>{
            state.followingCount = action.payload;
        },
        // store/Slice/FollowFollowingCount.ts
        incrementFollowing: (state)=>{
            state.followingCount += 1;
        },
        decrementFollowing: (state)=>{
            state.followingCount -= 1;
        }
    }
});
const { setFollowersCount, setFollowingCount, incrementFollowers, decrementFollowers, incrementFollowing, decrementFollowing } = followFollowingSlice.actions;
const __TURBOPACK__default__export__ = followFollowingSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/fetchFollowReelsSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/FollowSlice.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetReelsRefresh",
    ()=>resetReelsRefresh,
    "triggerReelsRefresh",
    ()=>triggerReelsRefresh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    refreshReels: false
};
const followSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "follow",
    initialState,
    reducers: {
        triggerReelsRefresh (state) {
            state.refreshReels = true;
        },
        resetReelsRefresh (state) {
            state.refreshReels = false;
        }
    }
});
const { triggerReelsRefresh, resetReelsRefresh } = followSlice.actions;
const __TURBOPACK__default__export__ = followSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SelectedReelDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/selectedReelSlice.ts
__turbopack_context__.s([
    "clearSelectedReel",
    ()=>clearSelectedReel,
    "default",
    ()=>__TURBOPACK__default__export__,
    "incrementCommentCount",
    ()=>incrementCommentCount,
    "incrementShareCount",
    ()=>incrementShareCount,
    "setSelectedReel",
    ()=>setSelectedReel,
    "setSelectedReelId",
    ()=>setSelectedReelId,
    "updateBookmarkStatus",
    ()=>updateBookmarkStatus,
    "updateFollowStatus",
    ()=>updateFollowStatus,
    "updateLikeStatus",
    ()=>updateLikeStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    reel: null,
    ReelId: 0
};
const selectedReelSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "selectedReel",
    initialState,
    reducers: {
        setSelectedReel (state, action) {
            state.reel = action.payload;
        },
        setSelectedReelId (state, action) {
            state.ReelId = action.payload;
        },
        clearSelectedReel (state) {
            state.reel = null;
            state.ReelId = 0;
        },
        incrementShareCount: (state)=>{
            if (state.reel) {
                state.reel.total_shares = Number(state.reel.total_shares || 0) + 1;
            }
        },
        updateLikeStatus: (state)=>{
            if (state.reel) {
                state.reel.isLiked = !state.reel.isLiked;
                state.reel.total_likes = Number(state.reel.total_likes) + (state.reel.isLiked ? 1 : -1);
            }
        },
        updateBookmarkStatus: (state)=>{
            if (state.reel) {
                state.reel.isSaved = !state.reel.isSaved;
                state.reel.total_saves = Number(state.reel.total_saves) + (state.reel.isSaved ? 1 : -1);
            }
        },
        updateFollowStatus: (state)=>{
            if (state.reel) {
                state.reel.isFollowing = !state.reel.isFollowing;
            }
        },
        // store/Slice/SelectedReelDetail.ts
        incrementCommentCount: (state)=>{
            if (state.reel) {
                state.reel.total_comments = Number(state.reel.total_comments || 0) + 1;
            }
        }
    }
});
const { setSelectedReel, setSelectedReelId, clearSelectedReel, updateLikeStatus, updateBookmarkStatus, updateFollowStatus, incrementShareCount, incrementCommentCount } = selectedReelSlice.actions;
const __TURBOPACK__default__export__ = selectedReelSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/commentSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "nextPage",
    ()=>nextPage,
    "resetPage",
    ()=>resetPage,
    "setCurrentPage",
    ()=>setCurrentPage,
    "setRefId",
    ()=>setRefId,
    "setSocialId",
    ()=>setSocialId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    social_id: null,
    currentPage: 1,
    commentRefId: 0
};
const getCommentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'getComment',
    initialState,
    reducers: {
        setSocialId (state, action) {
            state.social_id = action.payload;
            state.currentPage = 1;
            state.commentRefId = 0;
        },
        nextPage (state) {
            state.currentPage += 1;
        },
        resetPage (state) {
            state.currentPage = 1;
        },
        setCurrentPage (state, action) {
            state.currentPage = action.payload;
        },
        setRefId (state, action) {
            state.commentRefId = action.payload;
            state.currentPage = 1;
        }
    }
});
const { setSocialId, nextPage, resetPage, setRefId, setCurrentPage } = getCommentSlice.actions;
const __TURBOPACK__default__export__ = getCommentSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/storeCommentsReplies.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// commentSlice.ts
__turbopack_context__.s([
    "addMainComments",
    ()=>addMainComments,
    "addReply",
    ()=>addReply,
    "clearReplyingTo",
    ()=>clearReplyingTo,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setMainCommentRefId",
    ()=>setMainCommentRefId,
    "setMainComments",
    ()=>setMainComments,
    "setRefId",
    ()=>setRefId,
    "setReplies",
    ()=>setReplies,
    "setReplyingTo",
    ()=>setReplyingTo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    refId: null,
    replies: [],
    mainComments: [],
    replyingTo: null
};
const commentReplySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "comments",
    initialState,
    reducers: {
        setRefId: (state, action)=>{
            state.refId = action.payload;
        },
        setReplies: (state, action)=>{
            state.replies = action.payload;
        },
        addReply: (state, action)=>{
            state.replies.push(action.payload);
        },
        setMainCommentRefId: (state, action)=>{
            state.refId = action.payload;
        },
        setMainComments: (state, action)=>{
            state.mainComments = action.payload;
        },
        addMainComments: (state, action)=>{
            state.mainComments = [
                ...state.mainComments,
                action.payload
            ];
        },
        setReplyingTo: (state, action)=>{
            state.replyingTo = action.payload;
        },
        clearReplyingTo: (state)=>{
            state.replyingTo = null;
        }
    }
});
const { setRefId, setReplies, addReply, setMainCommentRefId, setMainComments, addMainComments, setReplyingTo, clearReplyingTo } = commentReplySlice.actions;
const __TURBOPACK__default__export__ = commentReplySlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/handleCommentCount.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/commentAddedSlice.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setCommentAddedFalse",
    ()=>setCommentAddedFalse,
    "setCommentAddedTrue",
    ()=>setCommentAddedTrue,
    "setReelSharedFalse",
    ()=>setReelSharedFalse,
    "setReelSharedTrue",
    ()=>setReelSharedTrue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    commentAdded: false,
    ReelSharedId: null
};
const commentAddedSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "commentAdded",
    initialState,
    reducers: {
        setCommentAddedTrue (state) {
            state.commentAdded = true;
        },
        setCommentAddedFalse (state) {
            state.commentAdded = false;
        },
        setReelSharedTrue (state, action) {
            state.ReelSharedId = action.payload; // pass the social_id
        },
        setReelSharedFalse (state) {
            state.ReelSharedId = null;
        }
    }
});
const { setCommentAddedTrue, setCommentAddedFalse, setReelSharedTrue, setReelSharedFalse } = commentAddedSlice.actions;
const __TURBOPACK__default__export__ = commentAddedSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ChatListSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "incrementUnseenCount",
    ()=>incrementUnseenCount,
    "resetUnseenCount",
    ()=>resetUnseenCount,
    "updateChatList",
    ()=>updateChatList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
// Define the initial state with an empty chatList
const initialState = [];
// Create a slice of the state
const ChatListSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "chatList",
    initialState,
    reducers: {
        // Replace full chat list
        updateChatList (state, action) {
            return action.payload;
        },
        // Increment unseen count for a chat
        incrementUnseenCount (state, action) {
            const { chat_id, count } = action.payload;
            state.forEach((chat)=>{
                chat.Records.forEach((record)=>{
                    if (record.chat_id === chat_id) {
                        record.unseen_count = (record.unseen_count || 0) + count;
                    }
                });
            });
        },
        // Reset unseen count for a chat
        resetUnseenCount (state, action) {
            const { chat_id } = action.payload;
            state.forEach((chat)=>{
                chat.Records.forEach((record)=>{
                    if (record.chat_id === chat_id) {
                        record.unseen_count = 0;
                    }
                });
            });
        }
    }
});
const __TURBOPACK__default__export__ = ChatListSlice.reducer;
const { updateChatList, incrementUnseenCount, resetUnseenCount } = ChatListSlice.actions;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/CurrentConversationSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMessageToCurrentConversation",
    ()=>addMessageToCurrentConversation,
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetCurrentConversation",
    ()=>resetCurrentConversation,
    "setMessagesForCurrentConversation",
    ()=>setMessagesForCurrentConversation,
    "updateCurrentConversation",
    ()=>updateCurrentConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    Messages: [],
    chat_id: 0,
    chat_type: "",
    createdAt: "",
    group_icon: "",
    group_name: "",
    unseen_count: 0,
    updatedAt: "",
    PeerUserData: undefined,
    isNewConversation: false
};
const CurrentConversationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "CurrentConversation",
    initialState,
    reducers: {
        updateCurrentConversation (state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
        resetCurrentConversation () {
            return initialState;
        },
        addMessageToCurrentConversation (state, action) {
            state.Messages.push(action.payload);
        },
        setMessagesForCurrentConversation (state, action) {
            state.Messages = action.payload;
        }
    }
});
const __TURBOPACK__default__export__ = CurrentConversationSlice.reducer;
const { updateCurrentConversation, resetCurrentConversation, addMessageToCurrentConversation, setMessagesForCurrentConversation } = CurrentConversationSlice.actions;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageListSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendMessageWithDateCheck",
    ()=>appendMessageWithDateCheck,
    "clearMessageList",
    ()=>clearMessageList,
    "default",
    ()=>__TURBOPACK__default__export__,
    "prependMessageList",
    ()=>prependMessageList,
    "updateMessageList",
    ()=>updateMessageList,
    "updateMessagesByIds",
    ()=>updateMessagesByIds,
    "updateMessagesReadStatusByIds",
    ()=>updateMessagesReadStatusByIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
// Define the initial state with an empty MessageList
const initialState = [];
// Create a slice of the state
const MessageListSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "MessageList",
    initialState,
    reducers: {
        // Reducer to update the MessageList
        updateMessageList (state, action) {
            // return action.payload;
            return [
                ...action.payload,
                ...state
            ]; // Prepend the new messagelist at start of the messagelist
        },
        prependMessageList (state, action) {
            return [
                ...action.payload,
                ...state
            ];
        },
        updateMessagesByIds (state, action) {
            return state.map((message)=>{
                if (message.message_id === action.payload.message_id) {
                    return {
                        ...message,
                        message: action.payload.message,
                        delete_from_everyone: action.payload.delete_from_everyone
                    };
                }
                return message;
            });
        },
        updateMessagesReadStatusByIds (state, action) {
            return state.map((message)=>{
                if (message.message_id == action.payload.message_id) {
                    return {
                        ...message,
                        message_read: 1
                    };
                }
                return message;
            });
        },
        // Reducer to append a single object with date check 
        appendMessageWithDateCheck (state, action) {
            return [
                ...state,
                action.payload
            ]; // ✅ Immutable update
        },
        clearMessageList () {
            return [];
        }
    }
});
const __TURBOPACK__default__export__ = MessageListSlice.reducer;
const { updateMessageList, appendMessageWithDateCheck, prependMessageList, updateMessagesByIds, updateMessagesReadStatusByIds, clearMessageList } = MessageListSlice.actions;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetTypingState",
    ()=>resetTypingState,
    "updateSendMessageData",
    ()=>updateSendMessageData,
    "updateTypingState",
    ()=>updateTypingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    chat_id: 0,
    audio_time: "",
    forward_id: 0,
    latitude: 0,
    longitude: 0,
    message_content: "",
    message_type: "",
    phone_number: "",
    reply_id: 0,
    status_id: 0,
    url: "",
    thumbnail_url: "",
    video_time: "",
    showEmojiPicker: false,
    showAttachmentOptions: false,
    showGifPicker: false,
    fileName: "",
    typing: false
};
// Create a slice of the state
const SendMessageSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "SendMessageData",
    initialState,
    reducers: {
        updateSendMessageData (state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
        updateTypingState (state, action) {
            state.chat_id = action.payload.chat_id;
            state.typing = action.payload.typing;
        },
        resetTypingState (state) {
            state.typing = false;
        }
    }
});
const __TURBOPACK__default__export__ = SendMessageSlice.reducer;
const { updateSendMessageData, updateTypingState, resetTypingState } = SendMessageSlice.actions;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageOptionsSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetPagination",
    ()=>resetPagination,
    "setIsAtTop",
    ()=>setIsAtTop,
    "setIsLoading",
    ()=>setIsLoading,
    "updateMessageOptions",
    ()=>updateMessageOptions,
    "updatePagination",
    ()=>updatePagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
// const initialState: MessageOptionsState = {
//   currentPage: 1,
//   totalPages: 1,
//   isMessageLoading: false,
//   isMoreMessageLoading:false,
//   messageListAtTop: false,
// };
const initialState = {
    selectMessage: false,
    message_list: [],
    showModal: false,
    modalName: "",
    title: "",
    description: "",
    totalPages: 0,
    currentPage: 1,
    isMessageLoading: false,
    isMoreMessageLoading: false,
    delete_message: false,
    delete_only_from_me: false,
    forward_message: false,
    show_forward_message_modal: false,
    show_pin_message_modal: false,
    show_select_about_modal: false,
    delete_from_every_one: false,
    messageListAtTop: false,
    show_all_star_messages: false,
    show_send_location_modal: false,
    pinned_duration: "1_day",
    show_create_poll_modal: false,
    show_view_poll_vote_modal: false,
    message_id: 0
};
const MessageOptionsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "MessageOptions",
    initialState,
    reducers: {
        updatePagination (state, action) {
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
        },
        updateMessageOptions (state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
        setIsLoading (state, action) {
            state.isMessageLoading = action.payload;
        },
        setIsAtTop (state, action) {
            state.messageListAtTop = action.payload;
        },
        resetPagination (state) {
            state.currentPage = 1;
            state.totalPages = 1;
            state.isMessageLoading = false;
            state.messageListAtTop = false;
        }
    }
});
const { updateMessageOptions, updatePagination, setIsLoading, setIsAtTop, resetPagination } = MessageOptionsSlice.actions;
const __TURBOPACK__default__export__ = MessageOptionsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/OnlineUserSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addOnlineUser",
    ()=>addOnlineUser,
    "default",
    ()=>__TURBOPACK__default__export__,
    "removeOnlineUser",
    ()=>removeOnlineUser,
    "setOnlineUsers",
    ()=>setOnlineUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = [];
const OnlineUserSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "OnlineUserList",
    initialState,
    reducers: {
        setOnlineUsers: (_state, action)=>{
            return action.payload; // always replace with an array
        },
        addOnlineUser: (state, action)=>{
            const exists = state.find((user)=>user.user_id === action.payload.user_id);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeOnlineUser: (state, action)=>{
            return state.filter((user)=>user.user_id !== action.payload);
        }
    }
});
const __TURBOPACK__default__export__ = OnlineUserSlice.reducer;
const { setOnlineUsers, addOnlineUser, removeOnlineUser } = OnlineUserSlice.actions;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SetReportTextIdSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSelectedReport",
    ()=>clearSelectedReport,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setSelectedReport",
    ()=>setSelectedReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    ReportUser: false,
    ReportConfirmation: false
};
const reportSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "ReportType",
    initialState,
    reducers: {
        setSelectedReport: (state, action)=>{
            state.selectedReport = action.payload;
        },
        clearSelectedReport: (state)=>{
            state.selectedReport = undefined;
        }
    }
});
const { setSelectedReport, clearSelectedReport } = reportSlice.actions;
const __TURBOPACK__default__export__ = reportSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserReelsSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendReels",
    ()=>appendReels,
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetReels",
    ()=>resetReels,
    "setLoading",
    ()=>setLoading,
    "setPagination",
    ()=>setPagination,
    "setReels",
    ()=>setReels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    reels: [],
    currentPage: 1,
    totalPages: 1,
    loading: false
};
const userReelsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "userReels",
    initialState,
    reducers: {
        setLoading (state, action) {
            state.loading = action.payload;
        },
        setReels (state, action) {
            state.reels = action.payload;
        },
        appendReels (state, action) {
            state.reels = [
                ...state.reels,
                ...action.payload
            ];
        },
        setPagination (state, action) {
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
        },
        resetReels (state) {
            state.reels = [];
            state.currentPage = 1;
            state.totalPages = 1;
        }
    }
});
const { setLoading, setReels, appendReels, setPagination, resetReels } = userReelsSlice.actions;
const __TURBOPACK__default__export__ = userReelsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserLikesSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/userLikesSlice.ts
__turbopack_context__.s([
    "appendLikes",
    ()=>appendLikes,
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetLikes",
    ()=>resetLikes,
    "setLikes",
    ()=>setLikes,
    "setLoading",
    ()=>setLoading,
    "setPagination",
    ()=>setPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    reels: [],
    pagination: null,
    loading: false
};
const userLikesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "userLikes",
    initialState,
    reducers: {
        setLikes (state, action) {
            state.reels = action.payload;
        },
        appendLikes (state, action) {
            state.reels = [
                ...state.reels,
                ...action.payload
            ];
        },
        setPagination (state, action) {
            state.pagination = action.payload;
        },
        setLoading (state, action) {
            state.loading = action.payload;
        },
        resetLikes (state) {
            state.reels = [];
            state.pagination = null;
            state.loading = false;
        }
    }
});
const { setLikes, appendLikes, setPagination, setLoading, resetLikes } = userLikesSlice.actions;
const __TURBOPACK__default__export__ = userLikesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MediaSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/slices/mediaSlice.ts
__turbopack_context__.s([
    "clearSelectedMusic",
    ()=>clearSelectedMusic,
    "clearVideo",
    ()=>clearVideo,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setCaption",
    ()=>setCaption,
    "setEndTime",
    ()=>setEndTime,
    "setLocation",
    ()=>setLocation,
    "setMusicId",
    ()=>setMusicId,
    "setMusicList",
    ()=>setMusicList,
    "setMuted",
    ()=>setMuted,
    "setSelectedMusic",
    ()=>setSelectedMusic,
    "setSelectedVideo",
    ()=>setSelectedVideo,
    "setStartTime",
    ()=>setStartTime,
    "setTrimmedVideo",
    ()=>setTrimmedVideo,
    "setVideoUrl",
    ()=>setVideoUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    selectedMusic: null,
    musicList: [],
    selectedVideos: null,
    selectedVideoUrl: null,
    trimmedVideoFile: null,
    trimmedVideoUrl: null,
    caption: "",
    music_id: null,
    location: "",
    startTime: 0,
    endTime: 0,
    isMuted: false
};
const mediaSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "media",
    initialState,
    reducers: {
        // MUSIC -------------------------
        setMusicList: (state, action)=>{
            state.musicList = action.payload;
        },
        setSelectedMusic: (state, action)=>{
            state.selectedMusic = action.payload;
        },
        clearSelectedMusic: (state)=>{
            state.selectedMusic = null;
        },
        setStartTime: (state, action)=>{
            state.startTime = action.payload;
        },
        setEndTime: (state, action)=>{
            state.endTime = action.payload;
        },
        setMuted: (state, action)=>{
            state.isMuted = action.payload;
        },
        // VIDEO -------------------------
        // addVideos: (state, action: PayloadAction<File[]>) => {
        //   state.selectedVideos.push(...action.payload);
        // },
        // removeVideo: (state, action: PayloadAction<number>) => {
        //   state.selectedVideos = state.selectedVideos.filter(
        //     (_, i) => i !== action.payload
        //   );
        // },
        // clearVideos: (state) => {
        //   state.selectedVideos = [];
        // },
        setSelectedVideo: (state, action)=>{
            state.selectedVideos = action.payload; // ✅ replace any previous video
        },
        setVideoUrl: (state, action)=>{
            state.selectedVideoUrl = action.payload;
        },
        clearVideo: (state)=>{
            state.selectedVideos = null;
            state.selectedVideoUrl = null;
            state.trimmedVideoUrl = null;
            state.trimmedVideoFile = null;
            state.startTime = 0;
            state.endTime = 0;
        },
        setTrimmedVideo: (state, action)=>{
            if (action.payload) {
                state.trimmedVideoUrl = action.payload.url;
                state.trimmedVideoFile = action.payload.file;
            } else {
                state.trimmedVideoUrl = null;
                state.trimmedVideoFile = null;
            }
        },
        setCaption: (state, action)=>{
            state.caption = action.payload;
        },
        setMusicId: (state, action)=>{
            state.music_id = action.payload;
        },
        setLocation: (state, action)=>{
            state.location = action.payload;
        }
    }
});
const { setMusicList, setSelectedMusic, clearSelectedMusic, setSelectedVideo, setVideoUrl, clearVideo, setTrimmedVideo, setCaption, setMusicId, setLocation, setStartTime, setEndTime, setMuted } = mediaSlice.actions;
const __TURBOPACK__default__export__ = mediaSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/HomePageReelsSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendReels",
    ()=>appendReels,
    "default",
    ()=>__TURBOPACK__default__export__,
    "incrementComment",
    ()=>incrementComment,
    "incrementShare",
    ()=>incrementShare,
    "removeReel",
    ()=>removeReel,
    "setReels",
    ()=>setReels,
    "updateReel",
    ()=>updateReel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    reels: []
};
const reelsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "reels",
    initialState,
    reducers: {
        setReels: (state, action)=>{
            state.reels = action.payload;
        },
        appendReels: (state, action)=>{
            state.reels = [
                ...state.reels,
                ...action.payload
            ];
        },
        updateReel: (state, action)=>{
            state.reels = state.reels.map((r)=>r.social_id === action.payload.social_id ? {
                    ...r,
                    ...action.payload
                } : r);
        },
        removeReel: (state, action)=>{
            state.reels = state.reels.filter((r)=>r.social_id !== action.payload);
        },
        incrementComment: (state, action)=>{
            state.reels = state.reels.map((r)=>r.social_id === action.payload ? {
                    ...r,
                    total_comments: (r.total_comments || 0) + 1
                } : r);
        },
        incrementShare: (state, action)=>{
            state.reels = state.reels.map((r)=>r.social_id === action.payload ? {
                    ...r,
                    total_shares: (r.total_shares || 0) + 1
                } : r);
        }
    }
});
const { setReels, appendReels, updateReel, removeReel, incrementComment, incrementShare } = reelsSlice.actions;
const __TURBOPACK__default__export__ = reelsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ViewAudioSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendReels",
    ()=>appendReels,
    "clearMusicData",
    ()=>clearMusicData,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setMusicData",
    ()=>setMusicData,
    "setPagination",
    ()=>setPagination,
    "setReels",
    ()=>setReels,
    "setTotalSocials",
    ()=>setTotalSocials,
    "updateSocials",
    ()=>updateSocials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    musicId: 0,
    musicName: null,
    musicImage: null,
    total_socials: 0,
    reels: [],
    currentPage: 1,
    totalPages: 1
};
const ViewAudioSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "music",
    initialState,
    reducers: {
        setMusicData: (state, action)=>{
            state.musicId = action.payload.musicId;
            state.musicName = action.payload.musicName;
            state.musicImage = action.payload.musicImage;
            state.total_socials = action.payload.total_socials;
        },
        updateSocials: (state, action)=>{
            state.total_socials = action.payload;
        },
        clearMusicData: (state)=>{
            state.musicId = null;
            state.musicName = null;
            state.musicImage = null;
            state.total_socials = 0;
        },
        setMusicDetails: (state, action)=>{
            return {
                ...state,
                ...action.payload
            };
        },
        setTotalSocials: (state, action)=>{
            state.total_socials = action.payload;
        },
        setReels: (state, action)=>{
            state.reels = action.payload;
        },
        appendReels: (state, action)=>{
            state.reels = [
                ...state.reels,
                ...action.payload
            ];
        },
        setPagination: (state, action)=>{
            state.currentPage = action.payload.currentPage;
            state.totalPages = action.payload.totalPages;
        }
    }
});
const { setMusicData, updateSocials, clearMusicData, setTotalSocials, setReels, appendReels, setPagination } = ViewAudioSlice.actions;
const __TURBOPACK__default__export__ = ViewAudioSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/LiveSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/LiveSlice.ts
__turbopack_context__.s([
    "addLiveEvent",
    ()=>addLiveEvent,
    "clearCommentDraft",
    ()=>clearCommentDraft,
    "clearLiveEvents",
    ()=>clearLiveEvents,
    "clearLiveMeta",
    ()=>clearLiveMeta,
    "clearSelectedLive",
    ()=>clearSelectedLive,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setCommentDraft",
    ()=>setCommentDraft,
    "setJoinLiveResponse",
    ()=>setJoinLiveResponse,
    "setLiveData",
    ()=>setLiveData,
    "setLives",
    ()=>setLives,
    "setSelectedLive",
    ()=>setSelectedLive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    lives: [],
    selectedLive: undefined,
    socket_room_id: undefined,
    user_id: 0,
    liveEvents: [],
    commentDraft: "",
    joinLiveResponse: undefined
};
const liveSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "live",
    initialState,
    reducers: {
        setLives: (state, action)=>{
            state.lives = action.payload;
        },
        setSelectedLive: (state, action)=>{
            state.selectedLive = action.payload;
        },
        clearSelectedLive: (state)=>{
            state.selectedLive = undefined;
        },
        setLiveData: (state, action)=>{
            state.socket_room_id = action.payload.socket_room_id;
            state.user_id = action.payload.user_id;
        },
        clearLiveMeta: (state)=>{
            state.socket_room_id = undefined;
            state.user_id = undefined;
        },
        // Events
        addLiveEvent: (state, action)=>{
            state.liveEvents.push(action.payload);
        },
        clearLiveEvents: (state)=>{
            state.liveEvents = [];
        },
        // Join Live Response
        setJoinLiveResponse: (state, action)=>{
            state.joinLiveResponse = action.payload;
        },
        // Comment draft
        setCommentDraft: (state, action)=>{
            state.commentDraft = action.payload;
        },
        clearCommentDraft: (state)=>{
            state.commentDraft = "";
        }
    }
});
const { setLives, setSelectedLive, clearSelectedLive, setLiveData, clearLiveMeta, addLiveEvent, clearLiveEvents, setJoinLiveResponse, setCommentDraft, clearCommentDraft } = liveSlice.actions;
const __TURBOPACK__default__export__ = liveSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/messageSeenStatusSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/SeenStatusSlice.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "updateMessageSeenStatus",
    ()=>updateMessageSeenStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    seenMessages: {}
};
const seenStatusSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "SeenStatus",
    initialState,
    reducers: {
        updateMessageSeenStatus: (state, action)=>{
            const { message_id, message_seen_status } = action.payload;
            state.seenMessages[message_id] = message_seen_status;
        }
    }
});
const { updateMessageSeenStatus } = seenStatusSlice.actions;
const __TURBOPACK__default__export__ = seenStatusSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/selectedGiftCategorySlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/store/Slice/GiftSlice.ts
__turbopack_context__.s([
    "decrementQuantity",
    ()=>decrementQuantity,
    "default",
    ()=>__TURBOPACK__default__export__,
    "incrementQuantity",
    ()=>incrementQuantity,
    "resetGift",
    ()=>resetGift,
    "setSelectedCategory",
    ()=>setSelectedCategory,
    "setSelectedGift",
    ()=>setSelectedGift
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    selectedCategoryId: null,
    selectedGiftId: null,
    selectedGiftValue: 0,
    selectedGiftImage: null,
    quantity: 1,
    total: 0
};
const giftSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "gift",
    initialState,
    reducers: {
        setSelectedCategory: (state, action)=>{
            state.selectedCategoryId = action.payload;
            state.selectedGiftId = null;
            state.selectedGiftValue = 0;
            state.selectedGiftImage = null;
            state.quantity = 1;
            state.total = 0;
        },
        setSelectedGift: (state, action)=>{
            state.selectedGiftId = action.payload.id;
            state.selectedGiftValue = action.payload.value;
            state.selectedGiftImage = action.payload.image;
            state.quantity = 1;
            state.total = action.payload.value; // reset total
        },
        incrementQuantity: (state)=>{
            state.quantity += 1;
            state.total = state.quantity * state.selectedGiftValue;
        },
        decrementQuantity: (state)=>{
            if (state.quantity > 1) {
                state.quantity -= 1;
                state.total = state.quantity * state.selectedGiftValue;
            }
        },
        resetGift: (state)=>{
            state.selectedCategoryId = null;
            state.selectedGiftId = null;
            state.selectedGiftValue = 0;
            state.selectedGiftImage = null;
            state.quantity = 1;
            state.total = 0;
        }
    }
});
const { setSelectedCategory, setSelectedGift, incrementQuantity, decrementQuantity, resetGift } = giftSlice.actions;
const __TURBOPACK__default__export__ = giftSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/TransactionPlanSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/store/slices/transactionPlansSlice.ts
__turbopack_context__.s([
    "appendPlans",
    ()=>appendPlans,
    "clearPlans",
    ()=>clearPlans,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setPlans",
    ()=>setPlans,
    "setSelectedPlanAmount",
    ()=>setSelectedPlanAmount,
    "setSelectedPlanId",
    ()=>setSelectedPlanId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    plans: [],
    selectedPlanId: null,
    total_money: 0
};
const transactionPlansSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "transactionPlans",
    initialState,
    reducers: {
        setPlans: (state, action)=>{
            state.plans = action.payload;
        },
        appendPlans: (state, action)=>{
            // avoid duplicates
            const newPlans = action.payload.filter((rec)=>!state.plans.some((p)=>p.plan_id === rec.plan_id));
            state.plans.push(...newPlans);
        },
        setSelectedPlanId: (state, action)=>{
            state.selectedPlanId = action.payload;
        },
        setSelectedPlanAmount: (state, action)=>{
            state.total_money = action.payload;
        },
        clearPlans: (state)=>{
            state.plans = [];
            state.selectedPlanId = null;
        }
    }
});
const { setPlans, appendPlans, setSelectedPlanId, setSelectedPlanAmount, clearPlans } = transactionPlansSlice.actions;
const __TURBOPACK__default__export__ = transactionPlansSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserGiftsSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendGifts",
    ()=>appendGifts,
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetGifts",
    ()=>resetGifts,
    "setGifts",
    ()=>setGifts,
    "setLoading",
    ()=>setLoading,
    "setPagination",
    ()=>setPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    reels: [],
    pagination: null,
    loading: false
};
const userGiftsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "userGifts",
    initialState,
    reducers: {
        setGifts (state, action) {
            state.reels = action.payload;
        },
        appendGifts (state, action) {
            state.reels = [
                ...state.reels,
                ...action.payload
            ];
        },
        setPagination (state, action) {
            state.pagination = action.payload;
        },
        setLoading (state, action) {
            state.loading = action.payload;
        },
        resetGifts (state) {
            state.reels = [];
            state.pagination = null;
            state.loading = false;
        }
    }
});
const { setGifts, appendGifts, setPagination, setLoading, resetGifts } = userGiftsSlice.actions;
const __TURBOPACK__default__export__ = userGiftsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/FollowersSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendFollowers",
    ()=>appendFollowers,
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetFollowers",
    ()=>resetFollowers,
    "setFollowers",
    ()=>setFollowers,
    "setHasMore",
    ()=>setHasMore,
    "setIsFetchingMore",
    ()=>setIsFetchingMore,
    "setIsLoading",
    ()=>setIsLoading,
    "setPage",
    ()=>setPage,
    "updateFollowStatus",
    ()=>updateFollowStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    followers: [],
    page: 1,
    hasMore: true,
    isLoading: false,
    isFetchingMore: false
};
const followersSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "followers",
    initialState,
    reducers: {
        setFollowers: (state, action)=>{
            state.followers = action.payload;
        },
        appendFollowers: (state, action)=>{
            state.followers = [
                ...state.followers,
                ...action.payload
            ];
        },
        setPage: (state, action)=>{
            state.page = action.payload;
        },
        setHasMore: (state, action)=>{
            state.hasMore = action.payload;
        },
        setIsLoading: (state, action)=>{
            state.isLoading = action.payload;
        },
        setIsFetchingMore: (state, action)=>{
            state.isFetchingMore = action.payload;
        },
        updateFollowStatus: (state, action)=>{
            state.followers = state.followers.map((f)=>f.follower.user_id === action.payload.userId ? {
                    ...f,
                    isFollowed: action.payload.isFollowed
                } : f);
        },
        resetFollowers: (state)=>{
            state.followers = [];
            state.page = 1;
            state.hasMore = true;
            state.isLoading = false;
            state.isFetchingMore = false;
        }
    }
});
const { setFollowers, appendFollowers, setPage, setHasMore, setIsLoading, setIsFetchingMore, updateFollowStatus, resetFollowers } = followersSlice.actions;
const __TURBOPACK__default__export__ = followersSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/FollowingSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendFollowing",
    ()=>appendFollowing,
    "default",
    ()=>__TURBOPACK__default__export__,
    "resetFollowing",
    ()=>resetFollowing,
    "setFollowing",
    ()=>setFollowing,
    "setHasMore",
    ()=>setHasMore,
    "setIsFetchingMore",
    ()=>setIsFetchingMore,
    "setIsLoading",
    ()=>setIsLoading,
    "setPage",
    ()=>setPage,
    "setTotalPages",
    ()=>setTotalPages,
    "updateFollowStatus",
    ()=>updateFollowStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    following: [],
    page: 1,
    totalPages: 1,
    hasMore: true,
    isLoading: false,
    isFetchingMore: false
};
const followingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "following",
    initialState,
    reducers: {
        setFollowing: (state, action)=>{
            state.following = action.payload;
        },
        appendFollowing: (state, action)=>{
            state.following = [
                ...state.following,
                ...action.payload
            ];
        },
        setPage: (state, action)=>{
            state.page = action.payload;
        },
        setTotalPages: (state, action)=>{
            state.totalPages = action.payload;
        },
        setHasMore: (state, action)=>{
            state.hasMore = action.payload;
        },
        setIsLoading: (state, action)=>{
            state.isLoading = action.payload;
        },
        setIsFetchingMore: (state, action)=>{
            state.isFetchingMore = action.payload;
        },
        updateFollowStatus: (state, action)=>{
            state.following = state.following.map((f)=>f.User.user_id === action.payload.userId ? {
                    ...f,
                    isFollowed: action.payload.isFollowed
                } : f);
        },
        resetFollowing: (state)=>{
            state.following = [];
            state.page = 1;
            state.totalPages = 1;
            state.hasMore = true;
            state.isLoading = false;
            state.isFetchingMore = false;
        }
    }
});
const { setFollowing, appendFollowing, setPage, setTotalPages, setHasMore, setIsLoading, setIsFetchingMore, updateFollowStatus, resetFollowing } = followingSlice.actions;
const __TURBOPACK__default__export__ = followingSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/DateRangeSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearDateRange",
    ()=>clearDateRange,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setDateRange",
    ()=>setDateRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    startDate: null,
    endDate: null
};
const dateRangeSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "dateRange",
    initialState,
    reducers: {
        setDateRange: (state, action)=>{
            state.startDate = action.payload.startDate.getTime();
            state.endDate = action.payload.endDate.getTime();
        },
        clearDateRange: (state)=>{
            state.startDate = null;
            state.endDate = null;
        }
    }
});
const { setDateRange, clearDateRange } = dateRangeSlice.actions;
const __TURBOPACK__default__export__ = dateRangeSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/BankScreenSlice.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// bankScreenSlice.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setScreen",
    ()=>setScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    activeScreen: ""
};
const bankScreenSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "bankScreen",
    initialState,
    reducers: {
        setScreen: (state, action)=>{
            state.activeScreen = action.payload;
        }
    }
});
const { setScreen } = bankScreenSlice.actions;
const __TURBOPACK__default__export__ = bankScreenSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/setChatIdMessageLoading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/SelectedChatSlice.ts
__turbopack_context__.s([
    "clearChatId",
    ()=>clearChatId,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setChatId",
    ()=>setChatId,
    "setMessageLoading",
    ()=>setMessageLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    chat_id: null,
    messageLoading: false
};
const selectedChatSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "selectedChat",
    initialState,
    reducers: {
        setChatId (state, action) {
            state.chat_id = action.payload;
        },
        clearChatId (state) {
            state.chat_id = null;
        },
        setMessageLoading (state, action) {
            state.messageLoading = action.payload;
        }
    }
});
const { setChatId, clearChatId, setMessageLoading } = selectedChatSlice.actions;
const __TURBOPACK__default__export__ = selectedChatSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ActiveCommentBox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$PhoneEmailSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/PhoneEmailSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserDataSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserDataSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$FollowFollowingCount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/FollowFollowingCount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$fetchFollowReelsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/fetchFollowReelsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SelectedReelDetail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$commentSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/commentSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$storeCommentsReplies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/storeCommentsReplies.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/handleCommentCount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ChatListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ChatListSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/CurrentConversationSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageListSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SendMessageSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MessageOptionsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/OnlineUserSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SetReportTextIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/SetReportTextIdSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserReelsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserReelsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserLikesSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserLikesSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MediaSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/MediaSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$HomePageReelsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/HomePageReelsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ViewAudioSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/ViewAudioSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/LiveSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$messageSeenStatusSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/messageSeenStatusSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$selectedGiftCategorySlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/selectedGiftCategorySlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$TransactionPlanSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/TransactionPlanSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserGiftsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/UserGiftsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$FollowersSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/FollowersSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$FollowingSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/FollowingSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/DateRangeSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/BankScreenSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/setChatIdMessageLoading.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        // Add reducers here
        modals: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        comment: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        user: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$PhoneEmailSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        userData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserDataSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        followFollowingSlice: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$FollowFollowingCount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        follow: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$fetchFollowReelsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        selectedReel: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        getComment: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$commentSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        comments: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$storeCommentsReplies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        commentAdded: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        chatList: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ChatListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        CurrentConversation: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        MessageList: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        SendMessageData: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        MessageOptions: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        OnlineUserList: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        ReportType: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$SetReportTextIdSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        userReels: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserReelsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        userLikes: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserLikesSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        media: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$MediaSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        reels: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$HomePageReelsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        music: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$ViewAudioSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        live: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        SeenStatus: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$messageSeenStatusSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        gift: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$selectedGiftCategorySlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        transactionPlans: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$TransactionPlanSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        userGifts: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$UserGiftsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        followers: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$FollowersSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        following: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$FollowingSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        dateRange: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        bankScreen: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        selectedChat: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/updateUser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// services/userService.ts
__turbopack_context__.s([
    "fetchUserProfileDetails",
    ()=>fetchUserProfileDetails,
    "useUserProfile",
    ()=>useUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const baseURL = ("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api");
const fetchUserProfileDetails = async (token)=>{
    const res = await fetch("".concat(baseURL, "/users/updateUser"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(token)
        },
        body: JSON.stringify({
            token
        })
    });
    if (!res.ok) {
        throw new Error("Failed to fetch user profile details");
    }
    return res.json();
};
const useUserProfile = (token)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "userProfile",
            token
        ],
        queryFn: {
            "useUserProfile.useQuery": ()=>fetchUserProfileDetails(token)
        }["useUserProfile.useQuery"],
        enabled: !!token,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false
    });
};
_s(useUserProfile, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getAvatars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// api/avatar.ts
__turbopack_context__.s([
    "fetchAvatars",
    ()=>fetchAvatars,
    "useAvatars",
    ()=>useAvatars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const baseURL = ("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api");
const fetchAvatars = async (token)=>{
    const res = await fetch("".concat(baseURL, "/avatar/show-avatars"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(token)
        },
        body: JSON.stringify({
            token
        })
    });
    if (!res.ok) {
        throw new Error("Failed to fetch avatars");
    }
    return res.json();
};
const useAvatars = (token)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "avatars",
            token
        ],
        queryFn: {
            "useAvatars.useQuery": ()=>fetchAvatars(token)
        }["useAvatars.useQuery"],
        enabled: !!token
    });
};
_s(useAvatars, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getReportTypes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/api/useReportTypes.ts
__turbopack_context__.s([
    "useReportTypes",
    ()=>useReportTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useReportTypes = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "report-types"
        ],
        queryFn: {
            "useReportTypes.useQuery": async ()=>{
                const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
                if (!token) throw new Error("Auth token not found");
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api"), "/report/report-types"), {}, {
                    headers: {
                        Authorization: "Bearer ".concat(token)
                    }
                });
                return data;
            }
        }["useReportTypes.useQuery"],
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false
    });
};
_s(useReportTypes, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getGiftCategories.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useGiftCategory.ts
__turbopack_context__.s([
    "useGiftCategories",
    ()=>useGiftCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const fetchGiftCategories = async (page)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api"), "/gift/get-gift-category"), {
        page
    }, {
        headers: {
            Authorization: "Bearer ".concat(token),
            "Content-Type": "application/json"
        }
    });
    return data;
};
const useGiftCategories = (page)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "giftCategories",
            page
        ],
        queryFn: {
            "useGiftCategories.useQuery": ()=>fetchGiftCategories(page)
        }["useGiftCategories.useQuery"],
        // keepPreviousData: true, // prevents flicker when switching pages
        staleTime: 1000 * 60
    });
};
_s(useGiftCategories, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getGift.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useGifts.ts
__turbopack_context__.s([
    "useGifts",
    ()=>useGifts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const fetchGifts = async (param)=>{
    let { pageParam = 1, categoryId } = param;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api"), "/gift/get-gift"), {
        page: pageParam,
        gift_category_id: categoryId
    }, {
        headers: {
            Authorization: "Bearer ".concat(token),
            "Content-Type": "application/json"
        }
    });
    return data;
};
const useGifts = (categoryId)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "gifts",
            categoryId
        ],
        //@ts-ignore
        queryFn: {
            "useGifts.useInfiniteQuery": (param)=>{
                let { pageParam } = param;
                return fetchGifts({
                    pageParam,
                    categoryId
                });
            }
        }["useGifts.useInfiniteQuery"],
        enabled: !!categoryId,
        initialPageParam: 1,
        getNextPageParam: {
            "useGifts.useInfiniteQuery": (lastPage)=>{
                const { Pagination } = (lastPage === null || lastPage === void 0 ? void 0 : lastPage.data) || {};
                if (!Pagination) return undefined;
                if (Pagination.current_page < Pagination.total_pages) {
                    return Pagination.current_page + 1;
                }
                return undefined;
            }
        }["useGifts.useInfiniteQuery"]
    });
};
_s(useGifts, "xMCOiuh9cV5e8gBi6hogZoGnISk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getReceivedGifts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useReceivedGifts.ts
__turbopack_context__.s([
    "useReceivedGifts",
    ()=>useReceivedGifts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const fetchReceivedGifts = async (param)=>{
    let { pageParam = 1, socialId, receiverId } = param;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api"), "/transaction/history"), {
        page: pageParam,
        social_id: socialId,
        reciever_id: receiverId,
        transaction_table: "coin"
    }, {
        headers: {
            Authorization: "Bearer ".concat(token),
            "Content-Type": "application/json"
        }
    });
    return data;
};
const useReceivedGifts = (socialId, receiverId)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "received-gifts",
            socialId,
            receiverId
        ],
        queryFn: {
            "useReceivedGifts.useInfiniteQuery": (param)=>{
                let { pageParam } = param;
                return(//@ts-ignore
                fetchReceivedGifts({
                    pageParam,
                    socialId,
                    receiverId
                }));
            }
        }["useReceivedGifts.useInfiniteQuery"],
        enabled: !!socialId && !!receiverId,
        initialPageParam: 1,
        getNextPageParam: {
            "useReceivedGifts.useInfiniteQuery": (lastPage)=>{
                const { Pagination } = lastPage.data;
                if (Pagination.current_page < Pagination.total_pages) {
                    return Pagination.current_page + 1;
                }
                return undefined;
            }
        }["useReceivedGifts.useInfiniteQuery"]
    });
};
_s(useReceivedGifts, "xMCOiuh9cV5e8gBi6hogZoGnISk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getCommentReply.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/api/getCommentReply.ts
__turbopack_context__.s([
    "useReplies",
    ()=>useReplies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$storeCommentsReplies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/Slice/storeCommentsReplies.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useReplies = (commentRefId, enabled)=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const fetchReplies = async ()=>{
        var _data_data;
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api"), "/comment/show-comment"), {
            include: "User",
            page: 1,
            comment_ref_id: commentRefId
        }, {
            headers: {
                Authorization: "Bearer ".concat(token)
            }
        });
        const replies = (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.Records) || [];
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$store$2f$Slice$2f$storeCommentsReplies$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setReplies"])(replies));
        return replies;
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'replies',
            commentRefId
        ],
        queryFn: fetchReplies,
        enabled,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false
    });
};
_s(useReplies, "EKtKu+bQ7VbZr+3QtPkWfsz1IGU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/getCommentList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/api/getCommentList.ts
__turbopack_context__.s([
    "useCommentList",
    ()=>useCommentList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
const useCommentList = (socialId, page, comment_ref_id)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "comments",
            socialId,
            page,
            comment_ref_id && comment_ref_id > 0 ? comment_ref_id : "no-ref"
        ],
        queryFn: {
            "useCommentList.useQuery": async ()=>{
                var _data_data, _data_data1;
                const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
                if (!token) throw new Error("Auth token not found");
                const requestBody = {
                    social_id: socialId,
                    include: "User",
                    page,
                    ...comment_ref_id ? {
                        comment_ref_id
                    } : {}
                };
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api"), "/comment/show-comment"), requestBody, {
                    headers: {
                        Authorization: "Bearer ".concat(token)
                    }
                });
                return {
                    comments: (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.Records) || [],
                    pagination: data === null || data === void 0 ? void 0 : (_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : _data_data1.pagination
                };
            }
        }["useCommentList.useQuery"],
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false
    });
};
_s(useCommentList, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/src/app/store/api/updateNotificationStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// services/notificationService.ts
__turbopack_context__.s([
    "updateNotificationStatus",
    ()=>updateNotificationStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/TIKTOK (2)/TIKTOK/reel-boost-website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
;
async function updateNotificationStatus(notification_ids, view_status) {
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$TIKTOK__$28$2$292f$TIKTOK$2f$reel$2d$boost$2d$website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "https://lakaw-social-api.onrender.com/api"), "/users/update-notification-list"), {
            notification_ids: notification_ids,
            view_status
        }, {
            headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "application/json"
            }
        });
        return res.data;
    } catch (err) {
        // console.error("Error updating notification status:", err);
        throw err;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_TIKTOK%20%282%29_TIKTOK_reel-boost-website_src_app_store_f020909b._.js.map