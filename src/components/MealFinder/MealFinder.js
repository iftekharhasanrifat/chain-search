import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search,setSearch]=useState('');
    const [meals,setMeals] = useState([]);
    const handleChange = (event) => {
        setSearch(event.target.value);
        console.log(event.target.value);
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setMeals(data.meals))
    },[search])
    return (
        <div>
            <h1>Find Delicious Foods</h1>
            <input type="text" onChange={handleChange} name="" id="" placeholder="search food"/>
            <p>Searching : {search}</p>
            <p>Meal found : {meals?.length || 0}</p>
            <ul>
                {
                    meals?.map(meal=><li>{meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default MealFinder;