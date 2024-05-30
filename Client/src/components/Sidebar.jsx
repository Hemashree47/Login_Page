import React from "react";
import PropTypes from 'prop-types'


const Sidebar = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[2px] rounded-29xl bg-default-black w-[264px] flex flex-col items-end justify-start pt-10 pb-[675px] pr-5 pl-[11px] box-border gap-[24px] z-[2] ${className}`}
    >
      <div className="w-[264px] h-[1084px] relative rounded-29xl bg-default-black hidden" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-0">
        <img
          className="h-[105px] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/logo4-2@2x.png"
        />
      </div>
      <nav className="m-0 self-stretch h-60 flex flex-col items-start justify-start pt-0 pb-[22px] pr-0 pl-[9px] box-border gap-[37px] z-[3] text-left text-base text-special-bg2 font-regular-16-24 mq450:h-60">
        <div className="self-stretch rounded flex flex-row items-start justify-start py-3 px-4 gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/menuoverview.svg"
          />
          <div className="flex-1 relative leading-[24px]">Dasborad</div>
        </div>
        <div className="self-stretch rounded flex flex-row items-start justify-start py-3 px-4 gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/wallet.svg"
          />
          <a className="[text-decoration:none] flex-1 relative leading-[24px] text-[inherit]">
            Analytics
          </a>
        </div>
        <div className="self-stretch rounded hidden flex-row items-center justify-start py-3 px-4 gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/transaction.svg"
          />
          <div className="h-6 flex-1 relative leading-[24px] inline-block">
            Graph
          </div>
        </div>
        <div className="self-stretch rounded hidden flex-row items-center justify-start py-3 px-4 gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/bill.svg"
          />
          <div className="h-6 flex-1 relative leading-[24px] inline-block">
            settings
          </div>
        </div>
        <div className="self-stretch rounded hidden flex-row items-center justify-start py-3 px-4 gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/expencces.svg"
          />
          <div className="h-6 flex-1 relative leading-[24px] inline-block">
            <p className="m-0">Expenses</p>
          </div>
        </div>
        <div className="self-stretch rounded bg-primary-color flex flex-row items-start justify-start py-3 px-4 gap-[12px] text-white">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/goal.svg"
          />
          <b className="flex-1 relative leading-[24px] font-semibold">Graph</b>
        </div>
        <div className="self-stretch rounded flex flex-row items-start justify-start py-3 px-4 gap-[12px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src="/menusettings.svg"
          />
          <div className="flex-1 relative leading-[24px]">Settings</div>
        </div>
      </nav>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
