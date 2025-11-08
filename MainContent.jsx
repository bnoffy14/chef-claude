import { useState } from "react";
import MockRecipe from './MockRecipe.jsx'

export default function MainContent() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

    const ingredientListItems =  ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    const [recipeShown, setRecipeShown] = useState(false);

    function addIngredient(formData){
        
        console.log("Form submitted");
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    function toggleRecipe(){
        setRecipeShown(!recipeShown);
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
            {/* <ul className="ingredient-list">
               {ingredientListItems}
            </ul> */}
             {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipe}>Get a recipe</button>
                </div>}
            </section>} 
            {recipeShown && <section><MockRecipe /></section>}
        </main>
    );
}