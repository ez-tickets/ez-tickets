//Categoryデータ
export type BasicCategory = {
  id: string;
  name: string;
  ordering: number;
};

//Productデータ
export type ProductModel = {
  id: string;
  name: string;
  price: number;
  ordering: number;
};

//Product詳細
export type ProductDetails = {
  id: string;
  name: string;
  price: number;
  desc: string;
};

//商品追加時の情報
export type OrderProduct = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

//サーバーに送信するデータ
export type SendOrder = {
  id: string;
  amount: number;
};

export type CounterActions = {
  INCREMENT: string;
  DECREMENT: string;
};
