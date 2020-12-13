import './NavButton.css';

const NavButton = ({name, className, onClick}) => {


    return(
        <button className = {className?("NavButton " + className):"NavButton"} onClick={onClick}>
            {name}
        </button>
    )
}

export default NavButton