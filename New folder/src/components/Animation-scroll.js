import AOS from 'aos';
import 'aos/dist/aos.css';

let animation = (durection) => {
    AOS.init({duration: durection})
}
export default animation;