import ApiResponseHandler from './apiResponseHandler';
import YelpReviews from '../services/YelpReviews';
import Download from '../services/Download';
import GoogleVision from '../services/GoogleVision';

const avatarFilename = 'avatar.tmp';

export default async (req, res, next) => {
  try {
    const reviews = await YelpReviews.getReviews();
    const payload: any[] = [];
    for (const review of reviews) {
      const url = review.user.image_url;
      await Download(url, avatarFilename);
      const annotations = await GoogleVision.getAnnotations(
        avatarFilename,
      );
      payload.push({
        ...review,
        annotations,
      });
    }
    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
