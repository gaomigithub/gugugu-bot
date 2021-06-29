import React from 'react'
import Modal from './Modal';

interface IProps {
  show: boolean
  showAction: (value: boolean) => void;
}
function TipModal(props: IProps) {
  const { show, showAction } = props;
  return (
    <Modal
      show={show}
      title='啵咕'
      actions={[
        {
          text: '咕咕',
          color: 'red'
        },
        {
          text: '下次一定',
          color: 'blue'
        }
      ]}
      onCancel={() => {
        showAction(false);
      }}
      onClose={() => {
        showAction(false);
      }}
    >
      我可爱吗？能给我打钱钱吗？
    </Modal>
  )
}

export default TipModal
