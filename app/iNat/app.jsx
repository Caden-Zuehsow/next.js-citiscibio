import { useEffect } from "react";

function InatCall() {

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      const response = await fetch(
        `https://api.inaturalist.org/v1/observations/species_counts?lat=${latitude}&lng=${longitude}&radius=25`
      );

      const data = await response.json();

      console.log(data.results);

    });

  }, []);

  return <div>Loading iNaturalist...</div>;
}

export default InatCall;
