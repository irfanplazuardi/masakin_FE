import React from 'react';

interface RecipeButtonvideoProps {
  videoUrl: string;
}

const RecipeButtonvideo: React.FC<RecipeButtonvideoProps> = ({ videoUrl }) => {
  return (
    <div className="flex justify-center my-4 mt-40">
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-bold transition duration-300 ease-in-out"
        style={{
          width: '324px',
          height: '34px',
          backgroundColor: '#DF1B4F',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        <div style={{
          width: '258px',
          height: '23px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Inter',
          fontSize: '13px',
          fontWeight: 500,
          lineHeight: '15.73px',
          letterSpacing: '0.1px',
          textAlign: 'center',
          gap: '0px'
        }}>
          Lihat Video Panduan Memasak
        </div>
      </a>
    </div>
  );
};

export default RecipeButtonvideo;
