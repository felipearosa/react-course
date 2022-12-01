import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-course-e2fa3-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const meals = await response.json();

      const finalMeals = [];

      for (const key in meals) {
        finalMeals.push(<MealItem id={key} key={key} name={meals[key].name} description={meals[key].description} price={meals[key].price} />)
      }
      setMeals(finalMeals);
      setIsLoading(false);
    }

    fetchMeals().catch(err => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, [])


  if (httpError) {
    return (
      <section className={classes['http-error']} >
        <p>{httpError}</p>
      </section>
    )
  }

  if (isLoading) {
    return (
      <section className={classes['meals-loading']} >
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <div className={classes.meals}>
      <ul>
        <Card>
          {meals}
        </Card>
      </ul>
    </div>
  )
}

export default AvailableMeals
