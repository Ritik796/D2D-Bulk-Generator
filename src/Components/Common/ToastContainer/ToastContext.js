import { createContext, useContext, useState } from "react";
import ToastContainer from "./ToastContainer";

let toastContext = createContext();


export const useToastMessage = () => useContext(toastContext);

const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ status: false, type: "", msg: "" });
    const showToastMessage = (type, msg) => {
        setToast(pre => ({ ...pre, type, msg, status: true }));
        setTimeout(() => {
            setToast(pre => ({ ...pre, type: "", msg: "", status: false }));
        }, 2000);
    };

    return (
        <toastContext.Provider value={{showToastMessage}}>
            {children}
            <ToastContainer
                status={toast.status}
                type={toast.type}
                message={toast.msg}
            />
        </toastContext.Provider>
    );
};

export default ToastProvider;