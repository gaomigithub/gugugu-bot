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
import { AtTabBar, AtDrawer, AtIcon } from 'taro-ui'

interface DrawItems {
  name: string;
  iconType: string;
}

const initialState = { action: "" as string };

function reducer(state: any, action: any) {
  switch (action.type) {
    // case 'weather':
    //   return { ...state,action: "weather" };
    // case 'calendar':
    //   return { action: "calendar" };
    case 'clean':
      return { action: "" };
    default:
      return { ...state, action: action.type };
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
  const [currSelectedBar, setCurrSelectedBar] = useState<number>(1)
  const [isShowDrawer, setIsShowDrawer] = useState<boolean>(false)
  const [isShowTip, setIsShowTip] = useState<boolean>(false)
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false)
  const [isShowWeather, setIsShowWeather] = useState<boolean>(false)
  const [liarOrGugu, setLiarOrGugu] = useState<boolean>(true)
  const [mainIconObj, setMainIconObj] = useState<string>(imgSourceStatic)

  const drawerItems: DrawItems[] = [{ name: 'Weather', iconType: 'lightning-bolt' }, { name: 'Calendar', iconType: 'calendar' }]

  const reset = useCallback(() => {
    dispatch({ type: 'clean' });
    setCurrSelectedBar(1)
  }, [dispatch])

  const onTabBarClick = useCallback((val) => {
    setCurrSelectedBar(val)
  }, [])

  const onDrawerItemClick = useCallback((val: string) => {
    dispatch({ type: val.toLowerCase() })
    return setIsShowDrawer(false)
  }, [dispatch])

  const onDrawerClose = useCallback(() => {
    setIsShowDrawer(false)
    reset()
  }, [reset])

  const handleShowTip = useCallback(() => {
    setIsShowTip(true)
  }, [])

  const tipShowAction = useCallback((value: boolean, tag?: boolean) => {
    setIsShowTip(value);
    if (tag !== undefined) {
      setLiarOrGugu(tag);
    }
    reset()
  }, [reset])

  const calendarShowAction = useCallback((value: boolean) => {
    setIsShowCalendar(value);
    reset()
  }, [reset])

  const weatherShowAction = useCallback((value: boolean) => {
    setIsShowWeather(value);
    reset()
  }, [reset])

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
    if (liarOrGugu === false) {
      setMainIconObj(imgSourceGif)
    }
  }, [liarOrGugu])

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

  useEffect(() => {
    switch (currSelectedBar) {
      case 0:
        setIsShowDrawer(true)
        break;
      case 1:
        return reset();
      case 2:
        return handleShowTip()
    }
  }, [currSelectedBar, reset, handleShowTip])
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
            : <ClText text={"What The Pigeon Say Today?"} size='large' fontWeight='bolder' textColor={"gradualPink"} />}
          <Text style={{ margin: "50px", color: '#c8aae6' }}>{dateTool.now(1)}</Text>
        </View>
      </View>
      <AtTabBar
        fixed
        tabList={[
          { title: 'Menu', iconType: 'bullet-list' },
          { title: 'Home', iconType: 'home' },
          { title: 'Tips', iconType: 'heart', text: '限定' }
        ]}
        onClick={onTabBarClick}
        current={currSelectedBar}
      />
      <AtDrawer
        width={"50vw"}
        show={isShowDrawer}
        mask
        onClose={onDrawerClose}
      >
        <View style={{ padding: "10px 15px", lineHeight: "25px", fontSize: 20, fontWeight: 700, color: "#9171b1" }}><text >Tools</text></View>
        {drawerItems.map((val) => {
          return (
            <View id={val.name} key={val.name} onClick={(e) => onDrawerItemClick(e.currentTarget.id)} style={{ padding: "10px 15px", lineHeight: "25px" }}>
              <View style={{ borderBottom: "1px solid #c8aae6" }} >
                <text style={{ marginLeft: 7 }}>{val.name}</text>
                <View style={{ float: "right" }}>
                  <AtIcon value={val.iconType} size='20' color='#c8aae6' />
                </View>
              </View>
            </View>)
        })}
      </AtDrawer>
      <TipModal show={isShowTip} showAction={tipShowAction}></TipModal>
      <Calendar show={isShowCalendar} showAction={calendarShowAction}></Calendar>
      <Weather show={isShowWeather} showAction={weatherShowAction} getWeather={getWeather}></Weather>
    </View>
  )
}

export default Index