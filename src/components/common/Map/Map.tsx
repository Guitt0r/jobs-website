import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {FC} from "react";

type Props = {
    lat: number,
    long: number,
    locationName: string | null
}

const Map: FC<Props> = ({lat, long, locationName}) => {
    return (
        <MapContainer className='rounded max-w-full' center={[lat, long]} zoom={10} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, long]}>
                <Popup>
                    {locationName}
                </Popup>
            </Marker>
        </MapContainer>
    )
}
export default Map