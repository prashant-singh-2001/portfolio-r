import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Certificates = () => {
  // const flipCards = [
  //   { id: 1, isFlipped: false },
  //   { id: 2, isFlipped: false },
  //   { id: 3, isFlipped: false },
  //   { id: 4, isFlipped: false },
  //   { id: 5, isFlipped: false },
  //   { id: 6, isFlipped: false },
  //   { id: 7, isFlipped: false },
  // ];
  // function flipIt(id) {
  //   for (var i = 0; i < flipCards.length; i++) {
  //     if (flipCards[i].id === id) {
  //       flipCards[i].isFlipped = !flipCards[i].isFlipped;
  //     }
  //   }
  // }
  // return (
  //   <div
  //     name="certificates"
  //     className="w-full h-screen bg-gradient-to-b from-gray-800 to-black via-gray-900 text-white pt-20 md:pt-0"
  //   >
  //     <div className="max-w-screen-lg  md:pt-0 p-4 mx-auto flex flex-col justify-center w-full h-full">
  //       <div className="pb-4 md:pd-8 text-center md:text-left ">
  //         <p className="text-3xl font-bold inline border-b-4 border-gray-400">
  //           Certificates, Badges & More
  //         </p>
  //         <div className="p-4 bg-opacity-20 bg-gray-950 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center py-8  px-12 sm:px-0">
  //           {flipCards.map((e) => (
  //             <ReactCardFlip
  //               flipDirection="horizontal"
  //               isFlipped={e.isFlipped}
  //               key={e.id}
  //             >
  //               <div
  //                 className="bg-teal-500 w-20 h-20  border-4 border-x-white border-y-yellow-300 cursor-pointer flex justify-center items-center text-5xl"
  //                 onClick={() => {
  //                   flipIt(e.id);
  //                 }}
  //               >
  //                 Front
  //               </div>
  //               <div
  //                 className="bg-teal-500 w-20 h-20 border-4 border-y-white border-x-yellow-300 cursor-pointer flex justify-center items-center text-5xl"
  //                 onClick={() => {
  //                   flipIt(e.id);
  //                 }}
  //               >
  //                 Back
  //               </div>
  //             </ReactCardFlip>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  const [flipCards, setFlipCards] = useState([
    { id: 1, isFlipped: false },
    { id: 2, isFlipped: false },
    { id: 3, isFlipped: false },
    { id: 4, isFlipped: false },
    { id: 5, isFlipped: false },
    { id: 6, isFlipped: false },
    { id: 7, isFlipped: false },
  ]);

  function flipIt(id) {
    setFlipCards((prevFlipCards) =>
      prevFlipCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  }

  return (
    <div
      name="certificates"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black via-gray-900 text-white pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg  md:pt-0 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pd-8 text-center md:text-left ">
          <p className="text-3xl font-bold inline border-b-4 border-gray-400">
            Certificates, Badges & More
          </p>
          <div className="p-4 bg-opacity-20 bg-gray-950 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center py-8  px-12 sm:px-0">
            {flipCards.map((e) => (
              <ReactCardFlip
                flipDirection="horizontal"
                isFlipped={e.isFlipped}
                key={e.id}
              >
                <div
                  className="bg-teal-500 w-20 h-20  border-4 border-x-white border-y-yellow-300 cursor-pointer flex justify-center items-center text-5xl"
                  onClick={() => {
                    flipIt(e.id);
                  }}
                >
                  Front
                </div>
                <div
                  className="bg-teal-500 w-20 h-20 border-4 border-y-white border-x-yellow-300 cursor-pointer flex justify-center items-center text-5xl"
                  onClick={() => {
                    flipIt(e.id);
                  }}
                >
                  Back
                </div>
              </ReactCardFlip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
