/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack, recomposeColor } from "@mui/material"
import Prayers from "./prayers"
import axios from "axios"
import { useEffect, useState } from "react"
import moment from "moment"
import "moment/dist/locale/ar-dz"
moment.locale("ar-dz")

const MainContent = () => {

  // stste-for timer
  // const [timer,setTimer]=useState(10)
  const [nextPrayerIndex,setNextPrayerIndex]=useState(1)
  // stste for  date & day
  const [today,setToday]=useState()
 //state for timings of prayers
  const [timings, setTimings]=useState({

  Fajr: "05:27",
  Dhuhr:  "12:47",
  Asr: "16:10",
  Maghrib: "18:39",
  Isha:"19:57"

  })
  // logic
  //initail city :elbeheria
  const [city ,setCity]=useState({
    displayname:"البحيره", apiname:"ElBeheira"
  })

 //selcted city in menu >1,2,3...
  const clectedcity =[
    {displayname:"البحيره", apiname:"ElBeheira"},
    {displayname:"القاهره", apiname:"Cairo"},
    {displayname:"الاسكندريه", apiname:"Alexandria"}
    
  ]
  // key and di-name for top section :control this arr selcted the index

  const prayersArray = [
		{ key: "Fajr", displayName: "الفجر" },
		{ key: "Dhuhr", displayName: "الظهر" },
		{ key: "Asr", displayName: "العصر" },
		{ key: "Maghrib", displayName: "المغرب" },
		{ key: "Isha", displayName: "العشاء" },
	];
 const handleCityChange=(e)=>{
  // console.log(e.target.value)
  const cityOpject = clectedcity.find((city)=>{
    return city.apiname == e.target.value;
  })
  setCity(cityOpject)
 }
//  fitching data from api
 const getTimings = async()=>{
  const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city.apiname}&country=Eg`);
  // console.log(response.data.data.timings)
  setTimings(response.data.data.timings)
 }
//  use effect for handle side effects
useEffect(()=>{
  getTimings()
},[city])

// use effect for date & timer
                                // console.log("jjjjjj")
                               //   setTimer((minus)=>{
                              //  return minus -1
useEffect(()=>{
  //date and time
  const date=moment();
  setToday(date.format("MMM Do YYYY | h:mm"))

  
let interval =setInterval(()=>{

    setupCountdowenTimer();
  //  })
},1000)
  //clear up for side effect /// very important
return()=>( 

  clearInterval(interval)
)
  
},[]);
// ********************** [ TOP Timer ]********************
// step-1->  what time in the moment // must be transfare string to object even Benefit from moment Library.
// step-2->  weare i bettwen the preyers 1 - 2 - 3 - 4 - 5
//

const setupCountdowenTimer =()=>{

    const momentNow = moment() //object from moment
    let prayerIndex = 2;

    if(
       momentNow.isAfter(moment(timings["Fajr"],"hh:mm")) &&
       momentNow.isBefore(moment(timings["Dhuhr"],"hh:mm"))
       ){
        console.log("next priure is dhurrrr")
        prayerIndex=1;
    } else if (
      momentNow.isAfter(moment(timings["Dhuhr"],"hh:mm")) &&
      momentNow.isBefore(moment(timings["Asr"],"hh:mm"))
    ){
      console.log("next priure is Asr")
      prayerIndex=2;
    }else if(
               momentNow.isAfter(moment(timings["Asr"],"hh:mm")) &&
               momentNow.isBefore(moment(timings["Maghrib"],"hh:mm"))
               ){
      console.log("next priure is dhur")
      prayerIndex= 3;
    }else if (
      momentNow.isAfter(moment(timings["Maghrib"],"hh:mm")) &&
      momentNow.isBefore(moment(timings["Isha"],"hh:mm"))
    ) {
      console.log("next priure is Isha")
      prayerIndex=4;
    }else{
      console.log("next is figr")
      prayerIndex=0;
    }
    setNextPrayerIndex(prayerIndex);
//





    // transfare
    const Isha=timings["Isha"];
    const Ishamoment = moment(Isha,"hh:mm")
    console.log(momentNow.isAfter(Ishamoment))
    

}


  return (
    <>
    <div className="contaner" style={{ color:'#fff',display:'flex',alignItems:'center',justifyContent:'center'}}>

    <Grid container >
    <Grid item xs={6} >
         <h2>{today}</h2>
         <h1>{city.displayname} </h1>
         {/* <h1>{timer}</h1> */}
    </Grid>
      <Grid item xs={6}>
  <h1>متبقي حتي صلاه {prayersArray[nextPrayerIndex].displayName}</h1>
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
            <MenuItem key={c.apiname} value={c.apiname}>{c.displayname}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </Box>


    </>
  )
}

export default MainContent