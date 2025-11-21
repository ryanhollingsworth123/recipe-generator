import { useState } from "react"

export default function App() {
  const [ingredients, setIngredients] = useState("")
  const [recipe, setRecipe] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("my backend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients }),
      });

      const data = await response.json()
      setRecipe(data.recipe);
    } catch (error) {
      console.error("Error", error)
      setRecipe("Failed to get recipe. Try again.");
    }

    setLoading(false)
  }

  return (
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h1>Recipe Generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter ingredients, separated by commas"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={5}
          style={{ width: "100%", padding: "0.5rem" }}
        />
        <button type="submit" style={{ marginTop: "1rem" }}>
          {loading ? "Generating..." : "Get Recipe"}
        </button>
      </form>

      {recipe && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Recipe</h2>
          <p>{recipe}</p>
        </div>
      )}
    </div>
  )
}
