import vision from '@google-cloud/vision';

export default class GoogleVision {
  static async getAnnotations(filename) {
    console.log('detect face');
    const client = new vision.ImageAnnotatorClient();

    const [result] = await client.faceDetection(filename);

    return result?.faceAnnotations?.map((face) => ({
      joy: face.joyLikelihood,
      sorrow: face.sorrowLikelihood,
    }));
  }
}
