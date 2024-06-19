import './Card.scss'

function Card({ nameList, color, onDelete }) {
    return (
        <div className='card-container'>
            {nameList.map(({ title, text, Description, button }, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text">{Description}</p>
                        <a href="#" className="btn btn-primary" style={{ backgroundColor: color }} onClick={() => onDelete(index)}>
                            {button} 
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;
