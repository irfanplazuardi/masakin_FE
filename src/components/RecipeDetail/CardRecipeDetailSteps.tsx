import Image from "next/image";

interface CardRecipeDetailStepsProps {
  stepText: string;
  imageUrl1: string | null;
  imageUrl2: string | null;
}

const CardRecipeDetailSteps: React.FC<CardRecipeDetailStepsProps> = ({
  stepText,
  imageUrl1,
  imageUrl2,
}) => {
  return (
    <div
      className="flex flex-col items-start p-4"
      style={{
        width: "320px",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        opacity: 1,
      }}
    >
      <div
        className="flex flex-col items-start mb-4"
        style={{
          backgroundColor: "#FFFFFF", // Background color white for text container
          padding: "8px",
          borderRadius: "10px",
        }}
      >
        <span
          className="font-inter text-sm font-medium"
          style={{
            lineHeight: "1.5",
            letterSpacing: "0.1px",
            textAlign: "left",
            color: "#000000",
          }}
        >
          {stepText}
        </span>
      </div>
      <div
        className="flex justify-between"
        style={{
          width: "100%",
        }}
      >
        {imageUrl1 && (
          <Image
            src={imageUrl1}
            alt="Step Image 1"
            width={150}
            height={100}
            style={{
              borderRadius: "10px",
              backgroundColor: "#FFFFFF", // Background color white for the image
            }}
          />
        )}
        {imageUrl2 && (
          <Image
            src={imageUrl2}
            alt="Step Image 2"
            width={150}
            height={100}
            style={{
              borderRadius: "10px",
              backgroundColor: "#FFFFFF",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CardRecipeDetailSteps;
