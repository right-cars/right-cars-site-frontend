"use client";

import {useState, useEffect} from "react";
import {useSearchParams} from "next/navigation";

import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
import SuccessResetPassword from "@/shared/components/Popups/SuccessResetPassword";
import ResetPasswordForm from "@/modules/AuthForms/ResetPasswordForm/ResetPasswordForm";
import SignIn from "@/modules/AuthForms/SignIn/SignIn";

const ResetPassword = ()=> {
    const [modalOpen, setModalOpen] = useState(true);
    const [modalSuccessResetOpen, setModalSuccessResetOpen] = useState(false);
    const [modalSigninOpen, setModalSigninOpen] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    return  (
        <>
            <h2>Enter new password</h2>
            <ModalWindow isModalOpen={modalOpen} setIsModalOpen={setModalOpen}>
                <ResetPasswordForm token={token} closeModal={setModalOpen} setPasswordSuccessResetPopupOpen={setModalSuccessResetOpen} />
            </ModalWindow>

            <ModalWindow isModalOpen={modalSuccessResetOpen} setIsModalOpen={setModalSuccessResetOpen}>
                <SuccessResetPassword setPopupOpen={setModalSuccessResetOpen} setSignInOpen={setModalSigninOpen} />
            </ModalWindow>

            <ModalWindow isModalOpen={modalSigninOpen} setIsModalOpen={setModalSigninOpen}>
                <SignIn
                    toggleForm={()=> setModalSigninOpen(false)}
                    setSigninOpen={setModalSigninOpen}
                    setPasswordPopupOpen={setModalSigninOpen}
                />
            </ModalWindow>
        </>

    );
}

export default ResetPassword;
