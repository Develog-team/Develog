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
            <Input.TextArea
                style={{
                    minHeight: 200,
                }}
            />
        </Modal>
    )
}