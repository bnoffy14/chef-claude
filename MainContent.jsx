import { useState } from "react";

export default function MainContent() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

    const ingredientListItems =  ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function addIngredient(formData){
        
        console.log("Form submitted");
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <main>
            
            <form className="ingredient-form" action={addIngredient}>
                <input
                    name="ingredient"
                    type="text"
                    placeholder="e.g Oregano"
                    aria-label="Add ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            <ul className="ingredient-list">
               {ingredientListItems}
            </ul>
        </main>
    );
}