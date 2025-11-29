import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import { WindowControls } from "#components/index.js";

const Contact = () => {
    return <>
        <div id="window-header">
            <WindowControls target="contact"/>
            <h2>Contattami</h2>
        </div>

        <div className="p-5 space-y-5">
            <img src="/images/adrian.jpg" alt="" className="w-20 rounded-full" />

            <h3>Lets' Connect</h3>
            <p>Problemi? Domande e approfondimenti? Mi trovi qua: <br/>
               mattiacerioni12@gmail.com
            </p>

            <ul>
                {socials.map(({id, bg, link, icon, text}) => (
                    <li key={id} style={{backgroundColor: bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={icon} alt={text} className="size-5"/>
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
}

const ContactWindow = WindowWrapper(Contact, 'contact');
export default ContactWindow;