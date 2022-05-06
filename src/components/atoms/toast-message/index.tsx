import { toast } from "react-toastify";

const ToastMessage = (message: string) =>
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
  });

export { ToastMessage };
