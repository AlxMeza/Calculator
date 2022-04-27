import React from 'react';
import './styles.css';

const Calculator = () => {
    function putText(e){
        document.getElementById('entrada').value += e.target.value;
    }
    function eraseText(){
        document.getElementById('entrada').value = '';
    }
    function calculate(){
        let str = document.getElementById('entrada').value.toString();
        let s = ''
        for (let i = 0; i < str.length; i++) {
            //console.log(str[i]);
            if(str[i] === 'x')
                s += '*'
            else if(str[i] === '÷')
                s += '/';
            else
                s += str[i]    
        }
        s = eval(s).toString();
        document.getElementById('entrada').value = s;
    }

    return (
        <>
            <section className='container'>
                <div className='entrada'>
                    <input type="text" placeholder="0" id='entrada' value='' disabled/>
                </div>
                <div className='entrada'>
                    <div className='buttons'>
                        <button className='boton' value='7' onClick={putText}>7</button>
                        <button className='boton' value='8' onClick={putText}>8</button>
                        <button className='boton' value='9' onClick={putText}>9</button>
                        <button className='boton blue' onClick={eraseText}>AC</button>

                        <button className='boton' value='4' onClick={putText}>4</button>
                        <button className='boton' value='5' onClick={putText}>5</button>
                        <button className='boton' value='6' onClick={putText}>6</button>
                        <button className='boton blue' value='÷' onClick={putText}>÷</button>

                        <button className='boton' value='1' onClick={putText}>1</button>
                        <button className='boton' value='2' onClick={putText}>2</button>
                        <button className='boton' value='3' onClick={putText}>3</button>
                        <button className='boton blue' value='x' onClick={putText}>x</button>

                        <button className='boton' value='.' onClick={putText}>.</button>
                        <button className='boton' value='0' onClick={putText}>0</button>
                        <button className='boton' value='-' onClick={putText}>-</button>
                        <button className='boton blue' value='+' onClick={putText}>+</button>
                    </div>
                </div>
                <div className='equal'>
                    <button className='boton igual' onClick={calculate}>=</button>
                </div>
            </section>

        </>
    );
}

export default Calculator