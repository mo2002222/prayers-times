import Select , {} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { countryContext } from '../App';
import { useContext } from 'react';
import   propTypes  from "prop-types";

export default function CityDistruction({cityName1,cityName2,cityName3,cityName4,cityName5,firstVal,secondVal,thirdVal,fourthVal,fifthVal,FirstnameEN,secondnameEN,thirdNameEn,fourthNameEn,fifthNameEn}) {
    const {setCityName,setNameEn} = useContext(countryContext);
    const handleChange = (e)=>{
        setCityName(e.target.value)
        if (e.target.value === cityName1) {
            setNameEn( FirstnameEN)                                      
        }else if(e.target.value === cityName2 ) {
            setNameEn(secondnameEN)    
        }else if(e.target.value === cityName3 ) {
            setNameEn( thirdNameEn)               
        }else if(e.target.value === cityName4 ) {
            setNameEn(fourthNameEn)               
        }else if(e.target.value === cityName5 ) {
            setNameEn(fifthNameEn)               
        }
        
    }    

    return (
        <div>
            <div style={{  borderRadius:"5px",  border:"1px solid #457", marginLeft:"10px", background:"#459"}}>
                <Box sx={{ width: 100 }}>
            <FormControl fullWidth>
                <InputLabel style={{color:"#fff"}}>المدينة</InputLabel>
                <Select
                    style={{color:'#fff'}}
                    onChange={handleChange}
                    >
                    <MenuItem value={firstVal}>{cityName1}</MenuItem>
                    <MenuItem value={secondVal}>{cityName2}</MenuItem>
                    <MenuItem value={thirdVal}>{cityName3}</MenuItem>
                    <MenuItem value={fourthVal}>{cityName4}</MenuItem>
                    <MenuItem value={fifthVal}>{cityName5}</MenuItem>
                </Select>
            </FormControl>
        </Box>
            </div>
        </div>
    )
}

CityDistruction.propTypes={
    cityName1:propTypes.string,
    cityName2:propTypes.string,
    cityName3:propTypes.string,
    cityName4:propTypes.string,
    cityName5:propTypes.string,
    firstVal:propTypes.string,
    secondVal:propTypes.string,
    thirdVal:propTypes.string,
    fourthVal:propTypes.string,
    fifthVal:propTypes.string,
    FirstnameEN:propTypes.string,
    secondnameEN:propTypes.string,
    thirdNameEn:propTypes.string,
    fourthNameEn:propTypes.string,
    fifthNameEn:propTypes.string
}