import { LinkOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Modal, ModalProps } from "antd";

interface FeedAddModalProps extends ModalProps {
    closeModal: () => void;
}
export const FeedAddModal = (props: FeedAddModalProps) => {
    const { open, closeModal } = props;

    const footer = () => {
        return (
            <>
                <Button
                    type="primary"
                    onClick={closeModal}
                >
                    저장
                </Button>
                <Button
                    onClick={closeModal}
                >
                    닫기
                </Button>
            </>
        )
    }
    return (
        <Modal
            maskClosable={true}
            title={'공유할 내용을 작성해주세요'}
            closable
            centered
            destroyOnClose
            onCancel={() => {
                closeModal();
            }}
            open={open}
            footer={footer}
        >
            <Divider />
            <Input placeholder="공유할 링크를 추가해주세요." prefix={<LinkOutlined />} />
            <Input.TextArea
                placeholder="최대 ~~자까지 작성 가능합니다."
                style={{
                    minHeight: 200,
                    marginTop: 5
                }}
            />
        </Modal>
    )
}