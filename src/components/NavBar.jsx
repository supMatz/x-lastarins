import dayjs from 'dayjs';
import 'dayjs/locale/it';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import {navIcons, navLinks} from "#constants/index.js";
import useWindowStore from "#store/window.js";


const NavBar = () => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.locale('it'); // formattazione data italiana

    const { openWindow } = useWindowStore();

    return (
        <nav className="flex items-center justify-between px-6 py-4 font-sans tracking-wide">
            <div className="flex items-center gap-4">
                <img src='/images/logo.svg' alt='logo'/>
                <p className="font-semibold">Portfolio Cerioni</p>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex gap-8">
                    {navLinks.map(({id, name, type})=> (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-4">
                <ul className="flex gap-3">
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>

                <time className="ml-4">
                    {dayjs().tz("Europe/Rome").format("ddd D MMM HH:mm")}
                </time>
            </div>
        </nav>
    )
}
export default NavBar;