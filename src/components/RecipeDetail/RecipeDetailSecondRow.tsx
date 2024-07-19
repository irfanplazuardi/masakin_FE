import React from "react";
import Image from "next/image";

const RecipeDetailSecondRow: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full mt-2">
      <button
        className="text-green-600 rounded-lg flex justify-center items-center border-0 bg-white"
        style={{ width: "104px", height: "33px", borderRadius: "10px" }}
      >
        <span
          className="flex items-center"
          style={{
            fontFamily: "Poppins",
            fontSize: "11px",
            fontWeight: 600,
            lineHeight: "16.5px",
            textAlign: "center",
            color: "#000000",
          }}
        >
          <Image
            src="/assets/tutup-saji.png"
            alt="Tutup Saji"
            width={16}
            height={16}
            className="mr-1"
          />
          4 porsi
        </span>
      </button>
      <button
        className="text-green-600 rounded-lg flex justify-center items-center border-0 bg-white"
        style={{ width: "104px", height: "33px", borderRadius: "10px" }}
      >
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "11px",
            fontWeight: 600,
            lineHeight: "16.5px",
            textAlign: "center",
            color: "#000000",
          }}
        >
          Masakan
        </span>
      </button>
      <button
        className="text-green-600 rounded-lg flex justify-center items-center border-0 bg-white"
        style={{ width: "104px", height: "33px", borderRadius: "10px" }}
      >
        <span
          style={{
            fontFamily: "Poppins",
            fontSize: "11px",
            fontWeight: 600,
            lineHeight: "16.5px",
            textAlign: "center",
            color: "#000000",
          }}
        >
          12 bahan
        </span>
      </button>
    </div>
  );
};

export default RecipeDetailSecondRow;
