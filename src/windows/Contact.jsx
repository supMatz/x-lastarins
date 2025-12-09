import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import { WindowControls } from "#components/index.js";

const Contact = () => {
    return <>
        <div id="window-header">
            <WindowControls target="contact"/>
            <h2>Contact Me Bih</h2>
        </div>

        <div className="p-5 space-y-5">
            <img src="/images/pfp.png" alt="" className="w-20 rounded-full select-none" draggable={false} />

            <h3>Al posto di ghostarmi cessa</h3>
            <p>Puoi scrivermi su : <strong>mattiacerioni12@gmail.com</strong> <br/>
                Ma anche su :
            </p>

            <ul>
                {socials.map(({id, bg, link, icon, text}) => (
                    <li key={id} style={{backgroundColor: bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img
                                src={icon}
                                alt={text}
                                className="size-5"
                                draggable={false}
                            />

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