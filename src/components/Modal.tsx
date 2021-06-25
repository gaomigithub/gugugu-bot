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
  const { show,showAction } = props;
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
      title='你为什么要点？'
      close
      actions={[
        {
          text: '咕咕',
          color: 'red'
        },
        {
          text: '我的错',
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
      不要乱点！RuaRuaRuaRuaRuaRuaRuaRuaRua！！！
    </ClModal>
  )
}

export default Modal
