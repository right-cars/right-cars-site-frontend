"use client";

import {useState, useEffect} from "react";
import {useSearchParams} from "next/navigation";

import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
import SignIn from "@/modules/AuthForms/SignIn/SignIn";

import {verifyEmail} from "@/api/auth";

const ConfirmEmail = ()=> {
    const [isVerify, setIsVerify] = useState(false);
    const [verifyError, setVerifyError] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        const fetchVerifyEmail = async()=> {
            try {
                await verifyEmail(token);
                setIsVerify(true);
                setModalOpen(true);
            }
            catch(error) {
                //@ts-expect-error
                setVerifyError(error?.response?.data?.message || error?.message);
            }
        }
        fetchVerifyEmail();
    }, []);

    return  (
        <>
            <h2>{isVerify ? "Congratulations, you have successfully verified your" : "Start verify email..." }</h2>
            {verifyError && <p className="error">{verifyError}</p>}
            <ModalWindow isModalOpen={modalOpen} setIsModalOpen={setModalOpen}>
                <SignIn toggleForm={()=> {}} setPasswordPopupOpen={()=> {}} setSigninOpen={setModalOpen} />
            </ModalWindow>
        </>

    );
}

export default ConfirmEmail;
