import { Button } from '@components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@components/ui/dialog';
import { blobToBase64 } from '@lib/utils';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IconCheck } from '@tabler/icons-react';
import * as React from 'react';
import { useCallback, useRef } from 'react';
import { CropperRef, Cropper, CircleStencil, ImageRestriction } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';

export type CropperProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
    imageUrl: string;
    onCropped: (imageUrl: string) => void;
};

export function CropperDialog({ imageUrl, onCropped, ...props }: CropperProps) {
    const ref = useRef<CropperRef>(null);

    const onChange = (cropper: CropperRef) => {
        console.log(cropper.getCoordinates(), cropper.getCanvas());
    };

    const onDone = useCallback(async () => {
        if (!ref.current) return;

        const image = ref.current.getImage();

        if (!image?.src) return;

        const blob = await fetch(image.src).then((res) => res.blob());
        const base64Image = await blobToBase64(blob);

        console.log('Cropped image:', base64Image);

        URL.revokeObjectURL(image.src);

        onCropped(base64Image as string);
        props.onOpenChange?.(false);
    }, []);

    return (
        <Dialog {...props}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Crop your photo</DialogTitle>
                    <DialogDescription>
                        Adjust the crop area to fit your profile picture. You can move and resize
                        the circle to select the desired portion of the image.
                    </DialogDescription>
                </DialogHeader>
                <div className="w-115.5 h-115.5">
                    <Cropper
                        src={imageUrl}
                        onChange={onChange}
                        stencilComponent={CircleStencil}
                        className="cropper rounded-md"
                        imageRestriction={ImageRestriction.fillArea}
                        ref={ref}
                    />
                </div>
                <div className="flex justify-end">
                    <Button onClick={onDone}>
                        <IconCheck />
                        Done
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
