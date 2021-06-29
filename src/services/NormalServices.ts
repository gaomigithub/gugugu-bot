import { WeatherAPIExtensions, WeatherInfo } from 'src/models/weather'
import { get, post } from './../utils/request'
export class NormalServices {
  TEST = () => get('https://jsonplaceholder.typicode.com/todos/1', null)
  weatherShanghai = async (cityId: number, extensions: WeatherAPIExtensions):Promise<WeatherInfo> => {
    return await get(`https://restapi.amap.com/v3/weather/weatherInfo?key=d03c07f4e931ed153d7ec143966b4693&city=${cityId}&extensions=${extensions}`, null) as any
  }
}