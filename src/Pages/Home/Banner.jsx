
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-rgba[21,21,21,0] rounded-xl">
            <div className="text-white space-y-7 w-1/2 pl-12">
              <h2 className="text-4xl">Affirdable Price Car Servicing</h2>
              <p>
                There are many vaicales of passages of avaliable. the majority
                have suffered alteration in some form.
              </p>
              <div className="flex">
                <button className="btn mr-4 btn-primary">Discover more</button>
                <button className="btn btn-ghost btn-outline">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-rgba[21,21,21,0] rounded-xl">
            <div className="text-white space-y-7 w-1/2 pl-12">
              <h2 className="text-4xl">Affirdable Price Car Servicing</h2>
              <p>
                There are many vaicales of passages of avaliable. the majority
                have suffered alteration in some form.
              </p>
              <div className="flex">
                <button className="btn mr-4 btn-primary">Discover more</button>
                <button className="btn btn-ghost btn-outline">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-rgba[21,21,21,0] rounded-xl">
            <div className="text-white space-y-7 w-1/2 pl-12">
              <h2 className="text-4xl">Affirdable Price Car Servicing</h2>
              <p>
                There are many vaicales of passages of avaliable. the majority
                have suffered alteration in some form.
              </p>
              <div className="flex">
                <button className="btn mr-4 btn-primary">Discover more</button>
                <button className="btn btn-ghost btn-outline">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-4">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />
          <div className="absolute h-full flex items-center left-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-rgba[21,21,21,0] rounded-xl">
            <div className="text-white space-y-7 w-1/2 pl-12">
              <h2 className="text-4xl">Affirdable Price Car Servicing</h2>
              <p>
                There are many vaicales of passages of avaliable. the majority
                have suffered alteration in some form.
              </p>
              <div className="flex">
                <button className="btn mr-4 btn-primary">Discover more</button>
                <button className="btn btn-ghost btn-outline">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
};

export default Banner;