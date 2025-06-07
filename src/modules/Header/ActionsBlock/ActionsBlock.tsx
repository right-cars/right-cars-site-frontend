"use client"

import {useState, useEffect} from "react";

import Image from "next/image";
import Link from "next/link";

import BurgerBtn from "./BurgerBtn/BurgerBtn";
import LoginBtn from "./LoginBtn/LoginBtn";

import {getCurrentUser} from "@/api/auth";

import cls from "./styles.module.scss";

export default function ActionsBlock() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchCurrent = async()=> {
            try {
                if(typeof window !== "undefined") {
                    await getCurrentUser(localStorage.getItem("token"));
                    setIsLoggedIn(true);
                }
            }
            catch(error) {
                console.log(error);
                localStorage.removeItem("token");
            }
        }
        fetchCurrent();
    }, []);

    useEffect(() => {
        //@ts-expect-error
        const handleTokenChange = (event) => {
            const newToken = event.detail;
            console.log('Token changed in this tab:', newToken);
            setIsLoggedIn(Boolean(newToken));
        };

        window.addEventListener('auth-token-changed', handleTokenChange);

        return () => {
            window.removeEventListener('auth-token-changed', handleTokenChange);
        };
    }, []);

    if(typeof window !== "undefined" && !isLoggedIn && localStorage.getItem("token")) return null;

  return (
    <div className={cls.wrapper}>
      <div className={cls.actions}>

          <Link href="/favorites" className={cls.link}>
            <Image
              src="/icons/heart.svg"
              alt="favorites icon"
              width={20}
              height={20}
            />
          </Link>


        <LoginBtn isLoggedIn={isLoggedIn} />
      </div>

      <BurgerBtn />
    </div>
  );
}
