/* eslint-disable react/prop-types */
const TeamCard = ({ nama, jabatan, pesan, gambar }) => {
  return (
    <div className="flex flex-col w-1/4 h-fit bg-white gap-4 mx-auto group max-lg:w-full">
      <div className="w-full h-48 relative overflow-hidden flex items-end">
        <div className="w-full justify-center flex absolute -bottom-16 group-hover:-bottom-12 mx-autol">
          <img src={gambar} alt="" className="scale-full" />
        </div>
        <div className="w-full h-3/4 bg-yellow-500 group-hover:bg-yellow-600"></div>
      </div>
      <div className="flex flex-col px-4 pb-6 justify-center text-black">
        <h1 className="font-semibold text-2xl">{nama}</h1>
        <h2 className="font-medium text-lg">{jabatan}</h2>
        <p className="font-normal text-md text-left w-full pt-4">{pesan}</p>
      </div>
    </div>
  );
};

export default TeamCard;
