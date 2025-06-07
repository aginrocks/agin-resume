import { CropperDialog } from '@components/cropper';
import { Button } from '@components/ui/button';
import {
    FileUpload,
    FileUploadDropzone,
    FileUploadItem,
    FileUploadItemDelete,
    FileUploadItemMetadata,
    FileUploadItemPreview,
    FileUploadList,
    FileUploadTrigger,
} from '@components/ui/file-upload';
import { resumeSchema } from '@lib/resume-schema';
import { IconUpload, IconX } from '@tabler/icons-react';
import { useCallback, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

export function PhotoUploader({ ...props }: React.ComponentProps<'div'>) {
    const [files, setFiles] = useState<File[]>([]);
    const [cropper, setCropper] = useState(false);
    const [image, setImage] = useState<string | null>(null);

    const form = useFormContext<z.infer<typeof resumeSchema>>();

    const onFileReject = useCallback((file: File, message: string) => {
        toast(message, {
            description: `"${
                file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name
            }" has been rejected`,
        });
    }, []);

    const onFileAccept = useCallback((file: File) => {
        setImage(URL.createObjectURL(file));
        setCropper(true);
    }, []);

    return (
        <div {...props}>
            <FileUpload
                maxFiles={1}
                value={files}
                onValueChange={setFiles}
                onFileReject={onFileReject}
                accept="image/*"
                onFileAccept={onFileAccept}
            >
                <FileUploadDropzone>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center rounded-full border p-2.5">
                            <IconUpload className="size-6 text-muted-foreground" />
                        </div>
                        <div className="gap-0.5">
                            <p className="font-medium text-sm text-center">
                                Drag & drop your photo here
                            </p>
                            <p className="text-muted-foreground text-xs text-center">
                                or click to browse
                            </p>
                        </div>
                    </div>
                    <FileUploadTrigger asChild>
                        <Button variant="outline" size="sm" className="mt-2 w-fit">
                            Browse files
                        </Button>
                    </FileUploadTrigger>
                </FileUploadDropzone>
                <FileUploadList>
                    {files.map((file, index) => (
                        <FileUploadItem key={index} value={file}>
                            <FileUploadItemPreview />
                            <FileUploadItemMetadata />
                            <FileUploadItemDelete asChild>
                                <Button variant="ghost" size="icon" className="size-7">
                                    <IconX />
                                </Button>
                            </FileUploadItemDelete>
                        </FileUploadItem>
                    ))}
                </FileUploadList>
            </FileUpload>
            <CropperDialog
                open={cropper}
                onOpenChange={setCropper}
                imageUrl={image || ''}
                onCropped={() => {
                    form.setValue('personalData.photo', image || '');
                    setImage(null);
                }}
            />
        </div>
    );
}
