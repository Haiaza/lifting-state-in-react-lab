// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {

    const handleRemoval = (event) => {
        event.preventDefault()
        props.removeFromBurger(event.target)
    }

    return (
        <>
            <ul>
            {props.stack.map((ingredient, index) => (
                <form onSubmit={handleRemoval} key={index}>
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