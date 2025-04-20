import CategoryCard from "./CategoryCard"; // Import CategoryCard
import menuData from "../../Data/menuData"; // Import menu data
import "./Menu.css";

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      {menuData.map((category, index) => (
        <CategoryCard
          key={index}
          category={category.category}
          items={category.items}
        />
      ))}
    </section>
  );
};

export default Menu;
