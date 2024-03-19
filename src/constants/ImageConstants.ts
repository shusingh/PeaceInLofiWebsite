const imagesContext = import.meta.glob('../assets/images/*');

export const images = Object.keys(imagesContext).map((key) => {
  return new URL(key, import.meta.url).pathname;
});