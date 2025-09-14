import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { MomGrowthIcon } from '../icons/MomGrowthIcon';

const data = [
  { month: 'Jan', income: 3500, growth: 0 },
  { month: 'Feb', income: 5000, growth: 25 },
  { month: 'Mar', income: 6800, growth: 50 },
  { month: 'Apr', income: 3200, growth: -50 },
  { month: 'May', income: 5200, growth: 40 },
  { month: 'Jun', income: 0, growth: -100 }
];

const IncomeChart = () => {
  return (
    <div className="w-full">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              bottom: 10,
              left: 30,
            }}
          >
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fontFamily: 'Roboto', fill: '#6B7280' }}
            />
            
            <YAxis 
              yAxisId="income"
              orientation="left"
              domain={[0, 8000]}
              ticks={[0, 2000, 4000, 6000, 8000]}
              tickFormatter={(value) => `$${value / 1000}k`}
              axisLine={{ stroke: '#8B5CF6', strokeWidth: 1 }}
              tickLine={{ stroke: '#8B5CF6', strokeWidth: 1 }}
              tick={{ fontSize: 12, fontFamily: 'Roboto', fill: '#8B5CF6' }}
            />
            
            <YAxis 
              yAxisId="growth"
              orientation="right"
              domain={[-100, 100]}
              ticks={[-100, -50, 0, 50, 100]}
              tickFormatter={(value) => `${value}%`}
              axisLine={{ stroke: '#B91C1C', strokeWidth: 1 }}
              tickLine={{ stroke: '#B91C1C', strokeWidth: 1 }}
              tick={{ fontSize: 12, fontFamily: 'Roboto', fill: '#B91C1C' }}
            />
            
            <CartesianGrid 
              strokeDasharray="none" 
              stroke="#e5e7eb" 
              horizontal={true}
              vertical={false}
            />
            
            <Bar 
              yAxisId="income"
              dataKey="income" 
              fill="#8B5CF6" 
              radius={[4, 4, 4, 4]}
              barSize={32}
            />
            
            <Line 
              yAxisId="growth"
              type="monotone" 
              dataKey="growth" 
              stroke="#B91C1C" 
              strokeWidth={2}
              dot={false}
              activeDot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center gap-6 mt-1">
        <div className="flex items-center gap-2">
          <div className="w-4 h-3 bg-[#8B5CF6] rounded-sm"></div>
          <span className="text-xs font-roboto font-medium text-[#8B5CF6]">income</span>
        </div>
        <div className="flex items-center gap-2">
          <MomGrowthIcon />
          <span className="text-xs font-roboto font-medium text-[#B91C1C]">momGrowth</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeChart;