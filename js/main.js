import { fetchPhotos } from '/js/data.js';
import { drawMiniatures } from '/js/miniatures.js';
import { drawFullPhoto } from '/js/fullPhoto.js';

const photos = fetchPhotos();
drawMiniatures(photos);
drawFullPhoto(photos[2]);
