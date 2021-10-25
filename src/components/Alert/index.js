import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Alert = (...alert) => {
    const MySwal = withReactContent(Swal);
    return MySwal.fire(
        ...alert
    )
}

export default Alert; 