import { Core } from './core';
import { Preview } from './preview';

export function Editor() {
    return (
        <div className="flex h-screen">
            <Core />
            <Preview />
        </div>
    );
}
