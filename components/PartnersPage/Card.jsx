import Image from 'next/image';

const Card = ({ marca }) => {
    return (
        <div className="card__marca">
            <Image
                src={`components/assets/logos-clientes/${marca.url}`}
                alt={marca.nombre}
            />
        </div>
    );
};

export default Card;
