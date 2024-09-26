// src/components/IngredientList.jsx
const IngredientList = (props) => {
    console.log(props.ingredients)

    const handleAddition = (event) => {
        event.preventDefault()
        props.addToBurger('Test')
    }

    return(
        <>
            <ul className="ingredient-list">
            {props.ingredients.map((ingredient) => (
                <form onSubmit={handleAddition}>
                    <li style={{backgroundColor: ingredient.color}} key={ingredient.id}>{ingredient.name}
                    <button type="submit">+</button>
                    </li>
                </form>
            ))}
            </ul>
        </>
    );
};

export default IngredientList;
