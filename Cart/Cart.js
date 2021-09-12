export default class Cart {
  constructor(id, cartItemList, discount, discountCode) {
    this.id = id;
    this.cartItemList = cartItemList;
    this.discount = discount;
    this.discountCode = discountCode;
    
  }

  addItemtoCart(item) {
    this.cartItemList.push(item);
  }

  deleteItemFromCart(cartItem) {
    const newArr = this.cartItemList.filter((item) => item.id !== cartItem.id);

    this.cartItemList = newArr;
  }

  calculatePrice(code) {
    const sum = this.cartItemList.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );

    const sumWithDiscount = (this.discount / 100) * sum;

    if (code === this.discountCode) {
      return sumWithDiscount;
    } else return sum;
  }
}
