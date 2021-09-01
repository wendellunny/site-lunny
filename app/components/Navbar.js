import styles from '../../styles/Navbar.module.css';
export function Navbar(){
    return(
        <nav class={styles.navbar}>
            <div>
                <input type='text'/>
            </div>
            <ul>
                <a>
                    <li>Home</li>
                </a>
                <a>
                    <li>Sobre</li>
                </a>
                <a>
                    <li>Blog</li>
                </a>
                
            </ul>
        </nav>
    );
}