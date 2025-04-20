import FoodCard from "../Popular/FoodCard"; // Import your existing FoodCard component
import "./Menu.css";

const CategoryCard = ({ category, items }) => {
  return (
    <div className="category">
      <h3 className="category-title">{category}</h3>
      <div className="food-list">
        {items.map((food) => (
          <FoodCard key={food.id} {...food} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
