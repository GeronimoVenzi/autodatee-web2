import { FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import styles from "./FormPage.module.css";

export const FormPage = () => {
  return (
    <section className="section__container" id="contacto">
      <div className="text-center">
        <h1 className={styles.form__title}>Contactanos</h1>
      </div>

      <Form
        action="https://formsubmit.co/info@autodatee.com.ar"
        method="POST"
        className={`${styles.bg_form} container mb-5 mt-5 font__mont`}>
        <div className={styles.form__group}>
          <div>
            <Form.Group
              className={`${styles.form__group__input} mb-5`}
              controlId="formBasicName"
            >
              <Form.Control

                type="text" name="Nombre" placeholder="Nombre" required />
            </Form.Group>

            <Form.Group
              className={`${styles.form__group__input} mb-5`}
              controlId="formBasicPhone"
            >
              <Form.Control type="number" name="Telefono" placeholder="Telefono" required />
            </Form.Group>
          </div>
          <div>
            <Form.Group
              className={`${styles.form__group__input} mb-5`}
              controlId="formBasicEmail"
            >
              <Form.Control type="email" name="E-mail" placeholder="E-mail" required />
            </Form.Group>

            <Form.Group
              className={`${styles.form__group__input} mb-5`}
              controlId="formBasicRole"
            >
              <Form.Control type="text" name="Rol" placeholder="Selecciona un rol" required />
            </Form.Group>
          </div>
        </div>

        <div className={`${styles.form__textarea}`}>
          <FloatingLabel

            className="mb-5"
            controlId="floatingTextarea2"
            label="Contanos de tu proyecto"
          >
            <Form.Control name="Proyecto" as="textarea" style={{ height: "250px" }} />
          </FloatingLabel>
        </div>

        <div className="d-flex justify-content-center">
          <button
            className={`${styles.form__btn} btn btn-outline-light`}
            type="submit"
          >
            Enviar
          </button>
        </div>
      </Form>
    </section>
  );
};
