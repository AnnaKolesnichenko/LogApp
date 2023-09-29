const GOOGLE_API = "AIzaSyBKTiahvcK7uMtzwULcPzGWTpGsc24i9V0";

//AIzaSyAUj3Qur_NFCB-mhi6TL6M8JCFXWxQI2V8

const getMapPreview = (lat, lng) => {
  const imgpreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API}`;

  return imgpreview;
};

export default getMapPreview;
