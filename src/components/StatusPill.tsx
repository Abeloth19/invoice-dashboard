import { DownIcon } from '../icons/DownIcon';
import { NotificationIcon } from '../icons/NotificationIcon';
import { PencilIcon } from '../icons/PencilIcon';

interface StatusPillProps {
  status: 'update_status' | 'unpaid' | 'draft' | 'disputed' | 'overdue' | 'paid' | 'partially_paid' | 'awaited';
}

const StatusPill = ({ status }: StatusPillProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'update_status':
        return {
          text: 'Update Status',
          className: 'bg-[#8134AF] text-white',
          icon: <DownIcon className="w-2 h-2 text-white" isOpen={true} />
        };
      case 'unpaid':
        return {
          text: 'Unpaid',
          className: 'bg-[#F2F2F2] text-[#999999]',
          icon: null
        };
      case 'draft':
        return {
          text: 'Draft',
          className: 'bg-[#F2F2F2] text-[#999999]',
          icon: <PencilIcon className="w-4 h-4" />,
          iconOutside: true
        };
      case 'disputed':
        return {
          text: 'Disputed',
          className: 'bg-[#FFB1B1] text-[#FF2D55]',
          icon: null
        };
      case 'overdue':
        return {
          text: 'Overdue',
          className: 'bg-[#FFB1B1] text-[#FF2D55]',
          icon: <NotificationIcon className="w-[15px] h-[20px]" />,
          iconOutside: true
        };
      case 'paid':
        return {
          text: 'Paid',
          className: 'bg-[#9CEFB8] text-[#34C759]',
          icon: null
        };
      case 'partially_paid':
        return {
          text: 'Partially Paid',
          className: 'bg-[#FFFAE5] text-[#FFCC00]',
          icon: null
        };
      case 'awaited':
        return {
          text: 'Awaited',
          className: 'bg-[#FFFAE5] text-[#FFCC00]',
          icon: <NotificationIcon className="w-[15px] h-[20px]" />,
          iconOutside: true
        };
      default:
        return {
          text: 'Unknown',
          className: 'bg-[#F2F2F2] text-[#999999]',
          icon: null
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className="flex items-center gap-2">
      <div className={`flex items-center gap-2 px-[15px] py-[9px] rounded-3xl text-xs font-medium ${config.className}`}>
        <span>{config.text}</span>
        {config.icon && !config.iconOutside && config.icon}
      </div>
      {config.icon && config.iconOutside && config.icon}
    </div>
  );
};

export default StatusPill;