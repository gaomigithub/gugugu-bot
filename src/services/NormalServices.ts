import { get, post } from './../utils/request'
export class NormalServices {
  TEST = () => get('https://jsonplaceholder.typicode.com/todos/1', null)
  weatherShanghai = () => get('https://restapi.amap.com/v3/weather/weatherInfo?key=3d8718b02d7e13b4c69c650e2810db5e&city=310000&extensions=all', null)
}