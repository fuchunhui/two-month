import {ErrorBase} from './log';
import {BankRecord, BusinessType} from 'types/business';

const PARSER_ERROR = '未找到对应银行或者数据录入错误，请核对。';
const CARD_ERROR = '卡号不存在';
const NAME_ERROR = '未获取银行信息';
const DATE_ERROR = '日期解析错误';
const TYPE_ERROR = '交易类型获取失败';
const PURPOSE_ERROR = '交易用途解析失败';
const APP_ERROR = 'APP解析失败';
const AMOUNT_ERROR = '交易金额解析错误';
const BALANCE_ERROR = '余额解析失败';

enum Bank {
  ICBC = '【工商银行】',
  CMB = '【招商银行】'
}

enum Finance {
  Alipay = '支付宝',
  TenPay = '财付通'
}

const FinanceMap = {
  [Finance.Alipay]: '支付宝',
  [Finance.TenPay]: '微信'
};

// const BusinessMap = {
//   [BusinessType.INCOME]: '退款',
//   [BusinessType.EXPENDITURE]: '消费'
// };

interface BankRecordMessage {
  [key: string]: string
}

const ICBC_ERROR: BankRecordMessage = {
  card: CARD_ERROR,
  name: NAME_ERROR,
  date: DATE_ERROR,
  type: TYPE_ERROR,
  purpose: PURPOSE_ERROR,
  app: APP_ERROR,
  amount: AMOUNT_ERROR,
  balance: BALANCE_ERROR
};

// 银行 name
// 卡号 card
// 日期，当年和跨年 data 2021-06-21 11:18
// 交易类型 type 收入和支出
// 用途 purpose 
// APP app 具体的消费途径
// 金额 amount 消费或者收入金额
// 余额 balance
const parserBank = (value: string) => {
  if (value.includes(Bank.ICBC)) {
    return icbc(value);
  } else if (value.includes(Bank.CMB)) {
    return cmb(value);
  } else {
    // 异常处理
    // 数据本身错误 or 解析异常
    const error: ErrorBase = {
      message: PARSER_ERROR
    };
    return error;
  }
};

const icbc = (value: string) => {
  console.log('ICBC', value);
  
  const card = getCard(value);
  const date = getDate(value);
  const type = getICBCType(value);
  const {purpose, app} = getAppPurpose(value);
  const {amount, balance} = getMoney(value);
  console.log('解析结果：', card, date, type, purpose, app, amount, balance);

  const record: BankRecord = {
    card,
    name: '工商银行',
    date,
    type,
    purpose,
    app,
    amount,
    balance
  };

  // check
  console.log(ICBC_ERROR);
  return record;
};

const cmb = (value: string) => {
  console.log('CMB', value);
  const record: BankRecord = {
    card: '0797',
    name: '招商银行',
    date: '2021-06-09 12:18',
    type: BusinessType.INCOME,
    purpose: '滴滴出行科技有限公司',
    app: '滴滴',
    amount: 13,
    balance: 1392
  };
  return record;
};

const getCard = (value: string) => {
  const regex = /\d{4}/g;
  const card = value.match(regex);
  return card ? card[0] : '';
};

const getDate = (value: string) => {
  const regex = /\d月\d{1,2}日\d{1,2}:\d{1,2}/g;
  const date = value.match(regex);
  return date ? date[0] : '';
};

const getICBCType = (value: string) => {
  const key = '快捷支付';
  const list = value.split(key);
  let type = '';
  if (list.length > 1) {
    type = checkType(list[1].substring(0, 2));
  }
  return type;
};

const checkType = (type: string) => {
  const index = (Object.values(BusinessType) as string[]).indexOf(type);
  return index !== -1 ? type : '';
};

/**
 * 获取消费记录的用途，APP端
 * 工行卡的转正记录分析，需要特殊处理
 */
const getAppPurpose = (value: string) => {
  const regex = /（[A-Za-z0-9（）_\-\u4e00-\u9fa5）]+）/g;
  let purpose = '';
  let app = '';
  const result = value.match(regex);
  if (result) {
    const consumption = result[0].slice(1, -1); // 去括号
    const list = consumption.split('-'); // 特殊情况处理，比如转账，TODO
    app = getAppDetail(list.shift() as string); // as string??? 需要考虑转账。
    purpose = list.join('-');
    // console.log('app, purpose', app, purpose);
  }
  return {
    purpose,
    app
  };
};

const getAppDetail = (appWithPrefix: string) => {
  let app = '';
  const appPrefix = '消费'; // or 退款
  const appNoPrefix = appWithPrefix.slice(appPrefix.length);
  switch (appNoPrefix) {
    case Finance.Alipay:
      app = FinanceMap[Finance.Alipay];
      break;
    case Finance.TenPay:
      app = FinanceMap[Finance.TenPay];
      break;
    default:
      app = '';
      break;
  }
  return app;
};

const getMoney = (value: string) => {
  const regex = /[1-9]\d*\.?\d*\u5143|0\.\d*[1-9]\d*\u5143/g; 
  // [1-9]\d*\.\d*\u5143|0\.\d*[1-9]\d*\u5143|0\.\d*\d*[1-9]\u5143
  const date = value.match(regex);
  // return date ? date[0] : '';
  console.log(date);
  return {
    amount: 0,
    balance: 0
  };
};

export default {
  parser(value: string): BankRecord | ErrorBase {
    value = '您尾号0797卡6月20日13:02快捷支付支出（消费支付宝-北京华柜依磐食品销售店）62.50元，余额406.04元。【工商银行】';
    return parserBank(value);
  },
  parserArr(value: string[]): void {
    value.forEach(item => {
      console.log(item);
    });
    console.log('hello parser...', value.length);
  }
};
