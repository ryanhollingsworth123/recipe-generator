export default function RecipeDisplay({ recipe }) {

  const [title, ingredientsText, instructionsText] = recipe
    .split(/#### Ingredients:|#### Instructions:/)
    .map((s) => s.trim());

  const ingredients = ingredientsText
    ? ingredientsText
        .split("\n")
        .filter((line) => line.startsWith("-"))
        .map((line) => line.slice(2).trim())
    : [];

  const instructions = instructionsText
    ? instructionsText
        .split("\n")
        .filter((line) => /^\d+\./.test(line))
        .map((line) => line.replace(/^\d+\.\s*/, "").trim())
    : [];

  return (
    <div>
      <h2>{title}</h2>

      {ingredients.length > 0 && (
        <>
          <h3>Ingredients</h3>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {instructions.length > 0 && (
        <>
          <h3>Instructions</h3>
          <ol>
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}