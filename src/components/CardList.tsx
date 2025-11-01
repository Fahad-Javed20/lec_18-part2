import type { CardItemType } from "../types/CardItemType";
import CardItem from "./CardItem";

interface CardListProps {
  items: CardItemType[];
}

const CardList = ({ items }: CardListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-7 pb-16">
      {items.map((item, index) => (
        <CardItem
          key={index}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CardList;
