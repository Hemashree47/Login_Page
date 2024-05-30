import React from "react";
import PropTypes from 'prop-types'


const SensorGraph = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[653px] left-[296px] rounded-xl bg-white w-[582px] flex flex-col items-start justify-start pt-[21px] pb-[30px] pr-3 pl-0 box-border gap-[11px] max-w-full text-left text-base text-black font-regular-16-24 ${className}`}
    >
      <div className="w-[582px] h-[285px] relative rounded-xl bg-white hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-0 px-[39px]">
        <div className="relative leading-[24px] font-medium inline-block min-w-[105px] z-[1]">
          Sensor Graph
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-end justify-start pt-[1.4px] px-[35px] pb-[4.4px] gap-[35.9px] z-[1] text-center text-xs">
        <div className="w-[28.4px] flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border gap-[4.8px] shrink-0 text-right">
          <div className="flex-1 flex flex-col items-end justify-start gap-[20.8px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0">
              <div className="flex-1 relative shrink-0 [debug_commit:bf4bc93]">
                12
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[23.8px] shrink-0 [debug_commit:bf4bc93]">
              <div className="relative inline-block min-w-[8px]">9</div>
              <div className="relative inline-block min-w-[8px]">6</div>
              <div className="relative inline-block min-w-[8px]">3</div>
              <div className="relative inline-block min-w-[8px]">0</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[177.2px] px-0 pb-0 relative text-center">
            <div className="relative inline-block min-w-[8px]">0</div>
            <div className="w-[518px] h-[165.2px] absolute !m-[0] top-[3.6px] right-[-508.2px]">
              <img
                className="absolute top-[159.2px] left-[5.2px] w-px h-1.5"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
              <img
                className="absolute top-[159.2px] left-[0px] w-[5.1px] h-px"
                alt=""
                src="/vector-20.svg"
              />
              <img
                className="absolute top-[119.4px] left-[0px] w-[5.1px] h-px"
                alt=""
                src="/vector-20.svg"
              />
              <img
                className="absolute top-[79.6px] left-[0px] w-[5.1px] h-px"
                alt=""
                src="/vector-20.svg"
              />
              <img
                className="absolute top-[39.8px] left-[0px] w-[5.1px] h-px"
                alt=""
                src="/vector-20.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[5.1px] h-px"
                loading="lazy"
                alt=""
                src="/vector-24.svg"
              />
              <div className="absolute top-[0px] left-[5.2px] w-[510.3px] h-[159.2px]">
                <img
                  className="absolute top-[0px] left-[0px] w-px h-[159.2px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector-25.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  loading="lazy"
                  alt=""
                  src="/group-4.svg"
                />
              </div>
              <img
                className="absolute top-[23.5px] left-[2.6px] w-[515.4px] h-[112.1px] z-[3]"
                alt=""
                src="/group-5.svg"
              />
              <div className="absolute top-[36.8px] left-[2.6px] w-[515.4px] h-[125.4px]">
                <img
                  className="absolute top-[122.4px] left-[2.6px] w-[510.3px] h-px"
                  loading="lazy"
                  alt=""
                  src="/vector-26.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[515.4px] h-[112.1px] z-[4]"
                  alt=""
                  src="/group-6.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/group-7.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-14 flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border gap-[20px] shrink-0">
          <div className="flex flex-col items-end justify-start gap-[8.4px]">
            <div className="flex flex-row items-start justify-end py-0 pr-0.5 pl-[3px] box-border w-1.5 h-1.5">
              <img
                className="h-1.5 w-px relative"
                loading="lazy"
                alt=""
                src="/vector-27.svg"
              />
            </div>
            <div className="relative inline-block min-w-[6px]">1</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8.4px]">
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[3px]">
              <img
                className="h-1.5 w-px relative"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
            </div>
            <div className="relative inline-block min-w-[8px]">2</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[8.4px]">
          <div className="w-[8.5px] flex flex-row items-start justify-start py-0 pr-1 pl-[3px] box-border">
            <img
              className="h-1.5 w-px relative"
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
          </div>
          <div className="relative inline-block min-w-[8px]">3</div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-0.5 pl-0 gap-[8.4px]">
          <div className="w-[8.5px] flex flex-row items-start justify-start py-0 pr-1 pl-[3px] box-border">
            <img
              className="h-1.5 w-px relative"
              loading="lazy"
              alt=""
              src="/vector-19.svg"
            />
          </div>
          <div className="relative inline-block min-w-[8px]">4</div>
        </div>
        <div className="w-[57.3px] flex flex-row items-start justify-between py-0 pr-[3px] pl-0 box-border gap-[20px] shrink-0">
          <div className="flex flex-col items-start justify-start gap-[8.4px]">
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[3px]">
              <img
                className="h-1.5 w-px relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
            </div>
            <div className="relative inline-block min-w-[8px]">5</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8.4px]">
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[3px]">
              <img
                className="h-1.5 w-px relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
            </div>
            <div className="relative inline-block min-w-[8px]">6</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0 gap-[8.4px]">
          <div className="flex flex-row items-start justify-start py-0 px-[3px]">
            <img
              className="h-1.5 w-px relative z-[1]"
              loading="lazy"
              alt=""
              src="/vector-33.svg"
            />
          </div>
          <div className="relative inline-block min-w-[7px]">7</div>
        </div>
        <div className="w-[54.3px] flex flex-row items-start justify-between gap-[20px] shrink-0">
          <div className="flex flex-col items-start justify-start gap-[8.4px]">
            <div className="flex flex-row items-start justify-start py-0 pr-1 pl-[3px]">
              <img
                className="h-1.5 w-px relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector-19.svg"
              />
            </div>
            <div className="relative inline-block min-w-[8px]">8</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8.4px]">
            <div className="w-2 flex flex-row items-start justify-start py-0 px-[3px] box-border">
              <img
                className="h-1.5 w-px relative z-[1]"
                alt=""
                src="/vector-19.svg"
              />
            </div>
            <div className="relative inline-block min-w-[8px]">9</div>
          </div>
        </div>
        <div className="w-[56.9px] flex flex-row items-start justify-start gap-[30.9px] shrink-0">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8.4px]">
            <div className="w-3.5 flex flex-row items-start justify-start py-0 pr-[7px] pl-[5px] box-border">
              <img
                className="h-1.5 w-px relative z-[1]"
                alt=""
                src="/vector-33.svg"
              />
            </div>
            <div className="self-stretch relative">10</div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[8.4px]">
            <div className="w-3 flex flex-row items-start justify-end py-0 pr-[3px] pl-[7px] box-border">
              <img
                className="h-1.5 w-px relative z-[1]"
                alt=""
                src="/vector-19.svg"
              />
            </div>
            <div className="self-stretch relative">11</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SensorGraph.propTypes = {
  className: PropTypes.string,
};

export default SensorGraph;
