import { useState } from 'react';
import styles from './App.module.css';

import { levels, imcCalcAction, Level } from './helpers/imc'
import { GridItem } from './components/GridItem'
import arrowImg from './assets/images/leftarrow.png';


const App = () => {

  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const handleCalc = () => {
    if(height && weight){
      setToShow( imcCalcAction(weight, height) )
    } else {
      alert('Digite todos os campos!');
    }
  }
  const handleBackButton = () => {
    setToShow(null);
    setHeight(0);
    setWeight(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <a href="" style={{ textDecoration: 'none' }}>
            <div className={styles.headerLogo}>IMC</div>
          </a>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>

          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <input 
          type="number"
          placeholder='Digite a sua altura. Ex: 1.5 (em métros)'
          value={height ? height : ''}
          onChange={ e => setHeight( parseFloat( e.target.value ) ) }
          disabled={toShow ? true : false}
          />

          <input 
          type="number"
          placeholder='Digite o seu peso. Ex: 81.3 (em kg)'
          value={weight ? weight : ''}
          onChange={ e => setWeight( parseFloat( e.target.value ) ) }
          disabled={toShow ? true : false}
          />

          <button onClick={handleCalc} disabled={toShow ? true : false}>Calcular</button>

        </div>
        <div className={styles.rightSide}>

          {!toShow &&
          <div className={styles.grid}>

              {levels.map( (item, index)=>(
                <GridItem key={index} item={item} />
                ) 
              )}

          </div>
          }

          {toShow &&

            <div className={styles.rightBig}>
              <div className={styles.leftArrow} onClick={handleBackButton}>
                <img  src={arrowImg} alt="" width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default App;