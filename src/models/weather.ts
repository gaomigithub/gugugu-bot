// 高德API
export type Status = "0" | "1";
export type WeatherAPIExtensions = "base" | "all";
export interface Lives {
  province: string; // 省份名
  city: string; // 城市名
  adcode: string; // 区域编码
  weather: string; // 天气现象（汉字描述）
  temperature: string; // 实时气温，单位：摄氏度
  winddirection: string; // 风向描述
  windpower: string; // 风力级别，单位：级
  humidity: string; // 空气湿度
  reporttime: string; // 数据发布的时间
}
export interface Forecast {
  city: string; // 城市名称
  adcode: string; // 城市编码
  province: string; // 省份名称
  reporttime: string; // 预报发布时间
  cast: {
    // 预报数据list结构，元素cast,按顺序为当天、第二天、第三天的预报数据
    date: string;
    daypower: string; // 白天风力
    daytemp: string; // 白天温度
    dayweather: string; // 白天天气现象
    daywind: string; // 白天风向
    nightpower: string;
    nighttemp: string;
    nightweather: string;
    nightwind: string;
    week: string;
  }[]
}

export interface WeatherInfo {
  status: Status;
  count: string;
  info: string;
  infocode: string;
  lives?: Lives[]; // 实况天气数据信息
  forecast?: Forecast; // 预报天气信息数据
}