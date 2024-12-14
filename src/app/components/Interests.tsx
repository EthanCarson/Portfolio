import data from "../../../data/data.json"; // Import the JSON file

// Component props type
type InterestsProps = {
  children: keyof typeof data.Interests; // Restrict to valid keys
};

export default function Interests({ children }: InterestsProps) {
  const interest = data.Interests[children]; // Safe access now

  if (!interest) {
    console.error(`Interest data not found for key: ${children}`);
    return null; // Optionally render fallback UI here
  }

  return (
    <div>
      <img src={interest.image} alt={interest.ImgAlt} />
      <p>{interest.Description}</p>
    </div>
  );
}
