import styles from "./FooterPage.module.css";

export const FooterPage = () => {
    return (
        <footer className={styles.footer__container}>
            <div>
                <p className={`${styles.font__mont__alt}`}> © 2020 All rights reserved.</p>
            </div>
            <div className={styles.footer__container__icons}>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-youtube"></i></a>

            </div>
        </footer>
    )
}

