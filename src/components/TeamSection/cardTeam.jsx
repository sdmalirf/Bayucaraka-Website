/* eslint-disable react/prop-types */
const TeamCard = ({ nama, jabatan, pesan, gambar }) => {
  return (
    <div className="flex w-3/4 h-fit bg-white gap-9 shadow-xl mx-auto">
      <div className="flex flex-col items-end text-right justify-center gap-6 text-black">
        <h1 className="font-semibold text-3xl">{nama}</h1>
        <h2 className="font-medium text-xl">{jabatan}</h2>
        <p className="font-normal text-md text-right w-full">{pesan}</p>
      </div>
      <img src={gambar} alt="" className="w-80" />
    </div>
  );
};

export default TeamCard;
