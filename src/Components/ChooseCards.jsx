import { Link } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Navbar,
} from "@material-tailwind/react";


function ChooseCards(props) {

  return (
    <div>
       <Link to = {props.path}>
           <Card className="w-96 hover:transform hover:scale-105 transition duration-300">
            <CardHeader color="red" className="relative h-56">
              <img
                src={props.image}
                alt="screenshot of calender or form"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="mb-2">
                {props.text}
              </Typography>
              <Typography>
                {props.description}
              </Typography>
            </CardBody>
           </Card>
       </Link>
    </div>
  )
}

export default ChooseCards