import 'assets/css/feed/feedMain.css';

interface FeedMainProps {
    children?: JSX.Element;
}
export const FeedMainLayout = (props: FeedMainProps) => {
    const { children } = props;

    return (
        <div
            className="feed-main">
            {children}
        </div>
    )
}