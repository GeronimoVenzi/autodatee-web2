import Image from 'next/image';

import Imagen from "/components/assets/logos-clientes/";

const Card = ({ marca }) => {
    return (
        <div className="card__marca">
            <Image
                src={`${Imagen} ${marca.url}`}
                alt={marca.nombre}
            />
        </div>
    );
};

export default Card;
