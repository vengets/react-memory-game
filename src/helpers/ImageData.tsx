import i1 from '../images/1.jpeg';
import i2 from '../images/2.jpeg';
import i3 from '../images/3.jpeg';
import i4 from '../images/4.png';
import i5 from '../images/5.jpeg';
import i6 from '../images/6.png';
import i7 from '../images/7.jpeg';
import i8 from '../images/8.jpeg';

export type ImageData = { name: string; img: string };

export function getImageData(): ImageData[] {
    let data = [
        {
            name: '1',
            img: i1,
        },
        {
            name: '2',
            img: i2,
        },
        {
            name: '3',
            img: i3,
        },
        {
            name: '4',
            img: i4,
        },
        {
            name: '5',
            img: i5,
        },
        {
            name: '6',
            img: i6,
        },
        {
            name: '7',
            img: i7,
        },
        {
            name: '8',
            img: i8,
        },
    ];

    data = duplicateImageData(data);
    return data;
}

function duplicateImageData(data: ImageData[]) {
    return data.concat(data);
}
