import PawIcon from '../icons/PawIcon';

const Footer = () => {
  return (
    <div className="mt-8 px-4 md:px-8">
      <div className="pt-6 border-t border-gray-200 text-center">
        <h3 className="text-lg font-medium text-gray-400 mb-1">
          Spark
          <span className="inline-flex items-center">
            <PawIcon className="w-2 h-2 mx-0.5" fill="#8134AF" />
          </span>
          nomy
        </h3>
        <p className="text-sm text-gray-400">
          sparking the creator economy
        </p>
      </div>
    </div>
  );
};

export default Footer;