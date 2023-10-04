import './Main.css';
import miImagen from '../assets/img/fabrizio.jpg'

const About = () => (
    <>  
    <div className='containerInfo'>
        <img className='imgDev' src={miImagen} alt="imgDev" />
        <h1>Fabrizio Cabrera</h1>
        <p>Hola Mundo! soy un Ingeniero Mecatronico y Desarrollador Java Full Stack en proceso,
            soy un apasionado del aprendizaje y los grandes retos, así mismo me encantan los videojuegos, los gatos y la vida fitness.</p>
        <p><small>Contactame con mi correo: paulofabrizio@mail.com</small></p>
        </div>
    </>
)


export default About;
