import dayjs from 'dayjs';
import 'dayjs/locale/it';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import {navIcons, navLinks} from "#constants/index.js";


const NavBar = () => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.locale('it'); // formattazione data italiana

    return (
        <nav>
            <div>
                <img src='/images/logo.svg' alt='logo'/>
                <p className='font-bold'>Portfolio Cerioni</p>

                <ul>
                    {navLinks.map((item)=> (
                        <li key={item.id}>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} className='icon-hover' alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>
            </div>

            <time>{dayjs().tz("Europe/Rome").format("ddd D MMM HH:mm").toUpperCase()}</time>
        </nav>
    )
}

export default NavBar;
