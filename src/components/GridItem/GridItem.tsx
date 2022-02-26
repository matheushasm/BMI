import styles from './GridItem.module.css';
import { Level } from '../../helpers/imc';
import upImg from '../../assets/images/up.png';
import downImg from '../../assets/images/down.png';

type Props = {
    item: Level
}

export const GridItem = ( {item}: Props ) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.icon}>
                <img src={item.icon === 'up' ? upImg : downImg} alt="" width={30} />
            </div>
            <div className={styles.title}>
                {item.title}
            </div>

            {item.yourImc &&
                <div className={styles.imc}>
                    O seu IMC é de <strong>{item.yourImc}</strong> Kg/m2
                </div>
            }


            <div className={styles.info}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}