export interface SourceItemInfo {
  value: string;
  index: number;
}

export interface TableItemInfo {
  card: string; // 卡号
  name: string; // 工商银行，招商等
  time: string; // or Date???
  type: string; // 收入 or 支出，对应成英文枚举值，expenditure and income
  purpose: string; // 用途记录，需要特别细化。需重点考虑设计
  app: string; // 支付宝，京东，滴滴等
  amount: number; // 本次变更金额
  balance: number; // 余额
}

export interface BankCard extends TableItemInfo {
  id: string; // 主健，bank_id
  blob: string; // 原始信息，展示的时候不需要
}
