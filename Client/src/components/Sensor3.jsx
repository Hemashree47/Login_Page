import React from "react";
import PropTypes from 'prop-types'


const Sensor3 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[225px] left-[1128px] rounded-sm bg-white w-[364px] flex flex-row items-end justify-between pt-[33px] pb-[23px] pr-6 pl-[39px] box-border max-w-full gap-[20px] text-left text-xl text-black font-regular-16-24 ${className}`}
    >
      <div className="h-[130px] w-[364px] relative rounded-sm bg-white hidden max-w-full z-[0]" />
      <b className="absolute !m-[0] right-[69px] bottom-[16px] leading-[24px] font-bold inline-block min-w-[91px] z-[1] mq450:text-base mq450:leading-[19px]">
        Sensor 3
      </b>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
        <img
          className="w-[73px] h-[70px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/pngegg-1@2x.png"
        />
      </div>
      <div className="h-14 w-[133px] flex flex-col items-start justify-start text-21xl">
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <b className="h-14 flex-1 relative leading-[24px] inline-block z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">
            47
          </b>
          <img
            className="h-[46px] w-6 absolute !m-[0] top-[-17px] right-[54px] object-contain z-[3]"
            loading="lazy"
            alt=""
            src="/pngwing-1@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[23px] mt-[-53px]">
          <b className="relative leading-[24px] font-bold inline-block min-w-[31px] z-[4] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">
            C
          </b>
        </div>
      </div>
    </div>
  );
};

Sensor3.propTypes = {
  className: PropTypes.string,
};

export default Sensor3;
