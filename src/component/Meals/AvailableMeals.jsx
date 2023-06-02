import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
    ]; 

export const AvailableMeals = () => {
    const mealList =  DUMMY_MEALS.map((meal)=>
        <MealsItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
    );

    return (
    <section className={classes.meals}>
        <Card> {/* //감싸주는 형태는 컴퍼넌트 자식을 받아옴 */}
            <ul>
                {mealList}
            </ul>
        </Card>
    </section>
    )
}
