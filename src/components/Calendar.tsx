import React, { useEffect, useState } from 'react'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { ClModal, ClCalendar } from "mp-colorui";

interface IProps {
  show: boolean
  calendarShowAction: (value: boolean) => void;
}

function Modal(props: IProps) {
  const { show, calendarShowAction } = props;
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
      onClose={() => {
        setNormal(false);
        calendarShowAction(false);
      }}
    >
      <ClCalendar showType="full" backToToday={false} highlightWeekend={true} />
    </ClModal>
  )
}

export default Modal
