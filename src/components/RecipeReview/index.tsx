import { useState } from 'react';
import Image from 'next/image';

interface RecipeReviewProps {
  rating: number;
  cookingTime: number;
  difficultyLevel: number;
  maxDifficultyLevel: number;
}

const RecipeReview: React.FC<RecipeReviewProps> = ({ rating, cookingTime, difficultyLevel, maxDifficultyLevel }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const difficultyArray = Array.from({ length: maxDifficultyLevel }, (_, index) => index < difficultyLevel);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="flex flex-col items-center mt-2">
      <div className="flex items-center space-x-4">
        {/* Bintang-bintang */}
        <div className="flex space-x-1">
          {Array.from({ length: 5 }, (_, index) => (
            <Image
              key={index}
              src="/assets/star.png"
              width={14}
              height={14}
              alt="Star"
              className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>

        {/* Timer */}
        <div className="flex items-center">
          <Image src="/assets/timer-1.svg" width={22.67} height={22.67} alt="Cooking Time" className="w-4 h-4" style={{ width: '22.67px', height: '22.67px', filter: 'grayscale(400%)' }}/>
          <span className="ml-1 mr-6 text-gray-400">{cookingTime} menit</span>
        </div>

        {/* Topi Koki */}
        <div className="flex items-center">
          {difficultyArray.map((isActive, index) =>
            isActive ? (
              <div key={index} className="mr-0.5">
                <Image
                  src="/assets/topikoki.png"
                  width={18.98}
                  height={17.79}
                  alt="Topi Koki"
                  className="w-4 h-4"
                />
              </div>
            ) : null
          )}
        </div>

        {/* Icon Bookmark atau Rectangle Icon */}
        <button onClick={toggleBookmark} className="relative" style={{ width: '22.67px', height: '22.67px', borderRadius: '16px 0 0 0' }}>
          {bookmarked ? (
            <div className="relative" style={{ width: '22.67px', height: '22.67px', borderRadius: '16px 0 0 0' }}>
              <Image
                src="/assets/rectangle.png"
                alt="Rectangle Icon"
                width={22.67}
                height={22.67}
                className="w-full h-full"
              />
              {/* Huruf "i" Kecil */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  style={{
                    width: '6px',
                    height: '13px',
                    color: '#109F79',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 700,
                    lineHeight: '16.94px',
                    letterSpacing: '0.1px',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  i
                </div>
              </div>
            </div>
          ) : (
            <Image
              src="/assets/bookmark.png"
              alt="Bookmark Icon"
              width={22.67}
              height={22.67}
              className="w-full h-full"
              style={{ fill: '#097659' }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default RecipeReview;
