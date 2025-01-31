import Category from "@/screen/home/components/Category.tsx";
import { categoriesStyle } from "@/screen/home/components/style/Categories.css.ts";
import type { BasicCategory } from "@/types.ts";

type CategoriesProps = {
  categories?: BasicCategory[];
  selected: number | undefined;
  setSelected: (id: number) => void;
};

function Categories({ categories, selected, setSelected }: CategoriesProps) {
  return (
    <div className={categoriesStyle.categories}>
      {categories?.map((category, index) => (
        <Category
          key={category.id}
          idx={index}
          category={category}
          selectedCategoryId={selected}
          setSelectedCategoryId={setSelected}
        />
      ))}
    </div>
  );
}

export default Categories;
