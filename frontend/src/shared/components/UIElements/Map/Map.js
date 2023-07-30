import React, { useRef, useEffect } from "react";
import './Map.css';

const Map = props => {
    /*const mapRef = useRef();

    const {center, zoom} = props;

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        });

        new window.google.maps.Market({
            position: center, map: map
        })
    }, [center, zoom]);*/

    return (
        <>
            <div
                className={`map ${props.className}`}
                style={props.style}
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Winkel_triple_projection_SW.jpg/600px-Winkel_triple_projection_SW.jpg"/>
            </div>
        </>
    )
}

export default Map;