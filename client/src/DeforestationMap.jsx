import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const DeforestationMap = () => {
    const [deforestationData, setDeforestationData] = useState([]);

    useEffect(() => {
        const fetchDeforestationData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/deforestation/deforests');
                const result = await response.json();
                setDeforestationData(result);
            } catch (error) {
                console.error('Error fetching deforestation data:', error);
            }
        };

        fetchDeforestationData();
    }, []);

    // Sample data with latitude and longitude for visualization
    const sampleData = [
        { city: 'Delhi', location: 'Location A', percentageImpacted: 20, coords: [28.6139, 77.2090] },
        { city: 'Mumbai', location: 'Location B', percentageImpacted: 30, coords: [19.0760, 72.8777] },
        { city: 'Bangalore', location: 'Location C', percentageImpacted: 40, coords: [12.9716, 77.5946] },
    ];

    const dataToDisplay = deforestationData.length > 0 ? deforestationData : sampleData;

    return (
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '80vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {dataToDisplay.map((record, index) => (
                <Marker key={index} position={record.coords || [0, 0]}>
                    <Popup>
                        <strong>{record.city}</strong><br />
                        Location: {record.location}<br />
                        Percentage Impacted: {record.percentageImpacted}%
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default DeforestationMap;
