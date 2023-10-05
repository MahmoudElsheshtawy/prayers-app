import { Box, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack } from "@mui/material"
import Prayers from "./prayers"
import axios from "axios"
import { useState } from "react"

const MainContent = () => {

  const [timings, setTimings]=useState({

  Fajr: "05:27",
  Dhuhr:  "12:47",
  Asr: "16:10",
  Maghrib: "18:39",
  Isha:"19:57"

  })
// lojc
// handle city
 const handleChange=(e)=>{
  console.log(e.target.value)
 }
axios.get("https://api.aladhan.com/v1/timingsByCity?city=ElBeheira&country=Eg")
.then(res =>{
  console.log(res.data.data.timings)
  setTimings(res.data.data.timings)
  
})









  return (
    <>
    <div className="contaner" style={{ color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>

    <Grid container >
    <Grid item xs={6} >
         <h2>أكتوبر 2023|4:20</h2>
         <h1>الاسكندريه</h1>
    </Grid>
      <Grid item xs={6}>
      <h2>متبقي حتي صلاه الفجر</h2>
         <h1>00:10:20</h1>
    </Grid>
    </Grid>
   
    </div>
    <Divider style={{borderColor:'#aaa',opacity:'.2'}}/>
        {/* cart */}
   <Stack direction={"row"} 
				justifyContent={"space-around"}
				style={{ marginTop: "50px" }}>
    <Prayers 
    name={timings.Fajr}
    time="03:50"
    image="https://images.pexels.com/photos/16973076/pexels-photo-16973076/free-photo-of-silhouetted-mosque-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <Prayers name="الظهر"
					time="03:50"
					image="https://images.pexels.com/photos/337901/pexels-photo-337901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Prayers name="العصر"
					time="03:50"
					image="https://images.pexels.com/photos/14337323/pexels-photo-14337323.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Prayers name="المغرب"
					time="03:50"
					image="https://images.pexels.com/photos/4348424/pexels-photo-4348424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <Prayers name="العشاء"
					time="04:30"
					image="https://images.pexels.com/photos/4055277/pexels-photo-4055277.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    
   </Stack>

   <Box sx={{ minWidth: 120 }} justifyContent={'center'}>
      <FormControl style={{width:'30%',marginTop:'20px',}} >
        <InputLabel style={{color:'#fff'}} id="demo-simple-select-label">المدينه</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
         style={{ color:"#fff"}}
          onChange={handleChange}
        >
          <MenuItem value={10}>alx</MenuItem>
          <MenuItem value={20}>ciro</MenuItem>
          <MenuItem value={30}>bhara</MenuItem>
        </Select>
      </FormControl>
    </Box>


    </>
  )
}

export default MainContent