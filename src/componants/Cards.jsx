import Card from '@mui/material/Card';
import propTypes from 'prop-types';
export default function Cards({prayName, prayImg, prayTime}) {
    return (
        <>
            <div>
                <Card sx={{ maxWidth: 345 }} style={{direction:"rtl"}}>
                    <img style={{width:"-webkit-fill-available",}} src={prayImg} alt="Salat Fajer" />
                    <h4 style={{paddingRight:"13px"}}>{prayName}</h4>
                    <h2 style={{paddingRight:"13px"}}>{prayTime}</h2>
                </Card>
            </div>
        </>
    );
}

Cards.propTypes = {
    prayName:propTypes.string,
    prayImg:propTypes.string,
    prayTime: propTypes.string
}