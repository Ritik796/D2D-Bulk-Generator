
import style from '../../../Styles/Common/Loader/Loader.module.css';

const Loader = () => {
    return (
        <div className={`${style.container} container`}>
            <div className={style.loaderDiv}>
                <div className="spinner-border text-success" style={{ width: " 2rem", height: '2rem' }} role="status"></div>
                <span>Please wait...</span>
            </div>
        </div>
    )
}

export default Loader
