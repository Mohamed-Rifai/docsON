import { toast } from "react-toastify";

export const UseSuccessToast = ({ message }) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const UseWarningToast = ({ message }) => {
  toast.warn(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const UseErrorToast = ({ message }) => {
    console.log(message);
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const UseInfoToast = ({ message }) => {
  toast.info(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
