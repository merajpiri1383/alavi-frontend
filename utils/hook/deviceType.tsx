import { useEffect, useState } from "react";


type DeviceType = "mobile" | "desktop" | null;

const useDeviceType = () : DeviceType => {
    const [deviceType,setDeviceType] = useState<DeviceType>(null);

    const updateDeviceType = () : void => {
        setDeviceType(window.innerWidth > 768 ? "desktop" : "mobile")
    };

    useEffect(() => {

        updateDeviceType();

        window.addEventListener("resize",updateDeviceType);

        return () => window.removeEventListener("resize",updateDeviceType)
    },[]);

    return deviceType;
};export {useDeviceType};