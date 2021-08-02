import React, { useState } from 'react'
import Modal from './Modal';
import { View } from '@tarojs/components';

interface IProps {
  show: boolean
  showAction: (value: boolean, tag?: boolean) => void;
}
function TipModal(props: IProps) {
  const { show, showAction } = props;
  const imgSource = require('../assets/imgBase4');
  const [showLiar, setShowLiar] = useState<boolean>(false)

  return (
    <View>
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
        onClick={index => {
          let liarOrGugu = false;
          if (index === 1) {
            setShowLiar(true);
            liarOrGugu = true;
          }
          showAction(false, liarOrGugu);
        }}
      >
        我可爱吗？能给我打钱钱吗？
      </Modal>
      <Modal
        custom={true}
        show={showLiar}
        title='Liar!'
        onCancel={() => {
          setShowLiar(false);
        }}
        onClose={() => {
          setShowLiar(false);
        }}
        onClick={() => { }}
      >
        <View style={{
          background: `url(${imgSource.liar}) no-repeat center`,
          height: 350,
          backgroundSize: "cover",
        }}></View>
      </Modal>
    </View >
  )
}

export default TipModal
