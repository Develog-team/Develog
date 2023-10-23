import { InfoContent01, InfoContent02, InfoContent03 } from "components";
import { ScrollContainer } from "./ScrollContainer";

export const InfoContainer = () => {

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