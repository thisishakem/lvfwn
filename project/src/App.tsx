import React, { useState, useRef } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const celebrationGifs = [
    "https://media.giphy.com/media/tpVKvAabWt3G5csMkT/giphy.gif?cid=790b7611ipr7vvy2w49tsjou0q6vmw1ao0vobzj995e81suv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif?cid=ecf05e47ffwnb0iafovli629z9js2ohnq124hqycp567yzm8&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXByN3Z2eTJ3NDl0c2pvdTBxNnZtdzFhbzB2b2J6ajk5NWU4MXN1diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/c76IJLufpNwSULPk77/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXByN3Z2eTJ3NDl0c2pvdTBxNnZtdzFhbzB2b2J6ajk5NWU4MXN1diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l4pTdcifPZLpDjL1e/giphy.gif",
    "https://media.giphy.com/media/9d3LQ6TdV2Flo8ODTU/giphy.gif?cid=790b7611ipr7vvy2w49tsjou0q6vmw1ao0vobzj995e81suv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/4N1wOi78ZGzSB6H7vK/giphy.gif?cid=790b7611ipr7vvy2w49tsjou0q6vmw1ao0vobzj995e81suv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/3odxXG6oUNRVhsdcLK/giphy.gif?cid=790b7611ipr7vvy2w49tsjou0q6vmw1ao0vobzj995e81suv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/Kg5Q7JSJiV0XgrJVRc/giphy.gif?cid=790b7611ipr7vvy2w49tsjou0q6vmw1ao0vobzj995e81suv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/7vDoUoDZHoUQxMPkd7/giphy.gif?cid=ecf05e472o6aqs5b2gu2tax266zv7sxjmueb1d70u54m9ue9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/RB46T9ysjzDEs/giphy.gif?cid=ecf05e472o6aqs5b2gu2tax266zv7sxjmueb1d70u54m9ue9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/jIL3lq9Ah00tG/giphy.gif?cid=ecf05e47mi0fqptqo40h9g2ur95ue7ltmabukeknwotxbcm5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/jYMiLeCw11vI0dprM9/giphy.gif?cid=ecf05e47mi0fqptqo40h9g2ur95ue7ltmabukeknwotxbcm5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/xUA7aWi4gtOdAaX9q8/giphy.gif?cid=ecf05e472plbeh6xvh9tb8oxt1c8qu8koqydpy5xoy9pfck7&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    
  ];

  const moveNoButton = () => {
    if (containerRef.current && noButtonRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = noButtonRef.current.getBoundingClientRect();
      
      const maxX = containerRect.width - buttonRect.width;
      const maxY = containerRect.height - buttonRect.height;
      
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      
      setNoButtonPosition({ x: newX, y: newY });
    }
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  const handleGifClick = () => {
    setCurrentGifIndex((prevIndex) => 
      prevIndex === celebrationGifs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 p-4 md:p-8">
      <div 
        ref={containerRef}
        className="relative max-w-2xl mx-auto min-h-[90vh] md:min-h-[80vh] flex flex-col items-center justify-center"
      >
        {/* Decorative Frame */}
        <div className="absolute inset-0 border-[16px] md:border-[24px] rounded-[2rem] border-white/80 backdrop-blur-sm shadow-2xl">
          <div className="absolute inset-0 border-4 md:border-8 border-pink-200 rounded-xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
          {!accepted ? (
            <>
              <Heart className="w-16 h-16 md:w-20 md:h-20 text-red-500 animate-pulse mb-4 md:mb-8" />
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-4 md:mb-6">
                Will you be hakem's Valentine?
              </h1>
              
              <div className="relative w-full aspect-video max-w-md mb-6 md:mb-8 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80"
                  alt="Red roses"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
              </div>

              <div className="flex gap-4 items-center justify-center mt-4 md:mt-8">
                <button
                  onClick={handleYesClick}
                  className="px-6 md:px-8 py-3 md:py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-lg md:text-xl transform hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Yes! ❤️
                </button>
                <button
                  ref={noButtonRef}
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  style={{
                    position: 'absolute',
                    left: `${noButtonPosition.x}px`,
                    top: `${noButtonPosition.y}px`,
                    transition: 'all 0.2s ease-out',
                  }}
                  className="px-6 md:px-8 py-3 md:py-4 bg-gray-200 text-gray-800 font-bold rounded-full text-lg md:text-xl hover:bg-gray-300"
                >
                  No
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <Heart className="w-24 h-24 md:w-32 md:h-32 text-red-500 mx-auto mb-6 md:mb-8 animate-bounce" />
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                You made me the happiest person in the world! ❤️
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                I promise to make this Valentine's Day special!
              </p>
              <div 
                className="relative w-full aspect-video max-w-md mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={handleGifClick}
              >
                <img
                  src={celebrationGifs[currentGifIndex]}
                  alt="Celebration hearts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent"></div>
                <div className="absolute bottom-2 right-2 text-white text-sm bg-black/30 px-2 py-1 rounded-full">
                  Click to change ✨
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
