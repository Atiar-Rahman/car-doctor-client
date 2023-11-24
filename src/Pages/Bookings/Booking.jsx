import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";


const Booking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);

    const url = `http://localhost:5000/booking?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))

    }, [url]);

    const handleDelete = (id) => {
      const proceed = confirm("Are you sure you want to delete");
      if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                alert('delete successfully');
                const remaining = booking.filter(booking => booking._id !== id);
                setBooking(remaining);
            }
          });
      }
  };
  
  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "PATCH",
      headers: {
        'content-type':'application/json',
      },
      body: JSON.stringify({status: confirm})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          //update state.
          const remaining = booking.filter(booking => booking._id !== id);
          const updated = booking.find(booking => booking._id === id);
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining];
          setBooking(newBookings);
        }
    })
  }

    return (
      <div>
        <h1>booking: {booking.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>image & date</th>
                <th>CustomerName</th>
                <th>Email</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
             {
                booking.map(booking=><BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
             }
              
            </tbody> 
          </table>
        </div>
      </div>
    );
};


export default Booking;