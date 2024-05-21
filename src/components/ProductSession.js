const ProductSection = ({ imageSrc, altText, timerData, price }) => (
    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
      <img src={imageSrc} alt={altText} className="h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        {timerData && <Timer timerData={timerData} />}  {/* Display timer if data provided */}
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-medium text-gray-900 dark:text-white">{price}</p>
      </div>
    </div>
  );
  
  export default ProductSection;
  