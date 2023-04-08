import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ShowAlert = (msj, icon, focu='') => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        title: msj,
        icon: icon
    })
}