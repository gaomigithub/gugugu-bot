import React, { useCallback, useEffect, useState } from "react";
import Taro from '@tarojs/taro'
import Modal from "./Modal";
import { View } from "@tarojs/components";
// css-style
import "./../styles/heartBeat.scss"

interface IProps {
  show: boolean;
  showAction: (value: boolean, tag?: boolean) => void;
}
function TipModal(props: IProps) {
  const { show, showAction } = props;
  const imgSource = require("../assets/imgBase4");
  const [showLiar, setShowLiar] = useState<boolean>(false);

  // //添加音效
  // const innerAudioContext = Taro.createInnerAudioContext();
  // innerAudioContext.src = "https://wsaudiobssdlbig.yun.kugou.com/202108031453/224b456018bd9ceef192a602fea0a55d/bss/extname/wsaudio/d23a8367bc24a60cfbba8b72eb90c783.mp3"; // 音频资源的地址
  // innerAudioContext.loop = false; // 是否循环播放，默认为 false
  // Taro.setInnerAudioOption({
  //   // ios在静音状态下能够正常播放音效
  //   obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
  //   success: function (e: any) {
  //     console.log(e);
  //     console.log("play success");
  //   },
  //   fail: function (e: any) {
  //     console.log(e);
  //     console.log("play fail");
  //   }
  // });
  // innerAudioContext.onPlay(() => {
  //   // 监听音频播放事件
  //   console.log("开始播放");
  // });
  // innerAudioContext.onStop(() => {
  //   console.log('停止');
  //   innerAudioContext.stop();
  //   //播放停止，销毁该实例
  //   innerAudioContext.destroy();
  // })
  // innerAudioContext.onEnded(() => {
  //   console.log('结束')
  //   //播放结束，销毁该实例
  //   innerAudioContext.destroy();
  //   console.log('已执行destory()');
  // })
  // innerAudioContext.onError((res) => {
  //   console.log(res.errMsg);
  //   console.log(res.errCode);
  //   innerAudioContext.destroy();
  // })

  // const playOrStopAudio = useCallback(() => {
  //   innerAudioContext.play();
  // }, [innerAudioContext]);

  // useEffect(() => {
  //   if (showLiar === true) {
  //     playOrStopAudio();
  //   } else {
  //     innerAudioContext.stop();
  //     innerAudioContext.destroy();
  //   }
  // }, [showLiar])

  return (
    <View>
      <Modal
        show={show}
        title="啵咕"
        actions={[
          {
            text: "咕咕",
            color: "red"
          },
          {
            text: "下次一定",
            color: "blue"
          }
        ]}
        onCancel={() => {
          showAction(false);
        }}
        onClose={() => {
          showAction(false);
        }}
        onClick={index => {
          let liarOrGugu = false;
          if (index === 1) {
            setShowLiar(true);
            liarOrGugu = true;
          }
          showAction(false, liarOrGugu);
        }}
      >
        我可爱吗？能给我打钱钱吗？
      </Modal>
      <Modal
        // custom
        show={showLiar}
        title="本月限定"
        onCancel={() => {
          setShowLiar(false);
          // innerAudioContext.stop();
          // innerAudioContext.destroy();
        }}
        onClose={() => {
          setShowLiar(false);
          // innerAudioContext.stop();
          // innerAudioContext.destroy();
        }}
        onClick={() => { }}
        actions={[
          {
            text: "爱你啵啵 上班辛苦",
            color: "red"
          }
        ]}
      >
        <View
          style={{
            // background: `url(${imgSource.liar}) no-repeat center`,
            // height: 350,
            height: 150,
            backgroundSize: "cover"
          }}
        >
          <View className="heart" style={{
            position: "absolute",
            top: "30%",
            left: "35%"
          }} />
        </View>
      </Modal>
    </View>
  );
}

export default TipModal;
