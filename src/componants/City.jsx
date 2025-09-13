import CityDistruction from "./CityDistruction";
import { countryContext } from "../App";
import { useContext } from "react";
import   propTypes  from "prop-types";


export default function City({countryValue}) { 
    const {setCountryAbrr} = useContext(countryContext);
        if (countryValue === "مصر") {
            setCountryAbrr("EG")
            return(
                <CityDistruction cityName1={"الاسكندرية"} firstVal={"الاسكندرية"} FirstnameEN={"Alexandria"} cityName2={"القاهرة"}secondVal={"القاهرة"} secondnameEN={"Cairo"} cityName3={"أسوان"} thirdVal={"أسوان"} thirdNameEn={"Aswan"} cityName4={"السويس"} fourthVal={"السويس"} fourthNameEn={"Suez"} cityName5={"مطروح"} fifthVal={"مطروح"} fifthNameEn={"Matrouh"} ></CityDistruction>
            );
        }else if(countryValue === "السعودية"){
            setCountryAbrr("SA")
            return(
                <CityDistruction cityName1={"الرياض"} firstVal={"الرياض"} FirstnameEN={"Riyadh"} cityName2={"مكة المكرمة"} secondVal={"مكة المكرمة"} secondnameEN={"Mecca"} cityName3={"المدينة المنورة"} thirdNameEn={"Medina"} thirdVal={"المدينة المنورة"} cityName4={"جدة"} fourthVal={"جدة"} fourthNameEn={"Jeddah"} cityName5={"الدمام"} fifthVal={"الدمام"} fifthNameEn={"Dammam"} ></CityDistruction>
            );
        }else if(countryValue ==="الإمارات"){
            setCountryAbrr("ARE")
            return(
                <CityDistruction  cityName1={"أبوظبي"} firstVal={"أبوظبي"} FirstnameEN={"Abu Dhabi"} cityName2={"دبي"} secondVal={"دبي"} secondnameEN={"Dubai"} cityName3={"الشارقة"} thirdVal={"الشارقة"} thirdNameEn={"Sharjah"} cityName4={"عجمان"} fourthVal={"عجمان"} fourthNameEn={"Ajman"} cityName5={"الفجيرة"} fifthVal={"الفجيرة"} fifthNameEn={"Fujairah"}></CityDistruction>
            );
        }else if(countryValue === "المغرب"){
            setCountryAbrr("MAR")
            return(
                <CityDistruction  cityName1={"طنجة"} firstVal={"طنجة"} FirstnameEN={"Tangier"} cityName2={"وجدة"} secondVal={"وجدة"} secondnameEN={"Oujda"} cityName3={"مراكش"} thirdVal={"مراكش"} thirdNameEn={"Marrakech"} cityName4={"الرباط"} fourthVal={"الرباط"} fourthNameEn={"Rebat"} cityName5={"الدار البيضاء"} fifthVal={"الدار البيضاء"} fifthNameEn={"Casablanca"}></CityDistruction>
            );
        } else if(countryValue==="الجزائر"){
            setCountryAbrr("DZA")
            return(
                <CityDistruction cityName1={"الجزائر"} firstVal={"الجزائر"} FirstnameEN={"Algeria"} cityName2={"وهران"} secondVal={"وهران"} secondnameEN={"Oran"} cityName3={"قسنطينة"} thirdVal={"قسنطينة"} thirdNameEn={"Constantine"} cityName4={"عنابة"} fourthVal={"عنابة"} fourthNameEn={"Annaba"} cityName5={"باتنة"} fifthVal={"باتنة"} fifthNameEn={"Batna"}></CityDistruction>
            );
        }
    }

City.propTypes= {
    countryValue:propTypes.string
}
