import cls from 'classnames';
import NavFrontendSpinner from 'nav-frontend-spinner';
import './spinner.less';

const Spinner = (props: { center: boolean }) =>
    <div className={cls({'spinner--center': props.center})}><NavFrontendSpinner type="XL"/></div>;

export default Spinner;
