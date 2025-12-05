module.exports = [
"[project]/src/app/store/Slice/ModalsSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "hideModal",
    ()=>hideModal,
    "showModal",
    ()=>showModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const dialogSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/ActiveCommentBox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    activeCommentPostId: null,
    activeReelId: null,
    activeReelUserId: null
};
const commentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/PhoneEmailSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    phone: "",
    email: "",
    country_code: "",
    country_short_name: "",
    country: ""
};
const PhoneEmailSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/UserDataSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    user: null
};
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    user_id: null,
    hashtag_name: null,
    count: null,
    hashtag_version: 0
};
const userIdSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
            state.count = action.payload.count ?? null; // default to null if not provided
        },
        clearHashtagId: (state)=>{
            state.hashtag_name = null;
            state.count = null;
        }
    }
});
const { setUserId, clearUserId, setHashtag, clearHashtagId } = userIdSlice.actions;
const __TURBOPACK__default__export__ = userIdSlice.reducer;
}),
"[project]/src/app/store/Slice/FollowFollowingCount.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    followersCount: 0,
    followingCount: 0
};
const followFollowingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/fetchFollowReelsSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    refreshReels: false
};
const followSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/SelectedReelDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    reel: null,
    ReelId: 0
};
const selectedReelSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/commentSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    social_id: null,
    currentPage: 1,
    commentRefId: 0
};
const getCommentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/storeCommentsReplies.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    refId: null,
    replies: [],
    mainComments: [],
    replyingTo: null
};
const commentReplySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/handleCommentCount.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    commentAdded: false,
    ReelSharedId: null
};
const commentAddedSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/ChatListSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
// Define the initial state with an empty chatList
const initialState = [];
// Create a slice of the state
const ChatListSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/CurrentConversationSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const CurrentConversationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/MessageListSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
// Define the initial state with an empty MessageList
const initialState = [];
// Create a slice of the state
const MessageListSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const SendMessageSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/MessageOptionsSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const MessageOptionsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/OnlineUserSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = [];
const OnlineUserSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/SetReportTextIdSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSelectedReport",
    ()=>clearSelectedReport,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setSelectedReport",
    ()=>setSelectedReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    ReportUser: false,
    ReportConfirmation: false
};
const reportSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/UserReelsSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    reels: [],
    currentPage: 1,
    totalPages: 1,
    loading: false
};
const userReelsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/UserLikesSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    reels: [],
    pagination: null,
    loading: false
};
const userLikesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/MediaSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const mediaSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/HomePageReelsSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    reels: []
};
const reelsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/ViewAudioSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const ViewAudioSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/LiveSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
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
const liveSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/messageSeenStatusSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/Slice/SeenStatusSlice.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "updateMessageSeenStatus",
    ()=>updateMessageSeenStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    seenMessages: {}
};
const seenStatusSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/selectedGiftCategorySlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    selectedCategoryId: null,
    selectedGiftId: null,
    selectedGiftValue: 0,
    selectedGiftImage: null,
    quantity: 1,
    total: 0
};
const giftSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/TransactionPlanSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    plans: [],
    selectedPlanId: null,
    total_money: 0
};
const transactionPlansSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/UserGiftsSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    reels: [],
    pagination: null,
    loading: false
};
const userGiftsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/FollowersSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    followers: [],
    page: 1,
    hasMore: true,
    isLoading: false,
    isFetchingMore: false
};
const followersSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/FollowingSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    following: [],
    page: 1,
    totalPages: 1,
    hasMore: true,
    isLoading: false,
    isFetchingMore: false
};
const followingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/DateRangeSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearDateRange",
    ()=>clearDateRange,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setDateRange",
    ()=>setDateRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    startDate: null,
    endDate: null
};
const dateRangeSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/BankScreenSlice.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// bankScreenSlice.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setScreen",
    ()=>setScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    activeScreen: ""
};
const bankScreenSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/Slice/setChatIdMessageLoading.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    chat_id: null,
    messageLoading: false
};
const selectedChatSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
}),
"[project]/src/app/store/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ModalsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ActiveCommentBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$PhoneEmailSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/PhoneEmailSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserDataSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/UserDataSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$FollowFollowingCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/FollowFollowingCount.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$fetchFollowReelsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/fetchFollowReelsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SelectedReelDetail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$commentSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/commentSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$storeCommentsReplies$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/storeCommentsReplies.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/handleCommentCount.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ChatListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ChatListSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/CurrentConversationSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/MessageListSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/MessageOptionsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/OnlineUserSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SetReportTextIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SetReportTextIdSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserReelsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/UserReelsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserLikesSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/UserLikesSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MediaSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/MediaSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$HomePageReelsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/HomePageReelsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ViewAudioSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ViewAudioSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/LiveSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$messageSeenStatusSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/messageSeenStatusSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$selectedGiftCategorySlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/selectedGiftCategorySlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$TransactionPlanSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/TransactionPlanSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserGiftsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/UserGiftsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$FollowersSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/FollowersSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$FollowingSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/FollowingSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/DateRangeSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/BankScreenSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/setChatIdMessageLoading.tsx [app-ssr] (ecmascript)");
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
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        // Add reducers here
        modals: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        comment: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ActiveCommentBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$PhoneEmailSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        userData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserDataSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        followFollowingSlice: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$FollowFollowingCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        follow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$fetchFollowReelsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        selectedReel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        getComment: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$commentSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        comments: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$storeCommentsReplies$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        commentAdded: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        chatList: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ChatListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        CurrentConversation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        MessageList: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        SendMessageData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        MessageOptions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        OnlineUserList: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        ReportType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SetReportTextIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        userReels: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserReelsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        userLikes: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserLikesSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        media: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MediaSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        reels: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$HomePageReelsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        music: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ViewAudioSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        live: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        SeenStatus: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$messageSeenStatusSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        gift: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$selectedGiftCategorySlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        transactionPlans: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$TransactionPlanSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        userGifts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserGiftsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        followers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$FollowersSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        following: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$FollowingSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        dateRange: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$DateRangeSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        bankScreen: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        selectedChat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}),
