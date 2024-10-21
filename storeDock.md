# 受信データ (getData)
- id: string;
- name: string;
- price: number;
- options: Option[{
  - id: string,
  - name: string,
  - price: number }];
- image: string;
- description: string;

---

## 注文確認画面でuserに見せるためのデータ (OrderViewStore)
### types
```ts
type Product = {
  id: string;
  name: string;
  price: number;
  amount: number;
}

type Option = {
  id: string; 
  name: string;
  price: number;
  amount: number;
}

type OrderMenu = {
  product: Product;
  options: Option[];
}

type OrderMenus = {
  orderMenus: OrderMenu[];
}
```

### 機能一覧
1.初期化するアクション (INITIALIZE)
```ts
const state = prev;

return {
  product: {
    id: action.payload.id,
    name: action.payload.name,
    price: action.payload.price,
    amount: 1,
  },
  options: action.payload.options.map((option) => ({
    ...option,
    amount: 0
  })) || []
}
```

2.メニューの数量を変更するアクション (INCREASE_AMOUNT, DECREASE_AMOUNT)
``` ts
    state.product.amount += 1; 
    state.product.amount -= 1; 
```

3.選択されたオプションを置き換えるアクション (REPLACE)
```ts
    state.options = selectedOptions;
```

4.menuデータの全て削除するアクション (DISPERSION)
```ts
  return undefined;
```

---

## serverに送るデータ (OrderStore)
### types

```ts
type orderProduct = {
  id: string;
  amount: number;
}

type orderOption = {
  id: string;
  amount: number;
}

type Order = {
  product: orderProduct;
  options: orderOption[];
}

type Cart = {
  order: Order[];
}
```

### 機能一覧
1.初期化するアクション (INITIALIZE)
```ts
const reducer = (action: Action, orderMenus: order[]) => {}
[
  {
    product:
        {
          id: order.id,
          amount: 1,
        },
    options: Option[
        {
          id: getData.options.id,
          amount: 0,
        }
    ]
  }
]
```





## 現在のZustandストア状況
### アニメーションを管理するストア (useSliceAnimeStore)
``` ts
export const useSlideAnimeStore = create<SlideAnime>()((set) => ({ 
    animation: "", 
    changeLeftAnimation: () => set({ animation: slideLeftPage }), 
    changeRightAnimation: () => set({ animation: slideRightPage }),
}));
```


### オプションの初期状態と選択されたものを格納して管理するためのストア (useSelectedOptionsStore)
``` ts
export const useSelectedOptionsStore = create<OptionsDetail>()((set) => ({
    initOptions: [],
    stateOptions: [],
    initOptionsAddHandler: (optionsDetail) => set({ initOptions: optionsDetail }),
    stateOptionsAddHandler: (optionsDetail) => 
    set({ stateOptions: optionsDetail }), 
    resetHandler: () => set({ initOptions: [], stateOptions: [] }),
}));
```


### 商品自体の数量を管理するためのストア (useOrderAmountStore)
```ts
export const useOrderAmountStore = create<OrderAmount>()((set) => ({ 
    amount: 1, 
    inc: () => set((state) => ({ amount: state.amount + 1 })), 
    dec: () => set((state) => ({ amount: state.amount - 1 })), 
    resetAmount: () => set({ amount: 1 }),
}));
```


### 注文された商品(id, amount, price)とトッピング(id, amount, price)を管理するストア(useOrderStore)
``` ts 
export const customizeReducer = (action: CustomizeAction, prev?: Order,): Order | undefined => {
    const state = prev;

    switch (action.type) {
        case INITIALIZE:
            if (state === undefined) {
                return {
                    product: { id: action.payload, amount: 1, price: action.price },
                    options: [],
                };
            }
            break;

        case INCREASE_AMOUNT:
            if (state === undefined) {
                return state;
            }
            state.product.amount += 1;
            break;

        case DECREASE_AMOUNT:
            if (state === undefined) {
                return state;
            }
            state.product.amount -= 1;
            break;

        case REPLACE:
            if (state === undefined) {
                return state;
            }
            state.options = action.payload;
            break;

        case DISPERSION: 
            return undefined;

        default: {
            const _: never = action;
        }
    }
    return state;
};

export const useOrderStore = create<OrderQueryDispatcher>((set) => ({
  query: undefined,
  dispatch: (action) =>
    set((state) => {
      return { query: customizeReducer(action, state.query) };
    }),
}));
```


# データの流れ 
## MenuDetail (getData)
　　　　　　　↓
#### TopNav (getData.name)
#### MenuDescription (data)