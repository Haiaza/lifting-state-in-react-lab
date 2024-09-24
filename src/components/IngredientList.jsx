// src/components/IngredientList.jsx
const IngredientList = (props) => {
    console.log(props.ingredients)
    return(
        <>
            <ul className="ingredient-list">
            {props.ingredients.map((ingredient, index) => (
                <>
                <li style={{backgroundColor: ingredient.color}} key={index}>{ingredient.name}</li><button>+</button>
                </>
            ))}
            </ul>
        </>
    );
};

export default IngredientList;
