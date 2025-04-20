import "./popular.css";
import popularFoods from "../../Data/popularData";
import FoodCard from "./FoodCard";

const Popular = () => {
  return (
    <section id="menu" className="popular">
      <h2>Popular Dishes</h2>
      <div className="food-list">
        {popularFoods.map((food) => (
          <FoodCard key={food.id} {...food} />
        ))}
      </div>
    </section>
  );
};

export default Popular;
