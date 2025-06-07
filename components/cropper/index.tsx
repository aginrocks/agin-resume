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

        // Get the canvas with the cropped image
        const canvas = ref.current.getCanvas();
        if (!canvas) return;

        // Convert the cropped canvas to a blob
        const blob = await new Promise<Blob>((resolve) => {
            canvas.toBlob(
                (blob) => {
                    if (blob) resolve(blob);
                },
                'image/jpeg',
                0.95
            );
        });

        // Convert blob to base64
        const base64Image = await blobToBase64(blob);

        console.log('Cropped image:', base64Image);

        onCropped(base64Image as string);
        props.onOpenChange?.(false);
    }, [onCropped, props]);

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
                <div className="max-w-115.5 max-h-115.5">
                    <Cropper
                        src={imageUrl}
                        onChange={onChange}
                        stencilComponent={CircleStencil}
                        className="cropper rounded-md"
                        imageRestriction={ImageRestriction.fillArea}
                        ref={ref}
                        defaultSize={{ width: 999999, height: 999999 }}
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
