import Container from '@mui/material/Container';
import InformationRow from './componants/informationRow';
import Cards from './componants/Cards';
import fagrImg from './media/fajr-prayer (1).png'
import dhuhrImg from './Media/dhhr-prayer-mosque.png'
import asrImg from './Media/asr-prayer-mosque.png'
import maghrebImg from './Media/sunset-prayer-mosque.png'
import ishaaImg from './Media/night-prayer-mosque.png'
import Country from "./componants/Country"
import axios from 'axios'
import { useEffect,useState,createContext } from 'react';
import moment from 'moment'
export const countryContext = createContext();
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import momentTZ from 'moment-timezone';

function App() {
  const [Timings,setTimings] = useState({});
  const [cityName,setCityName] = useState("القاهرة");
  const [countryName,setCountryName] = useState("مصر");
  const [nameEn , setNameEn] = useState()
  const [countryAbbr,setCountryAbrr] = useState();
  const [day , setDay] = useState();
  const [currentTime , setCurrentTime] = useState(moment().format("HH:mm:ss a"))
  const [nextPray,setNextPray] = useState();
  const [nextPrayTime,setNextPrayTime] = useState();
  const [countryTz, setCountryTz] = useState("Africa/Cairo");
  let res = null 
  


  const getData = async () =>{
    const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=${countryName}&city=${cityName}`);
    setTimings(response.data.data.timings)
    res = response;    
    setDay(response.data.data.date.hijri.weekday.ar+" "+response.data.data.date.hijri.day+" "+ response.data.data.date.hijri.month.ar +" "+response.data.data.date.hijri.year)    
  }

  useEffect(()=>{
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[nameEn])
    
  useEffect(()=>{
    const interval = setInterval(()=>{
        setCurrentTime(momentTZ.tz(`${countryTz}`).format("HH:mm:ss a"));
        },1000);
        return ()=> clearInterval(interval)
    },[countryTz])
    
  useEffect(()=>{
    const counterInterval = setInterval(() => {
      handelCounter();
    },1000)
    return () => clearInterval(counterInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cityName])    

  const handelCounter = ()=>{
    const tz= `${countryTz}`
    const currentTz = momentTZ.tz(tz).format("HH:mm:ss")
    const momTz = moment(currentTz,"HH:mm:ss")
    if (momTz.isAfter(moment(res.data.data.timings.Fajr, "HH:mm")) && momTz.isBefore(moment(res.data.data.timings.Dhuhr, "HH:mm"))) {
      setNextPray("الظهر")
      const tmom = moment(res.data.data.timings.Dhuhr,"HH:mm:ss")
      const diff =tmom.diff(momTz)
      const duration = moment.duration(diff)
      const hours = duration.hours()
      const minutes = duration.minutes()
      const seconds = duration.seconds()
      const diffBetweenPrayers = seconds +" : "+minutes+" : "+hours 
      setNextPrayTime(diffBetweenPrayers)
    }else if(momTz.isAfter(moment(res.data.data.timings.Dhuhr, "HH:mm")) && momTz.isBefore(moment(res.data.data.timings.Asr, "HH:mm"))){
      setNextPray("العصر");
      const tmom = moment(res.data.data.timings.Asr,"HH:mm:ss")
      const diff =tmom.diff(momTz)
      const duration = moment.duration(diff)
      const hours = duration.hours()
      const minutes = duration.minutes()
      const seconds = duration.seconds()
      const diffBetweenPrayers = seconds +" : "+minutes+" : "+ hours
      setNextPrayTime(diffBetweenPrayers)
      
    }else if(momTz.isAfter(moment(res.data.data.timings.Asr, "HH:mm")) && momTz.isBefore(moment(res.data.data.timings.Sunset, "HH:mm"))){
      setNextPray("المغرب");
      const tmom = moment(res.data.data.timings.Sunset,"HH:mm:ss")
      const diff =tmom.diff(momTz)
      const duration = moment.duration(diff)
      const hours = duration.hours()
      const minutes = duration.minutes()
      const seconds = duration.seconds()
      const diffBetweenPrayers = seconds +" : "+minutes+" : "+hours 
      setNextPrayTime(diffBetweenPrayers)
    }else if(momTz.isAfter(moment(res.data.data.timings.Sunset, "HH:mm")) && momTz.isBefore(moment(res.data.data.timings.Isha, "HH:mm"))){
      setNextPray("العشاء");
      const tmom = moment(res.data.data.timings.Isha,"HH:mm:ss")
      const diff =tmom.diff(momTz)
      const duration = moment.duration(diff)
      const hours = duration.hours()
      const minutes = duration.minutes()
      const seconds = duration.seconds()
      const diffBetweenPrayers = seconds +" : "+minutes+" : "+hours;
      setNextPrayTime(diffBetweenPrayers) 
    }else{
      const str = res.data.data.timings.Fajr;
      const sliceHoure = str.slice(0,2);
      const sliceMEnuits = str.slice(3)
      setNextPray("الفجر");
      if (momTz.isAfter(moment(res.data.data.timings.Isha, "HH:mm")) && momTz.isBefore(moment().endOf('day'))) {
        const eventTime = moment().add(1, 'days').set({ hour: sliceHoure, minute: sliceMEnuits, second: 0 });
        const evduration = moment.duration(eventTime.diff(momTz))
        const evhours = Math.floor(evduration.asHours());
        const evminutes = evduration.minutes();
        const evseconds = evduration.seconds();
        setNextPrayTime(evhours +":"+ evminutes +":"+ evseconds)        
      }else if(momTz.isBefore(moment(res.data.data.timings.Fajr, "HH:mm"))){
        const eventTime = moment().add(0, 'days').set({ hour: sliceHoure, minute: sliceMEnuits, second: 0 });
        const evduration = moment.duration(eventTime.diff(momTz))
        const evhours = Math.floor(evduration.asHours());
        const evminutes = evduration.minutes();
        const evseconds = evduration.seconds();
        setNextPrayTime(evhours +":"+ evminutes +":"+ evseconds)
      
    } 
    }
  }

  return (
    <countryContext.Provider value={{cityName,setCityName,countryName,setCountryName,nameEn,setNameEn,countryAbbr,setCountryAbrr,day,currentTime,nextPray,nextPrayTime, setCountryTz,setCurrentTime}}>
        <div >
          <Container maxWidth="lg">
            <InformationRow></InformationRow>
            <div style={{display:"flex", gap:"8px", direction:"rtl" }}>
            <Box sx={{ flexGrow: 1 }} xl={{justifyContent:"center" ,alighnItems:"center" , display:"flex"}}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} lg={2.4} xl={2.4}>
                <Cards prayImg={fagrImg} prayName={"الفجر"} prayTime={`${Timings.Fajr}`}></Cards>
                </Grid>
                <Grid item xs={12} sm={6} md={3}  lg={2.4} xl={2.4}>
                <Cards prayImg={dhuhrImg} prayName={"الظهر"} prayTime={`${Timings.Dhuhr}`}></Cards>
                </Grid>
                <Grid item xs={12} sm={6} md={3}  lg={2.4} xl={2.4}>
                <Cards prayImg={asrImg} prayName={"العصر"} prayTime={`${Timings.Asr}`}></Cards>
                </Grid>
                <Grid item xs={12} sm={6} md={3}  lg={2.4} xl={2.4}>
                <Cards prayImg={maghrebImg} prayName={"المغرب"} prayTime={`${Timings.Sunset}`}></Cards>
                </Grid>
                <Grid item xs={12} sm={6} md={3}  lg={2.4} xl={2.4}>
                <Cards prayImg={ishaaImg} prayName={"العشاء"} prayTime={`${Timings.Isha}`}></Cards>
                </Grid>
              </Grid>
            </Box>
            
            </div>
            <Box lg={{ alignItems: 'center' }}>
              <div style={{ position:"absolute", left:"25%", transform:"translteX(-50%)",  margin:"30px 0 0 0", borderRadius:"5px" }}>
                    <Country></Country>
              </div>
            </Box>
          </Container>
      </div>
    </countryContext.Provider>
    
  )
}

export default App
