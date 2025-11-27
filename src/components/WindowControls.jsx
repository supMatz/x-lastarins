import useWindowStore from "#store/window.js";

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();

    return <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)}/>
        <div className="maximize" />
        <div className="minimize" />

    </div>
}
export default WindowControls;
