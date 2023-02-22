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
    <div style={{'display': 'inline-flex'}}>
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
                 <CardFooter divider className="flex items-center justify-between py-3">
                   <Typography variant="small">$899/night</Typography>
                   <Typography variant="small" color="gray" className="flex gap-1">
                     <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                     Barcelona, Spain
                   </Typography>
                 </CardFooter>
                </Card>
            </Link>
    </div>
  )
}

export default ChooseCards