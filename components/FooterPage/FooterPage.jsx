import styles from "./FooterPage.module.css";

export const FooterPage = () => {
    return (
        <footer className={styles.footer__container}>
            <div>
                <p className={`${styles.font__mont__alt}`}> © 2020 All rights reserved.</p>
            </div>
            <div className={styles.footer__container__icons}>
                <a href="https://api.whatsapp.com/send?phone=5491126313910&text="><i className="bi bi-whatsapp"></i></a>
                <a href="https://www.instagram.com/autodatee/"><i className="bi bi-instagram"></i></a>
                <a href="https://www.facebook.com/autodatee/"><i className="bi bi-facebook"></i></a>
                <a href="https://www.linkedin.com/company/autodatee/"><i className="bi bi-linkedin"></i></a>

            </div>
        </footer>
    )
}

