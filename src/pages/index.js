import NavBar from '../components/NavBar'
import Display from '../components/Display'
import styles from '../styles/calculadora.module.css'
import Buttons from '../components/Buttons'
import { useState } from 'react'

const init = {
    valueReset: true,
    numbers: '0',
    calc: ["", ""],
    memoryCalc: ""
}
export default function Calculadora() {
    const [ valorDisplay, setValor ] = useState({ ...init })

    function display(value) {
        const numbers = valorDisplay.numbers
        let reset = valorDisplay.valueReset
        !isNaN(value) ? valueNumber(value, reset, numbers) : 
        valueOperation(value, reset, numbers)
    }

    function valueNumber(value, reset, numbers) {
        let listcalcs = [...valorDisplay.calc]
        if ( !listcalcs[listcalcs.length - 1].includes('%') && !listcalcs[listcalcs.length - 1].includes(')') &&
        !listcalcs[listcalcs.length - 2].includes('√')) {
            if(reset && !(numbers[numbers.length - 1] == '.')) {
                numbers = value
                reset = false

            } else {
                numbers = numbers + value
            }
            setValor({...valorDisplay, valueReset: reset, numbers: numbers})
        }
    }

    function valueOperation( value, reset, numbers ) {
        let listcalcs = [...valorDisplay.calc]
        let memory  = valorDisplay.memoryCalc
        switch(value){
            case 'C':
                setValor({valueReset: true, numbers: '0', calc: ["", ""], memoryCalc: memory})
                break;
            case 'DEL':
                if(numbers == '0' || numbers.length == 1) {
                    setValor({...valorDisplay, valueReset: true, numbers: '0' })    
                } else {
                    setValor({...valorDisplay, numbers: numbers.slice(0, -1) })     
                }
                break;
            case '*':
            case '÷':
            case '-':
            case '+':
                if(reset == false && (listcalcs[listcalcs.length - 2].includes('√') || listcalcs[listcalcs.length - 1].includes('%')
                   || listcalcs[listcalcs.length - 1].includes(')')) && !(numbers[numbers.length - 1].includes('.'))) {
                    listcalcs.push(` ${value} `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                } else if(reset == false && !(numbers[numbers.length - 1].includes('.'))) {
                    listcalcs.push(numbers)
                    listcalcs.push(` ${value} `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs })
                } 
                break;    
            case '√':
                if(!numbers == '0' && !(listcalcs[listcalcs.length - 1].includes('%')) && 
                !(listcalcs[listcalcs.length - 2].includes('√')) && !(numbers[numbers.length - 1].includes('.'))) {
                    listcalcs.push("√(")
                    listcalcs.push(numbers)
                    setValor({...valorDisplay, valueReset: false, numbers: '0' , calc: listcalcs }) 
                }
                break;
            case 'x^':
                if (reset == false && (listcalcs[listcalcs.length - 2].includes('√') || listcalcs[listcalcs.length - 1].includes('%')
                    || listcalcs[listcalcs.length - 1].includes(')')) && !(numbers[numbers.length - 1].includes('.'))){
                    listcalcs.push(` ^ `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                } else if(reset == false && !(numbers[numbers.length - 1].includes('.')) ) {
                    listcalcs.push(numbers)
                    listcalcs.push(` ^ `)
                    setValor({...valorDisplay, valueReset: true, numbers: '0' , calc: listcalcs }) 
                } 
                break;
            case '%':
                if(reset == false && !(listcalcs[listcalcs.length - 1].includes('%')) && 
                !(numbers[numbers.length - 1].includes('.'))) {
                    if(listcalcs[listcalcs.length - 2].includes('√')) {
                        listcalcs.push(value)
                    } else {
                        listcalcs.push(numbers)
                        listcalcs.push(value)
                    }
                    setValor({...valorDisplay, valueReset: false, numbers: '0' , calc: listcalcs }) 
                }
                break;
            case ',':
                if(reset == false ) {
                    if(
                        !numbers.includes('.') && 
                        !(listcalcs[listcalcs.length - 1].includes('%')) && 
                        !(listcalcs[listcalcs.length - 2].includes('√')) && 
                        !(listcalcs[listcalcs.length - 1].includes(')'))
                    ) {
                        numbers = numbers + '.'
                        setValor({...valorDisplay, valueReset: false, numbers: numbers})
                    }
                }
                break;
            case '(':
                if (numbers == '0') {
                    if (!(listcalcs[listcalcs.length - 1].includes('%')) && !(listcalcs[listcalcs.length - 2].includes('√'))) {
                        listcalcs.push(value)
                        setValor({...valorDisplay, valueReset: true, numbers: '0', calc: listcalcs })
                    } 
                }
                break;
            case ')':
                if(reset == false && !(numbers[numbers.length - 1] ==  '.')) {
                    let leftBar = listcalcs.join('').split('(').length - 1
                    let rightBar = listcalcs.join('').split(')').length - 1
                    if (leftBar > rightBar) {
                        if(
                            !(listcalcs[listcalcs.length - 1].includes('%')) && 
                            !(listcalcs[listcalcs.length - 2].includes('√')) 
                        ) {
                            listcalcs.push(numbers)
                            listcalcs.push(value)
                            setValor({...valorDisplay, valueReset: false, numbers: '0', calc: listcalcs })
                        } else {
                            listcalcs.push(value)
                            setValor({...valorDisplay, valueReset: false, numbers: '0', calc: listcalcs })
                        }    
                    }
                }
                break;
            case '=':

                if(numbers[numbers.length - 1] ==  '.') {
                    listcalcs.push(numbers + '0')
                } else if (
                    !(listcalcs[listcalcs.length - 2].includes('√')) && 
                    !(listcalcs[listcalcs.length - 1].includes('%')) &&
                    !(listcalcs[listcalcs.length - 1].includes(')'))
                ) {
                    listcalcs.push(numbers)
                }

                if(listcalcs.join('').includes('0')) {
                    for( let values in listcalcs ) {
                        if(!isNaN(listcalcs[values]) && listcalcs[values] != '') {
                            listcalcs[values] = parseFloat(listcalcs[values])
                        }
                    }
                }

                if(listcalcs.join('').includes('(')) {
                    let barLeft = listcalcs.join('').split('(').length -1
                    let barRight = listcalcs.join('').split(')').length -1
                    if(barLeft > barRight) {
                        while(barRight < barLeft) {
                            barRight += 1
                            listcalcs.push(')')
                        }
                    }
                }
                console.log(listcalcs)

                let result = listcalcs.join('')
                if(result.includes('√')) {
                    result = result.replace(/\√/g, "Math.sqrt")
                }

                if(result.includes('÷')) {
                    result = result.replace(/\÷/g, "/")
                }

                if(result.includes('%')) {
                    let valuePorcent = result.match(/(\d+)%/g)
                    valuePorcent.join('')
                    valuePorcent = "(" + valuePorcent + ")"
                    valuePorcent = valuePorcent.replace(/\%/g, "/100")
                    result = result.replace(/(\d+)%/g, valuePorcent)
                }

                if(result.includes('^')) {
                    result = result.replace(/\^/g, "**")
                }

                result = eval(result)
                listcalcs.push(` ${value} `)
                listcalcs.push(`${result}`)
                setValor({...valorDisplay, valueReset: false, numbers: `${result}`, calc: ["", ""], memoryCalc: listcalcs.join('')  })
            
                break;
            
            default:
                break;
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.content_main}>
                <NavBar/>
                <Display value={`O ultimo resultado: ${valorDisplay.memoryCalc}`} memory />
                <Display value={valorDisplay.calc} historic/>
                <Display value={valorDisplay.numbers}/>
                <div className={styles.container_inputs}>
                    <Buttons event={ display } />
                </div>
            </div>
        </div>
    )
}