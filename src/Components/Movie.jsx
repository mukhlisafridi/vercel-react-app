import react from "react";
const Movie = ({allMovies,loading}) => {
  return (
    <div>
      {
        loading ?
        <div className='flex justify-center '>
          <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
        </div>
        :<div className="main flex px-5 flex-wrap  ">
        {
         allMovies.map((items,index)=>{
           const{Poster,Title,Year} = items
           return(
             <div key={index} className=" child lg:w-1/4 w-full p-2 my-3 ">
             <div className="subchild  bg-[#40407a] p-3 rounded-3xl">
               <img
                 className="w-full rounded-2xl mb-2"
                 src={Poster}
                 alt=""
               />
               <h2 className="text-white text-2xl">{Title}</h2>
               <h2 className="text-white text-lg">Year :{Year}</h2>
             </div>
           </div>
           )
         })
        }
         
       </div>
      }
      
    </div>
  );
};

export default Movie;
