/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

const Prayers = ({name ,time ,image}) => {
  return (
<>
<Card sx={{ maxWidth: 350 }} className="card" style={{backgroundColor:'aqua'}}>
   {/* <div className="card"> */}
   <CardMedia
        sx={{ height: 150 ,width:220 ,objectFit:'cover'}}
        image={image}
        time={time}
      />
      <CardContent >
      <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Typography variant="h4" color="text.secondary" >
           {time}
          
        </Typography>
      </CardContent>
   {/* </div> */}
    
    </Card>






</>
  )
}

export default Prayers
