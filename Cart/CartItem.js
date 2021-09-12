export default class CartItem {
  constructor(name, category, price, discount, id) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.id = id;
    this.discountAmount = null;
  }

  getDiscountAmount() {
    this.discountAmount = (this.discount / 100) * this.price;

    return this.discountAmount;
  }

  modifyPrice() {
    const newPrice = this.price - (this.discount / 100) * this.price;

    this.price = newPrice;
  }

  setName(name) {
    this.name = name;
  }

  setPrice(price) {
    this.price = price;
  }

  setDiscount(discount) {
    this.discount = discount;
  }
}
