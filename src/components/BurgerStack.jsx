// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {

    const handleRemoval = (event, ingredient, idx) => {
        event.preventDefault()
        props.removeFromBurger(ingredient, idx)
        // console.log(ingredient)
    }

    return (
        <>
            <ul>
            {props.stack.map((ingredient, index) => (
                <form onSubmit={(e) => handleRemoval(e, ingredient, index)} key={index}>
                    <li style={{backgroundColor: ingredient.color}} >{ingredient.name}
                        <button type="submit">-</button>
                    </li>
                </form>
            ))}
            </ul>
        </>
    );
};

export default BurgerStack;