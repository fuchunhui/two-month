export interface SourceItemInfo {
  value: string;
  order: number;
}

export enum BUSINESS_TYPE {
  INCOME = '收入',
  EXPENDITURE = '支出'
}

export interface BankRecord {
  card: string; // 卡号
  name: string; // 工商银行，招商等
  date: string; // or Date???
  type: BUSINESS_TYPE;
  purpose: string; // 用途记录，需要特别细化。需重点考虑设计
  app: string; // 支付宝，京东，滴滴等
  amount: number; // 本次变更金额
  balance: number; // 余额
}

export interface BankCard extends BankRecord {
  id: string; // 主健，bank_id
  blob: string; // 原始信息，展示的时候不需要
}
