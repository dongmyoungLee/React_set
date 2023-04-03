import './ExpenceItem.css';
import Card from '../UI/Card';


const ExpenseDate = (props) => {
    const month = props.date.toLocaleDateString('ko-KR', { month : 'long'});
    const day = props.date.toLocaleDateString('ko-KR', { day : '2-digit'});
    const year = props.date.getFullYear();

    return (
        <Card className="expense-date">
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
        </Card>
    );
}

export default ExpenseDate;