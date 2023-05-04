import NavBar from '@/components/navBar'
import Display from '@/components/Display'
import styles from '../../styles/calculadora.module.css'
import Buttons from '@/components/Buttons'
import { useState } from 'react'

const init = {
    valueReset: true,
    current: 0,
}

export default function Calculadora() {
    
    const [ valorDisplay, setValor ] = useState(["0", "0"])

    function display(value) {
        
        if (init.valueReset) {
            setValor(valorDisplay[init.current] = `${value}`)
            init.valueReset=false
        } else {
            console.log(valorDisplay[0], valorDisplay[1],)
            setValor(valorDisplay[0] + `${value}`)
        }
    }
    return (
        <div className={styles.content}>
            <div className={styles.content_main}>
                <NavBar/>
                <Display value="9999999999999999999999999999999999999" historic/>
                <Display value={valorDisplay[init.current]}/>
                <div className={styles.container_inputs}>
                    <Buttons event={ display } />
                </div>
            </div>
        </div>
    )
}