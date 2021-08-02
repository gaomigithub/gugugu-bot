import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { ClButton, ClText, ClFloatButton } from "mp-colorui";
import './index.css'
import { NormalServices } from '../../services/NormalServices';
import TipModal from '../../components/TipModal';
import Calendar from '../../components/Calendar';
import Weather from '../../components/Weather';
import { Forecast, Lives, WeatherAPIExtensions } from 'src/models/weather';

const initialState = { action: "" as string };

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'weather':
      return { action: "weather" };
    case 'calendar':
      return { action: "calendar" };
    case 'clean':
      return { action: "" };
    default:
      throw new Error();
  }
}

function Index() {
  const normalServices = new NormalServices;
  const imgSourceStatic = require('../../assets/img/Avatar.jpg');
  const imgSourceGif = require('../../assets/img/gugu.gif');
  const dateTool = require('../../utils/dateTool');
  const dataSource = require('../../utils/dataSource');
  const defaultUIColors = ['red', 'orange', 'yellow', 'olive', 'green', 'mauve', 'purple'];

  const [sentence, setSentence] = useState<string | undefined>(undefined)
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isShowTest, setIsShowTest] = useState<boolean>(false)
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false)
  const [isShowWeather, setIsShowWeather] = useState<boolean>(false)
  const [liarOrGugu, setLiarOrGugu] = useState<boolean>(true)
  const [mainIconObj, setMainIconObj] = useState<string>(imgSourceStatic)

  useEffect(() => {
    if (liarOrGugu === false) {
      setMainIconObj(imgSourceGif)
    }
  }, [liarOrGugu])

  useEffect(() => {
    console.log("liarOrGugu", liarOrGugu)
  }, [liarOrGugu])

  const handleShowTest = useCallback(() => {
    setIsShowTest(true)
  }, [])
  const tipShowAction = useCallback((value: boolean, tag?: boolean) => {
    setIsShowTest(value);
    if (tag !== undefined) {
      setLiarOrGugu(tag);
    }
    dispatch({ type: 'clean' });
  }, [])
  const calendarShowAction = useCallback((value: boolean) => {
    setIsShowCalendar(value);
    dispatch({ type: 'clean' });
  }, [])
  const weatherShowAction = useCallback((value: boolean) => {
    setIsShowWeather(value);
    dispatch({ type: 'clean' });
  }, [])
  const handleSentences = useCallback(() => {
    const str = dataSource.normalSentences[Math.floor(Math.random() * dataSource.normalSentences.length)].value
    setSentence(str)
    return str
  }, [dataSource])

  const getWeather = async (cityId: number, extensions: WeatherAPIExtensions) => {
    const weather = await normalServices.weatherShanghai(cityId, extensions)
    if (weather?.lives) {
      return weather?.lives
    } else return
  }

  // 可以使用所有的 React Hooks
  // useEffect(() => {
  // })
  useEffect(() => {
    switch (state.action) {
      case 'weather':
        return setIsShowWeather(true)
      case 'calendar':
        return setIsShowCalendar(true)
      default:
        return;
    }
  }, [state.action])
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
          src={mainIconObj} onClick={handleSentences}></Image>
        <View style='margin-top: 50px; display: flex; flex-direction: column; align-items: center;'>
          {sentence ? <View style='height: 30px'><ClText align='center' text={sentence} size='large' fontWeight='bolder' textColor={defaultUIColors[Math.floor(Math.random() * defaultUIColors.length)]} /></View>
            : <ClText text={"What The Pigeon Say Today?"} size='large' fontWeight='bolder' />}
          <Text style='margin: 50px'>{dateTool.now(1)}</Text>
        </View>
      </View>
      <View style='position:absolute;left:0px;bottom:0px; margin:20px;'>
        <ClFloatButton
          onActionClick={(val: any) => { val === 0 ? dispatch({ type: 'weather' }) : dispatch({ type: 'calendar' }) }}
          size='large'
          bgColor='blue'
          closeWithShadow
          direction='vertical'
          move
          actionList={[
            {
              icon: 'light'
            },
            {
              icon: 'calendar'
            }
          ]}
        />
      </View>
      <View style='position:absolute;right:0px;bottom:0px; margin:20px;'>
        <ClButton onClick={handleShowTest} shape='round' bgColor='red' size='large'
        >咕</ClButton>
      </View>
      <TipModal show={isShowTest} showAction={tipShowAction}></TipModal>
      <Calendar show={isShowCalendar} showAction={calendarShowAction}></Calendar>
      <Weather show={isShowWeather} showAction={weatherShowAction} getWeather={getWeather}></Weather>
    </View>
  )
}

export default Index