// import { useNavigate } from "react-router-dom";
// import { ROUTE_SIGN_IN } from "routes/const";

import { InfoContent01, InfoContent02, InfoContent03 } from "components";
import { useEffect } from "react";
import { ScrollContainer } from "./ScrollContainer";

export const InfoContainer = () => {

    // const navigate = useNavigate();

    // const signIn = () => {
    //     navigate(ROUTE_SIGN_IN);
    // }


    // const elementInView = (el: any) => {
    //     const elementTop = el.getBoundingClientRect().top;

    //     return (
    //         elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    //     );
    // };

    const handleScrollAnimation = (e: any) => {
        console.log(e);
    };

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            handleScrollAnimation(e);
        });

        return () => {
            window.removeEventListener('scroll', (e) => {
                handleScrollAnimation(e);
            });
        };
    }, []);

    return (
        <>
            <ScrollContainer>
                <InfoContent01 />
                <InfoContent02 />
                <InfoContent03 />
            </ScrollContainer>

            {/* <div
                style={{
                    boxShadow: '#bebebe 0 0 0 2px inset',
                    padding: '1rem 2rem',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    color: 'black',
                    fontWeight: 700,
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                }}
                onClick={() => signIn()}
                aria-hidden = "true"
            >
                Start to DEVELOG
            </div> */}
        </>
    )
}