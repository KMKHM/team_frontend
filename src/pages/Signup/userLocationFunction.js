export default async function getLocInfo() {
  try {
    const position = await new Promise((resolve, rejected) => {
      navigator.geolocation.getCurrentPosition(resolve, rejected);
    });

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const data = await getCountryData(lat, lng);
    return { location: data, latitude: lat, longitude: lng };
  } catch (err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
}

function getCountryData(lat, lng) {
  return fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  )
    .then(res => res.json())
    .then(data => {
      return data.countryName;
    });
}
