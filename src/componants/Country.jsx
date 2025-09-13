import Select, {} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useContext } from 'react';
import { countryContext } from '../App';
import City from './City';

export default function Country() {
    const {setCountryName,countryName,setCountryTz} = useContext(countryContext);
    const HandleChange = (e)=>{
        setCountryName(e.target.value)
        if(e.target.value==='مصر') {
            setCountryTz("Africa/Cairo")
        }else if(e.target.value==='السعودية'){
            setCountryTz("Asia/Riyadh")
        }else if(e.target.value==='الإمارات'){
            setCountryTz("Asia/Dubai")
        }else if(e.target.value==='المغرب'){
            setCountryTz("Africa/Casablanca")
        }else if(e.target.value==='الجزائر'){
            setCountryTz("Africa/Algiers")
    }} 
    
    return (
            <div style={{color:"red", display:"flex", justifyContent:"center", alignItems:"center", }}>
                <Box sx={{ width: 100 }}>
                    <FormControl fullWidth>
                        <InputLabel  style={{color:"#fff"}}>الدولة</InputLabel>
                        <Select
                            style={{color:'#fff',background:"#459", border:"1px solid #457"}}
                            onChange={HandleChange}
                            >
                            <MenuItem value={"مصر"} >مصر</MenuItem>
                            <MenuItem value={"السعودية"}>المملكة العربية السعودية</MenuItem>
                            <MenuItem value={"الإمارات"}>الإمارات العربية المتحدة</MenuItem>
                            <MenuItem value={"المغرب"}>المغرب</MenuItem>
                            <MenuItem value={"الجزائر"}>الجزائر</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <City countryValue={countryName}></City>
        </div>
    )
}