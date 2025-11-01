import "./App.css";
import CardList from "./components/CardList";
import type { CardItemType } from "./types/CardItemType";

function App() {
  const foodList: CardItemType[] = [
    {
      id: 1,
      image:
        "https://www.kfcpakistan.com/images/87ef3cb0-7be7-11f0-a76e-319aa2038f18-1-2025-08-18035759.png",
      name: "Value Backet",
      description:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor consectetur adipisicing elit. Rerum",
      price: 2000,
    },
    {
      id: 2,
      image:
        "https://www.kfcpakistan.com/images/ff4103d0-9789-11f0-b6e5-d9c08b0eb28c-FamilyFestival3-2025-09-22075859.png",
      name: "Family Festival 3",
      description:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor consectetur adipisicing elit. Rerum",
      price: 2590,
    },
    {
      id: 3,
      image:
        "https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9442-f17609a5500f-XtremeDuoBoxcopy-2025-08-11075548.png",
      name: "Xtreme Duo Box",
      description:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor consectetur adipisicing elit. Rerum",
      price: 2590,
    },
    {
      id: 4,
      image:
        "https://www.kfcpakistan.com/images/4d334d30-7324-11f0-b22b-41b1303a1fa3-CrispyDuoBoxcopy-2025-08-07002019.png",
      name: "Xtreme Duo Box",
      description:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor consectetur adipisicing elit. Rerum",
      price: 2590,
    },
    {
      id: 5,
      image:
        "https://www.kfcpakistan.com/images/97a8fe70-7688-11f0-9442-f17609a5500f-XtremeDuoBoxcopy-2025-08-11075548.png",
      name: "Xtreme Duo Box",
      description:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor consectetur adipisicing elit. Rerum",
      price: 2590,
    },
    {
      id: 6,
      image:
        "https://www.kfcpakistan.com/images/4d334d30-7324-11f0-b22b-41b1303a1fa3-CrispyDuoBoxcopy-2025-08-07002019.png",
      name: "Xtreme Duo Box",
      description:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor consectetur adipisicing elit. Rerum",
      price: 2590,
    },
  ];

  return (
    <>
      <CardList items={foodList} />
    </>
  );
}

export default App;
