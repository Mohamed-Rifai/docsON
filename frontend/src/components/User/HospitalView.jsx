import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";

const HospitalView = () => {
  const hospitalId = useParams();
  const id = hospitalId.id.toString();

  const [hospitalData, setHospitalData] = useState(null);

  useEffect(() => {
    // Fetch hospital data for the given hospitalId
    axios
      .get(`/hospital/gethospital/${id}`)
      .then((response) => {
        setHospitalData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="min-h-min bg-white overflow-hidden flex ">
      <div className="container mx-auto px-2 py-10 ">
        <div className="flex flex-col md:flex-row items-start justify-between w-full ">
          <div className="w-full md:w-1/3 p-4">
            <img
              src={hospitalData?.photo}
              alt="/"
              className="w-full hospital-photo"
            />
          </div>

          <div className="w-full md:w-2/3 p-4 mx-auto ml-20">
            <h2 className="text-3xl font-bold mb-4 text-black hospital-name">
              {hospitalData?.name}
            </h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white hospital-address-label">
                Address:
              </h3>
              <p className="text-gray-500 hospital-address">
                {hospitalData?.address}, {hospitalData?.city},{" "}
                {hospitalData?.state}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white hospital-phone-label">
                Phone:
              </h3>
              <p className="text-gray-500 hospital-phone">
                {hospitalData?.contact}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white hospital-website-label">
                Website:
              </h3>
              <Link className="text-blue-500 hospital-website-link">
                www.hospital.com
              </Link>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-white hospital-doctors-label">
                Doctors:
              </h3>

              <ul className="list-disc ml-4">
                <li className="text-gray-500 hospital-doctor">Docter 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalView;
