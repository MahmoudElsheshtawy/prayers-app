import { Box, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack } from "@mui/material"
import Prayers from "./prayers"
import axios from "axios"
import { useEffect, useState } from "react"

const MainContent = () => {

  const [timings, setTimings]=useState({

  Fajr: "05:27",
  Dhuhr:  "12:47",
  Asr: "16:10",
  Maghrib: "18:39",
  Isha:"19:57"

  })
  // logic
  const [city ,setCity]=useState({
    displayname:"البحيره", apiname:"ElBeheira"
  })


  const clectedcity =[
    {displayname:"البحيره", apiname:"ElBeheira"},
    {displayname:"القاهره", apiname:"Cairo"},
    {displayname:"الاسكندريه", apiname:"Alexandria"}
    
  ]
 const handleCityChange=(e)=>{
  console.log(e.target.value)
  const cityOpject = clectedcity.find((city)=>{
    return city.apiname == e.target.value;
  })
  setCity(cityOpject)
 }

 const getTimings = async()=>{
  const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city.apiname}&country=Eg`);
  console.log(response.data.data.timings.Asr)
  setTimings(response.data.data.timings)
 }

useEffect(()=>{

  getTimings()


},[city])


  return (
    <>
    <div className="contaner" style={{ color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>

    <Grid container >
    <Grid item xs={6} >
         <h2>أكتوبر 2023|4:20</h2>
         <h1>{city.displayname} </h1>
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
    name={'الفجر'}
    time={timings.Fajr}
    image="https://images.pexels.com/photos/16973076/pexels-photo-16973076/free-photo-of-silhouetted-mosque-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <Prayers name="الظهر"
					time={timings.Dhuhr}
					image="https://images.pexels.com/photos/337901/pexels-photo-337901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Prayers name="العصر"
					time={timings.Asr}
					image="https://images.pexels.com/photos/14337323/pexels-photo-14337323.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Prayers name="المغرب"
					time={timings.Maghrib}
					image="https://images.pexels.com/photos/4348424/pexels-photo-4348424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    <Prayers name="العشاء"
					time={timings.Isha}
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
          onChange={handleCityChange}
        >
          {clectedcity.map((c)=>(
            <MenuItem key={c.id} value={c.apiname}>{c.displayname}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </Box>


    </>
  )
}

export default MainContent