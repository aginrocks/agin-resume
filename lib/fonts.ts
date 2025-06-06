import { Font } from '@react-pdf/renderer';

// Register Roboto fonts from local files
Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: '/fonts/Roboto-Regular.ttf',
            fontWeight: 400,
        },
        {
            src: '/fonts/Roboto-Medium.ttf',
            fontWeight: 500,
        },
        {
            src: '/fonts/Roboto-Bold.ttf',
            fontWeight: 700,
        },
        {
            src: '/fonts/Roboto-Italic.ttf',
            fontWeight: 400,
            fontStyle: 'italic',
        },
    ],
});

// Register Montserrat fonts from local files
Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: '/fonts/Montserrat-Regular.ttf',
            fontWeight: 400,
        },
        {
            src: '/fonts/Montserrat-Medium.ttf',
            fontWeight: 500,
        },
        {
            src: '/fonts/Montserrat-Bold.ttf',
            fontWeight: 700,
        },
    ],
});

export { Font };
