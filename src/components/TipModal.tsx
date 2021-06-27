import React, { useEffect, useState } from 'react'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { ClModal } from "mp-colorui";

interface IProps {
  show: boolean
  showAction: (value: boolean) => void;
}

function Modal(props: IProps) {
  const { show, showAction } = props;
  const [normal, setNormal] = useState<boolean>(false)

  // 可以使用所有的 React Hooks
  useEffect(() => {
    setNormal(show)
  }, [show])
  // 对应 onReady
  useReady(() => { })
  // 对应 onShow
  useDidShow(() => { })
  // 对应 onHide
  useDidHide(() => { })
  usePullDownRefresh(() => { })

  return (
    <ClModal
      show={normal}
      closeWithShadow
      title='啵咕'
      close
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
        setNormal(false);
        showAction(false);
      }}
      onClose={() => {
        setNormal(false);
        showAction(false);
      }}
      onClick={() => {
        setNormal(false);
        showAction(false);
      }}
    >
      我可爱吗？能给我打钱钱吗？
    </ClModal>
  )
}

export default Modal
