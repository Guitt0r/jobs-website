import Map from "../../common/Map/Map";
import locationIcon from '../../../assets/location.svg'
import {useEffect, useState} from "react";
import axios from "axios";

const Contacts = ({lat, long, phone, email,address}) => {
    const [location, setLocation] = useState(null)
    useEffect(() => {
        //only 1request for 1sec,so it may block request
        axios.get(` https://nominatim.openstreetmap.org/search?q=${lat},${long}&format=json`)
            .then(res => setLocation(res.data[0].display_name))
            .catch(()=>console.log('Nominatim max quota exceed'))
    }, [lat, long])
    return (
        <div className=' bg-[#2A3047] text-[#E7EAF0] text-lg sm:w-3/4 max-w-full rounded-lg'>
            <div className='w-3/4 mx-auto pt-8 '>
                <div className='text-xl font-bold'>
                    Department name.
                </div>
                <div className=''>
                    <img className='pr-1 pt-1 float-left ' src={locationIcon} alt="location"/>
                    {location ? location : address}
                </div>
                <div>
                    {phone}
                </div>
                <div>
                    {email}
                </div>
            </div>
            <Map locationName={location} lat={lat} long={long}/>
        </div>

    )
}
export default Contacts