"[project]/src/app/store/api/updateUser.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// services/userService.ts
__turbopack_context__.s([
    "fetchUserProfileDetails",
    ()=>fetchUserProfileDetails,
    "useUserProfile",
    ()=>useUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
;
const baseURL = ("TURBOPACK compile-time value", "http://localhost:4112/api");
const fetchUserProfileDetails = async (token)=>{
    const res = await fetch(`${baseURL}/users/updateUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "userProfile",
            token
        ],
        queryFn: ()=>fetchUserProfileDetails(token),
        enabled: !!token,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false
    });
};
}),
"[project]/src/app/store/api/getAvatars.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// api/avatar.ts
__turbopack_context__.s([
    "fetchAvatars",
    ()=>fetchAvatars,
    "useAvatars",
    ()=>useAvatars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
;
const baseURL = ("TURBOPACK compile-time value", "http://localhost:4112/api");
const fetchAvatars = async (token)=>{
    const res = await fetch(`${baseURL}/avatar/show-avatars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "avatars",
            token
        ],
        queryFn: ()=>fetchAvatars(token),
        enabled: !!token
    });
};
}),
"[project]/src/app/store/api/getReportTypes.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/api/useReportTypes.ts
__turbopack_context__.s([
    "useReportTypes",
    ()=>useReportTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
;
;
;
const useReportTypes = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "report-types"
        ],
        queryFn: async ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
            if (!token) throw new Error("Auth token not found");
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:4112/api")}/report/report-types`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return data;
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false
    });
};
}),
"[project]/src/app/store/api/getGiftCategories.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useGiftCategory.ts
__turbopack_context__.s([
    "useGiftCategories",
    ()=>useGiftCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
;
;
;
const fetchGiftCategories = async (page)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:4112/api")}/gift/get-gift-category`, {
        page
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return data;
};
const useGiftCategories = (page)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "giftCategories",
            page
        ],
        queryFn: ()=>fetchGiftCategories(page),
        // keepPreviousData: true, // prevents flicker when switching pages
        staleTime: 1000 * 60
    });
};
}),
"[project]/src/app/store/api/getGift.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useGifts.ts
__turbopack_context__.s([
    "useGifts",
    ()=>useGifts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
;
;
;
const fetchGifts = async ({ pageParam = 1, categoryId })=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:4112/api")}/gift/get-gift`, {
        page: pageParam,
        gift_category_id: categoryId
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return data;
};
const useGifts = (categoryId)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "gifts",
            categoryId
        ],
        //@ts-ignore
        queryFn: ({ pageParam })=>fetchGifts({
                pageParam,
                categoryId
            }),
        enabled: !!categoryId,
        initialPageParam: 1,
        getNextPageParam: (lastPage)=>{
            const { Pagination } = lastPage?.data || {};
            if (!Pagination) return undefined;
            if (Pagination.current_page < Pagination.total_pages) {
                return Pagination.current_page + 1;
            }
            return undefined;
        }
    });
};
}),
"[project]/src/app/store/api/getReceivedGifts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/hooks/useReceivedGifts.ts
__turbopack_context__.s([
    "useReceivedGifts",
    ()=>useReceivedGifts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
;
;
;
const fetchReceivedGifts = async ({ pageParam = 1, socialId, receiverId })=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:4112/api")}/transaction/history`, {
        page: pageParam,
        social_id: socialId,
        reciever_id: receiverId,
        transaction_table: "coin"
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return data;
};
const useReceivedGifts = (socialId, receiverId)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useInfiniteQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInfiniteQuery"])({
        queryKey: [
            "received-gifts",
            socialId,
            receiverId
        ],
        queryFn: ({ pageParam })=>//@ts-ignore
            fetchReceivedGifts({
                pageParam,
                socialId,
                receiverId
            }),
        enabled: !!socialId && !!receiverId,
        initialPageParam: 1,
        getNextPageParam: (lastPage)=>{
            const { Pagination } = lastPage.data;
            if (Pagination.current_page < Pagination.total_pages) {
                return Pagination.current_page + 1;
            }
            return undefined;
        }
    });
};
}),
"[project]/src/app/store/api/getCommentList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// store/api/getCommentList.ts
__turbopack_context__.s([
    "useCommentList",
    ()=>useCommentList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
;
;
;
const useCommentList = (socialId, page, comment_ref_id)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "comments",
            socialId,
            page,
            comment_ref_id && comment_ref_id > 0 ? comment_ref_id : "no-ref"
        ],
        queryFn: async ()=>{
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
            if (!token) throw new Error("Auth token not found");
            const requestBody = {
                social_id: socialId,
                include: "User",
                page,
                ...comment_ref_id ? {
                    comment_ref_id
                } : {}
            };
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:4112/api")}/comment/show-comment`, requestBody, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return {
                comments: data?.data?.Records || [],
                pagination: data?.data?.pagination
            };
        },
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: false
    });
};
}),
"[project]/src/app/store/api/updateNotificationStatus.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// services/notificationService.ts
__turbopack_context__.s([
    "updateNotificationStatus",
    ()=>updateNotificationStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
;
;
async function updateNotificationStatus(notification_ids, view_status) {
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://localhost:4112/api")}/users/update-notification-list`, {
            notification_ids: notification_ids,
            view_status
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return res.data;
    } catch (err) {
        // console.error("Error updating notification status:", err);
        throw err;
    }
}
}),
"[project]/src/app/socket/socket.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck
__turbopack_context__.s([
    "socketInstance",
    ()=>socketInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
;
;
let socket;
const socketInstance = ()=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    if (!socket) {
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
        socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(`${("TURBOPACK compile-time value", "http://localhost:4112/api")}`, {
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set("socketId", socket.id);
            }
        });
        socket.on("connect_error", (err)=>{
        // console.error("❌ Socket connection error:", err.message);
        });
    }
    return socket;
};
}),
"[project]/src/app/socket/ListenAllEvents.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListenAllEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/socket/socket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ChatListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ChatListSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/setChatIdMessageLoading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/MessageListSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/OnlineUserSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$messageSeenStatusSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/messageSeenStatusSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
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
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const page = 1;
    const pageSize = 1000;
    const currentChatId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.selectedChat.chat_id);
    const myUserId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unlockAudio = ()=>{
            const a = new Audio();
            a.play().catch(()=>{}); // unlock audio context silently
            document.removeEventListener("click", unlockAudio);
        };
        document.addEventListener("click", unlockAudio);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function newMessageCommingSound() {
            const audio = new Audio("/audio/achive-sound-132273.mp3");
            audio.muted = false;
            audio.play();
        }
        const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socketInstance"])();
        if (!socket) return;
        // Emit to get chat list on mount
        socket.emit("chat_list", {
            page,
            pageSize
        });
        const chatListHandler = (res)=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ChatListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateChatList"])(res.Chats));
        };
        socket.on("chat_list", chatListHandler);
        socket.on("message_list", (res)=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateMessageList"])(res.Records));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setMessageLoading"])(true));
        });
        // ✅ Handle new incoming message
        socket.on("recieve", (res)=>{
            if (Array.isArray(res.Records) && res.Records.length > 0) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateMessageList"])(res.Records));
                const latestMsg = res.Records[0];
                const myId = Number(myUserId);
                if (latestMsg?.sender_id !== myId) {
                    newMessageCommingSound();
                }
            }
        });
        socket.on("initial_online_user", (onlineUsers)=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setOnlineUsers"])(Array.isArray(onlineUsers) ? onlineUsers : []));
        });
        socket.on("online_user", (user)=>{
            if (user) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addOnlineUser"])(user));
        });
        socket.on("offline_user", (data)=>{
            if (data?.user_id) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$OnlineUserSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeOnlineUser"])(data.user_id));
            }
        });
        socket.on("typing", (data)=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateTypingState"])(data));
        });
        socket.on("message_seen_status", (data)=>{
            if (data?.message_id && data.message_seen_status === "seen") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$messageSeenStatusSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateMessageSeenStatus"])({
                    message_id: data.message_id,
                    message_seen_status: data.message_seen_status
                }));
            }
        });
        return ()=>{
            socket.off("chat_list", chatListHandler);
            socket.off("message_list");
            socket.off("recieve");
            socket.off("initial_online_user");
            socket.off("online_user");
            socket.off("offline_user");
            socket.off("typing");
            socket.off("message_seen_status");
        };
    }, [
        page,
        pageSize,
        dispatch
    ]);
    // Emit "message_list" whenever currentChatId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socketInstance"])();
        if (!socket) return;
        if (!currentChatId) {
            // no chat selected yet, don't emit
            return;
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$setChatIdMessageLoading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setMessageLoading"])(true));
        socket.emit("message_list", {
            chat_id: currentChatId,
            page,
            pageSize
        });
    }, [
        currentChatId,
        page,
        pageSize,
        dispatch
    ]);
    return null;
}
}),
"[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAppDispatch",
    ()=>useAppDispatch,
    "useAppSelector",
    ()=>useAppSelector,
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
;
const useAppDispatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"].withTypes();
const useAppSelector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"].withTypes();
const useAppStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"].withTypes();
}),
"[project]/src/app/utils/generateVideoThumbnail.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const generateVideoThumbnail = (videoFile, videoTimeInSeconds = 1, retries = 3)=>{
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
}),
"[project]/src/app/QueryProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/QueryProvider.tsx
__turbopack_context__.s([
    "default",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function QueryProvider({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]());
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/QueryProvider.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/StoreProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-oauth/google/dist/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$ListenAllEvents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/socket/ListenAllEvents.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$QueryProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/QueryProvider.tsx [app-ssr] (ecmascript)"); // import your QueryClientProvider wrapper
"use client";
;
;
;
;
;
;
function StoreProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleOAuthProvider"], {
        clientId: ("TURBOPACK compile-time value", "Google Sign-In Client ID"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$QueryProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$ListenAllEvents$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/StoreProvider.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/StoreProvider.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/StoreProvider.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/StoreProvider.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/hooks/postData.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const useApiPost = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const postData = async (url, bodyData, contentType = "application/json")=>{
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
        try {
            setLoading(true);
            setError(null);
            const headers = {
                "Content-Type": contentType,
                ...token && {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(("TURBOPACK compile-time value", "http://localhost:4112/api") + url, bodyData, {
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
            const contentTypeError = err?.response?.headers?.["content-type"] || "";
            // ✅ Redirect if not JSON
            if (!contentTypeError.includes("application/json")) {
                router.replace("/not-found");
                return;
            }
            // ✅ Redirect on Unauthorized (401)
            if (err?.response?.status === 401) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].remove("Reelboost_auth_token");
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
const __TURBOPACK__default__export__ = useApiPost;
}),
"[project]/src/app/hooks/useFFmpegVideo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//@ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>useFFmpegVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ffmpeg/util/dist/esm/index.js [app-ssr] (ecmascript)");
"use client";
;
;
function useFFmpegVideo() {
    const [ffmpeg, setFfmpeg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return; // ✅ Prevents running on server
        //TURBOPACK unreachable
        ;
    }, []);
    const processVideo = async ({ videoFile, start, end, mute, musicUrl })=>{
        if (!ready || !ffmpeg || !videoFile) return null;
        await ffmpeg.writeFile("input.mp4", await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ffmpeg$2f$util$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchFile"])(videoFile));
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
}),
"[project]/src/app/hooks/usePeerId.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>usePeerId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peerjs$2f$dist$2f$bundler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/peerjs/dist/bundler.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function usePeerId() {
    const [peerId, setPeerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if we already have a peer_id in cookies
        const existingPeerId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("peer_id");
        if (existingPeerId) {
            setPeerId(existingPeerId);
            return;
        }
        // Generate a new peer_id
        const peer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$peerjs$2f$dist$2f$bundler$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
        peer.on("open", (id)=>{
            // Save in state + cookie
            setPeerId(id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set("peer_id", id, {
                secure: true,
                sameSite: "Strict",
                expires: 30
            });
        });
        peer.on("error", (err)=>{});
        // Cleanup on unmount
        return ()=>{
            peer.destroy();
        };
    }, []);
    return peerId;
}
}),
"[project]/src/app/message/Location/NearbyPlaces.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NearbyPlaces
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
;
function NearbyPlaces({ nearbyPlaces }) {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const handleSelectPlace = (place)=>{
        if (!place.geometry || !place.geometry.location) return;
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
            latitude: lat,
            longitude: lng,
            message: place.formatted_address || place.name,
            message_type: "location"
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: nearbyPlaces.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "my-3 px-5 text-sm font-medium",
                    children: "Nearby Places"
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-96 flex-col gap-y-3 overflow-scroll pb-24",
                    children: nearbyPlaces.map((place)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex cursor-pointer gap-2 px-5",
                                    onClick: ()=>handleSelectPlace(place),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "h-5 w-5",
                                            src: place?.icon || "",
                                            alt: "",
                                            width: 10,
                                            height: 10
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                                            lineNumber: 41,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: [
                                                place.name,
                                                place.vicinity !== place.name && `, ${place.vicinity}`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                                            lineNumber: 42,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                    className: "border-t border-borderColor"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, place.place_id, true, {
                            fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid h-96 place-content-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    className: "mx-auto h-16 w-16",
                    src: "/home/Empty.png",
                    alt: "",
                    width: 100,
                    height: 100
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "No nearby places found"
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/message/Location/NearbyPlaces.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
}),
"[project]/src/app/message/Location/ShowMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$google$2d$map$2d$react$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/google-map-react/dist/index.modern.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
const Marker = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/chat/filled_location.png",
            width: 100,
            height: 100,
            alt: "Marker",
            className: "h-10 w-10 object-contain"
        }, void 0, false, {
            fileName: "[project]/src/app/message/Location/ShowMap.tsx",
            lineNumber: 75,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/message/Location/ShowMap.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function ShowMap() {
    const sendMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.SendMessageData);
    const lat = Number(sendMessageData.latitude) || 28.6139; // fallback to Delhi
    const lng = Number(sendMessageData.longitude) || 77.209;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-96 w-full ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$google$2d$map$2d$react$2f$dist$2f$index$2e$modern$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                lat: lat,
                lng: lng
            }, void 0, false, {
                fileName: "[project]/src/app/message/Location/ShowMap.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/message/Location/ShowMap.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/message/Location/ShowMap.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/message/Location/GetUserLocation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GetUserLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)");
;
;
;
;
function GetUserLocation() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position)=>{
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                    latitude: lat,
                    longitude: lng,
                    message_type: "location"
                }));
            }, (error)=>{
                setError("Location access denied. Enable GPS and refresh.");
            });
        } else {
            setError("Geolocation is not supported by your browser.");
        }
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/message/Location/GetUserLocation.tsx",
            lineNumber: 33,
            columnNumber: 22
        }, this)
    }, void 0, false);
}
}),
"[project]/src/app/message/Location/ShareLocation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/socket/socket.ts [app-ssr] (ecmascript)");
// import scrollToMessage from "../../../utils/scrollToMessage";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/CurrentConversationSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/MessageListSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/MessageOptionsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function ShareLocation() {
    const sendMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.SendMessageData);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const currentConversationData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.CurrentConversation);
    async function shareLocationApiCall() {
        // Show instantly in UI
        // dispatch(prependMessageList([tempMessage]));
        const messageFormData = new FormData();
        if (currentConversationData.chat_id !== -1 && currentConversationData.chat_id !== 0) {
            messageFormData.append("chat_id", String(currentConversationData.chat_id));
        } else {
            messageFormData.append("user_id", String(currentConversationData.PeerUserData?.user_id));
            messageFormData.append("chat_type", "private");
        }
        messageFormData.append("message_type", String(sendMessageData.message_type || "location"));
        messageFormData.set("message_content", `${sendMessageData.latitude},${sendMessageData.longitude}`);
        try {
            const sendMessageRes = await postData("/chat/send-message", messageFormData, "multipart/form-data");
            if (sendMessageRes) {
                if (currentConversationData.chat_id === 0 || currentConversationData.chat_id === -1) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCurrentConversation"])({
                        chat_id: sendMessageRes.chat_id
                    }));
                }
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendMessageWithDateCheck"])(sendMessageRes));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateMessageOptions"])({
                    show_send_location_modal: false
                }));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                    message: "",
                    message_type: "",
                    reply_id: 0
                }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socketInstance"])().emit("chat_list", {});
            }
        } catch (err) {
        // Optional: remove temp message or mark as failed
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[97%]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute -bottom-3 left-2 w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-14 items-center justify-between rounded-lg border border-[#FCC604] bg-[#FFF8E0] px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "h-7 w-7 object-contain",
                                src: "/chat/border_location.png",
                                alt: "",
                                width: 25,
                                height: 25
                            }, void 0, false, {
                                fileName: "[project]/src/app/message/Location/ShareLocation.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-dark",
                                children: sendMessageData.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/message/Location/ShareLocation.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/message/Location/ShareLocation.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: shareLocationApiCall,
                            className: "!h-9 text-dark w-fit text-nowrap rounded-xl !px-4 !text-sm",
                            children: "Share location"
                        }, void 0, false, {
                            fileName: "[project]/src/app/message/Location/ShareLocation.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/message/Location/ShareLocation.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/message/Location/ShareLocation.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/message/Location/ShareLocation.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/message/Location/ShareLocation.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/message/Location/SearchLocationDropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// @ts-nocheck
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-google-maps/api/dist/esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$NearbyPlaces$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/message/Location/NearbyPlaces.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$ShowMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/message/Location/ShowMap.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$GetUserLocation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/message/Location/GetUserLocation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$ShareLocation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/message/Location/ShareLocation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
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
const libraries = [
    "places"
];
const SearchLocationDropdown = ({})=>{
    const { isLoaded, loadError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLoadScript"])({
        googleMapsApiKey: ("TURBOPACK compile-time value", "Google Map API Key") || "",
        libraries
    });
    const sendMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.SendMessageData);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(sendMessageData.message || "");
    const [nearbyPlaces, setNearbyPlaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const autocompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isLoaded && sendMessageData.latitude && sendMessageData.longitude) {
            fetchNearbyPlaces();
        }
    }, [
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
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
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
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Error loading maps"
        }, void 0, false, {
            fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
            lineNumber: 116,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return isLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-full w-full flex-col gap-y-3 bg-primary min-w-[450px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-5 z-10 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$google$2d$maps$2f$api$2f$dist$2f$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Autocomplete"], {
                    className: "mx-auto w-[90%]",
                    onLoad: (autocomplete)=>{
                        autocompleteRef.current = autocomplete;
                    },
                    onPlaceChanged: onPlaceChanged,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-2 top-3.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/home/Location.png",
                                    alt: "location",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: inputValue,
                                onChange: handleInputChange,
                                className: "h-12 w-full rounded-lg bg-primary px-4 py-2 pl-8 text-sm text-darkText shadow-xl outline-none transition-all duration-300 focus:border-[#B5843F]",
                                type: "text",
                                placeholder: "Add Location"
                            }, void 0, false, {
                                fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$ShowMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$ShareLocation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$NearbyPlaces$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                nearbyPlaces: nearbyPlaces
            }, void 0, false, {
                fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$GetUserLocation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/message/Location/SearchLocationDropdown.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SearchLocationDropdown;
}),
"[project]/src/app/message/Location/SendLocationModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SendLocationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/MessageOptionsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$SearchLocationDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/message/Location/SearchLocationDropdown.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function SendLocationModal() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const MessageOptionsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.MessageOptions);
    const close = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageOptionsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateMessageOptions"])({
            show_send_location_modal: false
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: MessageOptionsData.show_send_location_modal,
        className: "relative z-10",
        onClose: close,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " z-10 flex min-h-full items-center justify-center p-4 backdrop-blur-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "data-[closed]:transform-[scale(95%)] max-h-[80vh] w-full max-w-lg rounded-xl bg-modalBg overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out data-[closed]:opacity-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Location$2f$SearchLocationDropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/message/Location/SendLocationModal.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/message/Location/SendLocationModal.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/message/Location/SendLocationModal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/message/Location/SendLocationModal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/message/Gif/GiphyComponent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GiphyComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/node_modules/react-spinners/esm/ClipLoader.js [app-ssr] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/MessageListSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/socket/socket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/CurrentConversationSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/api/updateUser.tsx [app-ssr] (ecmascript)");
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
const GIPHY_API_KEY = ("TURBOPACK compile-time value", "Giphy API Key");
function GiphyComponent() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const SendMessageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.SendMessageData);
    const sendMessageDataRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(SendMessageData);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [gifs, setGifs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedGif, setSelectedGif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const myUserId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
    const currentConversationData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.CurrentConversation);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data: userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserProfile"])(token ?? "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        sendMessageDataRef.current = SendMessageData;
    }, [
        SendMessageData
    ]);
    // Fetch GIFs
    const fetchGifs = async (endpoint)=>{
        setLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(endpoint);
            setGifs(res.data.data);
        } catch  {}
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchGifs(`https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&limit=18`);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchTerm.trim()) {
            fetchGifs(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${GIPHY_API_KEY}&limit=18`);
        }
    }, [
        searchTerm
    ]);
    const sendSelectedGif = async ()=>{
        if (!selectedGif) return;
        try {
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
                    profile_pic: userData?.data?.profile_pic || "",
                    user_name: userData?.data?.user_name || ""
                }
            };
            // dispatch(prependMessageList([tempMessage]));
            const formData = new FormData();
            formData.append("message_type", "gif");
            const userId = currentConversationData?.PeerUserData?.user_id;
            if (userId) {
                formData.append("user_id", String(userId));
            }
            formData.append("files", file);
            formData.append("message_content", "");
            const sendMessageRes = await postData("/chat/send-message", formData, "multipart/form-data");
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                showGifPicker: false
            }));
            if (sendMessageRes) {
                if (currentConversationData.chat_id === 0 || currentConversationData.chat_id === -1) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$CurrentConversationSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCurrentConversation"])({
                        chat_id: sendMessageRes.chat_id
                    }));
                }
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$MessageListSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendMessageWithDateCheck"])(sendMessageRes));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
                    message: "",
                    message_type: "",
                    reply_id: 0
                }));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socketInstance"])().emit("chat_list", {});
            }
            setSelectedGif(null);
        } catch (error) {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `z-10 w-full max-w-xl bg-pr transition duration-500`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                textAlign: "center",
                padding: "20px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Send GIFs"
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-6 mt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoSearchOutline"], {
                            className: "absolute left-3 top-2 text-2xl text-lightText"
                        }, void 0, false, {
                            fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: `bg-[#F2F2F2] w-full rounded-xl border border-borderColor py-2 pl-11 placeholder-lightText outline-none`,
                            type: "text",
                            placeholder: "Search Gif"
                        }, void 0, false, {
                            fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: "red"
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 161,
                    columnNumber: 19
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid h-96 place-content-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                        size: 19,
                        color: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid max-h-[30rem] min-h-96 grid-cols-3 gap-3 overflow-auto",
                    children: gifs.map((gif)=>{
                        const isSelected = selectedGif?.id === gif.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative cursor-pointer",
                            onClick: ()=>setSelectedGif(isSelected ? null : gif),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: gif.images.fixed_height.url,
                                    alt: gif.title,
                                    className: "h-full w-full rounded-lg object-cover",
                                    width: 150,
                                    height: 150
                                }, void 0, false, {
                                    fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                                    lineNumber: 177,
                                    columnNumber: 19
                                }, this),
                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-dark/40 flex items-center justify-center rounded-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                        className: "text-primary text-3xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                                        lineNumber: 186,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                                    lineNumber: 185,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, gif.id, true, {
                            fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                            lineNumber: 172,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: sendSelectedGif,
                        disabled: !selectedGif,
                        className: `mt-4 flex items-center justify-center gap-2 px-24 py-2 rounded-xl text-primary ${selectedGif ? "bg-main-green" : "bg-gray-400 cursor-not-allowed"}`,
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/message/Gif/GiphyComponent.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/message/Gif/GiphyComponentModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GiphyComponentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-ssr] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Gif$2f$GiphyComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/message/Gif/GiphyComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SendMessageSlice.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
function GiphyComponentModal() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const close = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SendMessageSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateSendMessageData"])({
            showGifPicker: false
        }));
    };
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.SendMessageData.showGifPicker) ?? false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$message$2f$Gif$2f$GiphyComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/message/Gif/GiphyComponentModal.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/message/Gif/GiphyComponentModal.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/message/Gif/GiphyComponentModal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/setting/DeleteAccountPopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ModalsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CustomDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/CustomDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function DeleteAccountPopup() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.modals.DeleteAccount);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleDeleteAccount = async ()=>{
        try {
            const res = await postData("/users/updateUser", {
                delete: true
            });
            if (res.status) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideModal"])("DeleteAccount"));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Account Deleted Successfully");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].remove("Reelboost_auth_token");
                window.location.replace("/");
                router.push('/');
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Error deleting Account");
            }
        } catch (error) {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CustomDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideModal"])("DeleteAccount")),
        width: "420px",
        title: "Delete Account",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray text-center text-sm max-w-xs mx-auto",
                    children: "Are you sure you want to Delete"
                }, void 0, false, {
                    fileName: "[project]/src/app/setting/DeleteAccountPopup.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray text-sm",
                    children: "your Account?"
                }, void 0, false, {
                    fileName: "[project]/src/app/setting/DeleteAccountPopup.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-6 mt-10 justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-10 py-2 rounded-xl text-sm border cursor-pointer border-main-green ",
                            onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideModal"])("DeleteAccount")),
                            children: [
                                " ",
                                "Cancel"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/setting/DeleteAccountPopup.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-12 py-2 text-primary cursor-pointer font-medium text-sm rounded-xl bg-main-green",
                            onClick: ()=>handleDeleteAccount(),
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/DeleteAccountPopup.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/setting/DeleteAccountPopup.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/setting/DeleteAccountPopup.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/setting/DeleteAccountPopup.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = DeleteAccountPopup;
}),
"[project]/src/app/setting/bank-details/EditBankDetails.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/BankScreenSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/api/updateUser.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function EditBankDetails() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserProfile"])(token ?? "");
    const userData = data?.data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                boxShadow: "2px 4px 14.4px 0px #0000000F"
            },
            className: "bg-primary rounded-lg p-3 my-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between place-items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 place-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-main-green rounded-lg p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/gift/EditBank.png",
                                    alt: "edit",
                                    width: 30,
                                    height: 30
                                }, void 0, false, {
                                    fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm text-dark",
                                        children: userData?.bank_name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-dark text-xs",
                                        children: userData?.account_number.replace(/.(?=.{4})/g, "*")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setScreen"])("add")),
                        className: "cursor-pointer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/gift/EditButton.png",
                            alt: "edit",
                            width: 20,
                            height: 20
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/setting/bank-details/EditBankDetails.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = EditBankDetails;
}),
"[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CustomDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/CustomDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ModalsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SignupField.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/api/updateUser.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$EditBankDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/setting/bank-details/EditBankDetails.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/BankScreenSlice.tsx [app-ssr] (ecmascript)");
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
function SelectPaymentGatewayForWithdraw() {
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.modals.PaymentGatewayForWithdraw);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserProfile"])(token ?? "");
    const userBankDetails = data?.data;
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [coins, setCoins] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const currentScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.bankScreen.activeScreen);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        account_name: "",
        account_number: "",
        swift_code: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userBankDetails) {
            setFormData({
                account_name: userBankDetails.account_name || "",
                account_number: userBankDetails.account_number || "",
                swift_code: userBankDetails.swift_code || ""
            });
        }
    }, [
        userBankDetails
    ]);
    // Submit handler (no mutation, just API call)
    const handleSubmit = async ()=>{
        try {
            const res = await postData("/users/updateUser", {
                token,
                ...formData
            });
            if (res?.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(res.message);
                refetch();
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setScreen"])("edit")); // ✅ move here
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(res?.message);
            }
        } catch (error) {}
    };
    // Handle input change
    const handleChange = (key, value)=>{
        setFormData((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    const handleWithdraw = async ()=>{
        const coinValue = Number(coins);
        if (!coinValue || coinValue < 10) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Minimum withdrawal amount is 10 coins");
            return;
        }
        if (!selected) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please select a payment method");
            return;
        }
        if ((selected === "paypal" || selected === "stripe") && !email) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please enter your email address");
            return;
        }
        try {
            const res = await postData("/transaction/withdraw", {
                coins: coinValue,
                payment_method: selected,
                transaction_email: selected === "bank" ? "" : email
            });
            if (res.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(res.message);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideModal"])("PaymentGatewayForWithdraw")); // ✅ Close dialog
                setEmail("");
                setCoins("");
                setSelected(null);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(res.message);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Enter all the details");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$CustomDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        open: open,
        onClose: ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideModal"])("PaymentGatewayForWithdraw"));
            setEmail("");
            setCoins("");
            setSelected("");
        },
        width: "420px",
        title: "Withdraw",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-5 p-5 overflow-y-auto sm:overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-dark text-[13px]",
                            children: [
                                "Enter Coin",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red",
                                    children: "*"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                    lineNumber: 130,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            iconSrc: "/profile/coin.png",
                            placeholder: "Enter Withdraw Coin",
                            type: "text",
                            value: coins,
                            onChange: (e)=>setCoins(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        coins && Number(coins) < 10 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red text-xs",
                            children: "Minimum Withdrawal Amount is 10"
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-base text-dark font-semibold",
                            children: "Select Payment Gateway"
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-main-green/40 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "w-full flex items-center justify-between p-3",
                                    onClick: ()=>setSelected(selected === "paypal" ? null : "paypal"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/gift/PaypalLogo.png",
                                                    alt: "paypal",
                                                    width: 24,
                                                    height: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-dark font-medium",
                                                    children: "Paypal"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/gift/DownArrow.png",
                                            alt: "",
                                            width: 10,
                                            height: 10,
                                            className: `${selected === "paypal" ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                selected === "paypal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pb-5 pt-2 flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-dark pb-2 font-semibold",
                                            children: [
                                                "Paypal Email Address",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Enter Your Paypal Email Address",
                                            className: "border px-3 py-3 text-xs rounded-xl border-gray placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-main-green",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-main-green/40 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "w-full flex items-center justify-between p-3",
                                    onClick: ()=>setSelected(selected === "stripe" ? null : "stripe"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/gift/StripeLogo.png",
                                                    alt: "stripe",
                                                    width: 32,
                                                    height: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-dark font-medium",
                                                    children: "Stripe"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/gift/DownArrow.png",
                                            alt: "",
                                            width: 10,
                                            height: 10,
                                            className: `${selected === "stripe" ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                selected === "stripe" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pb-5 pt-2 flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-dark pb-2 font-semibold",
                                            children: [
                                                "Stripe Email Address",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Enter Your Stripe Email Address",
                                            className: "border px-3 py-3 text-xs rounded-xl border-gray placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-main-green",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-main-green/40 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "w-full flex items-center justify-between p-3",
                                    onClick: ()=>setSelected(selected === "bank" ? null : "bank"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/gift/BankTransfer.png",
                                                    alt: "bank",
                                                    width: 21,
                                                    height: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-dark font-medium",
                                                    children: "Bank Transfer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/gift/DownArrow.png",
                                            alt: "",
                                            width: 10,
                                            height: 10,
                                            className: `${selected === "bank" ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this),
                                selected === "bank" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: userBankDetails?.IFSC_code === "" || userBankDetails?.account_name === "" || userBankDetails?.account_number === "" || userBankDetails?.bank_name === "" || userBankDetails?.swift_code === "" || currentScreen === "add" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 pb-5 flex flex-col gap-2 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-dark font-semibold",
                                                                children: [
                                                                    "Account Holder’s Name",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Enter Your Account Holder's Name",
                                                                className: "border px-3 py-3 w-full text-xs rounded-xl border-gray placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-main-green",
                                                                value: formData.account_name,
                                                                onChange: (e)=>handleChange("account_name", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-dark font-semibold",
                                                                children: [
                                                                    "Account Number",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                        lineNumber: 295,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Enter Your Account Number",
                                                                className: "border px-3 py-3 text-xs rounded-xl border-gray placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-main-green",
                                                                value: formData.account_number,
                                                                onChange: (e)=>handleChange("account_number", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-dark font-semibold",
                                                                children: [
                                                                    "SWIFT/BIC Code",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Enter Your SWIFT/BIC Code",
                                                                className: "border px-3 py-3 text-xs rounded-xl border-gray placeholder:text-xs focus:outline-none focus:ring-1 focus:ring-main-green",
                                                                value: formData.swift_code,
                                                                onChange: (e)=>handleChange("swift_code", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                lineNumber: 276,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center pb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-main-green text-xs text-primary w-3/10 p-1 rounded-xl cursor-pointer",
                                                    onClick: ()=>{
                                                        handleSubmit();
                                                        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setScreen"])("edit"));
                                                    },
                                                    children: "Save"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                lineNumber: 326,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 cursor-pointer",
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$BankScreenSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setScreen"])("add"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$bank$2d$details$2f$EditBankDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                                lineNumber: 344,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                                            lineNumber: 340,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false)
                                }, void 0, false)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-3/4 mt-4 mx-auto bg-main-green text-primary rounded-xl py-2 font-medium",
                    onClick: handleWithdraw,
                    children: "Withdraw"
                }, void 0, false, {
                    fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/setting/wallet/SelectPaymentGatewayForWithdraw.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = SelectPaymentGatewayForWithdraw;
}),
"[project]/src/app/setting/SidebarOptionsButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SidebarOptionsButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function SidebarOptionsButton({ iconSrc, label, onClickFunc, isActive, customClass = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClickFunc,
            className: `flex justify-between items-center border-b cursor-pointer py-4 px-10 border-main-green/[0.18] ${isActive ? "text-main-green" : "text-dark"} ${customClass}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: iconSrc,
                            alt: label,
                            height: 20,
                            width: 20
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/SidebarOptionsButton.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/SidebarOptionsButton.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/setting/SidebarOptionsButton.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowBack"], {
                    className: `rotate-180 ${isActive ? "text-main-green" : "text-dark"}`
                }, void 0, false, {
                    fileName: "[project]/src/app/setting/SidebarOptionsButton.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/setting/SidebarOptionsButton.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/src/app/setting/SettingSidebarOptions.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ModalsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/setting/SidebarOptionsButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function SettingSidebarOptions({ onSelect }) {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleNavigate = (path, action)=>{
        if (action) {
            action();
        } else {
            if (onSelect) {
                onSelect(path); // 🔑 for mobile / desktop
            } else {
                router.push(path); // fallback
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col overflow-y-auto sm:overflow-hidden bg-primary mb-28 sm:mb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting" ? "/Setting/SavedBookmark.png" : "/Setting/B_Bookmark.png",
                label: "Saved Bookmark",
                isActive: pathname === "/setting",
                onClickFunc: ()=>handleNavigate("/setting")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting/blocked-list" ? "/Setting/BlockedList.png" : "/Setting/B_BlockedList.png",
                label: "Blocked List",
                isActive: pathname === "/setting/blocked-list",
                onClickFunc: ()=>handleNavigate("/setting/blocked-list")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting/bank-details" ? "/Setting/bankDetails.png" : "/Setting/B_bankDetails.png",
                label: "Bank Details",
                isActive: pathname === "/setting/bank-details",
                onClickFunc: ()=>handleNavigate("/setting/bank-details")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting/recharge" ? "/Setting/Recharge.png" : "/Setting/B_Recharge.png",
                label: "Recharge",
                isActive: pathname === "/setting/recharge",
                onClickFunc: ()=>handleNavigate("/setting/recharge")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting/wallet" ? "/Setting/Wallet.png" : "/Setting/B_Wallet.png",
                label: "Wallet",
                isActive: pathname === "/setting/wallet",
                onClickFunc: ()=>handleNavigate("/setting/wallet")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting/payment-history" ? "/Setting/PaymentHistory.png" : "/Setting/B_PaymentHistory.png",
                label: "Payment History",
                isActive: pathname === "/setting/payment-history",
                onClickFunc: ()=>handleNavigate("/setting/payment-history")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting/coin-history" ? "/Setting/CoinHistory.png" : "/Setting/B_CoinHistory.png",
                label: "Coin History",
                isActive: pathname === "/setting/coin-history",
                onClickFunc: ()=>handleNavigate("/setting/coin-history")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting/privacy-policy" ? "/Setting/PrivacyPolicy.png" : "/Setting/B_PrivacyPolicy.png",
                label: "Privacy Policy",
                isActive: pathname === "/setting/privacy-policy",
                onClickFunc: ()=>handleNavigate("/setting/privacy-policy")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: pathname === "/setting/terms&conditions" ? "/Setting/TermsConditions.png" : "/Setting/B_TermsConditions.png",
                label: "Terms & Conditions",
                isActive: pathname === "/setting/terms&conditions",
                onClickFunc: ()=>handleNavigate("/setting/terms&conditions")
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SidebarOptionsButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                iconSrc: "/SidebarIcons/logout.png",
                label: "Logout",
                isActive: pathname === "Logout",
                customClass: "text-red font-medium",
                onClickFunc: ()=>handleNavigate("Logout", ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showModal"])("Logout")))
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center sm:mx-12 mx-20 absolute sm:bottom-2 -bottom-44",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "border cursor-pointer border-main-green bg-main-green text-sm rounded-xl w-52 py-2.5",
                    onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showModal"])("DeleteAccount")),
                    children: "Delete Account"
                }, void 0, false, {
                    fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/setting/SettingSidebarOptions.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = SettingSidebarOptions;
}),
"[project]/src/app/setting/SettingSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/api/updateUser.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SettingSidebarOptions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/setting/SettingSidebarOptions.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function SettingSidebar({ onBack, onSelect }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { data: userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserProfile"])(token ?? "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            x: 300,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: 300,
            opacity: 0
        },
        transition: {
            duration: 0.3
        },
        className: "flex sm:overflow-y-hidden sticky top-0 h-screen no-scrollbar sm:w-[350px] sm:pt-[60px] flex-col",
        style: {
            boxShadow: "2px 2px 4.3px 0px #00000008"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full sm:h-16 flex items-center px-4 border-b",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "text-dark font-semibold text-lg cursor-pointer flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoChevronBackOutline"], {
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-24 rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: userData?.data.profile_pic || "",
                                width: 128,
                                height: 128,
                                alt: "profile",
                                className: "object-cover w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 font-semibold text-lg text-dark-gray cursor-pointer",
                            onClick: ()=>router.push("/profile"),
                            children: userData?.data.user_name
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray",
                            children: userData?.data.email
                        }, void 0, false, {
                            fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SettingSidebarOptions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onSelect: onSelect
                    }, void 0, false, {
                        fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/setting/SettingSidebar.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/setting/SettingSidebar.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, "settings", false, {
        fileName: "[project]/src/app/setting/SettingSidebar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/live/LiveLikeComment.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/socket/socket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/LiveSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/api/updateUser.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ModalsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
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
function LiveLikeComment() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { liveEvents, commentDraft, user_id, socket_room_id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.live);
    const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socketInstance"])();
    const [hearts, setHearts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const commentsEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    const { selectedGiftId, quantity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.gift);
    const { data: userData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$api$2f$updateUser$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUserProfile"])(token ?? "");
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // 📌 Listen for activity_on_live updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        socket.on("activity_on_live", (data)=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addLiveEvent"])(data));
            if (data.like) {
                setHearts((prev)=>[
                        ...prev,
                        Date.now()
                    ]);
            }
        });
        return ()=>{
            socket.off("activity_on_live");
        };
    }, [
        socket,
        dispatch
    ]);
    // 📌 Auto scroll to bottom (newest comment visible)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        commentsEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
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
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCommentDraft"])());
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
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showModal"])("SendGift"));
        try {
            const res = await postData("/transaction/send-gift", {
                reciever_id: user_id,
                gift_id: selectedGiftId,
                transaction_ref: "live",
                quatity: quantity
            });
            if (res.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(res.message);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(res.message);
            }
        } catch (error) {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[500px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-10 bottom-20 pointer-events-none",
                children: hearts.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 p-2 overflow-y-auto max-h-[250px]",
                children: [
                    comments.map((event, i)=>{
                        const faded = comments.length > 5 && i < 2; // fade first 2 only if total > 5
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-2 ${faded ? "" : "opacity-100"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: event.profile_pic,
                                    alt: event.user_name,
                                    width: 28,
                                    height: 28,
                                    className: "rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col text-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,3)]",
                                            children: event.user_name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,3)]",
                                            children: event.comment_cotent
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                                            lineNumber: 161,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: commentsEndRef
                    }, void 0, false, {
                        fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 rounded-b-lg rounded-t-3xl p-2",
                style: {
                    backdropFilter: "blur(18px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: userData?.data.profile_pic || "",
                        alt: "",
                        width: 25,
                        height: 25,
                        className: "w-8 h-8 object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary/[0.4] w-full flex place-items-center rounded-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: commentDraft,
                                onChange: (e)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCommentDraft"])(e.target.value)),
                                onKeyDown: handleKeyDown,
                                placeholder: "Add a comment...",
                                className: "flex-1 text-primary text-sm p-2.5 outline-none rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-primary w-8 h-8 flex justify-center place-items-center rounded-full text-lg hover:scale-110 absolute right-2 transition",
                                style: {
                                    background: "linear-gradient(141.72deg, #239C57 -1.01%, #019FC8 103.86%)"
                                },
                                onClick: handleSendComment,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/chat/send.png",
                                    alt: "send",
                                    width: 60,
                                    height: 60,
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-primary text-2xl transition cursor-pointer",
                        onClick: ()=>handleGiftSend(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/home/gift.png",
                            alt: "heart",
                            width: 100,
                            height: 100,
                            className: "w-8 h-7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-primary text-2xl transition",
                        onClick: handleSendLike,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/ReelBoost/borderHeart.png",
                            alt: "heart",
                            width: 100,
                            height: 100,
                            className: "w-8 h-6.5"
                        }, void 0, false, {
                            fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/live/LiveLikeComment.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/live/LiveLikeComment.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LiveLikeComment;
}),
"[project]/src/app/live/OpenLiveVideo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// OpenLiveVideo.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/LiveSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/ModalsSlice.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/VideoPlayer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$live$2f$LiveLikeComment$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/live/LiveLikeComment.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/socket/socket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$usePeerId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/usePeerId.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
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
function OpenLiveVideo() {
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.modals.LivePopup);
    const selectedLive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.live.selectedLive);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const socket_room_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.live.socket_room_id);
    const user_id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.live.user_id);
    const liveUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.live.joinLiveResponse);
    const activeResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.live.liveEvents);
    const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$socket$2f$socket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["socketInstance"])();
    const peerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$usePeerId$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const MyUserId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_user_id");
    //  useEffect(() => {
    //     socket.on("activity_on_live");
    //     return () => {
    //       socket.off("activity_on_live");
    //     };
    //   }, [selectedLive, socket_room_id, dispatch]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open || !selectedLive || !socket_room_id) return;
        // join live event
        socket.emit("join_live", {
            socket_room_id: socket_room_id,
            user_id: MyUserId,
            peer_id: peerId
        });
        socket.on("join_live", (data)=>{
            // update Redux with confirmed response
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setJoinLiveResponse"])(data));
        });
    }, [
        open,
        selectedLive,
        socket_room_id,
        user_id,
        socket
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideModal"])("LivePopup"));
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSelectedLive"])());
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearLiveEvents"])());
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[700px] bg-dark sm:block hidden relative rounded-lg",
                children: [
                    selectedLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$VideoPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: selectedLive.Live_hosts[0].peer_id,
                        autoPlay: true,
                        height: "h-[700px]"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary p-4",
                        children: "No live selected"
                    }, void 0, false, {
                        fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 flex justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 flex gap-3 place-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowBack"], {
                                        className: "text-primary text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,3)]",
                                        onClick: ()=>{
                                            dispatch(dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hideModal"])("LivePopup")));
                                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$LiveSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearLiveEvents"])());
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 place-items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-full",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: liveUser?.peer_id[0].User.profile_pic || "",
                                                    alt: "",
                                                    width: 50,
                                                    height: 50,
                                                    className: "w-8 h-8 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-primary inline-block drop-shadow-[0_1px_2px_rgba(0,0,0,3)]",
                                                children: liveUser?.peer_id[0].User.user_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 rounded-l-md py-1 px-2 absolute top-2 right-0 bg-dark/70 z-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/SidebarIcons/heart.png",
                                                alt: "heart",
                                                width: 12,
                                                height: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-primary text-[10px]",
                                                children: activeResponse && activeResponse.length > 0 && activeResponse[activeResponse.length - 1].like ? activeResponse[activeResponse.length - 1].current_like : liveUser?.likes
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineEye"], {
                                                className: "w-4 h-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-primary text-[10px]",
                                                children: liveUser?.total_viewers
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$live$2f$LiveLikeComment$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/live/OpenLiveVideo.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = OpenLiveVideo;
}),
"[project]/src/app/explore/SelectedReelModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/hooks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/SelectedReelDetail.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$Comment$2f$CommentBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home/Comment/CommentBox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-ssr] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/postData.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/handleCommentCount.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/store/Slice/UserIdHashtagIdSlice.tsx [app-ssr] (ecmascript)");
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
const ReelDetailsModal = ({ setReels })=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const reel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.selectedReel.reel);
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Like Unlike
    const handleLike = async (socialId, userId)=>{
        const previousState = {
            isLiked: reel?.isLiked,
            total_likes: reel?.total_likes
        };
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLikeStatus"])()); // Optimistic update for UI
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(response.message);
            } else {
                throw new Error(response.message || "Failed to update like status");
            }
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLikeStatus"])()); // Revert Redux state
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
             // stop if not found
            setReels((prevReels)=>prevReels.map((r)=>r.social_id === socialId ? {
                        ...r,
                        isLiked: previousState.isLiked ?? r.isLiked,
                        total_likes: previousState.total_likes ?? r.total_likes
                    } : r));
        }
    };
    // Follow Unfollow User
    const handleFollowUnfollow = async (userId)=>{
        const previousState = typeof reel?.isFollowing === "boolean" ? reel.isFollowing : false;
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateFollowStatus"])());
        setReels((prevReels)=>prevReels.map((r)=>r.User.user_id === userId ? {
                    ...r,
                    isFollowing: typeof r.isFollowing === "boolean" ? !r.isFollowing : true
                } : r));
        try {
            const res = await postData("/follow/follow-unfollow", {
                user_id: userId
            });
            if (res.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(res.message);
            } else {
                throw new Error(res.message || "Failed to update follow status");
            }
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateFollowStatus"])()); // Revert Redux state
            setReels((prevReels)=>prevReels.map((r)=>r.User.user_id === userId ? {
                        ...r,
                        isFollowing: typeof previousState === "boolean" ? previousState : false
                    } : r)); // Revert Explore state
        }
    };
    // Save Reel
    const handleBookmark = async (socialId)=>{
        const previousState = {
            isSaved: reel?.isSaved,
            total_saves: reel?.total_saves
        };
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateBookmarkStatus"])()); // Optimistic update for UI
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(response.message);
            } else {
                throw new Error(response.message || "Failed to update bookmark status");
            }
        } catch (error) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateBookmarkStatus"])()); // Revert Redux state
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
             // stop if not found
            setReels((prevReels)=>prevReels.map((r)=>r.social_id === socialId ? {
                        ...r,
                        isSaved: previousState.isSaved ?? r.isSaved,
                        total_saves: previousState.total_saves ?? r.total_saves
                    } : r));
        }
    };
    // Comment Count
    const commentAdded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.commentAdded.commentAdded);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (commentAdded && reel?.social_id) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["incrementCommentCount"])()); // Update Redux state
            setReels((prevReels)=>prevReels.map((r)=>r.social_id === reel.social_id ? {
                        ...r,
                        total_comments: (Number(r.total_comments) || 0) + 1
                    } : r)); // Update Explore state
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$handleCommentCount$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCommentAddedFalse"])()); // Reset flag
        }
    }, [
        commentAdded,
        reel?.social_id,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: Boolean(reel),
        onClose: ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSelectedReel"])());
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-primary rounded-lg shadow-lg flex overflow-hidden relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSelectedReel"])()),
                    className: "absolute top-1 right-2 text-dark text-sm z-50 cursor-pointer",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:w-7/10 bg-dark relative sm:block hidden",
                    children: [
                        reel?.Media?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: reel.Media[0].media_location,
                            autoPlay: true,
                            muted: true,
                            className: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center w-full h-full text-white",
                            children: "No Media"
                        }, void 0, false, {
                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/home/play.png",
                            alt: "play",
                            width: 60,
                            height: 60,
                            className: "bg-dark bg-opacity-[30%] rounded-full p-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:w-1/2 flex flex-col max-h-[90vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 pt-4 pr-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between place-items-center pr-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: reel?.User?.profile_pic,
                                                    alt: reel?.User?.user_name,
                                                    width: 40,
                                                    height: 40,
                                                    className: "rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-base font-medium text-dark",
                                                    children: reel?.User?.user_name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `cursor-pointer sm:w-[20%] p-1 rounded-xl ${reel?.isFollowing ? "bg-transparent border-main-green border text-main-green" : "bg-main-green text-primary"}`,
                                            onClick: ()=>handleFollowUnfollow(reel?.User?.user_id),
                                            children: reel?.isFollowing ? "Following" : "Follow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm my-4 text-gray-700",
                                    children: reel.social_desc?.split(/(\s+)/).map((part, index)=>part.startsWith("#") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-main-green cursor-pointer",
                                            onClick: ()=>{
                                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$UserIdHashtagIdSlice$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setHashtag"])({
                                                    hashtag_name: part.replace("#", "")
                                                }));
                                                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$store$2f$Slice$2f$SelectedReelDetail$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearSelectedReel"])());
                                                router.push("/explore");
                                            },
                                            children: part
                                        }, index, false, {
                                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : part)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-6 place-items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: reel?.isLiked ? "/home/filled_heart.png" : "/home/like.png",
                                                    alt: "like",
                                                    width: 18,
                                                    height: 18,
                                                    onClick: ()=>handleLike(reel?.social_id, reel?.User?.user_id)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:text-sm text-xs font-medium text-dark",
                                                    children: [
                                                        reel?.total_likes,
                                                        " likes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/home/comment.png",
                                                    alt: "comment",
                                                    width: 18,
                                                    height: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:text-sm text-xs font-medium text-dark",
                                                    children: [
                                                        reel?.total_comments,
                                                        " comments"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: reel?.isSaved ? "/home/filled_bookmark.png" : "/home/bookmark.png",
                                                    alt: "save",
                                                    width: 18,
                                                    height: 18,
                                                    className: "",
                                                    onClick: ()=>handleBookmark(reel?.social_id)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sm:text-sm text-xs font-medium text-dark",
                                                    children: [
                                                        reel?.total_saves,
                                                        " saves"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "text-[#F0F0F0] w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " flex-1 overflow-hidden ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2f$Comment$2f$CommentBox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
            lineNumber: 227,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/explore/SelectedReelModal.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ReelDetailsModal;
}),
"[project]/src/app/LayoutContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LayoutContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DialogContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/DialogContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SidebarComponents$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SidebarComponents/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SettingSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/setting/SettingSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
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
function LayoutContent({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isSettingsPage = pathname.startsWith("/setting");
    const isNotFound = pathname === "/not-found";
    // ✅ Redirect logic here
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
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
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DialogContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/LayoutContent.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            !isNotFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/LayoutContent.tsx",
                lineNumber: 42,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: [
                    !isNotFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${isSettingsPage ? "flex" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SidebarComponents$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    onNavigate: ()=>{}
                                }, "main", false, {
                                    fileName: "[project]/src/app/LayoutContent.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                isSettingsPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:pl-[270px] hidden sm:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$setting$2f$SettingSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onBack: ()=>history.back()
                                    }, "settings", false, {
                                        fileName: "[project]/src/app/LayoutContent.tsx",
                                        lineNumber: 51,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/LayoutContent.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/LayoutContent.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: `flex-1 ${!isNotFound && !isSettingsPage ? "lg:ml-[270px]" : ""}`,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/LayoutContent.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/LayoutContent.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "bottom-right",
                reverseOrder: false
            }, void 0, false, {
                fileName: "[project]/src/app/LayoutContent.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
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
                fileName: "[project]/src/app/LayoutContent.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_app_8cbf92d4._.js.map