import NavBar from '@/components/navBar'
import Display from '@/components/Display'
import styles from '../../styles/calculadora.module.css'
import Buttons from '@/components/Buttons'
export default function Calculadora() {
    return (
        <div className={styles.content}>
            <div className={styles.content_main}>
                <NavBar/>
                <Display />
                <div className={styles.container_inputs}>
                    <Buttons />
                </div>
            </div>
        </div>
    )
}