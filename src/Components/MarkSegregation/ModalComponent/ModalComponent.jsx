import * as Dialog from "@radix-ui/react-dialog";
import style from '../../../Styles/MarkSegregation/ModalComponent/ModalComponent.module.css';
import { IoIosAddCircleOutline, IoIosCloseCircleOutline, IoMdCheckmark } from "react-icons/io";

const ModalComponent = ({ open, setOpen,handleAddAnotherWaste,handleEndOfWeightment }) => {
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className={style.overlay} onPointerDown={(e) => { e.preventDefault(); }} />
                <Dialog.Content className={style.content}
                    onPointerDownOutside={(e) => e.preventDefault()} // prevent outside click
                    onEscapeKeyDown={(e) => e.preventDefault()} // prevent Esc key
                >
                       <Dialog.Title style={{display:"none"}}>
                        Weight Confirmation Modal
                    </Dialog.Title>

                    <div className={`${style.contentDiv}`}>
                        <div className={`${style.msgContainer}`}>
                            <span className={`${style.msgIcon}`}>
                                <IoMdCheckmark size={35} color="white" />
                            </span>
                            <span className={`${style.msgText}`}>
                                Weighted Successfully
                            </span>
                        </div>
                        <div className={`${style.btn}`}>
                            <button onClick={handleAddAnotherWaste}>
                                <span className={`${style.btnIcon}`}>
                                    <IoIosAddCircleOutline size={28} />
                                </span>
                                <span>
                                    Add another waste
                                </span>
                            </button>
                        </div>
                        <div className={`${style.btn}`}>
                            <button className={`${style.selectedBtn}`} onClick={handleEndOfWeightment}>
                                <span className={`${style.btnIcon} `}><IoIosCloseCircleOutline size={28} /></span>
                                <span>End of weightment</span>
                            </button>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ModalComponent;
