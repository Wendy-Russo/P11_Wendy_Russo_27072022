import React from 'react';
import './Banner.scss';

function Banner(props) {
    const SLOGAN = props.slogan;
    const SLOGAN_ELEM = SLOGAN !== undefined ? <p>{SLOGAN}</p> : "" ;
    //console.log(props.residence, 1)
    return(
        <div className='banner'>
            {SLOGAN_ELEM}
            <img alt="banner" src='https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1658102400&Signature=AsGKVeFnQZPZus-C67jhMpO2LmKeYqsxqPcx8WmR18FcJ0EvA5voZ9saB4bKZNQVXS50Ni89TPLC29Naz2HCMyoXGEvcrO0mTQEMRfmu~nx~Jx7v~TLd-R19mLz7uo0FaWv9OBbK9NLptl3QeQ-Rl9PmVJA2Z8gplgh9gGrLsdehijtCmHnWgqEWqhVmxCb-x2ilNr2Ye-ZnkANQDw864P3iyKzOgZZRccEnav103ewIBAwtR6nQfk5ptgwh9NL~tP5PYQbsPl1~vNjmjFVtzJN9ZB7V4ozDAykTzBKXaG9RDUlEsamizx-0RRwSqXPD7fS7RlKRXFcNtUJ-SGSMkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
        </div>
    )
}

export default Banner