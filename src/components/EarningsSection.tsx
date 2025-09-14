import { CrownIcon } from '../icons/CrownIcon';
import { CalendarIcon } from '../icons/CalendarIcon';

const EarningsSection = () => {
  return (
    <div className="px-4 md:px-8 flex flex-col gap-3">
      <div className="container-card gap-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-roboto font-medium leading-none text-[#999999]">Time Period</h3>
          <span className="text-xs font-roboto font-normal leading-none text-right text-[#999999]">dd:mm:yyyy - dd:mm:yyyy</span>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-1">
          <div className="flex items-center gap-1">
            <div className="py-1 px-3 text-sm font-roboto font-normal leading-[140%] text-center text-[#999999] rounded-2xl border border-[#F2F2F2]">1Month</div>
            <div className="py-1 px-3 text-sm font-roboto font-normal leading-[140%] text-center bg-gradient-invoice bg-clip-text text-transparent rounded-2xl border border-[#F2F2F2]">
              3Months
            </div>
            <div className="flex items-center gap-1 py-1 px-3 text-sm font-roboto font-normal leading-[140%] text-center text-[#999999] rounded-2xl border border-[#F2F2F2]">
              <span>1Year</span>
              <CrownIcon />
            </div>
          </div>
          <div className="flex items-center gap-1 py-1 px-3 text-sm font-roboto font-normal leading-[140%] text-center text-[#999999] rounded-2xl border border-[#F2F2F2] w-fit">
            <CalendarIcon />
            <span>Custom</span>
          </div>
        </div>
      </div>
      <div className="container-card">
        <h3 className="text-sm font-roboto font-medium leading-none text-[#999999] mb-2">Total Earnings</h3>
        <p className="text-xl font-roboto font-semibold leading-none text-[#8134AF]">$1,25,000</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="container-card">
          <h3 className="text-sm font-roboto font-medium leading-none text-[#999999] mb-2">Payment Awaited</h3>
          <p className="text-xl font-roboto font-semibold leading-none text-[#8134AF]">$25,000</p>
        </div>
        <div className="container-card">
          <h3 className="text-sm font-roboto font-medium leading-none text-[#999999] mb-2">Payment Overdue</h3>
          <p className="text-xl font-roboto font-semibold leading-none text-[#8134AF]">$25,000</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsSection;