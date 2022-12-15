import './css/GalleryCard.css';
import imgDefault from './img/images.png';
import Swal from 'sweetalert2';
import { FaPaw } from "react-icons/fa";


export default function GalleyCard({item}) {
    // Funcion que llama al sweetalert con la info de la Card
    const handleClick = (params) => {
        Swal.fire({
            customClass: {
                image: 'card-img-top'
            },
            title: params.title,
            text: params.text,
            imageUrl: params.url,
            showCloseButton: true,
            showConfirmButton: false,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: params.alt_text,
        })
    }

    return (
        <div className="card card_w">
            <img src={item.url} className="card-img-top" alt={item.title} />
            <div className="card-body card-title-h">
                <h5 className="card-title">{item.title}</h5>
            </div>
            <div className="card-body">
                <button className='btn btn-dark'
                    onClick={() => {
                        handleClick(item)
                    }}>
                    <FaPaw size={'3em'}></FaPaw>
                    <h6>Mis Datos</h6>
                </button>
            </div>
        </div>
    );
};