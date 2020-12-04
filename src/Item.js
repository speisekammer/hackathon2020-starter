// Definition of an item. This definition should be used if it can be used in your solution
class Item {
  /**
    * @param {string} gtin Global Trade Item Number, see https://en.wikipedia.org/wiki/Global_Trade_Item_Number
    * @param {string} name Name of the product
     * @param {string} brand Brand of the product

    */
  constructor({ gtin, name, brand, productImageUrl, content, unit }) {
    this.gtin = gtin;
    this.name = name;
    this.brand = brand;
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

  getCount() {
    return this.itemSet.reduce((accumulatedValue, currentSet) => {
      return accumulatedValue + parseFloat(currentSet.count);
    }, 0);
  }

  clearItemSet() {
    this.itemSet = [];
  }
}

export default Item;
