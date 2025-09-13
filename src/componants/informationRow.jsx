import { useContext, } from "react"
import { countryContext } from "../App"
import Grid from '@mui/material/Grid';

export default function InformationRow() {
    const {cityName,countryName,day,currentTime,nextPray,nextPrayTime} = useContext(countryContext)
    return (
        <>
            <div style={{display:"flex", justifyContent:"center",gap:"350px", direction:"rtl", alignItems:"center"}}>

                <Grid container columnSpacing={3}>
                    <Grid item md={6} lg={6}>
                        <div style={{ padding:'0 10px', borderRadius:"10px", background:"#459", marginTop:"10px"}}>
                            <h2 style={{marginTop:"0", paddingTop:"10px"}}>{countryName},{cityName}</h2>
                            <h2 style={{whiteSpace:'nowrap', marginTop:"0" , paddingBottom:"36px"}}>{day} | {currentTime}</h2>            
                        </div>
                    </Grid>
                    <Grid item md={6} lg={6} >
                        <div style={{display:"flex",alignItems:"center", flexDirection:"column", padding:'0 10px', borderRadius:"10px",background:"#459" ,marginTop:"10px"}}>
                            <h2 style={{whiteSpace:'nowrap', paddingTop:"10px"}}>متبقي علي صلاة {nextPray}</h2>
                            <h2 style={{marginTop:'0'}}>{nextPrayTime}</h2>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <hr style={{width:"100%", opacity:".2", marginBottom:"20px"}}/>
        </>
    )
}
