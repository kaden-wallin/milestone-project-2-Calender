import { Link } from 'react-router-dom'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";


function ChooseCards(props) {

  return (
    <div>
            <Link to = {props.path}>
                <Card className="w-96">
                 <CardHeader color="red" className="relative h-56">
                   <img
                     src="/img/blog.jpg"
                     alt="img-blur-shadow"
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