import AchievementsCarousel from "./achievmentCarousel";

export default function AchievmentsSection() {
  return (
    <div className="flex gap-9 pl-16 h-[517px] justify-center items-center overflow-hidden ">
      <div className="flex flex-col gap-6 w-1/2 px-4">
        <h1 className="font-bold text-3xl">
          Our journey to become world-class
        </h1>
        <p className="font-light text-md">
          Our team participated from national competition to international ones.
          We participated in Kontes Robot Terbang Indonesia, FIRA Air, and
          Tubitak Teknofest. We gained many achievements from 2015 until present
        </p>
        <button className="flex items-center justify-center w-fit text-white border-yellow-500 gap-5 px-5 py-3 border-2 hover:bg-yellow-500 hover:text-white hover:transition-all hover:duration-300">
          <p className="font-regular text-md ">Lihat Semua Pencapaian!</p>
        </button>
      </div>
      <AchievementsCarousel />
    </div>
  );
}
