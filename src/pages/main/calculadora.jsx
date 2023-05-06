import NavBar from '@/components/navBar'
import Display from '@/components/Display'
import styles from '../../styles/calculadora.module.css'
import Buttons from '@/components/Buttons'
import { useState } from 'react'

const init = {
    valueReset: true,
    numbers: '0',
    calc: ["", ""]
}
export default function Calculadora() {
    const [ valorDisplay, setValor ] = useState({ ...init })

    function display(value) {
        const numbers = valorDisplay.numbers
        let reset = valorDisplay.valueReset
        !isNaN(value) ? valueNumber(value, reset, numbers) : 
        valueOperation(value, numbers, reset)
    }

    function valueNumber(value, reset, numbers) {
        let listcalcs = [...valorDisplay.calc]
        if ( !listcalcs[0].includes('√') && !listcalcs[1].includes('%') ) {
            if(reset) {
                numbers = value
                reset = false
            } else {
                numbers = numbers + value
            }
            setValor({...valorDisplay, valueReset: reset, numbers: numbers})
        }
    }

    function valueOperation(value, numbers,  reset) {
        let listcalcs = [...valorDisplay.calc]
        switch(value){
            case 'C':
                setValor({...init})
                break;
            case 'DEL':
                if(numbers == '0' || number.length == 1) {
                    setValor({...valorDisplay, valueReset: true, numbers: '0' })    
                } else {
                    setValor({...valorDisplay, numbers: numbers.slice(0, -1) })     
                }
                break;
            case '*':
            case '÷':
            case '-':
            case '+':
                if(reset == false) {
                    listcalcs.unshift(numbers)
                    listcalcs.unshift(` ${value} `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                } else if(listcalcs[0].includes('√') || listcalcs[1].includes('%')) {
                    listcalcs.unshift(` ${value} `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                }
                break;    
            case '√':
                if(reset == false && !numbers[0].includes('0')) {
                    listcalcs.unshift(` (${numbers})√ `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                }
                break;
            case 'x^':
                if(reset == false ) {
                    listcalcs.unshift(numbers)
                    listcalcs.unshift(` ^ `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                } else if (listcalcs[0].includes('√') || listcalcs[1].includes('%')){
                    listcalcs.unshift(` ^ `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                }
                break;
            case '%':
                if(reset == false ) {
                    listcalcs.unshift(`${value} `)
                    listcalcs.unshift(numbers)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                }
                break;
            case ',':
                console.log(listcalcs)
                if(reset == false ) {
                    listcalcs.unshift(numbers)
                    listcalcs.unshift('.')
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.content_main}>
                <NavBar/>
                <Display value={valorDisplay.calc} historic/>
                <Display value={valorDisplay.numbers}/>
                <div className={styles.container_inputs}>
                    <Buttons event={ display } />
                </div>
            </div>
        </div>
    )
}