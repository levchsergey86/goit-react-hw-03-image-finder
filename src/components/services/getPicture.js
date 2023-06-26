const URL = 'https://pixabay.com';
const API_KEY = '35805355-59b54dec7b4c23d216fe98668';

export const getPicture = (searchPicture, page) => {
  return fetch(
    `${URL}/api/?q=${searchPicture}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=15`
  );
};
