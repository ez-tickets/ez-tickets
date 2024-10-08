// 受信データ
interface SelectMenu {
    name: string;
    image: string;
    description: string;
    options: string[];
    price: number;
}

let optionList: string[] = [];
// options.map((props) => <OptionalMenu props={prop} onSelect={(id) => optionList.push(id)} />)
interface OptionalMenu {
    id: string;
    name: string;
    image: string;
    description: string;
    onSelect: (id: string) => void;
}

interface Order {
    id: string;
    options: string[];
}

// 送信データ
interface cart {
    order: Order[];
}