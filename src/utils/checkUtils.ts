
export default class CheckUtils {
  static checkMobile(num: any) { // 检测手机
    return /^1[3|4|5|7|8]\d{9}$/.test(num.toString());
  }

  static checkInt(num: number) { // 正整数
    return /^0|([1-9]\d*)\b/.test(num.toString());
  }

  static checkEmail(email: string) {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);
  }

  static isEmail(email: string) {
    return /^\w+([-+.]\w+)*@163.com.cn$/.test(email);
  }

  static checkQQ(qq: number) {
    return /^\d{5,}$/.test(qq.toString()) || CheckUtils.checkEmail(qq.toString());
  }

  static checkWechat(wx: any) {
    return CheckUtils.checkMobile(wx) || CheckUtils.checkEmail(wx) || CheckUtils.checkQQ(wx) || /^[a-zA-Z\d_]{5,}$/.test(wx);
  }

  static checkSmsCode(smsCode: any) {
    return /\d{6}/.test(smsCode);
  }

  static checkIdentityCode(identityCode: any) {
    return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(identityCode);
  }

  static checkName(name: any) {
    return /^[\u0391-\uFFE5A-Za-z0-9]+$/.test(name);
  }

  static checkPostCode(name: any) {
    return /^[1-9][0-9]{5}$/.test(name);
  }

  static numtoFixed(num: any) { // 千分位设置
    if (typeof num !== 'number') {
      return num;
    }
    let b: string | null = null;
    if (num.toString().indexOf('.') === -1) {
      b = (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    } else {
      b = num.toString().replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    return b;
  }
  static twonumCheck(num: any) { // 千分位设置
    return /^\d+(\.\d{1,2})?$/.test(num);
  }
}
