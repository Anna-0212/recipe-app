function MyRecipesComponent({label, image, calories, ingredients}) {
    return(<div>
        <div className="container"> 
            <h2>{label}</h2>
        </div>
        <div className="container"> 
            <img src={image} className="image" alt="food"/>
        </div>
        <ul className="list">
            {ingredients.map(ingredient => (
                <li>
                    <img src="https://img.icons8.com/flat-round/512/checkmark.png" className="icon" alt="done"/>
                    {ingredient}</li>
            ))}
        </ul>
        <div className="container"> 
            <p>{calories.toFixed()} calories</p>
        </div>
        

    </div>)
}

export default MyRecipesComponent;
