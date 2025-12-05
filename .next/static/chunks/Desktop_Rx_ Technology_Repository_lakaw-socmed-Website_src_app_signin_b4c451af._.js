(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$PhoneEmailSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/PhoneEmailSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/validator/index.js [app-client] (ecmascript)");
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
function EmailSignin() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const { postData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const validateEmail = (email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isEmailValid = (email)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isEmail(email.trim());
    const handleSignin = async ()=>{
        if (!isEmailValid(email)) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid email format.");
        if (!email) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter your email.");
        if (!validateEmail(email)) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid email format.");
        try {
            const response = await postData("/users/signup", {
                login_type: "email",
                email: email.trim(),
                platform: "website"
            });
            if ((response === null || response === void 0 ? void 0 : response.status) === true) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$PhoneEmailSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUserEmail"])(email));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("OTP"));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("Signin"));
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((response === null || response === void 0 ? void 0 : response.message) || "Something went wrong.");
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error signing in");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-dark text-sm",
                        children: [
                            "Email",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                                lineNumber: 54,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full flex items-center justify-center background-opacityGradient",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/signup/email.png",
                                    alt: "Email",
                                    width: 20,
                                    height: 20
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border border-border-color rounded-lg text-dark w-full py-4 pl-16 text-xs placeholder:text-gray bg-white focus:outline-none focus:ring-1 focus:ring-main-green",
                                placeholder: "Enter Email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                autoComplete: "off",
                                spellCheck: "false",
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        handleSignin();
                                    }
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    email && !validateEmail(email) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 items-center mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/signup/notValid.png",
                                alt: "not valid",
                                height: 12,
                                width: 12
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-red",
                                children: "Not valid email format"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-main-green w-[70%] rounded-xl p-2.5 text-primary text-sm cursor-pointer",
                    onClick: handleSignin,
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                        loading: loading,
                        color: "#FFFFFF",
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: "Continue"
                    }, void 0, false)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(EmailSignin, "tGMd+ccQHq5T+erbDLPa7KEmGl4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = EmailSignin;
const __TURBOPACK__default__export__ = EmailSignin;
var _c;
__turbopack_context__.k.register(_c, "EmailSignin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SocialLogin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/@react-oauth/google/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
function SocialLogin() {
    _s();
    const { postData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const googleLogin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoogleLogin"])({
        onSuccess: {
            "SocialLogin.useGoogleLogin[googleLogin]": async (tokenResponse)=>{
                try {
                    const { access_token } = tokenResponse;
                    // Fetch user info from Google
                    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://www.googleapis.com/oauth2/v3/userinfo", {
                        headers: {
                            Authorization: "Bearer ".concat(access_token)
                        }
                    });
                    const { email, given_name, family_name } = res.data;
                    // Call your API with full name
                    const response = await postData("/users/signup", {
                        email,
                        login_type: "social",
                        platform: "website",
                        device_token: "",
                        first_name: given_name || "",
                        last_name: family_name || ""
                    });
                    // Save token if needed
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("Reelboost_auth_token", response.data.token, {
                        secure: true,
                        sameSite: "Strict",
                        expires: 30
                    });
                    if (response.message != "Data is Missing") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Signed in successfully!");
                        // Check if username is already set
                        if (response.data.newUser === false) {
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("Signin"));
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("Profile"));
                        } else {
                            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("Signin"));
                            setTimeout({
                                "SocialLogin.useGoogleLogin[googleLogin]": ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("Signup"))
                            }["SocialLogin.useGoogleLogin[googleLogin]"], 100);
                        }
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(response.message);
                    }
                } catch (error) {
                // toast.error("Google login failed");
                }
            }
        }["SocialLogin.useGoogleLogin[googleLogin]"],
        onError: {
            "SocialLogin.useGoogleLogin[googleLogin]": (errorResponse)=>{
            // toast.error("Google login failed");
            }
        }["SocialLogin.useGoogleLogin[googleLogin]"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative border border-main-green rounded-md bg-main-green/[0.04] py-2 mx-10 cursor-pointer text-center",
        onClick: ()=>googleLogin(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/ReelBoost/GoogleLogo.png",
                className: "absolute left-3 top-1/2 transform -translate-y-1/2",
                alt: "Google",
                width: 22,
                height: 22
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SocialLogin.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium text-sm text-dark cursor-pointer",
                children: "Continue with Google"
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SocialLogin.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SocialLogin.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(SocialLogin, "peJTg9Q449PvGQOb+r76WZcHxNw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoogleLogin"]
    ];
});
_c = SocialLogin;
const __TURBOPACK__default__export__ = SocialLogin;
var _c;
__turbopack_context__.k.register(_c, "SocialLogin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$signin$2f$EmailSignin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/EmailSignin.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$signin$2f$SocialLogin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SocialLogin.tsx [app-client] (ecmascript)");
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
function Signin() {
    _s();
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Email");
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Signin.useAppSelector[open]": (state)=>state.modals.Signin
    }["Signin.useAppSelector[open]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
            open: open,
            onClose: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("Signin")),
            fullWidth: true,
            PaperProps: {
                sx: {
                    p: 0,
                    overflow: "visible",
                    borderRadius: 3,
                    maxHeight: "90vh",
                    width: "420px",
                    maxWidth: "100%"
                }
            },
            BackdropProps: {
                sx: {
                    background: "#000000BD"
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("Signin")),
                        className: "absolute top-2 right-2 text-dark rounded-full p-2 hover:text-gray-800 transition cursor-pointer",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                boxShadow: "9.3px 10.46px 64.96px 0px #00000026"
                            },
                            className: "py-8 rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "pb-4 text-[20px] font-medium text-dark text-center",
                                    children: "Signin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-around items-center border border-main-green/[0.1] mx-6 rounded-full p-3",
                                    style: {
                                        boxShadow: "1px 1px 6.7px 0px #00000008"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer text-[16px] font-medium ".concat(selectedOption === "Email" ? "text-main-green" : "text-gray"),
                                        onClick: ()=>setSelectedOption("Email"),
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " pt-8 px-10",
                                    children: selectedOption === "Email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$signin$2f$EmailSignin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                        lineNumber: 84,
                                        columnNumber: 48
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center py-4 px-10 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-grow border-t border-main-green"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mx-4 text-sm font-poppins text-dark font-base",
                                            children: "OR"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-grow border-t border-main-green"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$signin$2f$SocialLogin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signin.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Signin, "Yvo/N7flqfCLLbOEXcjTBxeOkTA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = Signin;
const __TURBOPACK__default__export__ = Signin;
var _c;
__turbopack_context__.k.register(_c, "Signin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$PhoneEmailSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/PhoneEmailSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
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
function OtpForm() {
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(120); // Start with 120 seconds (2 minutes)
    const [resendAvailable, setResendAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "",
        "",
        "",
        ""
    ]);
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleChange = (index, value)=>{
        if (/^\d?$/.test(value)) {
            const newOtp = [
                ...otp
            ];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 5) {
                var _inputRefs_current_;
                (_inputRefs_current_ = inputRefs.current[index + 1]) === null || _inputRefs_current_ === void 0 ? void 0 : _inputRefs_current_.focus();
            }
        }
    };
    const handleBackspace = (index, event)=>{
        if (event.key === "Backspace" && !otp[index] && index > 0) {
            var _inputRefs_current_;
            (_inputRefs_current_ = inputRefs.current[index - 1]) === null || _inputRefs_current_ === void 0 ? void 0 : _inputRefs_current_.focus();
        }
    };
    const { postData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const handleCheckOTP = async ()=>{
        const otpCode = otp.join("");
        if (otpCode.length !== 4 || !/^\d{4}$/.test(otpCode)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid 4-digit OTP.");
            return;
        }
        const login_type = phoneNumber ? "phone" : "email";
        // Prepare body conditionally
        const bodyData = phoneNumber ? {
            otp: otpCode,
            login_type,
            mobile_num: phoneNumber,
            country_code: countryCode
        } : {
            otp: otpCode,
            login_type,
            email: email,
            platform: "website"
        };
        try {
            const response = await postData("/users/verfyOtp", bodyData);
            if (response.status === true) {
                const user = response.data.user;
                if (!user.user_name) {
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("Signup"));
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("Reelboost_auth_token", response.data.token, {
                        secure: true,
                        sameSite: "Strict",
                        expires: 30
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("Reelboost_user_id", String(response.data.user.user_id), {
                        secure: true,
                        sameSite: "Strict",
                        expires: 30
                    });
                    // Show FreeCoinPopup only after signup
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("FreeCoinPopup", "true");
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("FreeCoin")); // this will open your FreeCoinPopup
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("OTP"));
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("Reelboost_auth_token", response.data.token, {
                        secure: true,
                        sameSite: "Strict",
                        expires: 30
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("Reelboost_user_id", String(response.data.user.user_id), {
                        secure: true,
                        sameSite: "Strict",
                        expires: 30
                    });
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$PhoneEmailSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUserInfo"])());
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Signed in successfully!");
                    window.location.replace("/");
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("OTP"));
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("Profile"));
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((response === null || response === void 0 ? void 0 : response.message) || "Invalid OTP. Try again.");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Verification failed. Please try again.");
        }
    };
    // To handle Resend OTP
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OtpForm.useEffect": ()=>{
            if (timeLeft === 0) {
                setResendAvailable(true);
                return;
            }
            const intervalId = setInterval({
                "OtpForm.useEffect.intervalId": ()=>{
                    setTimeLeft({
                        "OtpForm.useEffect.intervalId": (prevTime)=>prevTime - 1
                    }["OtpForm.useEffect.intervalId"]);
                }
            }["OtpForm.useEffect.intervalId"], 1000);
            return ({
                "OtpForm.useEffect": ()=>clearInterval(intervalId)
            })["OtpForm.useEffect"];
        }
    }["OtpForm.useEffect"], [
        timeLeft
    ]);
    const countryName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OtpForm.useAppSelector[countryName]": (state)=>state.user.country
    }["OtpForm.useAppSelector[countryName]"]);
    const countryShortName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OtpForm.useAppSelector[countryShortName]": (state)=>state.user.country_short_name
    }["OtpForm.useAppSelector[countryShortName]"]);
    const countryCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OtpForm.useAppSelector[countryCode]": (state)=>state.user.country_code
    }["OtpForm.useAppSelector[countryCode]"]);
    const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OtpForm.useAppSelector[phone]": (state)=>state.user.phone
    }["OtpForm.useAppSelector[phone]"]);
    const handleResendOTP = async ()=>{
        const bodyData = phoneNumber ? {
            login_type: "phone",
            country: countryName,
            country_short_name: countryShortName.toUpperCase(),
            country_code: countryCode,
            mobile_num: phone,
            platform: "website"
        } : {
            login_type: "email",
            platform: "website",
            email: email
        };
        // const bodyData
        if (resendAvailable) {
            try {
                const response = await postData("/users/signup", bodyData);
                if ((response === null || response === void 0 ? void 0 : response.status) === true) {} else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((response === null || response === void 0 ? void 0 : response.message) || "Something went wrong.");
                }
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Error Signing in");
            }
        }
    };
    // Format timeLeft in MM:SS format
    const formatTime = (time)=>{
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return "".concat(minutes.toString().padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0"));
    };
    // verification after all digits are entered
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OtpForm.useEffect": ()=>{
            if (otp.every({
                "OtpForm.useEffect": (digit)=>digit !== ""
            }["OtpForm.useEffect"])) {
                handleCheckOTP();
            }
        }
    }["OtpForm.useEffect"], [
        otp
    ]);
    const phoneNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OtpForm.useAppSelector[phoneNumber]": (state)=>state.user.phone
    }["OtpForm.useAppSelector[phoneNumber]"]);
    const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OtpForm.useAppSelector[email]": (state)=>state.user.email
    }["OtpForm.useAppSelector[email]"]);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "OtpForm.useAppSelector[open]": (state)=>state.modals.OTP
    }["OtpForm.useAppSelector[open]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("SearchAccounts")),
        fullWidth: true,
        PaperProps: {
            sx: {
                p: 0,
                overflow: "visible",
                borderRadius: 3,
                maxHeight: "90vh",
                width: "420px",
                maxWidth: "100%"
            }
        },
        BackdropProps: {
            sx: {
                background: "#000000BD"
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("OTP")),
                    className: "absolute top-2 right-2 text-dark rounded-full p-2 hover:text-gray-800 transition cursor-pointer",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center rounded-xl py-16",
                    style: {
                        boxShadow: "9.3px 10.46px 64.96px 0px #00000026"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center relative opacity-100  rounded-xl h-fit ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: " font-poppins font-medium text-dark text-center pb-1",
                                children: [
                                    "Enter otp sent to your registered",
                                    " ",
                                    phoneNumber ? "number" : "email"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: " text-xs text-center font-poppins text-gray",
                                    children: [
                                        "4 digit OTP has been sent to",
                                        " ",
                                        phoneNumber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: phoneNumber
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: email
                                        }, void 0, false)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex md:gap-4 gap-5 py-3 justify-center",
                                children: otp.map((value, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: (el)=>{
                                            inputRefs.current[index] = el;
                                        },
                                        type: "text",
                                        value: value,
                                        maxLength: 1,
                                        disabled: loading,
                                        className: "border border-[#D0D0D0] rounded-md w-12 h-12 text-center text-lg font-normal focus:outline-none focus:ring-1 text-dark focus:ring-main-green ".concat(loading ? "bg-gray-100 cursor-not-allowed" : ""),
                                        onChange: (e)=>{
                                            if (!loading) handleChange(index, e.target.value);
                                        },
                                        onKeyDown: (e)=>{
                                            handleBackspace(index, e);
                                            if (e.key === "Enter" && otp) {
                                                e.preventDefault();
                                                handleCheckOTP();
                                            }
                                        }
                                    }, index, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-main-green font-poppins text-sm justify-center flex py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "".concat(timeLeft > 0 ? "" : "cursor-pointer"),
                                        onClick: handleResendOTP,
                                        children: "Resend OTP"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    timeLeft > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: [
                                                "in ",
                                                formatTime(timeLeft)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                            lineNumber: 280,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "py-2 mt-4 rounded-xl text-sm text-primary font-normal w-[70%] font-poppins bg-main-green",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                                        color: "#FFFFFF",
                                        size: 15,
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                        lineNumber: 289,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-primary font-gilroy_md cursor-pointer",
                                        onClick: handleCheckOTP,
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                        lineNumber: 291,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
            lineNumber: 214,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/OTPForm.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s(OtpForm, "ctxAuPbTQrQN3+7Kbf0WQTM4RsA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = OtpForm;
const __TURBOPACK__default__export__ = OtpForm;
var _c;
__turbopack_context__.k.register(_c, "OtpForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Signup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/components/SignupField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/validator/index.js [app-client] (ecmascript)");
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
function Signup() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // const open = useAppSelector((state) => state.modals.Signup);
    const email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Signup.useAppSelector[email]": (state)=>state.user.email
    }["Signup.useAppSelector[email]"]);
    const country = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Signup.useAppSelector[country]": (state)=>state.user.country
    }["Signup.useAppSelector[country]"]);
    const countryCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Signup.useAppSelector[countryCode]": (state)=>state.user.country_code
    }["Signup.useAppSelector[countryCode]"]);
    const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Signup.useAppSelector[phone]": (state)=>state.user.phone
    }["Signup.useAppSelector[phone]"]);
    const { postData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // Initial form data
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        user_name: "",
        first_name: "",
        last_name: "",
        full_name: "",
        email: email || "",
        mobile_num: countryCode && phone ? "+".concat(countryCode).concat(phone) : "",
        country: country || "",
        profile_pic: "",
        bio: ""
    });
    // ✅ Validate signup fields
    const validateSignup = ()=>{
        const { user_name, email, mobile_num } = formData;
        // Username
        if (!user_name || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].matches(user_name, /^[a-zA-Z0-9_.-]+$/)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Username can only contain letters, numbers, underscores (_), hyphens (-), and dots (.)");
            return false;
        }
        // Email
        if (!email || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isEmail(email)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid email address.");
            return false;
        }
        // Mobile number
        if (!mobile_num) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid phone number.");
            return false;
        }
        const phoneWithoutPlus = mobile_num.startsWith("+") ? mobile_num.slice(1) : mobile_num;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isMobilePhone(phoneWithoutPlus, undefined, {
            strictMode: false
        })) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid mobile number.");
            return false;
        }
        return true;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Signup.useEffect": ()=>{
            setFormData({
                "Signup.useEffect": (prev)=>({
                        ...prev,
                        email: email || "",
                        mobile_num: countryCode && phone ? "+".concat(countryCode).concat(phone) : ""
                    })
            }["Signup.useEffect"]);
        }
    }["Signup.useEffect"], [
        email,
        phone,
        countryCode
    ]);
    // ✅ Update full_name whenever first_name or last_name changes
    const handleFirstNameChange = (e)=>{
        const first_name = e.target.value;
        setFormData((prev)=>({
                ...prev,
                first_name,
                full_name: "".concat(first_name, " ").concat(prev.last_name).trim()
            }));
    };
    const handleLastNameChange = (e)=>{
        const last_name = e.target.value;
        setFormData((prev)=>({
                ...prev,
                last_name,
                full_name: "".concat(prev.first_name, " ").concat(last_name).trim()
            }));
    };
    // ✅ Updated checkUsernameAvailability with token in headers
    const checkUsernameAvailability = async (user_name)=>{
        if (!user_name) {
            setUsernameVerified(false);
            return;
        }
        try {
            const response = await postData("/users/find-user", {
                user_name,
                user_check: true
            });
            if (response.status === true) {
                setUsernameVerified(true);
            } else {
                setUsernameVerified(false);
            }
        } catch (error) {
            setUsernameVerified(false);
        }
    };
    // ✅ Updated handleSignup to include token
    const handleSignup = async ()=>{
        if (!validateSignup()) return;
        try {
            const response = await postData("/users/updateUser", {
                user_name: formData.user_name,
                first_name: formData.first_name,
                last_name: formData.last_name,
                mobile_num: phone,
                country: country,
                bio: formData.bio,
                email: formData.email
            });
            if (response.status === false) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(response.message);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Signed up successfully!");
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("Signup"));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("Avtar"));
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Signup failed. Please try again.");
        }
    };
    const [usernameVerified, setUsernameVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "Signup.useAppSelector[open]": (state)=>state.modals.Signup
    }["Signup.useAppSelector[open]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
            open: open,
            onClose: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("Signup")),
            fullWidth: true,
            PaperProps: {
                sx: {
                    p: 0,
                    overflow: "visible",
                    borderRadius: 3,
                    maxHeight: "90vh",
                    width: "430px",
                    maxWidth: "100%"
                }
            },
            BackdropProps: {
                sx: {
                    background: "#000000BD"
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " rounded-xl py-5 px-5",
                    style: {
                        boxShadow: "9.3px 10.46px 64.96px 0px #00000026"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: " pb-6 text-[20px] font-medium text-dark text-center",
                            children: "Signup"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-h-[55vh] overflow-y-auto flex flex-col gap-4 px-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-dark text-[13px]",
                                                    children: [
                                                        "User Name",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    iconSrc: "/signup/username.png",
                                                    placeholder: "Enter Username",
                                                    value: formData.user_name,
                                                    onChange: (e)=>{
                                                        const user_name = e.target.value;
                                                        setFormData({
                                                            ...formData,
                                                            user_name
                                                        });
                                                        checkUsernameAvailability(user_name);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                usernameVerified === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/profile/verified.png",
                                                    className: "absolute top-1/2 -translate-y-1/2 right-2 w-5 h-5 mt-2",
                                                    alt: "verified",
                                                    height: 23,
                                                    width: 23
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this),
                                                formData.user_name && usernameVerified === false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-red mt-1",
                                                    children: "Username already taken"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-dark text-[13px]",
                                                    children: [
                                                        "First Name",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    iconSrc: "/signup/name.png",
                                                    placeholder: "Enter First Name",
                                                    value: formData.first_name,
                                                    onChange: handleFirstNameChange
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-dark text-[13px]",
                                                    children: [
                                                        "Last Name",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    iconSrc: "/signup/name.png",
                                                    placeholder: "Enter Last Name",
                                                    value: formData.last_name,
                                                    onChange: handleLastNameChange
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-dark text-[13px] font-",
                                                    children: [
                                                        "Mobile Number",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            country: "in",
                                                            enableSearch: true,
                                                            value: formData.mobile_num,
                                                            onChange: (value)=>{
                                                                setFormData((prev)=>({
                                                                        ...prev,
                                                                        mobile_num: value
                                                                    }));
                                                            },
                                                            inputClass: "border border-border-color rounded-lg w-full p-2 py-1.5 placeholder:text-xs text-dark placeholder:text-gray bg-white focus:outline-none focus:ring-1 focus:ring-main-green",
                                                            buttonClass: "!bg-transparent",
                                                            containerClass: "relative"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this),
                                                        phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/profile/verified.png",
                                                            className: "absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5",
                                                            alt: "Verified",
                                                            height: 23,
                                                            width: 23
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-dark text-[13px] font-",
                                                    children: [
                                                        "Email",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$components$2f$SignupField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    iconSrc: "/signup/email.png",
                                                    placeholder: "Enter Email",
                                                    value: formData.email,
                                                    onChange: (e)=>{
                                                        const email = e.target.value;
                                                        setFormData({
                                                            ...formData,
                                                            email
                                                        });
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this),
                                                email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/profile/verified.png",
                                                    className: "absolute right-4 top-8 w-5 h-5",
                                                    alt: "Verified",
                                                    width: 23,
                                                    height: 23
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                            lineNumber: 291,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-dark text-[13px]",
                                                    children: "Bio"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-3 background-opacityGradient p-2 rounded-full top-2 flex items-center justify-center z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/signup/bio.png",
                                                                alt: "User",
                                                                className: "opacity-70",
                                                                width: 20,
                                                                height: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 6,
                                                            value: formData.bio,
                                                            className: "w-full border border-gray-300 text-xs rounded-md pl-16 text-dark pr-2 pt-4 pb-2 bg-white focus:outline-none focus:ring-1 focus:ring-main-green placeholder:text-xs font-gilroy_regular placeholder:text-gray-400",
                                                            placeholder: "Enter Bio",
                                                            onChange: (e)=>{
                                                                const bio = e.target.value;
                                                                setFormData({
                                                                    ...formData,
                                                                    bio
                                                                });
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 px-2 py-4 cursor-pointer justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: isChecked,
                                                    onChange: (e)=>setIsChecked(e.target.checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-dark text-sm text-center",
                                                    children: [
                                                        "I agree to the",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-main-green cursor-pointer hover:underline",
                                                            children: "Terms of Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 21
                                                        }, this),
                                                        " ",
                                                        "&",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-main-green hover:underline cursor-pointer",
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center place-items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "bg-main-green text-primary rounded-xl w-[55%] py-2.5 font-normal text-sm cursor-pointer",
                                                onClick: ()=>{
                                                    if (!isChecked) {
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please agree to Terms & Privacy Policy to continue");
                                                        return;
                                                    }
                                                    handleSignup();
                                                },
                                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                                                        color: "#FFFFFF",
                                                        size: 15,
                                                        loading: loading
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "Next"
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        }, void 0, false, {
            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/Signup.tsx",
            lineNumber: 159,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Signup, "bHPCFH3t8Gp0oQ0rGSHZR41MvwE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = Signup;
var _c;
__turbopack_context__.k.register(_c, "Signup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/utils/hooks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/Slice/ModalsSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-icons/rx/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/react-icons/ti/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$api$2f$getAvatars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/store/api/getAvatars.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/hooks/postData.tsx [app-client] (ecmascript)");
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
function SelectAvatarModal() {
    _s();
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token");
    // const { data: AvatarData, isLoading } = useGetAllAvatarQuery({
    //   token: token,
    // });
    const { data: AvatarData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$api$2f$getAvatars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvatars"])(token);
    const { postData, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const Avatars = AvatarData === null || AvatarData === void 0 ? void 0 : AvatarData.data.Records;
    const [uploadedImage, setUploadedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mediaflow, setMediaflow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectAvatarModal.useEffect": ()=>{
            const fetchConfig = {
                "SelectAvatarModal.useEffect.fetchConfig": async ()=>{
                    try {
                        var _data_data;
                        const res = await fetch("".concat(("TURBOPACK compile-time value", "https://ec2-3-26-224-23.ap-southeast-2.compute.amazonaws.com/api"), "/project_conf"), {
                            headers: {
                                Authorization: "Bearer ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("Reelboost_auth_token") || "")
                            }
                        });
                        const data = await res.json();
                        if (data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.mediaflow) {
                            setMediaflow(data.data.mediaflow);
                        }
                    } catch (error) {
                    // Optional: Show toast, but DO NOT redirect here
                    }
                }
            }["SelectAvatarModal.useEffect.fetchConfig"];
            fetchConfig();
        }
    }["SelectAvatarModal.useEffect"], []);
    //   const dispatch = useAppDispatch();
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        avatar_id: 0
    });
    const [selectedAvatar, setSelectedAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    // Function to handle avatar selection
    const handleAvatarClick = (avatarSrc, avatarId)=>{
        setSelectedAvatar(avatarId);
        setUploadedImage(avatarSrc);
        setImagePreview(null); // Clear custom uploaded image preview
        setImageFile(null); // Clear uploaded file
        setFormData({
            ...formData,
            avatar_id: avatarId
        });
    };
    // Function to trigger file input
    const handleImageClick = ()=>{
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    // Function to remove uploaded image
    const handleRemoveImage = ()=>{
        setUploadedImage(""); // remove uploaded image
        setImagePreview(null); // clear preview
        setImageFile(null); // clear file
        // Reset to the first avatar if avatars exist
        if (Avatars && Avatars.length > 0) {
            const firstAvatar = Avatars[0];
            setSelectedAvatar(firstAvatar.avatar_id);
            setUploadedImage(firstAvatar.avatar_media);
            setFormData({
                ...formData,
                avatar_id: firstAvatar.avatar_id
            });
        }
    };
    const handleImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            // Clear avatar selection
            setSelectedAvatar(null);
            setUploadedImage("");
            setFormData({
                ...formData,
                avatar_id: 0
            });
        }
    };
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        const form = new FormData();
        if (selectedAvatar) {
            form.append("avatar_id", formData.avatar_id.toString());
            form.append("pictureType", "avatar");
        } else if (imageFile) {
            // S3 Flow condition
            if (mediaflow === "LOCAL") {
                form.append("files", imageFile);
            } else {
                form.append("file_media_1", imageFile);
            }
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Please select an avatar or upload an image.");
            return;
        }
        setIsSubmitting(true); // block any redirect checks
        try {
            const response = await postData("/users/updateUser", form);
            if (response.status) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideModal"])("Avtar"));
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$Slice$2f$ModalsSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showModal"])("Profile"));
                window.location.replace("/");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(response.message);
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Something went wrong!");
        } finally{
            setIsSubmitting(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectAvatarModal.useEffect": ()=>{
            if (Avatars && Avatars.length > 0 && !selectedAvatar && !imagePreview) {
                setSelectedAvatar(Avatars[0].avatar_id);
                setUploadedImage(Avatars[0].avatar_media);
                setFormData({
                    "SelectAvatarModal.useEffect": (prev)=>({
                            ...prev,
                            avatar_id: Avatars[0].avatar_id
                        })
                }["SelectAvatarModal.useEffect"]);
            }
        }
    }["SelectAvatarModal.useEffect"], [
        Avatars
    ]);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollLeft = ()=>{
        var _scrollRef_current;
        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({
            left: -100,
            behavior: "smooth"
        });
    };
    const scrollRight = ()=>{
        var _scrollRef_current;
        (_scrollRef_current = scrollRef.current) === null || _scrollRef_current === void 0 ? void 0 : _scrollRef_current.scrollBy({
            left: 100,
            behavior: "smooth"
        });
    };
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"])({
        "SelectAvatarModal.useAppSelector[open]": (state)=>state.modals.Avtar
    }["SelectAvatarModal.useAppSelector[open]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
            open: open,
            fullWidth: true,
            PaperProps: {
                sx: {
                    p: 0,
                    overflow: "visible",
                    borderRadius: 3,
                    maxWidth: "100%",
                    width: "420px"
                }
            },
            BackdropProps: {
                sx: {
                    background: "#000000BD"
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col rounded-xl justify-center opacity-100 place-content-center relative bg-primary sm:py-8 sm:px-8 p-5",
                style: {
                    boxShadow: "9.3px 10.46px 64.96px 0px #00000026"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-center text-dark sm:text-base text-sm font-medium",
                            children: [
                                " ",
                                "Pick your Avatar or select a photo"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center w-full py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-full border border-main-green/[0.4] w-24 h-24 flex justify-center items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: imagePreview ? imagePreview // uploaded image
                                     : uploadedImage // selected avatar image
                                    ,
                                    alt: "User",
                                    className: "absolute inset-0 rounded-full w-22 h-22 m-auto",
                                    height: 85,
                                    width: 85
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-[#EFEFEF] rounded-xl px-4 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-left font-semibold text-dark font-poppins text-sm",
                                    children: "Choose Avatar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "absolute -left-8 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-primary shadow-md p-2 rounded-full",
                                            onClick: scrollLeft,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RxCaretLeft"], {
                                                className: "text-lg text-dark"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: scrollRef,
                                            className: "flex gap-4 overflow-x-auto no-scrollbar px-4",
                                            children: Avatars === null || Avatars === void 0 ? void 0 : Avatars.map((avatar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>handleAvatarClick(avatar.avatar_media, avatar.avatar_id),
                                                    className: "relative cursor-pointer flex-shrink-0 flex justify-center items-center ".concat(selectedAvatar === avatar.avatar_id ? "border-2 border-main-green rounded-full p-1" : ""),
                                                    children: [
                                                        selectedAvatar === avatar.avatar_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-main-green rounded-full absolute -bottom-[-1px] p-0.5 border-4 border-primary -right-[-2px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiTick"], {
                                                                    className: "text-primary text-xs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                                    lineNumber: 286,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: avatar.avatar_media,
                                                            alt: "",
                                                            className: "rounded-full",
                                                            height: 70,
                                                            width: 70
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, avatar.avatar_id, true, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "absolute -right-8 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-primary shadow-md p-2 rounded-full",
                                            onClick: scrollRight,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RxCaretRight"], {
                                                className: "text-dark"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center py-4 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-grow border-t border-main-green"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mx-4 text-lg font-poppins text-dark font-base",
                                    children: "OR"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-grow border-t border-main-green"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-gray-200 rounded-xl px-4 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-left text-sm font-semibold text-dark",
                                    children: "Choose From"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this),
                                imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center items-center w-full py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shadow-md px-1 py-1 rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-24 h-24 border rounded-full border-main-green flex justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-16 p-1 border-4 border-primary -right-1 cursor-pointer bg-main-green rounded-full",
                                                        onClick: handleRemoveImage,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$icons$2f$rx$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RxCross2"], {
                                                            className: "text-primary text-xs xl:text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: imagePreview,
                                                        alt: "Uploaded",
                                                        className: "inset-0 rounded-full w-22 h-22 m-auto",
                                                        height: 85,
                                                        width: 85
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                lineNumber: 340,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                            lineNumber: 339,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                        lineNumber: 338,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 337,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "items-center w-full place-items-center h-full pb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center background-opacityGradient rounded-full p-4",
                                            onClick: handleImageClick,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/signup/gallery.png",
                                                height: 25,
                                                width: 25,
                                                alt: "gallery"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                lineNumber: 364,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block cursor-pointer text-gray-600 pt-3 text-sm",
                                            children: [
                                                "Add Image",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    className: "hidden",
                                                    onChange: handleImageChange,
                                                    ref: fileInputRef
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                            lineNumber: 371,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                    lineNumber: 359,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                            lineNumber: 331,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "py-2 w-full mt-6 cursor-pointer text-sm rounded-xl text-primary font-normal bg-main-green font-sans hover:opacity-90 ",
                                onClick: handleSubmit,
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                                        color: "#FFFFFF",
                                        size: 15,
                                        loading: loading
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                        lineNumber: 393,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: "Submit"
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                                lineNumber: 387,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Rx/ Technology/Repository/lakaw-socmed-Website/src/app/signin/SelectAvatarModal.tsx",
            lineNumber: 189,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(SelectAvatarModal, "0FGPB3ee+v+4tmIQqbcONT0y5Hs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$store$2f$api$2f$getAvatars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAvatars"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$hooks$2f$postData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Rx$2f$__Technology$2f$Repository$2f$lakaw$2d$socmed$2d$Website$2f$src$2f$app$2f$utils$2f$hooks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppSelector"]
    ];
});
_c = SelectAvatarModal;
const __TURBOPACK__default__export__ = SelectAvatarModal;
var _c;
__turbopack_context__.k.register(_c, "SelectAvatarModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Rx_%20Technology_Repository_lakaw-socmed-Website_src_app_signin_b4c451af._.js.map