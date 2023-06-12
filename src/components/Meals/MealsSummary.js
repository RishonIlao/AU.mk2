import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome To AU</h2>
      <p>
        Choose from a selection of various Asian Foods to be delivered right to your front door step!
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
