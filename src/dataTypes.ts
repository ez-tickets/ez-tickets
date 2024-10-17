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

export interface Option {
    id: string;
    name: string;
    price: number;
}

export interface Size {
    id: string;
    name: string;
    price: number;
}

// select時の受信データ
export interface SelectMenu {
    id: string;
    name: string;
    image: string;
    description: string;
    sizes: Size[]
    options: Option[];
    price: number;
}

// let optionList: string[] = [];
// options.map((props) => <OptionalMenuContainer props={prop} onSelect={(id) => optionList.push(id)} />)

 export interface OptionalMenu {
    id: string;
    name: string;
    image: string;
    description: string;
    onSelect: (id: string) => void;
}

type Opt = {
    id: string;
    amount: number;
}

export interface Order {
    id: string;
    amount: number;
    options: Opt[];
}

// 送信データ
export interface Cart {
    order: Order[];
}