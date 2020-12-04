import Item from "./Item";

// Define some example products. Data is taken from openfoodfacts.org
const items = [
  new Item({
    gtin: "4003586104892",
    name: "Kessel Chips Cross Cut Ranch",
    productImageUrl:
      "https://static.openfoodfacts.org/images/products/400/358/610/4892/front_de.16.100.jpg",
    content: 120,
    unit: "g",
  }),
  new Item({
    gtin: "5000328237503",
    name: "Salsa picante frasco",
    productImageUrl:
      "https://static.openfoodfacts.org/images/products/500/032/823/7503/front_fr.41.100.jpg",
    content: 326,
    unit: "g",
  }),
  new Item({
    gtin: "4029764001807",
    name: "CLUB-MATE",
    productImageUrl:
      "https://static.openfoodfacts.org/images/products/402/976/400/1807/front_de.110.100.jpg",
    content: 500,
    unit: "ml",
  }),
];

// Add some expiration dates
items[0].clearItemSet();
items[0].addSet(5, new Date());
items[0].addSet(2, new Date("August 19, 2019 23:15:30"));
items[0].addSet(3, new Date("December 24, 2020 20:15:00"));

items[1].clearItemSet();
items[1].addSet(1, new Date("September 01, 2020 20:15:30"));

items[2].clearItemSet();
items[2].addSet(1, new Date("August 01, 2020 20:15:30"));
items[2].addSet(1, new Date("March 01, 2021 20:15:30"));

export default items;
