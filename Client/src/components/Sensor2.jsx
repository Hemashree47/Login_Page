import React from "react";
import PropTypes from 'prop-types'


const Sensor2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[227px] left-[719px] rounded-sm bg-white w-[364px] flex flex-row items-start justify-between pt-[29px] pb-[19px] pr-10 pl-[38px] box-border max-w-full gap-[20px] text-left text-21xl text-black font-regular-16-24 ${className}`}
    >
      <div className="h-[130px] w-[364px] relative rounded-sm bg-white hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <img
          className="w-[73px] h-[70px] relative object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/pngegg-1@2x.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[12px]">
        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[9px]">
          <div className="flex flex-row items-start justify-start gap-[7px]">
            <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
              <b className="relative leading-[24px] font-bold inline-block min-w-[51px] z-[1] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">
                47
              </b>
            </div>
            <div className="flex flex-row items-start justify-start gap-[2px]">
              <img
                className="self-stretch w-6 relative max-h-full object-cover min-h-[46px] z-[1]"
                loading="lazy"
                alt=""
                src="/pngwing-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                <b className="relative leading-[24px] font-bold inline-block min-w-[31px] z-[1] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[19px]">
                  C
                </b>
              </div>
            </div>
          </div>
        </div>
        <b className="relative text-xl leading-[24px] font-bold inline-block min-w-[91px] z-[1] mq450:text-base mq450:leading-[19px]">
          Sensor 2
        </b>
      </div>
    </div>
  );
};

Sensor2.propTypes = {
  className: PropTypes.string,
};

export default Sensor2;
