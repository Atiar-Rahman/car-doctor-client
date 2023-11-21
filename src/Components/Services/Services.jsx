import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";



const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
        
    },[])





    return (
      <div className="mt-4">
        <div className="text-center space-y-2">
          <h2 className="font-5xl font-bold text-orange-500">Service</h2>
          <h1 className="text-7xl font-bold ">Our Services Area</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            consequuntur perspiciatis explicabo totam sint obcaecati maxime?
            Aliquam enim ex numquam?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            services.map(service=><Service key={service._id} service={service}></Service>)
          }
        </div>
      </div>
    );
};

export default Services;