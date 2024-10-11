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

// select時の受信データ
export interface SelectMenu {
    name: string;
    image: string;
    description: string;
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

export interface Order {
    id: string;
}

// 送信データ
export interface Cart {
    order: Order[];
}