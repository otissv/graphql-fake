

export default function unsplashMock ({
  width,
  height,
  search,
  locale
}) {
  if (locale) {
    faker.locale = locale;
  }
  
  const parameters = search ? `?${search}` : '';
  
  return {
    photo_:                 () => 'https_://source.unsplash.com/${width}x${height}/${parameters}',
    photoSearchBusiness_:   () => `https_://source.unsplash.com/${width}x${height}?busines,${parameters}`,
    photoSearchFood_:       () => `https_://source.unsplash.com/${width}x${height}?food,${parameters}`,
    photoSearchNature_:     () => `https_://source.unsplash.com/${width}x${height}?nature,${parameters}`,
    photoSearchPeople_:     () => `https_://source.unsplash.com/${width}x${height}?people,${parameters}`,
    photoSearchTechnology_: () => `https_://source.unsplash.com/${width}x${height}?technology,${parameters}`,
    photoSearchTransport_:  () => `https_://source.unsplash.com/${width}x${height}?,transport,${parameters}`,
    photoSearchObjects_:    () => `https_://source.unsplash.com/${width}x${height}?objects,${parameters}`,
  
  };
};
