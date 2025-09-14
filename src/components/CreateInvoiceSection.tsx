import { PlusIcon } from '../icons/PlusIcon';

const CreateInvoiceSection = () => {
  return (
    <div className="pt-4 px-4 md:px-8 md:pt-6 flex gap-3 flex-col">
      <div className="rounded-[32px] py-4 px-3 relative overflow-hidden bg-[#F2F2F2] w-full mx-auto">
        <div className="flex flex-col items-center text-center relative z-10 gap-[14px]">
          <PlusIcon className="w-12 h-12 md:w-16 md:h-16" fill="url(#gradient)" />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="1.49%" stopColor="#DD2A7B" />
                <stop offset="42.07%" stopColor="#9747FF" />
                <stop offset="99.84%" stopColor="#334CCA" />
              </linearGradient>
            </defs>
          </svg>
          
          <h3 className="text-2xl font-roboto font-semibold leading-none text-center bg-gradient-invoice bg-clip-text text-transparent">
            Create New Invoice
          </h3>
          
          <p className="text-center text-[#999999] font-roboto text-xs leading-none">
            Start by creating and sending new invoice
          </p>
        </div>
      </div>
      
      <div className="text-center p-3">
        <p className="text-xs font-roboto font-normal leading-none text-[#8134AF]">
          Or Upload an existing invoice and set payment reminder
        </p>
      </div>
    </div>
  );
};

export default CreateInvoiceSection;