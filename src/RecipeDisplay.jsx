import ReactMarkdown from "react-markdown";

export default function RecipeDisplay({ recipe }) {
  return (
    <div className="recipe-container">
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  );
}