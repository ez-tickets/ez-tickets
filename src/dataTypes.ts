// category ------------------------------------------
export interface Category {
  id: string;
  name: string;
}

export interface Menu {
  id: string;
  name: string;
  price: number;
  image: string;
}
// -----------------------------------------------------

// メニュー選択時受信データ --------------------------------
export interface Option {
  id: string;
  name: string;
  price: number;
}

export interface SelectMenu {
  id: string;
  name: string;
  image: string;
  description: string;
  options: Option[];
  price: number;
}
// ----------------------------------------------------

// 表示データ形成 ---------------------------------------
export type SelectProduct = {
  id: number; //incrementしていく
  name: string;
  price: number;
  amount: number;
};

export type SelectOption = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

export type OrderMenu = {
  product: SelectProduct;
  options: SelectOption[];
};

type OrderMenus = {
  orderMenus: OrderMenu[];
};
// ----------------------------------------------------

// 送信データ形成 ---------------------------------------
export interface ProdOrder {
  id: string;
  amount: number;
}

export interface ProdOptionOrder {
  id: string;
  amount: number;
}

export interface Order {
  product: ProdOrder;
  options: ProdOptionOrder[];
}

export interface Cart {
  order: Order[];
}
// ---------------------------------------------------
