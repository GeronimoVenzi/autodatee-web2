import { FloatingLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import styles from "./FormPage.module.css";

export const FormPage = () => {
  return (
    <section className="mb-5" id="contacto">
      <div className="text-center">
        <h1 className={styles.form__title}>Contactanos</h1>
      </div>

      <Form className={`${styles.bg_form} container mb-5 mt-5`}>
        <div className={styles.form__group}>
          <div>
            <Form.Group
              className={`${styles.form__group__input} mb-5`}
              controlId="formBasicName"
            >
              <Form.Control type="name" placeholder="Nombre" />
            </Form.Group>

            <Form.Group
              className={`${styles.form__group__input} mb-5`}
              controlId="formBasicPhone"
            >
              <Form.Control type="number" placeholder="Telefono" />
            </Form.Group>
          </div>
          <div>
            <Form.Group
              className={`${styles.form__group__input} mb-5`}
              controlId="formBasicEmail"
            >
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group
              className={`${styles.form__group__input} mb-5`}
              controlId="formBasicRole"
            >
              <Form.Control type="text" placeholder="Selecciona un rol" />
            </Form.Group>
          </div>
        </div>

        <div className={styles.form__textarea}>
          <FloatingLabel
            className="mb-5"
            controlId="floatingTextarea2"
            label="Contanos de tu proyecto"
          >
            <Form.Control as="textarea" style={{ height: "250px" }} />
          </FloatingLabel>
        </div>

        <div className="d-flex justify-content-center">
          <div
            className={`${styles.form__btn} btn btn-outline-light`}
            type="submit"
          >
            Enviar
          </div>
        </div>
      </Form>
    </section>
  );
};
