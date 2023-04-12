import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
import {useEffect, useState} from "react";

const AvailableMeals = () => {
  const [melas, setMelas] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [httpError, setHttpError] = useState(null);


  useEffect(() => {

    const fetchMeals = async () => {
      setIsloading(true);
      const response = await fetch('https://react-http-71c82-default-rtdb.firebaseio.com/bs.json');

      if (!response.ok) {
        throw new Error('SomeThing went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMelas(loadedMeals);
      setIsloading(false);
    };

    fetchMeals().catch((e) => {
      setIsloading(false);
      setHttpError(e.message);
    });

  }, []);

  if (isloading) {
    return <section className={classes.MealsLoading}><p>Loading...</p></section>
  }

  if (httpError) {
    return <section className={classes.MealsError}><p>{httpError}</p></section>
  }


  const mealList = melas.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
      <section className={classes.meals}>
        <Card>
          {mealList}
        </Card>
      </section>
  );
}

export default AvailableMeals;