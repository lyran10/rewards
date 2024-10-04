import { useState, useEffect } from "react";
import { useRedux } from "./useRedux";
import { getCoord } from "../store/reducer";

interface Position {
  lat: number;
  lon: number;
}

export const useCurrentLocation = () => {
const { dispatch, selector } = useRedux()
const {login} = selector(state => state.loginData)
const [location, setLocation] = useState<Position | null>(null);
const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      dispatch(getCoord({lat : latitude, lon : longitude}))
      setLocation({ lat :latitude, lon : longitude });
    };

    const handleError = (error: GeolocationPositionError) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, [login]);

  return { location, error };
};

