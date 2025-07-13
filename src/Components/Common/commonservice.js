import { toast } from "react-toastify";
import moment from "moment/moment";

export const setAlertMessage = (type, message) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const commonOptions = {
    position: isMobile ? "bottom-center" : "bottom-right",
    style: {
      fontSize: '14px',
      fontFamily: 'Graphik-regular',
      fontWeight: 'normal',
      color: '#333333',
      marginBottom: isMobile ? '20px' : '0px',
      marginLeft: isMobile ? 'auto' : '0px',
      marginRight: isMobile ? 'auto' : '0',
      // width: 'auto',
      // minWidth: '70px',
      width: isMobile ? "85%" : "450px",
    },
  };

  if (type === "error") {
    toast.error(message, commonOptions);
  } else if (type === "warn") {
    toast.warn(message, commonOptions);
  } else {
    toast.success(message, {
      ...commonOptions,
      toastStyle: {
        background: "#ffa500",
        color: "white",
      },
    });
  }
};

export const getCurrentDataTime = () => {

  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const getCurrentDate = () => {
  let date = moment(new Date()).format('YYYY-MM-DD');
  let year = moment().format('YYYY');
  let month = moment().format('MMMM');
  return { date, month, year };
};