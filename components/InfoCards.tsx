import Cards from './Cards';
import boxImg from '../public/img/box.png';
import creditImg from '../public/img/credit.png';
import secImg from '../public/img/sec.png';

const InfoCards: React.FC = (): JSX.Element => {
    return (
        <div className="bg-green-50 p-20 lg:p-16 md:p-12 grid grid-cols-3 justify-items-center items-center gap-5 sm:grid-cols-1">
            <Cards title="Elegí la forma de pago" subtitle="Soy un subtitulo" extra="Extra data para mostrar" image={creditImg} />
            <Cards title="Envíos seguros" subtitle="Soy un subtitulo" extra="Extra data para mostrar" image={boxImg} />
            <Cards title="Paga tranquilo" subtitle="Soy un subtitulo" extra="Extra data para mostrar" image={secImg} />
        </div>
    )
};

export default InfoCards;