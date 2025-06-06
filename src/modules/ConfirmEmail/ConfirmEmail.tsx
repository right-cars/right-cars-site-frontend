"use client";

import {useState, useEffect} from "react";
import {useSearchParams} from "next/navigation";

// import ModalWindow from "@/shared/components/ModalWindow/ModalWindow";
// import SignIn from "@/modules/AuthForms/SignIn/SignIn";
// import SignUp from "@/modules/AuthForms/SignUp/SignUp";

import {verifyEmail} from "@/api/auth";

const ConfirmEmail = ()=> {
    const [verifyError, setVerifyError] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    // const [modalName, setModalName] = useState("signin");
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        const fetchVerifyEmail = async()=> {
            try {
                await verifyEmail(token);
                setModalOpen(true);
            }
            catch(error) {
                //@ts-expect-error
                setVerifyError(error?.response?.data?.message || error?.message);
            }
        }
        fetchVerifyEmail();
    }, []);

    // const toggleForm = ()=> setModalName(prevName => prevName === "signin" ? "signup" : "signin");

    return  (
        <>
            <h2>Congratulations, you have successfully verified your</h2>
            {verifyError && <p className="error">{verifyError}</p>}
            {/*<ModalWindow isModalOpen={modalOpen} setIsModalOpen={setModalOpen}>*/}
            {/*    /!*{modalName === "signin" ?*!/*/}
            {/*    /!*    <SignIn toggleForm={toggleForm} setPasswordPopupOpen={()=> {}} setSigninOpen={} /> : <SignUp />}*!/*/}

            {/*</ModalWindow>*/}
        </>

    );
}

export default ConfirmEmail;
