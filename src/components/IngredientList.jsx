// src/components/IngredientList.jsx
const IngredientList = (props) => {
    console.log(props.ingredients)
    return(
        <>
            <div>
            {props.ingredients.map((ingredient, index) => (
                <p key={index}>{ingredient.name}</p>
            ))}
            </div>
        </>
    );
};

export default IngredientList;
