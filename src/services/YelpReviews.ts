import yelp from 'yelp-fusion';
import { getConfig } from '../config';

export default class YelpReviews {
  static async getReviews() {
    const client = yelp.client(getConfig().YELP_API_KEY);
    const response = await client.reviews(
      getConfig().FAVORITE_RESTAURANT_SLUG,
    );
    return response.jsonBody.reviews;
  }
}
