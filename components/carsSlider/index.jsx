import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarCard from "../carCard";
import Link from "next/link";

const CarsSlider = () => {
  var settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    // rtl: true
  };

  return (
    <>
      <div>
        <h2 class="font-bold text-lg mb-6">خودروهای موجود</h2>

        <div>
          <Slider {...settings}>
            <div>
              <CarCard />
            </div>
            <div>
              <CarCard />
            </div>
            <div>
              <CarCard />
            </div>
            <div>
              <CarCard />
            </div>
            <div>
              <CarCard />
            </div>
            <div>
              <CarCard />
            </div>
          </Slider>
        </div>

        <div className="text-left mt-4">
          <Link href="/carsList">مشاهده همه</Link>
        </div>
      </div>
    </>
  );
};

export default CarsSlider;
