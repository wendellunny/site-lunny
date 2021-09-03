import styles from '../../../styles/Home.module.css';

export function CodeArea(){
    return(
        <div>
            <p><span>1</span>//Olá Mundo;</p>
            <p><span>2</span>//Eu sou Wendel Luiz</p>
            <p className={styles.if}><span>4</span>{'if(dia){'}</p>
            <p className={styles.function}><span>5</span> &nbsp; darBomDia</p>
            <p className={styles.if}><span>6</span>{'}else{'}</p>
            <p className={styles.function}><span>7</span> &nbsp; darBoaNoite</p>
            <p><span>8</span>{'}'}</p>

        </div>
    )
}

