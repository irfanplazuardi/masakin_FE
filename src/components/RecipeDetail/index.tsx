import React, { useState } from 'react';

interface RecipeDetailProps {
  showIngredients: boolean;
  showTools: boolean;
  showSteps: boolean;
  onIngredientsClick: () => void; // Fungsi untuk menampilkan bahan-bahan
  onToolsClick: () => void; // Fungsi untuk menampilkan alat-alat
  onStepsClick: () => void; // Fungsi untuk menampilkan langkah-langkah
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ onIngredientsClick, onToolsClick, onStepsClick }) => {
  const [showIngredientsDetail, setShowIngredientsDetail] = useState(false);

  const toggleIngredientsDetail = () => {
    setShowIngredientsDetail(!showIngredientsDetail);
  };

  return (
    <div className="bg-white py-4 px-6 flex items-center justify-between" style={{ width: '324px', margin: '0 auto', gap: '10px', borderRadius: '10px 0px 0px 0px'}}>
      {/* Baris pertama dengan border dan background */}
      <button className="bg-green-600 text-white py-2 px-4 rounded-lg flex justify-center items-center" onClick={onIngredientsClick} style={{ width: '104px', height: '33px', borderRadius: '10px' }}>
        <span style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 600, lineHeight: '16.5px', textAlign: 'center', color: '#FFFFFF' }}>Bahan-bahan</span>
      </button>
      <button className="bg-green-600 text-white py-2 px-4 rounded-lg flex justify-center items-center" onClick={onToolsClick} style={{ width: '104px', height: '33px', borderRadius: '10px' }}>
        <span style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 600, lineHeight: '16.5px', textAlign: 'center', color: '#FFFFFF' }}>Alat-alat</span>
      </button>
      <button className="bg-green-600 text-white py-2 px-4 rounded-lg flex justify-center items-center" onClick={onStepsClick} style={{ width: '104px', height: '33px', borderRadius: '10px' }}>
        <span style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 600, lineHeight: '16.5px', textAlign: 'center', color: '#FFFFFF' }}>Cara Masak</span>
      </button>
      
      {/* Baris kedua tanpa border dan background putih */}
      {showIngredientsDetail && (
       <>
       <button className="text-green-600 py-2 px-4 rounded-lg flex justify-center items-center border-0 bg-white" style={{ width: '104px', height: '33px', borderRadius: '10px' }}>
         <span style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 600, lineHeight: '16.5px', textAlign: 'center', color: '#000000' }}>
           <img src="/assets/tutup-saji.png" alt="Tutup Saji" style={{ marginRight: '4px' }} />
           4 porsi
         </span>
       </button>
       <button className="text-green-600 py-2 px-4 rounded-lg flex justify-center items-center border-0 bg-white" style={{ width: '104px', height: '33px', borderRadius: '10px' }}>
         <span style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 600, lineHeight: '16.5px', textAlign: 'center', color: '#000000' }}>
           Masakan
         </span>
       </button>
       <button className="text-green-600 py-2 px-4 rounded-lg flex justify-center items-center border-0 bg-white" style={{ width: '104px', height: '33px', borderRadius: '10px' }}>
         <span style={{ fontFamily: 'Poppins', fontSize: '11px', fontWeight: 600, lineHeight: '16.5px', textAlign: 'center', color: '#000000' }}>
           12 bahan
         </span>
       </button>
     </>
     
      )}
    </div>
  );
}

export default RecipeDetail;
