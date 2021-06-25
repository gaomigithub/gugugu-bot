import React, { useCallback, useEffect } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import './index.css'

function Index() {


  const avatar = require('../../utils/avatar');
  const handleClick = useCallback(()=>{
    console.log("bingo")
  },[])

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
          src={avatar.pigeon}></Image>
        <View style='margin-top: 50px; display: flex; flex-direction: column; align-items: center;'>
          <Text>敬 请 期 待</Text>
        </View>
      </View>
      <Button onClick={handleClick} style=' position:absolute;right:0px;bottom:0px;width:60px; '>Test</Button>

    </View>
  )
}

export default Index