const GOOGLE_API = "AIzaSyBKTiahvcK7uMtzwULcPzGWTpGsc24i9V0";

//AIzaSyAUj3Qur_NFCB-mhi6TL6M8JCFXWxQI2V8

export const getMapPreview = (lat, lng) => {
  const imgpreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API}`;

  return imgpreview;
};

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API}&enable_address_descriptor=true`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch this address");
  }

  const data = await res.json();
  const address = data.results[0].formatted_address;
  return address;
};
