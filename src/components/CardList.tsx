import CardItem from "./CardItem";
import type { CardItemType } from "../types/CardItemType";

interface CardListProps {
  items: CardItemType[];
  onAddToCart: (price: number) => void;
}

const CardList = ({ items, onAddToCart }: CardListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((item) => (
        <CardItem
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default CardList;
