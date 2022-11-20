import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

    const MY_ID = "e037ef8f";
    const MY_KEY = "55499c31704b6fb0942653b077e73afb";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado")

    useEffect(async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data.hits);
    }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
    console.log(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className="search" placeholder='Search...' onChange={myRecipeSearch} value={mySearch} >
          </input>
        </form>
      </div>
      <div className='container'> 
        <button>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" className="icons" alt="search"/>
        </button>
      </div>
      <div className='container'> 
        {myRecipes.map(element => (
          <MyRecipesComponent 
          label={element.recipe.label} 
          image={element.recipe.image} 
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
