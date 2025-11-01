import "./App.css";
import CardList from "./components/CardList";
import type { CardItemType } from "./types/CardItemType";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAddToCart = (price: number) => {
    setCartCount((prev) => prev + 1);
    setTotal((prev) => prev + price);
  };

  const foodList: CardItemType[] = [
    {
      id: 1,
      image:
        "https://www.kfcpakistan.com/images/87ef3cb0-7be7-11f0-a76e-319aa2038f18-1-2025-08-18035759.png",
      name: "Value Bucket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum",
      price: 2000,
    },
    {
      id: 2,
      image:
        "https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png",
      name: "Family Festival 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum",
      price: 2590,
    },
    {
      id: 3,
      image:
        "https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9442-f17609a5500f-XtremeDuoBoxcopy-2025-08-11075548.png",
      name: "Xtreme Duo Box",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum",
      price: 2590,
    },
    {
      id: 4,
      image:
        "https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png",
      name: "Zinger Box",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum",
      price: 2590,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-end items-center mb-6">
        <div className="flex items-center gap-6">
          <div className="text-gray-700 font-semibold">
            Total: Rs. {total}
          </div>

          <div className="relative">
            <svg
              className="w-8 h-8 text-red-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 4h-2l-3 9v2h2a1 1 0 001 1h10a1 1 0 001-1h2v-2l-3-9h-2l1.5 4h-9l1.5-4zm0 6h10l1 3h-12l1-3zM7 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
      <CardList items={foodList} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
