import { NoContents } from "components"
import { FeedContLayout } from "layouts"

export const ScrapFeedContainer = () => {
    return (
        <FeedContLayout>
            <NoContents>
                <>
                    <p>아직 스크랩한 글이 없어요.</p>
                    <p>마음에 드는 글을 스크랩해보세요.</p>
                </>
            </NoContents>
        </FeedContLayout>
    )
}