import PostModelo from "componentes/PostModelo";
import styles from './SobreMim.module.css'
import fotoCapa from "assets/sobre_mim_capa.png"

export default function SobreMim () {

    const minhaFoto = 'https://github.com/gabrielpramalho.png'

    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, sou o Gabriel Ramalho!
            </h3>

            <img
                src={minhaFoto}
                alt="Foto do Gabriel Ramalho"
                className={styles.fotoSobreMim}
            />
        
            <p className={styles.paragrafo}>
                Meu nome é Gabriel Ramalho, e aos meus 22 anos, sou apaixonado pelo mundo da tecnologia. Sou formado em Ciência da Computação pela Universidade Estadual do Norte do Paraná, e chamo o estado do Paraná de lar. Desde que iniciei minha jornada profissional, tenho passado os últimos dois anos imerso no empolgante campo do desenvolvimento web.
            </p>
            <p className={styles.paragrafo}>
                Minha paixão por explorar as possibilidades infinitas da internet e criar soluções inovadoras me impulsiona a cada dia. Em cada projeto em que me envolvo, coloco minha dedicação e entusiasmo para superar desafios técnicos e alcançar a excelência em meu trabalho. Meu portfólio reflete meu profissionalismo e minhas habilidades em desenvolvimento web, e estou sempre em busca de novas maneiras de me aprimorar.
            </p>
            <p className={styles.paragrafo}>
                Além do meu trabalho, sou um eterno aprendiz. Acredito que a chave para o sucesso está na inovação e na aprendizagem contínua. Por isso, estou sempre explorando novos conhecimentos e tendências em tecnologia. Uso meu blog pessoal como uma plataforma para compartilhar minhas experiências, insights e tutoriais com a comunidade tecnológica.
            </p>
            <p className={styles.paragrafo}>
                Fora do mundo da tecnologia, sou uma pessoa acessível e colaborativa. Acredito na importância da colaboração e estou aberto a interações construtivas com outros profissionais e entusiastas da tecnologia. Minha missão é tornar a tecnologia mais acessível para todos e inspirar outros a embarcarem na jornada do desenvolvimento web.
            </p>
            <p className={styles.paragrafo}>
                Resumindo, sou Gabriel Ramalho, um profissional em ascensão na área de tecnologia, um ávido aprendiz e um entusiasta do desenvolvimento web. Estou determinado a fazer minha marca na comunidade tecnológica, e minha jornada e paixão pelo mundo digital servem de inspiração para todos que desejam explorar o poder da tecnologia e criar soluções inovadoras e impactantes.
            </p>

        </PostModelo>
    )
}