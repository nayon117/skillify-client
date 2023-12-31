import { FaUsers } from "react-icons/fa";
import { MdFlightClass } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import useAxiosPublic from "../api/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Stats = () => {
  const axiosPublic = useAxiosPublic()
  const { data: stats = [] } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const res = await axiosPublic('/stats')
      return res.data;
    }
  })
  return (
    <div className="mt-12 px-4">
      <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-8">
        Statscape & Visuals
      </h2>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-6 md:mr-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-medium mb-4 flex items-center gap-3">
              <FaUsers /> <span>Total Users: { stats?.users}</span>
            </h2>
            <h2 className="text-2xl font-medium mb-4 flex items-center gap-3">
              <MdFlightClass /> <span>Total Classes:{stats?.classes}</span>
            </h2>
            <h2 className="text-2xl font-medium mb-4 flex items-center gap-3">
              <FaPeopleRoof />
              <span>Total Enrollments:{stats?.bookings}</span>
            </h2>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://i.ibb.co/XkrwVyD/priscilla-du-preez-Xk-KCui44i-M0-unsplash.jpg"
            alt="Educational Image"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
