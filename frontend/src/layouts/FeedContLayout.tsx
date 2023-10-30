import 'assets/css/feed/feedMain.css';

interface FeedMainProps {
    children?: JSX.Element;
}
export const FeedContLayout = (props: FeedMainProps) => {
    const { children } = props;

    return (
        <div
            className="feed-main">
            {children}
        </div>
    )
}