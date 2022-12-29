import { useState } from 'react';
import { useDispatch } from '../../../redux/store'

const Card = ({ data }: any) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(null)
    const buttonElement = document.getElementById(
        'button'
    )
    const nameElement = document.getElementById(
        'name'
    )
    const cardElement = document.getElementById(
        'cardType__inner'
    )

    const handleClick = (event : any) => {
        // console.log(buttonElement);
        // if(buttonElement){
        //     console.log(buttonElement.style.backgroundColor);
        //     if(nameElement){
        //     console.log(nameElement.innerHTML);
        //     }
        // if(buttonElement.style.backgroundColor == 'rgb(26, 115, 232)'){
        //     buttonElement.style.backgroundColor = '#fff'
        //     if(buttonElement.style.backgroundColor == 'rgb(54, 63, 94)'){

        //     }
        // }
        // console.log(event.currentTarget.style.backgroundColor);
        
        // event.currentTarget.classList.toggle('active');
        // if(event.currentTarget.style.backgroundColor == 'rgb(26, 115, 232)'){
        //     event.currentTarget.style.backgroundColor = '#fff'
        // } else{
        //     // event.currentTarget.style.backgroundColor = 'rgb(26, 115, 232)'
        // }
        // if(event.currentTarget.style.backgroundColor == 'rgb(54, 63, 94)'){
        //     event.currentTarget.style.backgroundColor = '#fff'
        // } else{
        //     // event.currentTarget.style.backgroundColor = 'rgb(54, 63, 94)'
        // }
        // if(event.currentTarget.style.backgroundColor == 'rgb(229, 68, 87)'){
        //     event.currentTarget.style.backgroundColor = '#fff'
        // } else{
        //     // event.currentTarget.style.backgroundColor = 'rgb(229, 68, 87)'
        // }

        
        // if(event.currentTarget.style.backgroundColor == 'rgb(61, 184, 135)'){
        //     event.currentTarget.style.backgroundColor = '#fff'
        // } else{
        //     // event.currentTarget.style.backgroundColor = 'rgb(61, 184, 135)'
        // }

        // if(event.currentTarget.classList == 'cardType__1 active'){
        //     event.currentTarget.classList = 'cardType__1'
        // }
        // if(event.currentTarget.classList == 'cardType__1'){
        //     event.currentTarget.classList = 'cardType__1 active'
        // }
        console.log(event)
        if(event.currentTarget.classList == 'cardType__1 active'){
            event.currentTarget.classList.remove('active')
        } else{
            event.currentTarget.classList.add('active')
        }
        dispatch(data.action)
        // if(event.currentTarget.classList == 'active'){
        //     event.currentTarget.classList.remove('active')
        // }
      };
    return <button
        onClick={handleClick}
        id='button'
        className='cardType__1'
        style={{
            cursor: 'pointer',
            backgroundColor: ((data.titel == 'ALL INVOICES')? 'rgb(26, 115, 232)': ((data.titel == 'OVERDUE')? 'rgb(54, 63, 94)': ((data.titel == 'UNPAID INVOICES')? 'rgb(229, 68, 87)': ((data.titel == 'PAID INVOICES')? 'rgb(61, 184, 135)': ''))))
        }}
    >
        <div id='cardType__inner' className="cardType__inner">
            <div className="cardType__icon">
                {data.icon}
            </div>
            <div className="cardType__text">
                <p id='name' className="cardType__name">
                    {data.titel}
                </p>
                <h3 className="cardType__Number" data-testid='total-data-card'>
                    {data.value}
                </h3>
            </div>
        </div>
    </button>
}

export default Card