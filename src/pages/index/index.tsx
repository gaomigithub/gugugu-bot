import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { ClButton } from "mp-colorui";
import './index.css'
import Modal from '../../components/modal';

function Index() {
  const imgSource = require('../../utils/imgSource');

  const [isShowTest, setIsShowTest] = useState<boolean>(false)

  const handleShowTest = useCallback(() => {
    setIsShowTest(true)
  }, [])

  const showAction = useCallback((value: boolean) => {
    setIsShowTest(value)
  }, [])

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
        <Image style='width:150px; height:150px; border-radius:50%; -webkit-border-radius:50%; -moz-border-radius:50%; box-shadow: 0px 2px 12px 0px rgba(61, 73, 102, 0.2)'
          src={imgSource.pigeon}></Image>
        <View style='margin-top: 50px; display: flex; flex-direction: column; align-items: center;'>
          <Text>敬 请 期 待</Text>
        </View>
      </View>
      <View style='position:absolute;right:0px;bottom:0px; margin:20px;'>
        <ClButton onClick={handleShowTest} shape='round' bgColor='red'>Test</ClButton>
      </View>
      <Modal show={isShowTest} showAction={showAction}></Modal>
    </View>
  )
}

export default Index