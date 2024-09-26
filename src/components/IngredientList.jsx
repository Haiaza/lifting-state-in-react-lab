// src/components/IngredientList.jsx
const IngredientList = (props) => {
    console.log(props.ingredients)

    const handleAddition = (event, ingredient) => {
        event.preventDefault()
        props.addToBurger(ingredient)
    }

    return(
        <>
            <ul className="ingredient-list">
            {props.ingredients.map((ingredient, index) => (
                <form onSubmit={(e) => handleAddition(e, ingredient)} key={index}>
                    <li style={{backgroundColor: ingredient.color}} >{ingredient.name}
                        <button type="submit">+</button>
                    </li>
                </form>
            ))}
            </ul>
        </>
    );
};

export default IngredientList;
