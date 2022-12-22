import { useState } from 'react';
import { useDispatch } from '../../../redux/store'

const Card = ({ data }: any) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(null)
    const blankCheckoutElement = document.getElementsByClassName(
        'cardType__1'
    )

    // blankCheckoutElement
    // blankCheckoutElement.onclick(function (){
    //     blankCheckoutElement.classList("active").siblings().removeClass("active");
    //   })
    return <button
        onClick={() => { dispatch(data.action); setActive(data.titel)}}
        className={`cardType__1 ${active == data.titel && 'active'}`}
        style={{
            cursor: 'pointer'
        }}
    >
        <div className="cardType__inner">
            <div className="cardType__icon">
                {data.icon}
            </div>
            <div className="cardType__text">
                <p className="cardType__name">
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