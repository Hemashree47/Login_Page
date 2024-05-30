import React from "react";
import PropTypes from 'prop-types'

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[4px] left-[230px] w-[1308px] h-[118px] max-w-full text-left text-5xl text-default-black font-regular-16-24 ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] box-border w-full h-full flex flex-row items-center justify-start py-5 pr-8 pl-6 gap-[406px] max-w-full z-[1] border-b-[1px] border-solid border-gray-05">
        <div className="h-7 w-[282px] hidden flex-row items-center justify-start gap-[24px]">
          <b className="self-stretch w-[140px] relative leading-[28px] hidden shrink-0 mq450:text-lgi mq450:leading-[22px]">
            Hello Tanzir
          </b>
          <div className="hidden flex-row items-center justify-start gap-[4px] text-sm text-gray-03">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/chevronsright.svg"
            />
            <div className="relative leading-[20px]">May 19, 2023</div>
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[40px] max-w-full text-base text-gray-03">
          <div className="flex flex-row items-center justify-start">
            <img className="h-6 w-6 relative" alt="" src="/group-2.svg" />
          </div>
          <div className="shadow-[0px_26px_26px_rgba(106,_22,_58,_0.04)] rounded-xl bg-white flex flex-row items-start justify-start py-3 pr-6 pl-8 box-border gap-[170px] whitespace-nowrap max-w-[calc(100%_-_64px)]">
            <div className="h-6 w-[102px] relative leading-[24px] inline-block shrink-0">
              Search here
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/search.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[5px] left-[1137px] rounded-159xl w-[100px] h-[100px] object-contain z-[2]"
        loading="lazy"
        alt=""
        src="/unnamed-1@2x.png"
      />
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
