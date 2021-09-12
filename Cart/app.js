import CartItem from "./CartItem.js";
import Cart from "./Cart.js";
import UUID from "./UUID.js";

const uuid = new UUID();

//create cart item
const ball = new CartItem("ball", "sport", 100, 30, uuid.generateID());
const backpack = new CartItem("backpack", "sport", 230, 50, uuid.generateID());
const gloves = new CartItem("gloves", "sport", 120, 20, uuid.generateID());
//create cart
const cart = new Cart(uuid.generateID(), [], 50, "code");


