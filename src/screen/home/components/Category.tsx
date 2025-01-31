import Button from "@/parts/components/Button.tsx";
import { categoryStyle } from "@/screen/home/components/style/Category.css.ts";
import type { BasicCategory } from "@/types.ts";

type CategoryProps = {
  idx: number;
  selectedCategoryId: number | undefined;
  setSelectedCategoryId: (id: number) => void;
  category: BasicCategory;
};

function Category({
  idx,
  selectedCategoryId,
  setSelectedCategoryId,
  category,
}: CategoryProps) {
  return (
    <Button
      name={category.name}
      style={
        selectedCategoryId === idx
          ? categoryStyle.selected
          : categoryStyle.category
      }
      execute={() => setSelectedCategoryId(idx)}
    />
  );
}

export default Category;
