//初期取得Categoryデータ
export type BasicCategory = {
  id: string;
  name: string;
};

//カテゴリー選択時取得Productsデータ
export type ProductModel = {
  id: string;
  name: string;
  price: number;
  desc: string;
  img: string;
};

//商品追加時の情報
export type OrderProduct = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

//サーバーに送信するデータ
export type sendOrder = {
  id: string;
  amount: number;
};
