import { getImageData } from './ImageData';

test('Should return ImageData with 16 items', () => {
    let result = getImageData();
    expect(result.length).toEqual(16);
});
