import './Card.css';

const Card = (props) => {
    //props -> className 부터 children 이 있음..
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>
}

export default Card;