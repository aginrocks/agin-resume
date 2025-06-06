import { Text } from '@react-pdf/renderer';
import { TitleProps } from '../..';

export function Title({ title }: TitleProps) {
    return <Text>{title}</Text>;
}
