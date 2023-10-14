interface NoContentsProps {
    children?: JSX.Element;
}
export const NoContents = (props: NoContentsProps) => {
    const { children } = props;

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <div
                style={{
                    width: '100%',
                    textAlign: 'center',
                    color: '#a9a9a9'
                }}>
                {children}
            </div>
        </div>
    )
}