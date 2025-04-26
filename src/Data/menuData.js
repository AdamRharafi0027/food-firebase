import pizza from '../../public/images/pizza.png'
import pizza1 from '../../public/images/pizza1.png'
import burger1 from '../../public/images/burger1.png'
import cola from '../../public/images/cola.png'


const menuData = [
    {
      category: "Pizza",
      items: [
        {
          id: 1,
          name: "Veggie Supreme",
          description: "Loaded with fresh vegetables and mozzarella.",
          price: "$8.99",
          image: pizza,
        },
        {
          id: 2,
          name: "Cheese Lover's Pizza",
          description: "A cheesy delight with a variety of cheeses.",
          price: "$9.99",
          image: pizza1,
        },
      ],
    },
    {
      category: "Burgers",
      items: [
        {
          id: 3,
          name: "Cheeseburger",
          description: "Juicy grilled beef patty with melted cheese.",
          price: "$5.99",
          image: burger1,
        },
        {
          id: 4,
          name: "Spicy Chicken Burger",
          description: "Crispy fried chicken with spicy mayo.",
          price: "$6.49",
          image: burger1,
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          id: 5,
          name: "Cola",
          description: "Refreshing cola served chilled.",
          price: "$1.99",
          image: cola
        },
        {
          id: 6,
          name: "Lemonade",
          description: "Freshly squeezed lemonade.",
          price: "$2.49",
          image: cola,
        },
      ],
    },
  ];
  
  export default menuData;
  