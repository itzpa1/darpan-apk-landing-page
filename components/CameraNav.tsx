import { ArrowLeft, MoreVertical } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdFlashOff } from "react-icons/md";

export function CameraNav() {
  const router = useRouter();

  const toggleFlash = () => {};

  return (
    <div className="flex items-center text-white justify-between">
      <div className="flex items-center gap-2">
        <ArrowLeft size={24} onClick={() => router.back()} />
        <button onClick={toggleFlash}>
          <MdFlashOff size={24} />
        </button>
      </div>
      <h1 className="font-hind text-lg font-semibold text-white">
        DARPAN Scan
      </h1>
      <div>
        <MoreVertical size={24} />
      </div>
    </div>
  );
}
