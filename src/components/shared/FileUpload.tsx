'use client';
import useRegister from '@/stores/registrationStore';
import { useCallback, useRef } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { ACCEPTED_FILE_TYPES, ACCEPTED_FILE_EXTENSIONS } from '@/constants/fileTypes';
import './fileUpload.css';
import { FileText } from 'lucide-react';
import FileUploadSvg from '../svgs/fileUpload';
import { useProgressStore } from '@/stores/progressStepperStore';
import { Text } from '@/components/ui/Text';
import { Input } from '@/components/ui/input';
import { DeleteSvg } from './deleteEdit';

const FileUpload = () => {
    const isDragOver = useRegister((state) => state.isDragOver);
    const setIsDragOver = useRegister((state) => state.setIsDragOver);
    const uploadError = useRegister((state) => state.uploadError);
    const setUploadError = useRegister((state) => state.setUploadError);
    const selectedFile = useRegister((state) => state.selectedFile);
    const setSelectedFile = useRegister((state) => state.setSelectedFile);
    const uploadProgress = useRegister((state) => state.uploadProgress);
    const setUploadProgress = useRegister((state) => state.setUploadProgress);
    const isUploading = useRegister((state) => state.isUploading);
    const setIsUploading = useRegister((state) => state.setIsUploading);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const increament = useProgressStore((state) => state.incrementDone);
    const decreament = useProgressStore((state) => state.decreamentDone);

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setUploadError(false);
        setUploadProgress(0);
        setIsUploading(false);
        decreament('resumeUpload');
    };

    const handleDragOver = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragOver(true);
        },
        [setIsDragOver]
    );

    const handleDragLeave = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragOver(false);
        },
        [setIsDragOver]
    );

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragOver(false);
            const file = e.dataTransfer.files[0];
            processFile(file);
        },
        [setIsDragOver]
    );

    const handleFileSelect = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        processFile(file);
    };

    const processFile = (file?: File) => {
        if (file && ACCEPTED_FILE_TYPES.includes(file.type)) {
            setSelectedFile(file);
            setUploadError(false);
            simulateUpload(file);
            increament('resumeUpload');
        } else {
            setUploadError(true);
            setSelectedFile(null);
        }
    };

    const simulateUpload = (file: File) => {
        setIsUploading(true);
        setUploadProgress(0);
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20 + 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setIsUploading(false);
            }
            setUploadProgress(progress);
        }, 400);
    };

    const handleTryAgain = () => {
        setUploadError(false);
        setSelectedFile(null);
        setUploadProgress(0);
        setIsUploading(false);
    };
    const handleDelete = () => {
        setSelectedFile(null);
    };

    return (
        <div className="w-full max-w-2xl px-4 sm:px-0">
            <Text
                as="h1"
                text="Basic Details"
                className="text-white   text-3xl  font-bold md:text-[30px] text-[20px] mb-[54px]"
            />
            <Text
                as="h2"
                text="Upload file"
                className="text-white text-[16px] font-semibold mb-[16px]"
            />

            <div className="flex justify-center items-center sm::mx-auto">
                <Input
                    type="file"
                    accept={ACCEPTED_FILE_EXTENSIONS}
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <div
                    className={cn(
                        'b4 w-full max-w-[655px] h-[371px] rounded-lg text-center transition-colors flex items-center justify-center z-50',
                        isDragOver && 'border-orange-400 bg-orange-400/10'
                    )}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="w-full max-w-[215px] h-[150px] flex flex-col items-center justify-center space-y-4 mx-auto p-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                            <FileUploadSvg />
                        </div>
                        <Text
                            text="Drag and drop your job description here"
                            className="text-gray-300 text-center font-[Poppins] font-normal text-[14px] leading-[140%]"
                        />
                        <Button
                            onClick={handleFileSelect}
                            className="hover:bg-orange-600 w-[133px] h-[35px] mb-0 px-6 py-2 bg-[linear-gradient(90deg,#FFA844_0%,#FF6D68_100%)]"
                            disabled={isUploading}
                        >
                            <Text
                                text="Browse Files"
                                className="font-[Poppins] font-[700] text-[16px]"
                            />
                        </Button>
                        <Text
                            text="Supported formats: PDF, DOC"
                            className="text-gray-400 font-[Poppins] text-[12px] text-center"
                        />
                    </div>
                </div>
            </div>

            {selectedFile && !uploadError && (
                <div className="flex justify-between flex-wrap items-center mt-4 text-white gap-2">
                    <Text className="text-sm flex flex-col sm:flex-row items-start sm:items-center">
                        <FileText className="inline mr-2 w-[17.9px] h-[17.9px] text-white" />
                        {selectedFile.name}
                        <Text as="span" className="ml-0 sm:ml-6 text-gray-400 text-[10px]">
                            {Math.round(selectedFile.size / 1000)} KB
                        </Text>
                    </Text>

                    <DeleteSvg
                        onClick={handleDelete}
                        svgClassname="text-red-500"
                        btnClassname="border w-7 h-7 mr-5 border rounded-full border-red-500 text-red-400 hover:text-red-300 p-0"
                    />
                </div>
            )}

            {isUploading && (
                <Box sx={{ width: '100%', mt: 2 }}>
                    <LinearProgress variant="determinate" value={uploadProgress} />
                    <Text
                        text={`${Math.round(uploadProgress)}%`}
                        className="text-white text-xs mt-1"
                    />
                </Box>
            )}

            {uploadError && (
                <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-red-400">
                    <Text as="span" text="Upload failed, please try again" className="text-sm" />
                    <Text
                        as="span"
                        text="File is not supported, please re-upload"
                        className="text-xs text-gray-400"
                    />
                    <Button
                        onClick={handleTryAgain}
                        variant="link"
                        className="text-red-400 hover:text-red-300 p-0 h-auto text-sm underline"
                    >
                        Try again
                    </Button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
