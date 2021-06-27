import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { ClButton, ClText, ClIcon, ClAnimation } from "mp-colorui";
import './index.css'
import Modal from '../../components/TipModal';
import Calendar from '../../components/Calendar';

function Index() {
  const imgSource = require('../../utils/imgSource');
  const dateTool = require('../../utils/dateTool');
  const dataSource = require('../../utils/dataSource');
  const defaultUIColors = ['red', 'orange', 'yellow', 'olive', 'green', 'mauve', 'purple'];

  const [isShowTest, setIsShowTest] = useState<boolean>(false)
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false)
  const [sentence, setSentence] = useState<string | undefined>(undefined)

  const handleShowTest = useCallback(() => {
    setIsShowTest(true)
  }, [])
  const showAction = useCallback((value: boolean) => {
    setIsShowTest(value)
  }, [])

  const handleShowCalendar = useCallback(() => {
    setIsShowCalendar(true)
  }, [])
  const calendarShowAction = useCallback((value: boolean) => {
    setIsShowCalendar(value)
  }, [])

  const handleSentences = useCallback(() => {
    const str = dataSource.sentences[Math.floor(Math.random() * dataSource.sentences.length)].value
    setSentence(str)
    return str
  }, [dataSource])

  // 可以使用所有的 React Hooks
  useEffect(() => { })
  // 对应 onReady
  useReady(() => { })
  // 对应 onShow
  useDidShow(() => { })
  // 对应 onHide
  useDidHide(() => { })
  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Taro 文档】-> 【进阶指南】->【Hooks】
  usePullDownRefresh(() => { })

  return (
    <View className='index'>
      <View className='container' >
        <Image className="bubble" style={{ width: `150px`, height: `150px`, borderRadius: `50%`, WebkitBorderRadius: `50%`, MozBorderRadius: `50%`, boxShadow: `0px 2px 12px 0px rgba(61, 73, 102, 0.2)` }}
          src={imgSource.pigeon} onClick={handleSentences}></Image>

        <View style='margin-top: 50px; display: flex; flex-direction: column; align-items: center;'>
          {sentence ? <ClText align='center' text={sentence} size='large' fontWeight='bolder' textColor={defaultUIColors[Math.floor(Math.random() * defaultUIColors.length)]} />
            : <ClText text={"What The Pigeon Say Today?"} size='large' fontWeight='bolder' />}<Text style='margin: 50px'>{dateTool.now(1)}</Text>
        </View>
      </View>
      <View style='position:absolute;left:0px;bottom:0px; margin:20px;'>
        <ClButton onClick={handleShowCalendar} shape='round' bgColor='blue'>日历</ClButton>
      </View>
      <View style='position:absolute;right:0px;bottom:0px; margin:20px;'>
        <ClButton onClick={handleShowTest} shape='round' bgColor='red'>咕</ClButton>
      </View>
      <Modal show={isShowTest} showAction={showAction}></Modal>
      <Calendar show={isShowCalendar} calendarShowAction={calendarShowAction}></Calendar>
    </View>
  )
}

export default Index