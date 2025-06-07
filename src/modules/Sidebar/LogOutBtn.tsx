"use client";

import {useRouter} from "next/navigation";

import Svg5 from "@icons/account/svg5.svg";

import {logout} from "@/api/auth";

import {removeAuthToken} from "@/shared/utils/storageEvents";

import cls from "./styles.module.scss";

export default function LogOutBtn() {
    const router = useRouter();

  const handleLogOut = async () => {
    try {
        await logout();
        removeAuthToken();
        router.push("/");
    }
    catch(error) {
        console.log(error);
    }
  };
  return (
    <button className={cls.logOutBtn} onClick={handleLogOut}>
      <div className={cls.item}>
        <Svg5 className={cls.svg} />
        <p className="titleTiny" style={{ textTransform: "none" }}>Log Out</p>
      </div>
    </button>
  );
}
