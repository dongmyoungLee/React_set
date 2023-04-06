import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '수육국밥',
    description: 'crazy plain soup !',
    price: 9000,
  },
  {
    id: 'm2',
    name: '수육 해장라면',
    description: 'crazy spicy soup !  ',
    price: 10000,
  },
  {
    id: 'm3',
    name: '순대국밥',
    description: 'better than DAMSO !',
    price: 9000,
  },
  {
    id: 'm4',
    name: '물만두',
    description: 'k-good',
    price: 4000,
  },
];

const AvailableMeals = () => {

  const mealList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
      <section className={classes.meals}>
        <Card>
          {mealList}
        </Card>
      </section>
  );
}

export default AvailableMeals;