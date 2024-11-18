export interface ITransaction {
  amount: number;
  date: string;
  category?: ICategory;
  notes: string;
}

export interface ICategory {
  name: string;
  category: 'EXPENSE' | 'INCOME';
}
