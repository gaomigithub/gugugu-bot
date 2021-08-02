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
  onClick: (index: any) => void;
  onClose: () => void;
  onCancel: () => void;
  // showAction: (value: boolean) => void;
  custom?: boolean;
  titleBgColor?: string;
  actionColor?: string;
}

function Modal(props: IProps & { children: React.ReactNode }) {
  const { custom, actionColor, titleBgColor, title, show, actions, onClick, onClose, onCancel, children } = props;
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
      custom={custom ?? false}
      titleBgColor={titleBgColor}
      actionColor={actionColor}
      closeWithShadow
      title={title}
      close
      actions={actions}
      onClick={onClick}
      onClose={onClose}
      onCancel={onCancel}
    >
      {children}
    </ClModal>
  )
}

export default Modal
