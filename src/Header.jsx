import {useTelegram} from "../hooks/useTelegram.js";


const Header = () => {
    const {user} = useTelegram();

    return (
        <div className={'header'}>
            <span className={'username'}>
                {user?.first_name}
            </span>
        </div>
    );
};

export default Header;
