import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner(){

    const minhaFoto = 'https://github.com/gabrielpramalho.png'

    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Bem-vindo ao meu espaço virtual! Sou Gabriel Ramalho, um entusiasta da Ciência da Computação, apaixonado por tecnologia e desenvolvimento web. Este é o meu blog pessoal, onde compartilho minha jornada, ideias, descobertas e experiências nesta emocionante jornada tecnológica.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt='Circulo Colorido'
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Minha foto'
                />
            </div>
        </div>
    )
}