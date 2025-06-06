import Image from 'next/image';

const brands = [
  {
    name: 'Nike',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png',
  },
  {
    name: 'Adidas',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLJC-hmcfN9t5pvZRmFrTBktTfr4lpdWKTA&s',
  },
  {
    name: 'Puma',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkR_LTcW3XMGBt2EQHWKuX5ZkSq9UEDYzrGA&s',
  },
  {
    name: 'Amazon',
    logo: 'https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg',
  },
  {
    name: 'Zara',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZD8dpV1d_yQiyBKp7OWEimnISGMpowozo0Q&s',
  },
  {
    name: 'H&M',
    logo: 'https://1000marcas.net/wp-content/uploads/2020/01/HM-logotipo.jpg',
  },
];

const BrandMarquee = () => {
  return (
    <div className="overflow-hidden w-full bg-white py-4 mt-10">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center gap-2 min-w-[150px]">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={80}
              height={40}
              className="object-contain"
            />
            <span className="text-gray-700 text-sm">{brand.name}</span>
          </div>
        ))}
        {/* Repeat for smooth loop */}
        {brands.map((brand, index) => (
          <div
            key={`repeat-${index}`}
            className="flex items-center gap-2 min-w-[150px]"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={80}
              height={40}
              className="object-contain"
            />
            <span className="text-gray-700 text-sm">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
