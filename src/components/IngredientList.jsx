// src/components/IngredientList.jsx
const IngredientList = (props) => {
    console.log(props.ingredients)

    const handleAddition = (event) => {
        event.preventDefault()
        props.addToBurger(event.target)
    }

    return(
        <>
            <ul className="ingredient-list">
            {props.ingredients.map((ingredient, index) => (
                <form onSubmit={handleAddition} key={index}>
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
