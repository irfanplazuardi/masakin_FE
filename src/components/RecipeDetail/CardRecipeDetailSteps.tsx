import Image from "next/image";

interface CardRecipeDetailStepsProps {
  stepText: string;
  imageUrl: string;
}

const CardRecipeDetailSteps: React.FC<CardRecipeDetailStepsProps> = ({
  stepText,
  imageUrl,
}) => {
  return (
    <div
      className="flex flex-col items-start p-2"
      style={{
        width: "320px",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF", // Background color white
        opacity: 1,
      }}
    >
      <div
        className="flex flex-col items-start"
        style={{
          backgroundColor: "#FFFFFF", // Background color white for text container
          padding: "8px",
          borderRadius: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Optional: shadow for better visibility
        }}
      >
        <span
          className="font-inter text-sm font-medium"
          style={{
            width: "181px",
            height: "20px",
            lineHeight: "15.73px",
            letterSpacing: "0.1px",
            textAlign: "left",
            color: "#000000",
            display: "block",
            marginBottom: "8px", // Margin to separate from the image
          }}
        >
          {stepText}
        </span>
      </div>
      <Image
        src={imageUrl}
        alt="Step Image"
        width={111}
        height={74}
        style={{
          borderRadius: "10px 0px 0px 0px",
          marginTop: "8px", // Adjust margin as needed
          backgroundColor: "#FFFFFF", // Background color white for the image
        }}
      />
    </div>
  );
};

export default CardRecipeDetailSteps;
