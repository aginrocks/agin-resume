import { Button } from '@components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@components/ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IconCheck } from '@tabler/icons-react';
import * as React from 'react';
import { CropperRef, Cropper, CircleStencil, ImageRestriction } from 'react-advanced-cropper';
import 'react-advanced-cropper/dist/style.css';

export type CropperProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
    imageUrl: string;
};

export function CropperDialog({ imageUrl, ...props }: CropperProps) {
    const onChange = (cropper: CropperRef) => {
        console.log(cropper.getCoordinates(), cropper.getCanvas());
    };

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
                    />
                </div>
                <div className="flex justify-end">
                    <Button>
                        <IconCheck />
                        Done
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
