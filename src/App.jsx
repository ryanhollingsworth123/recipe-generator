import { useState } from "react";
import ReactMarkdown from "react-markdown";
import foodImage from "./assets/foodplate.png"

export default function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://recipe-generator-backend-d1jx.onrender.com/api/recipe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ingredients }),
        }
      );

      const data = await response.json();
      setRecipe(data.recipe);
    } catch (error) {
      console.error("Error", error);
      setRecipe("Failed to get recipe. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="main-container">
      <header>
        <h1>Recipe Generator</h1>
        <img src={foodImage} alt="Delicious food"/>
      </header>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter ingredients, separated by commas"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={3}
          style={{ width: "100%", padding: "0.5rem" }}
        />
        <button type="submit" style={{ marginTop: "1rem" }}>
          {loading ? "Generating..." : "Get Recipe"}
        </button>
      </form>

      {recipe && (
        <div className="recipe-container">
          <ReactMarkdown>{recipe}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}