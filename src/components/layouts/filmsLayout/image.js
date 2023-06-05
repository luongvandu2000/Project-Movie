const images = {};

const req = require.context('../../../assets/img/poster', false, /\.(png|jpe?g|svg)$/);
req.keys().forEach((key) => {
  images[key] = req(key);
});
export default images;
