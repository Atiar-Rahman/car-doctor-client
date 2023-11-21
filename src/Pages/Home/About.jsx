import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-white border-8"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h2 className="text-5xl text-orange-500 font-bold">About Us</h2>
            <h1 className="text-7xl font-bold">
              we are qualified & of experence in this field.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda in magnam quo! Dignissimos impedit enim eum illo nulla
              cum voluptatem, voluptatibus quos accusamus repellat? Dolores
              porro perspiciatis, sequi commodi, corporis doloremque totam quae <br /><br />
              optio quisquam consequatur natus molestias modi nostrum ex vitae,
              minima velit voluptatum. Dicta commodi consequatur eveniet
              recusandae.
            </p>
            <button className="btn btn-primary">Get more info</button>
          </div>
        </div>
      </div>
    );
};

export default About;