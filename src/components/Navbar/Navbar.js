import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import styled from 'styled-components';
import {GrClose} from 'react-icons/gr';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BiLogIn} from 'react-icons/bi';
import {BsCart3} from 'react-icons/bs';
import {cartContext} from '../../services/CartContextProvider';

let Ul = styled.div`
@media (max-width: 900px) {
    transform: ${props => props.burger ? 'translateX(0)' : 'translateX(100%)'};
}
` 
const Navbar = () => {
    let [open, setOpen] = useState(false);

    const  clickBurger = () => {
        setOpen(prev => !prev)
    }

    const closeBurgerInLink = () => {
        setOpen(false)
    }

    let linstRoute = [
        ['صفحه اصلی', '/'],
        ['دوره ها', '/courses'],
        ['نظرات دانشجویان', '/student-comments'],
        ['درباره ما', '/about-us'],
    ]

    const data = useContext(cartContext)
    const lengthProduct = data.state.selectedItems.length;

    return (
        <>
            <div className={style.container}>
                <div className={style.navbar}>
                    <div className={style.loginCart}>
                        <Link to='login' className={style.login}>
                            <span>ورود</span>
                            <BiLogIn className={style.iconLogin}/>
                        </Link>
                        <Link to='/cart' className={style.cart}>
                            {
                                lengthProduct > 0 && <p className={style.lengthProduct}>{lengthProduct}</p>
                            }
                            <BsCart3 className={style.iconCart}/>
                        </Link>
                    </div>
                    <div className={style.burgerContainer}>
                        <Ul dir='rtl' className={style.listNav} burger={open}>
                            <GrClose className={style.iconClose} onClick={clickBurger} />
                            {
                                linstRoute.map(item => <li key={item[0]}><Link className={style.link} onClick={closeBurgerInLink} to={`${item[1]}`}>{item[0]}</Link></li>)
                            }
                        </Ul>
                        <GiHamburgerMenu className={style.burger} onClick={clickBurger} />
                    </div>
                    <div className={style.imageContainer}>   
                        <Link to='/'>
                            <img src='https://botostart.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c523c566.png&w=128&q=100' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;