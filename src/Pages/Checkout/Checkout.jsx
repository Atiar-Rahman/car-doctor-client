import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
    const { title, price, service_id,img } = service;
    const { user } = useContext(AuthContext);
    
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const description = form.description.value;

        const order = {
            customerName: name,
            img,
            email,
            date,
            service: service_id,
            price,
            description
     
        }
        console.log(order);

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                      icon: "Success",
                      title: "Oops...",
                      text: "services booking successfully!",
                      footer: '<a href="#">Why do I have this issue?</a>',
                    });
                }
        })
    }

  return (
    <div>
      <h2 className="text-center text-3xl">Book services: {title}</h2>

      <form onSubmit={handleBookService} className="w-1/2 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$ "+price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Other description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Confirm Orders"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
