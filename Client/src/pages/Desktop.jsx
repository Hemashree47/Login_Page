import FrameComponent6 from "../components/FrameComponent6";
import Sidebar from "../components/Sidebar";
import RTDGraph from "../components/RTDGraph";
import SensorGraph from "../components/SensorGraph";
import Sensor1 from "../components/Sensor1";
import Sensor3 from "../components/Sensor3";
import Sensor2 from "../components/Sensor2";

const Desktop = () => {
  return (
    <div className="w-full h-[1084px] relative bg-ghostwhite overflow-hidden leading-[normal] tracking-[normal] text-left text-21xl text-black font-regular-16-24 mq450:h-auto mq450:min-h-[1084]">
      <div className="absolute top-[-131px] left-[246px] rounded-[50%] bg-pink w-[258px] h-[245px]" />
      <div className="absolute top-[398px] left-[296px] rounded-sm bg-white w-[364px] flex flex-col items-start justify-start pt-[30px] pb-5 pr-5 pl-[30px] box-border gap-[30px] max-w-full">
        <div className="w-[364px] h-[130px] relative rounded-sm bg-white hidden max-w-full" />
        <b className="w-[133px] relative leading-[24px] inline-block z-[1] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">
          47 ML
        </b>
        <b className="w-[91px] relative text-xl leading-[26px] font-bold inline-block z-[1] mq450:text-base mq450:leading-[19px]">
          RTD L1
        </b>
      </div>
      <div className="absolute top-[398px] left-[719px] rounded-sm bg-white w-[364px] flex flex-col items-start justify-start pt-[31px] pb-7 pr-5 pl-[33px] box-border gap-[23px] max-w-full">
        <div className="w-[364px] h-[130px] relative rounded-sm bg-white hidden max-w-full" />
        <b className="relative leading-[24px] inline-block min-w-[126px] z-[1] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">
          47 ML
        </b>
        <b className="w-[91px] relative text-xl leading-[24px] font-bold inline-block z-[1] mq450:text-base mq450:leading-[19px]">
          RTD L2
        </b>
      </div>
      <div className="absolute top-[398px] left-[1128px] rounded-sm bg-white w-[364px] flex flex-col items-start justify-start pt-8 pb-7 pr-5 pl-[26px] box-border gap-[22px] max-w-full">
        <div className="w-[364px] h-[130px] relative rounded-sm bg-white hidden max-w-full" />
        <b className="w-[133px] relative leading-[24px] inline-block z-[1] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">
          47 ML
        </b>
        <div className="w-[109px] flex flex-row items-start justify-start py-0 px-[9px] box-border text-xl">
          <b className="flex-1 relative leading-[24px] font-bold z-[1] mq450:text-base mq450:leading-[19px]">
            RTD L3
          </b>
        </div>
      </div>
      <img
        className="absolute top-[calc(50%_+_96px)] left-[calc(50%_-_747px)] w-[203px] h-[83px] object-contain hidden"
        alt=""
        src="/logo4-1@2x.png"
      />
      <FrameComponent6 />
      <div className="absolute top-[950px] left-[-132px] rounded-[50%] bg-gainsboro w-[268px] h-[268px] mix-blend-color-dodge z-[3]" />
      <div className="absolute top-[122px] left-[1429px] rounded-[50%] bg-primary-color w-[268px] h-[268px] mix-blend-soft-light z-[3]" />
      <Sidebar />
      <h1 className="m-0 absolute top-[145px] left-[296px] text-inherit leading-[32px] font-extrabold font-inherit text-default-black mq450:text-5xl mq450:leading-[19px] mq750:text-13xl mq750:leading-[26px]">
        Dashborad
      </h1>
      <b className="absolute top-[593px] left-[296px] text-13xl leading-[32px] font-semibold text-default-black inline-block min-w-[95px] mq450:text-lgi mq450:leading-[19px] mq750:text-[26px] mq750:leading-[26px]">
        Graph
      </b>
      <RTDGraph />
      <SensorGraph />
      <Sensor1 />
      <Sensor3 />
      <Sensor2 />
    </div>
  );
};

export default Desktop;
