// Definition of an item. This definition should be used if it can be used in your solution
class Item {
  constructor(gtin, name, productImageUrl, content, unit) {
    this.gtin = gtin;
    this.name = name;
    this.productImageUrl = productImageUrl;
    this.content = content;
    this.unit = unit;
    this.itemSet = [];
  }

  contentString() {
    return `${this.content} ${this.unit}`;
  }

  addSet(count, date) {
    this.itemSet.push({ count, date });
  }

  getNumberOfItemSets() {
    return this.itemSet.length;
  }

  getItemSet(i) {
    return this.itemSet[i];
  }

  clearItemSet() {
    this.itemSet = [];
  }
}

// Define some example products. Data is taken from openfoodfacts.org
const items = [
  new Item(
    4003586104892,
    "Kessel Chips Cross Cut Ranch",
    "https://static.openfoodfacts.org/images/products/400/358/610/4892/front_de.16.100.jpg",
    120,
    "g"
  ),
  new Item(
    5000328237503,
    "Salsa picante frasco",
    "https://static.openfoodfacts.org/images/products/500/032/823/7503/front_fr.41.100.jpg",
    326,
    "g"
  ),
  new Item(
    4029764001807,
    "CLUB-MATE",
    "https://static.openfoodfacts.org/images/products/402/976/400/1807/front_de.110.100.jpg",
    500,
    "ml"
  ),
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
