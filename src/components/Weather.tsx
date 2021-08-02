import { View } from '@tarojs/components';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Lives, WeatherAPIExtensions, WeatherInfo } from 'src/models/weather';
import { ClGrid } from 'mp-colorui'
import Modal from './Modal';

interface IProps {
  show: boolean
  showAction: (value: boolean) => void;
  getWeather: (cityId: number, extensions: WeatherAPIExtensions) => Promise<Lives[] | undefined>;
}
function Weather(props: IProps) {
  const { show, showAction, getWeather } = props;
  const [data, setData] = useState<Lives[]>()

  const loadWeather = useCallback(async () => {
    // 上海: 310000，当日: base 
    const data = await getWeather(310000, "base")
    setData(data)
    return data
  }, [getWeather])

  const updateWeatherBgColor = useCallback((data: Lives[]): string => {
    switch (data[0].weather) {
      case "有风": case "大风":
        return 'bg-blue light';
      case "阴": case "雾": case "雪": case "多云": case "霾": case "中度霾": case "重度霾": case "严重霾":
        return 'bg-grey light'
      case "阵雨": case "雷阵雨": case "雷阵雨并伴有冰雹": case "小雨": case "中雨": case "大雨": case "暴雨": case "大暴雨":
        return 'bg-blue dark'
      case "热":
        return 'bg-orange dark'
      default:
        return 'bg-yellow light'
    }
  }, [])

  const weatherBgColor = useMemo(() => {
    return data && updateWeatherBgColor(data)
  }, [data])

  useEffect(() => {
    if (show === true) {
      loadWeather()
    }
    return
  }, [show])

  return (
    <Modal
      show={show}
      title={data instanceof Array ?
        (data[0].weather === ("晴" || "少云" || "平静" || "微风" || "和风") ? "天气很棒，出门玩吗！" :
          "天气不棒 注意身体哦 ")
        : undefined}
      onClick={() => { }}
      onCancel={() => {
        showAction(false);
      }}
      onClose={() => {
        showAction(false);
      }}
    >
      {data &&
        <ClGrid mode='square' col={3}>
          <View className='bg-blue light' style='position: relative;height:100px'>
            <view style={{
              position: "absolute", top: "50%",
              left: 0,
              right: 0,
              margin: "auto", transform: "translateY(-50%)"
            }}>
              <view>温度：{data[0]?.temperature}</view><br />
              <view>湿度：{data[0]?.humidity}</view></view>
          </View>
          <View className={weatherBgColor} style='position: relative;height:100px'>
            <view style={{
              fontSize: "20px",
              fontWeight: 1000,
              position: "absolute", top: "50%",
              left: 0,
              right: 0,
              margin: "auto", transform: "translateY(-50%)"
            }}>{data[0]?.weather}</view>
          </View>
          <View className='bg-blue light' style='position: relative;height:100px'>
            <view style={{
              position: "absolute", top: "50%",
              left: 0,
              right: 0,
              margin: "auto", transform: "translateY(-50%)"
            }}>
              <view>风向：{data[0]?.winddirection}</view><br />
              <view>风力：{data[0]?.windpower} 级</view></view>
          </View>
        </ClGrid>}
    </Modal>
  )
}

export default Weather
