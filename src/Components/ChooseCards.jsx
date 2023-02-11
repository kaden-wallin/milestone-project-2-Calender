import { Link } from 'react-router-dom'

function ChooseCards(props) {
  return (
    <div>
        <ul>
            <Link to = {props.path}>
                <figure>
                    <h1>{props.text}</h1>
                </figure>
            </Link>
        </ul>
    </div>
  )
}

export default ChooseCards