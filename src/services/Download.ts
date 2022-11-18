import fs from 'fs';
import axios from 'axios';

export default async function Download(url, filename) {
  const response = await axios({
    url,
    responseType: 'stream',
  });
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filename))
      .on('finish', () => {
        console.log(url, 'okay');
        resolve('okay');
      })
      .on('error', (e) => reject(e));
  });
}
