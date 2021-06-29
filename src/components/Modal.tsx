import React, { useEffect, useState } from 'react'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { ClModal } from "mp-colorui";

interface IProps {
  title?: string;
  show: boolean;
  actions?: {
    text: string,
    color: string
  }[];
  onClose: () => void;
  onCancel: () => void;
  // showAction: (value: boolean) => void;
}

function Modal(props: IProps & { children: React.ReactNode }) {
  const { title, show, actions, onClose, onCancel, children } = props;
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
      title={title}
      close
      actions={actions}
      onClose={() => {
        onClose();
      }}
      onCancel={() => {
        onCancel();
      }}
    >
      {children}
    </ClModal>
  )
}

export default Modal
