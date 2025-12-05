(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=6c7f9_TIKTOK%20%282%29_TIKTOK_reel-boost-website_src_app_setting_bank-details_5f0e661c._.js.map