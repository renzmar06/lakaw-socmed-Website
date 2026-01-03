"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import Logo from "../../../../public/ReelBoost/ReelBoostLogo.png";
import ReelBoost from "../../../../public/ReelBoost/ReelBoost.png";
import { HiPlus } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { showModal } from "../../store/Slice/ModalsSlice";
import Cookies from "js-cookie";
import { useUserProfile } from "../../store/api/updateUser";
import RoundedShimmer from "../Shimmer/RoundedShimmer";
import LogoutProfilePopup from "./LogoutProfilePopup";
import { usePathname, useRouter } from "next/navigation";
import NotificationPopup from "./Notification/NotificationPopup";
import { useNotifications } from "./Notification/useNotification";
import { updateNotificationStatus } from "@/app/store/api/updateNotificationStatus";

function Header() {
  const dispatch = useAppDispatch();
  const token = Cookies.get("Reelboost_auth_token");

  // Balance state
  const [balance, setBalance] = useState<number | null>(null);

  // fetch notifications for seen unseen =========
  const { data } = useNotifications(10);
  const notifications = data?.pages.flatMap((page) => page.Records) || [];
  const hasUnseen = notifications.some((n) => n.view_status === "unseen");
  const pathname = usePathname();
   const isMessagePage = pathname === "/message";

  const router = useRouter();
  const handleModal = () => {
    if (!token) {
      dispatch(showModal("Signin"));
    } else {
      dispatch(showModal("UploadVideo"));
    }
  };
  const profile = useAppSelector((state) => state.modals.Profile);

  // get the user profile ================
  const { data: userData, isLoading, error } = useUserProfile(token ?? "");

  const open = useAppSelector((state) => state.modals.LogoutProfile);
  const openNotification = useAppSelector((state) => state.modals.Notification);

  // Fetch FiliPay balance
  useEffect(() => {
    const fetchBalance = async () => {
      if (!userData?.data?.user_id) return;
      
      try {
        const res = await fetch(`https://golakaw.com/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ login: userData.data.email, password: "lakaw123!!!" }), // non-standard for GET
        });
        const logindata = await res.json();
        if (logindata.status === "success") {
              const res2 = await fetch(`https://golakaw.com/api/postFilipayBalance`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ customer_id: logindata.data.id }), // non-standard for GET
              });
              const data = await res2.json();
              if (data.status === "success") {
                setBalance(data.data.balance); // assuming API returns { status: 'success', balance: 1234 }
              } else {
                toast.error("Failed to fetch balance");
              }
        }
        // } else {
        //   const res3 = await fetch(`https://golakaw.com/api/register`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ first_name: userData.data.first_name, last_name: userData.data.last_name,
        //       username: userData.data.user_name, email: userData.data.email, password:"lakaw123!!"
        //     }),
        //   });
        //   const regdata = await res3.json();
        //   if (regdata.status === "success") {
        //     fetchBalance(); 
        //   }else{
        //     toast.error("Error fetching balance");
        //   }
        // }
      } catch (err) {
         toast.error("Error fetching balance");
      }
    };

    fetchBalance();
  }, [userData?.data?.user_id]);
  return (
    <>
      <div
        className={`flex fixed top-0 w-full z-[1000] bg-primary justify-between place-items-center border-b h-[60px] px-4 ${isMessagePage ? "hidden md:block md:flex" : ""}`}
      >
        {/* logo ========================================== */}
        <div
          className="flex py-3 gap-2 md:px-6 place-items-center"
          onClick={() => router.push("/")}
        >
          {/* <Image
            src={Logo}
            alt="logo"
            width={40}
            height={20}
            className="w-10 h-10"
          /> */}
          <Image
            src={ReelBoost}
            alt="Lakaw"
            className={`lg:block hidden`}
            height={50}
            width={100}
          />
        </div>

        {/* Small screen: Show only icon */}
        {/* <div className="sm:hidden px-4">
          <Image src={Search} alt="search" className="w-5 h-5" />
        </div> */}

        {/* Upload and Login button =========================== */}
        <div className={`flex md:px-6 gap-3`}>
          {!token ? (
            <>
              {" "}
              <button
                className="cursor-pointer text-sm bg-main-green rounded-sm px-4 py-1"
                onClick={() => dispatch(showModal("Signin"))}
              >
                Log in
              </button>
            </>
          ) : (
            <>
              {profile ||
                (token && (
                  <>
                    <div className="flex gap-2 place-items-center cursor-pointer">
                      {balance !== null && (
                       <div className="flex text-xs sm:text-sm font-medium text-white bg-green-600 px-2 sm:px-3 py-1 rounded-xl truncate">
                          FiliPay Balance: ₱ {Number(balance).toFixed(2)}
                        </div>
                      )}
                      {/* Search */}
                      <div
                        className="cursor-pointer rounded-full background-opacityGradient w-8 h-8 flex items-center justify-center"
                        onClick={() => dispatch(showModal("MainSearch"))}
                      >
                        <Image
                          src="/home/search_icon.png"
                          alt="notification"
                          width={18}
                          height={18}
                        />
                      </div>

                      {/* Chat */}
                      <div
                        className="cursor-pointer rounded-full background-opacityGradient w-8 h-8 flex items-center justify-center"
                        onClick={() => router.push("/message")}
                      >
                        <Image
                          src="/home/message.png"
                          alt="message"
                          width={24}
                          height={24}
                        />
                      </div>

                      {/* Notification */}
                      <div
                        className="cursor-pointer relative rounded-full background-opacityGradient w-8 h-8 flex items-center justify-center"
                        onClick={async () => {
                          if (hasUnseen) {
                            const unseenIds = notifications
                              .filter((n) => n.view_status === "unseen")
                              .map((n) => n.notification_id);

                            if (unseenIds.length > 0) {
                              await updateNotificationStatus(unseenIds, "seen");
                            }
                          }

                          dispatch(showModal("Notification"));
                        }}
                      >
                        <Image
                          src="/home/notification.png"
                          alt="notification"
                          width={22}
                          height={22}
                        />

                        {hasUnseen && (
                          <span className="absolute top-0 right-1 block h-2 w-2 rounded-full bg-main-green"></span>
                        )}

                        {openNotification && (
                          <div className="absolute top-13 sm:-right-8 -right-20">
                            <NotificationPopup />
                          </div>
                        )}
                      </div>

                      {/* Profilepic */}
                      {isLoading ? (
                        <>
                          <div className="w-8 h-8 rounded-full">
                            <RoundedShimmer />
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="w-8 h-8 relative rounded-full cursor-pointer"
                            onClick={() => dispatch(showModal("LogoutProfile"))}
                          >
                            <Image
                              src={userData?.data.profile_pic || "/profile/verified.png"}
                              className="w-full h-full object-cover rounded-full"
                              alt="profile"
                              width={25}
                              height={25}
                              unoptimized
                            />
                            {open && (
                              <div className="absolute -right-5 top-13">
                                <LogoutProfilePopup />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ))}
            </>
          )}
          <div
            className="border cursor-pointer md:rounded-xl h-8 w-8 md:h-auto md:w-auto rounded-full text-sm text-center justify-center md:py-1 place-items-center md:px-5 text-main-green border-main-green flex gap-1"
            onClick={handleModal}
          >
            <HiPlus />
            <span className="md:block hidden">Upload</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
