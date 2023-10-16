import { InfoContent01, InfoContent02, InfoContent03 } from "components";
import { useEffect } from "react";
import { ScrollContainer } from "./ScrollContainer";

export const InfoContainer = () => {

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
        </>
    )
}