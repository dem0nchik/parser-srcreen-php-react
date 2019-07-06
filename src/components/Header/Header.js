import React, {useState} from 'react';
import './Header.css'

const Header = (props) => {
    const [count, setCount] = useState(0);
    const inputHandler = e => setCount(e.currentTarget.value);

    const sendCount = e => {
        e.preventDefault();
        if(!isNaN(count) && count >=0 && count <=50 && count)
        {
            props.getPhotos(count);
        }
    }
    return (
        <header>
            <div className="header">
                <label>
                    <input value={count} onChange={inputHandler} placeholder='Введите количество картинок'/>
                    Количество фоток
                </label>
                <button onClick={sendCount}>Получить фото <span>(не больше 50)</span></button>
            </div>
        </header>
    )
}

export default Header;