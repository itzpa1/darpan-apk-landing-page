import { tableData } from "@/assets/assets";
import { RxSlider } from "react-icons/rx";

export default function Comparison() {
  const platforms = [
    "DARPAN",
    "MudraMingle (Research)",
    "YOLO V8",
    "MediaPipe/Commercial API",
  ];

  const StatusBadge = ({ status }: { status: string }) => {
    const getStatusStyle = (status: string) => {
      switch (status.toLowerCase()) {
        case "yes":
          return "bg-[#f2c849]/50 text-green-800 border-green-200";
        case "planned":
          return "bg-yellow-100 text-yellow-800 border-yellow-200";
        case "no":
          return "bg-red-100 text-red-800 border-red-200";
        default:
          return "bg-gray-100 text-gray-800 border-gray-200";
      }
    };

    return (
      <span
        className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusStyle(
          status
        )}`}
      >
        {status}
      </span>
    );
  };
  return (
    <div className="lg:h-screen flex flex-col items-center px-6 py-6 md:px-8 space-y-12">
      <h1 className="font-family-chi font-bold text-4xl text-center">
        Fast, flexible testing for today&apos;s students
      </h1>
      <span className="md:hidden uppercase text-xs font-family-nun font-medium text-center flex flex-col items-center">
        <RxSlider size={20} />
        Slide table to view full table
      </span>
      <div className="w-full lg:w-2/3 overflow-x-auto border-l-2 border-r-2 border-b-4 border-gray-400/40 rounded-lg p-2">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200 font-family-mon text-sm md:base">
              <th className="py-2 font-semibold text-gray-700">Feature</th>
              <th className="py-2 bg-gradient-to-b from-[#f2c849]/80 to-[#ff9933] text-white font-bold rounded-t-lg">
                DARPAN
              </th>
              <th className="py-2 font-semibold text-gray-700">MudraMingle</th>
              <th className="py-2 font-semibold text-gray-700">YOLO V8</th>
              <th className="py-2 font-semibold text-gray-700">MediaPipe</th>
            </tr>
          </thead>
          <tbody className="font-family-mon text-sm md:text-base font-medium">
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-2 font-semibold text-gray-600">
                  {row.feature}
                </td>
                <td className="py-2 bg-blue-50 text-center">
                  <StatusBadge status={row.darpan} />
                </td>
                <td className="py-2 text-center">
                  <StatusBadge status={row.mudraMingle} />
                </td>
                <td className="py-2 text-center">
                  <StatusBadge status={row.yolo} />
                </td>
                <td className="py-2 text-center">
                  <StatusBadge status={row.mediapipe} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
