import { useNavigate } from "react-router-dom";
import { ROUTE_SIGN_IN } from "routes/const";

export const InfoContainer = () => {
    
    const navigate = useNavigate();

    const signIn = () => {
        navigate(ROUTE_SIGN_IN);
    }

    return (
        <>
            <div
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
            </div>
        </>
    )
}