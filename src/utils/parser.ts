import {ErrorBase} from './log';
import {BankRecord, BUSINESS_TYPE} from 'types/business';

enum Bank {
  ICBC = '【工商银行】',
  CMB = '【招商银行】'
}

const start = (value: string) => {
  return parserBank(value);
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
      message: '未找到对应银行或者数据录入错误，请核对。'
    };
    return error;
  }
};

const icbc = (value: string) => {
  console.log('ICBC', value);
  const record: BankRecord = {
    card: '0797',
    name: '工商银行', // OK 
    date: '2021-06-09 12:18',
    type: BUSINESS_TYPE.EXPENDITURE,
    purpose: '滴滴出行科技有限公司',
    app: '滴滴',
    amount: 13,
    balance: 1392
  };
  return record;
};

const cmb = (value: string) => {
  console.log('CMB', value);
};


export default {
  parser(value: string): void {
    value = '您尾号0797卡9月14日13:18快捷支付收入（退款支付宝-支付宝-消费）110.51元，余额204.45元。【工商银行】';
    start(value);
  },
  parserArr(value: string[]): void {
    value.forEach(item => {
      console.log(item);
    });
    console.log('hello parser...', value.length);
  }
};
