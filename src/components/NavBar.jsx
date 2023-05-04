import MiniButton from './MiniButton'
import styles from './NavBar.module.css'
export default function NavBar() {
    return (
        <nav className={styles.container}>
            <div className={styles.container_miniButtons}>
                <MiniButton color="#fa5959"></MiniButton>
                <MiniButton color="#fcbc42"></MiniButton>
                <MiniButton color="#6cff6c"></MiniButton>
            </div>
            <h1 className={styles.fonts}>Basic Mode</h1>
            <div className={styles.container_menu}>
                <span className={styles.container_point}>.</span>
                <span className={styles.container_point}>.</span>
                <span className={styles.container_point}>.</span>
            </div>
        </nav>
    )
}