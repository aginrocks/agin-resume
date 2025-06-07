import { Image, StyleSheet, Text } from '@react-pdf/renderer';
import { TemplateProps } from '../..';

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        objectFit: 'cover',
    },
});

export function Photo({ data }: TemplateProps) {
    if (!data.personalData.photo) return <></>;

    return <Image source={{ uri: data.personalData.photo }} style={styles.image} />;
}
