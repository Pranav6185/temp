import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";

const NearbyHospitals = () => {
    const [location, setLocation] = useState({ lat: 19.076, lng: 72.877 }); // Default: Mumbai
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setLocation(userLocation);
                fetchNearbyHospitals(userLocation.lat, userLocation.lng);
            },
            () => {
                console.log("Location access denied. Using default.");
                fetchNearbyHospitals(location.lat, location.lng);
            }
        );
    }, []);

    const fetchNearbyHospitals = async (lat, lng) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?format=json&q=hospital&lat=${lat}&lon=${lng}&radius=5000`
            );
            setHospitals(response.data);
        } catch (error) {
            console.error("Error fetching hospitals:", error);
        }
    };

    return (
        <div className="m-60 border-4 border-black">

            <MapContainer center={location} zoom={14} style={{ height: "500px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/* User Location Marker */}
                <Marker position={location}>
                    <Popup>Your Location</Popup>
                </Marker>

                {/* Nearby Hospitals */}
                {hospitals.map((hospital, index) => (
                    <Marker key={index} position={[hospital.lat, hospital.lon]}>
                        <Popup>
                            <b>{hospital.display_name}</b>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>

    );
};

export default NearbyHospitals;
