import classes from "./AvailableMeals.module.css";
import Card from "../UI/Cards";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Lo Mein",
    description: "Special Lo Mein, with choice of chicken, shrimp, pork or beef",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chicken Dumplings",
    description: "Special chicken dumplings.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Kebab",
    description: "Juicy chunks of beef on a stick, filipino style",
    price: 12.99,
  },
  {
    id: "m4",
    name: "General Tso's /chicken",
    description: "Crispy, saucy nuggets of chicken",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
