import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

export const ErrorToast = () => toast.error("¡Algo salió mal!", {
  duration: 4000,
  progress: true,
  position: "top-right",
  transition: "bounceIn",
  icon: '',
  sonido: true,
});
