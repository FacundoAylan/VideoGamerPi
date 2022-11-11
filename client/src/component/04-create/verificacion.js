export const Verificacion = ( state,expresiones ) => {
  const e = state;
  if (
    expresiones.name.test(e.name) &&
    e.released !== "" &&
    expresiones.rating.test(e.rating) &&
    e.genres.length > 0 &&
    e.platforms.length > 0 &&
    expresiones.image.test(e.image)&&
    expresiones.description.test(e.description)
  ) {
    return true;
  } else {
    return false;
  }
};
