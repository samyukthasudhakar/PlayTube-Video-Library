import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

 export const categories = [
  {
    _id: uuid(),
    category: "All"
  },
  {
    _id: uuid(),
    category: "Food"
  },
  {
    _id: uuid(),
    category: "Gardening"
  },
  {
    _id: uuid(),
    category: "Money"
  },
  {
    _id: uuid(),
    category: "Music"
  },
  {
    _id: uuid(),
    category: "Travel"
  },
];
