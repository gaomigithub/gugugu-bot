import React from 'react'
import { ClCalendar } from "mp-colorui";
import Modal from './Modal';

interface IProps {
  show: boolean
  showAction: (value: boolean) => void;
}

function Calendar(props: IProps) {
  const { show, showAction } = props;
  return (
    <Modal
      show={show}
      title='日历'
      onClick={() => { }}
      onClose={() => {
        showAction(false);
      }}
      onCancel={() => {
        showAction(false);
      }}
    >
      <ClCalendar showType="full" backToToday={false} highlightWeekend={true} />
    </Modal>
  )
}

export default Calendar
