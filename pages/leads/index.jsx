import { Layout } from "../../components/Layout";
import { Cards } from "../../components/section-cards/Cards";
import styles from "../../styles/Leads.module.css";

import Modelo from "../../components/assets/secciones/Generaciondeleads/icono1.png";
const Leads = () => {
  const card1 = {
    title:
      "Seamos socios estratégicos. Impulsa tus ventas con leads clasificados",
    text: "¿Qué es un lead? Un lead es un cliente potencial, una persona que ha indicado interés en el producto o servicio de su empresa de alguna forma. Por ejemplo, un lead sería un usuario que rellena un formulario, que se suscribe a una newsletter o que deja sus datos para recibir más información sobre un producto o servicio determinado. Es fundamental para el éxito de la empresa, contar con herramientas que nos apoyen en nuestros objetivos comerciales.",
  };
  return (
    <Layout title="Generación de Leads">
      <section className={`section ${styles.bg__leads}`}>
        <div className={`title__principal font__mont`}>
          <h1>
            GENERACIÓN <br /> DE LEADS
          </h1>
        </div>
      </section>
      <section className={`${styles.section__leads} section`}>
        <div className="cards__container">
          <Cards data={card1}>{Modelo}</Cards>
        </div>
        <div className={`text__cards ${styles.card__lead}`}>
          <p>
            En AUTODATEE contamos con un equipo que se ocupa de cada proyecto
            identificando las necesidades y objetivos, <br /> para luego
            preparar la estrategia ideal de cada empresa acorde a las
            condiciones comerciales de las fuerzas de ventas. <br /> Utilizando
            diversos motores de búsqueda y con un control de calidad óptimo que
            promete optimizar al máximo la campaña. <br />
            Somos conscientes que la venta se encuentra repartida en cada una de
            las áreas de nuestra sociedad, impulsando proyectos, conversaciones,
            relaciones, emprendimientos y todas las acciones imaginables.
          </p>
          <p>
            No pretendemos abordar este arte desde la teoría, sino sumergirnos
            en la practicidad de lo que esta genera; <br /> ventas es pasión, es
            ardor, es energía, es adrenalina, con ella se activan todas las
            señales de nuestro cuerpo. <br />
            El error está en la creencia de que la persuasión y el
            convencimiento está en las palabras, cuando el verdadero secreto se
            aloja en el cuerpo en gran medida, un porcentaje menor pero no menos
            importante en la voz y finalmente solo una pequeña parte tiene que
            ver con lo que decimos. <br /> Nuestro propósito es explorar el arte
            de vender, partir desde el ser para lograr hacer y tener eso que
            tanto deseamos, desarticular las creencias limitantes que impiden
            nuestro crecimiento e ir más allá de lo imaginado.
          </p>
          <p>
            Lo que nos diferencia del mercado, no es solamente la atención
            personalizada, sino que ofrecemos un servicio exclusivo de
            capacitación para sus colaboradores, instruyéndolos sobre el uso y
            mejor manejo de Leads, dándoles una herramienta más para lograr un
            cierre efectivo al momento de contactar al posible cliente. <br />
            Tenemos un equipo listo, para confrontar con las barreras del
            raciocinio, del miedo,y armar algo completamente distinto para que
            así el resultado no solo sea diferente, sino extraordinario. <br />
            Nos enfocamos en la confianza de saber que estamos listos para
            explotar todo nuestro potencial, y así vivir nuestra vida de forma
            excepcional, ya que, bien sabemos que ventas no es un mero empleo
            sino una forma de vida.
          </p>
          <p>
            Nuestra esencia se concentra en mantener un feedback B2B constante
            para potenciar la campaña y aumentar así la convertibilidad. <br />
            ¿Buscas obtener resultados extraordinarios? <br />
            Súmate a la experiencia de transformar tu grupo de <br />
            ventas en un equipo exitoso, contando con los recursos e <br />
            información potencial que tanto necesitas para ello.
          </p>
        </div>

        <div className="text-center font__mont">
          <h2>
            <b>
              Datos de Plan de Ahorro <br /> Todas las marcas
            </b>
          </h2>
        </div>
      </section>
    </Layout>
  );
};

export default Leads;
