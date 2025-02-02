
import { Spinner } from "@/components/ui/spinner";

const SpinnerWithText = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner>Cargando...</Spinner>
    </div>
  );
};

export default SpinnerWithText;
