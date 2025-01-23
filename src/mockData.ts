import Sample from "@/assets/sample.jpeg";
import type { BasicCategory, CounterActions, ProductModel } from "@/types.ts";

export const categoryData: BasicCategory[] = [
  { id: "1", name: "和食" },
  { id: "2", name: "洋食" },
  { id: "3", name: "中華料理" },
  { id: "4", name: "イタリアン" },
  { id: "5", name: "フレンチ" },
  { id: "6", name: "焼肉" },
  { id: "7", name: "寿司" },
  { id: "8", name: "カフェ" },
  { id: "9", name: "居酒屋" },
  { id: "10", name: "ファストフード" },
];

// export const menuData: ProductModel[] = [
//   { id: "1", name: "Spaghetti Carbonara", price: 1200, img: "", desc: "クリーミーなソースとベーコンが絡む絶品スパゲッティ" },
//   { id: "2", name: "Margherita Pizza", price: 1500, img: "", desc: "トマト、バジル、モッツァレラチーズが香る本格ピザ" },
//   { id: "3", name: "Caesar Salad", price: 800, img: "", desc: "新鮮野菜と特製ドレッシングが特徴のサラダ" },
//   { id: "4", name: "Grilled Salmon", price: 2000, img: "", desc: "香ばしく焼き上げたサーモンのステーキ" },
//   { id: "5", name: "Beef Steak", price: 3000, img: "", desc: "ジューシーで柔らかいビーフステーキ、特製ソース添え" },
//   { id: "6", name: "Chicken Curry", price: 1000, img: "", desc: "スパイスが効いた濃厚なチキンカレー" },
//   { id: "7", name: "Cheesecake", price: 600, img: "", desc: "濃厚で滑らかな口当たりのベイクドチーズケーキ" },
// ];

export const menuData: ProductModel[] = [
  {
    id: "1",
    name: "天ぷら盛り合わせ天ぷら盛り合わせ",
    price: 1500,
    img: Sample,
    desc: "旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット旬の野菜と海老をサクサクに揚げた天ぷらセット",
  },
  {
    id: "2",
    name: "寿司セット",
    price: 2500,
    img: "",
    desc: "新鮮な魚介を使用した職人こだわりの握り寿司",
  },
  {
    id: "3",
    name: "味噌ラーメン",
    price: 1000,
    img: Sample,
    desc: "濃厚味噌スープが自慢の北海道風ラーメン",
  },
  {
    id: "4",
    name: "牛丼",
    price: 800,
    img: "",
    desc: "柔らかい牛肉を甘辛いタレで煮込み、ご飯の上にたっぷりのせた一品",
  },
  {
    id: "5",
    name: "鰻重",
    price: 3000,
    img: Sample,
    desc: "ふっくら焼き上げた国産鰻を秘伝のタレで仕上げた贅沢な重箱",
  },
  {
    id: "6",
    name: "蕎麦セット",
    price: 1200,
    img: "",
    desc: "コシのある蕎麦に天ぷらや薬味がセットになった一品",
  },
  {
    id: "7",
    name: "抹茶アイス",
    price: 500,
    img: Sample,
    desc: "宇治抹茶を使用した濃厚な和風デザート",
  },
];

export const actionType: CounterActions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
