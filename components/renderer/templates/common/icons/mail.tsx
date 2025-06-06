import { Path, Svg } from '@react-pdf/renderer';
import * as React from 'react';

export function Mail() {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M0 0h24v24H0z" stroke="none" />
            <Path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
            <Path d="M3 7l9 6 9-6" />
        </Svg>
    );
}
