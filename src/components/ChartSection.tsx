import chartImage from '../assets/chart.png';

const ChartSection = () => {
  return (
    <div className="px-4 md:px-8">
      <div className="container-card">
        <h3
          className="text-sm font-roboto font-medium leading-none text-[#6B7280] mb-2"
        >
          Income Trend
        </h3>
        <p className="text-sm font-roboto font-normal leading-[140%] text-[#6B7280] mb-2">
          Your monthly income and growth for the last 6 months.
        </p>

        <div className="flex justify-center">
          <img
            src={chartImage}
            alt="Income Trend Chart"
            className="w-full h-auto object-contain max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ChartSection;