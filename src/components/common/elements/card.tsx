import { useState } from 'react';
import { useDispatch } from '../../../redux/store'

const Card = ({ data }: any) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(false)
    const titleElement = document.getElementById(
        'card-title'
    ) as HTMLButtonElement
    return <button
        onClick={() => { dispatch(data.action)}}
        className={`cardType__1 ${(active == true)? 'active': ''}`}
        style={{
            cursor: 'pointer'
        }}
    >
        <div className="cardType__inner">
            <div className="cardType__icon">
                {data.icon}
            </div>
            <div className="cardType__text">
                <p id='card-title' className="cardType__name">
                    {data.titel}
                </p>
                <h3 className="cardType__Number" data-testid = 'total-data-card'>
                    {data.value}
                </h3>
            </div>
        </div>
    </button>
}

export default Card