import React from "react";
import PropTypes from 'prop-types'


const Sensor1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[227px] left-[296px] rounded-sm bg-white w-[364px] flex flex-row items-end justify-start pt-[29px] px-[30px] pb-[26px] box-border gap-[54px] max-w-full text-left text-21xl text-black font-regular-16-24 ${className}`}
    >
      <div className="h-[130px] w-[364px] relative rounded-sm bg-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
        <div className="flex flex-row items-start justify-start bg-[url('/public/pngegg-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
          <img
            className="h-[70px] w-[73px] relative object-cover hidden min-h-[70px]"
            alt=""
            src="/pngegg-1@2x.png"
          />
          <img
            className="h-[70px] w-[73px] relative object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/pngegg-1@2x.png"
          />
        </div>
      </div>
      <div className="w-[133px] flex flex-row items-start justify-start py-0 pr-[22px] pl-0 box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative">
          <b className="h-14 flex-1 relative leading-[24px] inline-block z-[1] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">{`47 `}</b>
          <b className="absolute !m-[0] bottom-[-8px] left-[-11px] text-xl leading-[24px] font-bold inline-block min-w-[91px] z-[2] mq450:text-base mq450:leading-[19px]">
            Sensor 1
          </b>
          <img
            className="h-[46px] w-6 absolute !m-[0] top-[-19px] right-[52px] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/pngwing-1@2x.png"
          />
        </div>
        <b className="relative leading-[24px] font-bold inline-block min-w-[31px] z-[3] ml-[-53px] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">
          C
        </b>
      </div>
    </div>
  );
};

Sensor1.propTypes = {
  className: PropTypes.string,
};

export default Sensor1;
