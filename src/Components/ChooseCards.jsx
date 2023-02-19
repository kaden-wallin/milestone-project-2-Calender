import { Link } from 'react-router-dom'

function ChooseCards(props) {
  return (
    <div className=' text-center bg-green-300'>
      <ul >
        <Link to={props.path}>
          <figure>
            <h1>{props.text}</h1>
          </figure>
        </Link>
      </ul>
    </div>
  )
}

export default ChooseCards