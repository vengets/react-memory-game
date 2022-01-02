import { getImageData } from './ImageData';

test('Should return ImageData with 16 items', () => {
    let result = getImageData();
    expect(result.length).toEqual(16);
});

test('Should return ImageData after shuffling', () => {
    let result1 = getImageData();
    let result2 = getImageData();
    let shuffled = false;
    result1.map((data, i) => {
        if (result2[i].id !== data.id) shuffled = true;
    });
    expect(shuffled).toBeTruthy();
});
