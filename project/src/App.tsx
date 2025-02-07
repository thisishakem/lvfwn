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
                  src="image/jpeg;base64,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w=600&auto=format&fit=crop&q=80"
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
