'use client'; // For Next.js App Router, to mark as Client Component

import React, { useCallback, FC, useEffect, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import { Editor } from '@tiptap/core';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
// Define props for the ToolbarButton component
interface ToolbarButtonProps {
    onClick: () => void;
    isActive?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
    title: string;
}
interface MenuItemProps {
    value: string;
    label: string;
    level?: number;
    svg?: string;
}
// Text type options for block type dropdown
const textTypeOptions: MenuItemProps[] = [
    {
        value: 'paragraph',
        label: 'Normal',
    },
    {
        value: 'heading',
        level: 1,
        label: 'Heading 1',
    },
    {
        value: 'heading',
        level: 2,
        label: 'Heading 2',
    },
    {
        value: 'heading',
        level: 3,
        label: 'Heading 3',
    },
];

const TextTypeDropdown: FC<{ editor: Editor }> = ({ editor }) => {
    let current = 'Normal';
    if (editor.isActive('heading', { level: 1 })) current = 'Heading 1';
    else if (editor.isActive('heading', { level: 2 })) current = 'Heading 2';
    else if (editor.isActive('heading', { level: 3 })) current = 'Heading 3';
    else if (editor.isActive('paragraph')) current = 'Normal';

    return (
        <Select>
            <SelectTrigger>
                <SelectValue placeholder={current} />
            </SelectTrigger>
            <SelectContent className="absolute z-50 mt-2 origin-top-left rounded-md bg-midnightInk shadow-lg ring-1 ring-black/5 focus:outline-none min-w-[120px]">
                {textTypeOptions.map((item) => (
                    <SelectItem
                        value={item.label}
                        key={item.label}
                        className="text-white text-sm px-4 py-2 hover:bg-midnightBlue" // darker hover
                        onClick={() => {
                            if (item.value === 'paragraph') {
                                editor.chain().focus().setParagraph().run();
                            } else if (item.value === 'heading' && typeof item.level === 'number') {
                                editor
                                    .chain()
                                    .focus()
                                    .toggleHeading({ level: item.level as any })
                                    .run();
                            }
                        }}
                    >
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
const textAlignOptions = [
    {
        value: 'left',
        label: 'Left',
        svg: `<svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="18" height="2" fill="white"/><rect x="4" y="10" width="14" height="2" fill="white"/><rect x="4" y="14" width="18" height="2" fill="white"/><rect x="4" y="18" width="14" height="2" fill="white"/></svg>`,
    },
    {
        value: 'center',
        label: 'Center',
        svg: `<svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="6" width="18" height="2" fill="white"/><rect x="7" y="10" width="14" height="2" fill="white"/><rect x="5" y="14" width="18" height="2" fill="white"/><rect x="7" y="18" width="14" height="2" fill="white"/></svg>`,
    },
    {
        value: 'right',
        label: 'Right',
        svg: `<svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="18" height="2" fill="white"/><rect x="10" y="10" width="14" height="2" fill="white"/><rect x="6" y="14" width="18" height="2" fill="white"/><rect x="10" y="18" width="14" height="2" fill="white"/></svg>`,
    },
    {
        value: 'justify',
        label: 'Justify',
        svg: `<svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="6" width="18" height="2" fill="white"/><rect x="5" y="10" width="18" height="2" fill="white"/><rect x="5" y="14" width="18" height="2" fill="white"/><rect x="5" y="18" width="18" height="2" fill="white"/></svg>`,
    },
];
interface ToolbarButtonProps {
    onClick: () => void;
    isActive?: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
    title: string;
}

const TextAlignDropdown: FC<{ editor: Editor }> = ({ editor }) => {
    const [paragraph, setPragraph] = useState(0);
    return (
        <Select>
            <SelectTrigger className="inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-white rounded-md bg-transparent hover:bg-gray-700">
                <span
                    key={paragraph}
                    className="w-6 h-6"
                    dangerouslySetInnerHTML={{ __html: textAlignOptions[paragraph].svg }}
                ></span>
            </SelectTrigger>

            <SelectContent className="absolute z-50 mt-2 origin-top-left rounded-md bg-midnightInk shadow-lg ring-1 ring-black/5 focus:outline-none min-w-[150px]">
                {textAlignOptions.map((item, indx) => (
                    <SelectItem
                        value={item.value}
                        key={item.value}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-basaltBlue"
                        onClick={() => {
                            setPragraph(indx);
                            editor
                                .chain()
                                .focus()
                                .setTextAlign(item.value as 'left' | 'center' | 'right' | 'justify')
                                .run();
                        }}
                    >
                        <span className="w-6 h-6" dangerouslySetInnerHTML={{ __html: item.svg }} />
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

const ToolbarButton: FC<ToolbarButtonProps> = ({
    onClick,
    isActive,
    isDisabled,
    children,
    title,
}) => (
    <button
        onClick={onClick}
        disabled={isDisabled}
        title={title}
        className={`p-1.5 rounded flex items-center justify-center
      ${isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-gray-300'}
      ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
    >
        {children}
    </button>
);

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
    placeholder?: string;
}

const RichTextEditor: FC<RichTextEditorProps> = ({
    value,
    onChange,
    className = '',
    placeholder = '',
}) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                strike: false,
                bulletList: false,
                orderedList: false,
                listItem: false,
            }),
            BulletList,
            OrderedList,
            ListItem,
            Link.configure({
                openOnClick: false,
                autolink: true,
            }),
            Image.configure({
                inline: true,
            }),
            Underline,
            Strike,
            Subscript,
            Superscript,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            TextStyle,
            Color,
        ],
        content: value || '',
        editorProps: {
            attributes: {
                class: `prose prose-sm sm:prose lg:prose-lg focus:outline-none p-4 min-h-[200px] text-gray-200 ${className}`,
                placeholder: placeholder,
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        },
    });

    // Keep editor content in sync with value prop
    useEffect(() => {
        if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value || '', false);
        }
    }, [value, editor]);

    // Handle link: if selection, toggle link mark; if not, do nothing
    const setLink = useCallback(() => {
        if (!editor) return;
        // If already a link, remove it
        if (editor.isActive('link')) {
            editor.chain().focus().unsetLink().run();
            return;
        }
        // If selection, wrap as link (with dummy href, user can edit later)
        const { from, to, empty } = editor.state.selection;
        if (!empty) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: '#' }).run();
        }
    }, [editor]);

    // Handle image paste from clipboard or file input
    const handleImagePaste = useCallback(
        (event: ClipboardEvent) => {
            if (!editor) return;
            const items = event.clipboardData?.items;
            if (!items) return;
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.type.indexOf('image') !== -1) {
                    const file = item.getAsFile();
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const src = e.target?.result;
                            if (typeof src === 'string') {
                                editor.chain().focus().setImage({ src }).run();
                            }
                        };
                        reader.readAsDataURL(file);
                    }
                }
            }
        },
        [editor]
    );

    // File input for image upload
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const handleImageButtonClick = () => {
        fileInputRef.current?.click();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const src = ev.target?.result;
                if (typeof src === 'string') {
                    editor?.chain().focus().setImage({ src }).run();
                }
            };
            reader.readAsDataURL(file);
        }
        // Reset input value so same file can be selected again
        e.target.value = '';
    };

    // Register paste event for images
    useEffect(() => {
        if (!editor) return;
        const dom = editor.view.dom;
        dom.addEventListener('paste', handleImagePaste as any);
        return () => {
            dom.removeEventListener('paste', handleImagePaste as any);
        };
    }, [editor, handleImagePaste]);

    if (!editor) {
        return null;
    }

    return (
        <div
            className={cn(
                ' rounded-lg px-3 bg-richSlateBlue border-gunmetalBlue overflow-hidden shadow-lg max-w-4xl  my-8',
                className
            )}
        >
            {/* Toolbar */}
            <div className="flex flex-nowrap gap-0    bg-gunmetalBlue text-gray-300 ">
                {/* Undo/Redo */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().undo().run()}
                    isDisabled={!editor.can().undo()}
                    title="Undo"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.327 10.3745H9.07666L11.211 8.24078L10.3768 7.39941L6.80664 10.9696L10.3768 14.5397L11.211 13.6978L9.07844 11.5646H16.327C17.2739 11.5646 18.182 11.9407 18.8515 12.6103C19.521 13.2798 19.8972 14.1879 19.8972 15.1347C19.8972 16.0816 19.521 16.9897 18.8515 17.6592C18.182 18.3287 17.2739 18.7049 16.327 18.7049H11.5668V19.8949H16.327C17.5895 19.8949 18.8003 19.3934 19.693 18.5007C20.5857 17.608 21.0872 16.3972 21.0872 15.1347C21.0872 13.8723 20.5857 12.6615 19.693 11.7688C18.8003 10.8761 17.5895 10.3745 16.327 10.3745Z"
                            fill="white"
                        />
                    </svg>
                </ToolbarButton>

                <div className="flex items-center gap-1">
                    <ToolbarButton
                        onClick={() => editor.chain().focus().redo().run()}
                        isDisabled={!editor.can().redo()}
                        title="Redo"
                    >
                        <svg
                            width="27"
                            height="28"
                            viewBox="0 0 27 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.1254 10.3745H18.3758L16.2415 8.24078L17.0757 7.39941L20.6458 10.9696L17.0757 14.5397L16.2415 13.6978L18.374 11.5646H11.1254C10.1786 11.5646 9.27049 11.9407 8.60096 12.6103C7.93142 13.2798 7.55528 14.1879 7.55528 15.1347C7.55528 16.0816 7.93142 16.9897 8.60096 17.6592C9.27049 18.3287 10.1786 18.7049 11.1254 18.7049H15.8856V19.8949H11.1254C9.86295 19.8949 8.65217 19.3934 7.75946 18.5007C6.86675 17.608 6.36523 16.3972 6.36523 15.1347C6.36523 13.8723 6.86675 12.6615 7.75946 11.7688C8.65217 10.8761 9.86295 10.3745 11.1254 10.3745V10.3745Z"
                                fill="white"
                            />
                        </svg>
                    </ToolbarButton>
                    {/* Text Type Dropdown */}
                    <TextTypeDropdown editor={editor} />

                    {/* Text Align Buttons */}
                    <TextAlignDropdown editor={editor} />
                </div>
                {/* Separator */}
                <div className="w-px h-6 bg-gray-700 mx-1"></div>

                {/* Bold */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    isActive={editor.isActive('bold')}
                    title="Bold"
                >
                    <strong className="font-bold">B</strong>
                </ToolbarButton>

                {/* Italic */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    isActive={editor.isActive('italic')}
                    title="Italic"
                >
                    <em className="italic">I</em>
                </ToolbarButton>

                {/* Underline */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    isActive={editor.isActive('underline')}
                    title="Underline"
                >
                    <u className="underline">U</u>
                </ToolbarButton>

                {/* Strikethrough */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    isActive={editor.isActive('strike')}
                    title="Strikethrough"
                >
                    <s className="line-through">S</s>
                </ToolbarButton>

                {/* Code */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    isActive={editor.isActive('code')}
                    title="Code"
                >
                    &lt;&gt;
                </ToolbarButton>

                {/* Clear Formatting (Eraser) */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                    title="Clear Formatting"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.1954 14.2854L17.4442 9.53358C17.2209 9.31044 16.9181 9.1851 16.6025 9.1851C16.2868 9.1851 15.9841 9.31044 15.7608 9.53358L12.5727 12.7217L10.0343 5.61475H8.84426L5.86914 13.9451H7.05919L7.65362 12.16H11.2238L11.7016 13.5928L7.40787 17.8865C7.29732 17.997 7.20962 18.1283 7.14978 18.2727C7.08994 18.4171 7.05915 18.5719 7.05915 18.7282C7.05915 18.8845 7.08994 19.0393 7.14978 19.1837C7.20962 19.3281 7.29732 19.4593 7.40787 19.5699L10.1129 22.2754H15.8191L22.1954 15.8986C22.3014 15.7926 22.3855 15.6668 22.4429 15.5284C22.5003 15.39 22.5298 15.2416 22.5298 15.0917C22.5298 14.9418 22.5003 14.7935 22.4429 14.655C22.3855 14.5166 22.3014 14.3908 22.1954 14.2849V14.2854ZM8.04991 10.97L9.43691 6.8048L10.8269 10.97H8.04991ZM15.3271 21.0854H10.6055L8.24924 18.7279L12.005 14.9727L16.7224 19.6895L15.3271 21.0854ZM17.5644 18.8481L12.847 14.1313L16.6028 10.3749L21.3196 15.0917L17.5644 18.8481Z"
                            fill="white"
                        />
                    </svg>
                </ToolbarButton>

                <div className="w-px h-6 bg-gray-700 "></div>

                {/* Bullet List */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={editor.isActive('bulletList')}
                    title="Bullet List"
                >
                    <svg
                        width="27"
                        height="28"
                        viewBox="0 0 27 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.11711 11.5648C9.10297 11.5648 9.90218 10.7656 9.90218 9.7797C9.90218 8.79383 9.10297 7.99463 8.11711 7.99463C7.13124 7.99463 6.33203 8.79383 6.33203 9.7797C6.33203 10.7656 7.13124 11.5648 8.11711 11.5648Z"
                            fill="white"
                        />
                        <path
                            d="M8.11711 19.8951C9.10297 19.8951 9.90218 19.0959 9.90218 18.11C9.90218 17.1242 9.10297 16.325 8.11711 16.325C7.13124 16.325 6.33203 17.1242 6.33203 18.11C6.33203 19.0959 7.13124 19.8951 8.11711 19.8951Z"
                            fill="white"
                        />
                        <path
                            d="M13.4723 17.515H21.8027V18.7051H13.4723V17.515ZM13.4723 9.18468H21.8027V10.3747H13.4723V9.18468Z"
                            fill="white"
                        />
                    </svg>
                </ToolbarButton>
                {/* Ordered List */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    isActive={editor.isActive('orderedList')}
                    title="Ordered List"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.0348 17.5151H22.3652V18.7052H14.0348V17.5151ZM14.0348 9.18479H22.3652V10.3748H14.0348V9.18479ZM9.27463 11.5649V6.80469H8.08458V7.39971H6.89453V8.58976H8.08458V11.5649H6.89453V12.7549H10.4647V11.5649H9.27463ZM10.4647 21.0853H6.89453V18.7052C6.89453 18.3896 7.01991 18.0869 7.24309 17.8637C7.46627 17.6405 7.76896 17.5151 8.08458 17.5151H9.27463V16.3251H6.89453V15.135H9.27463C9.59025 15.135 9.89294 15.2604 10.1161 15.4836C10.3393 15.7068 10.4647 16.0095 10.4647 16.3251V17.5151C10.4647 17.8308 10.3393 18.1334 10.1161 18.3566C9.89294 18.5798 9.59025 18.7052 9.27463 18.7052H8.08458V19.8952H10.4647V21.0853Z"
                            fill="white"
                        />
                    </svg>
                </ToolbarButton>

                {/* Separator */}
                <div className="w-px h-6 bg-gray-700"></div>

                {/* Link */}
                <ToolbarButton onClick={setLink} isActive={editor.isActive('link')} title="Link">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-.758l-.293.293m3.753-3.753l-1.414 1.414m-5.172 0a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101m-.758-.758l.293-.293m3.753 3.753l1.414-1.414"
                        ></path>
                    </svg>
                </ToolbarButton>

                {/* Image */}
                <>
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <ToolbarButton onClick={handleImageButtonClick} title="Image">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.6539 12.7549C16.0069 12.7549 16.3521 12.6502 16.6456 12.4541C16.9392 12.2579 17.168 11.9792 17.3031 11.653C17.4382 11.3268 17.4735 10.9679 17.4047 10.6216C17.3358 10.2753 17.1658 9.95727 16.9161 9.70762C16.6665 9.45798 16.3484 9.28796 16.0021 9.21909C15.6559 9.15021 15.2969 9.18556 14.9708 9.32067C14.6446 9.45577 14.3658 9.68457 14.1697 9.97813C13.9735 10.2717 13.8688 10.6168 13.8688 10.9699C13.8688 11.4433 14.0569 11.8973 14.3916 12.2321C14.7264 12.5669 15.1805 12.7549 15.6539 12.7549ZM15.6539 10.3748C15.7716 10.3748 15.8866 10.4097 15.9845 10.4751C16.0823 10.5405 16.1586 10.6334 16.2036 10.7422C16.2487 10.8509 16.2604 10.9705 16.2375 11.0859C16.2145 11.2014 16.1578 11.3074 16.0746 11.3906C15.9914 11.4738 15.8854 11.5305 15.77 11.5535C15.6545 11.5764 15.5349 11.5646 15.4262 11.5196C15.3175 11.4746 15.2245 11.3983 15.1591 11.3004C15.0938 11.2026 15.0589 11.0875 15.0589 10.9699C15.0589 10.8121 15.1216 10.6607 15.2331 10.5491C15.3447 10.4375 15.4961 10.3748 15.6539 10.3748Z"
                                fill="white"
                            />
                            <path
                                d="M19.8191 6.80469H7.91857C7.60294 6.80469 7.30025 6.93007 7.07707 7.15324C6.8539 7.37642 6.72852 7.67912 6.72852 7.99474V19.8952C6.72852 20.2109 6.8539 20.5135 7.07707 20.7367C7.30025 20.9599 7.60294 21.0853 7.91857 21.0853H19.8191C20.1347 21.0853 20.4374 20.9599 20.6606 20.7367C20.8837 20.5135 21.0091 20.2109 21.0091 19.8952V7.99474C21.0091 7.67912 20.8837 7.37642 20.6606 7.15324C20.4374 6.93007 20.1347 6.80469 19.8191 6.80469ZM19.8191 19.8952H7.91857V16.3251L10.8937 13.35L14.2199 16.6761C14.4428 16.8978 14.7445 17.0222 15.0589 17.0222C15.3733 17.0222 15.6749 16.8978 15.8978 16.6761L16.8439 15.7301L19.8191 18.7052V19.8952ZM19.8191 17.0213L17.6829 14.8851C17.4599 14.6635 17.1583 14.5391 16.8439 14.5391C16.5295 14.5391 16.2279 14.6635 16.005 14.8851L15.0589 15.8312L11.7327 12.505C11.5097 12.2834 11.2081 12.159 10.8937 12.159C10.5793 12.159 10.2777 12.2834 10.0547 12.505L7.91857 14.6412V7.99474H19.8191V17.0213Z"
                                fill="white"
                            />
                        </svg>
                    </ToolbarButton>
                </>

                {/* Code Block */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    isActive={editor.isActive('codeBlock')}
                    title="Code Block"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 20l4-16m4 4l4 4-4 4M6 20l-4-4 4-4"
                        ></path>
                    </svg>
                </ToolbarButton>

                {/* Blockquote */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    isActive={editor.isActive('blockquote')}
                    title="Blockquote"
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.6118 13.3499H8.10706C8.21765 12.6134 8.48061 11.9081 8.87916 11.2791C9.27771 10.65 9.80308 10.111 10.4217 9.6964L11.4868 8.98237L10.8323 7.99463L9.76718 8.70866C8.87065 9.30611 8.13545 10.1156 7.62684 11.0654C7.11823 12.0151 6.85192 13.0758 6.85156 14.1531V18.11C6.85156 18.4257 6.97694 18.7284 7.20012 18.9515C7.4233 19.1747 7.72599 19.3001 8.04161 19.3001H11.6118C11.9274 19.3001 12.2301 19.1747 12.4533 18.9515C12.6764 18.7284 12.8018 18.4257 12.8018 18.11V14.5399C12.8018 14.2243 12.6764 13.9216 12.4533 13.6984C12.2301 13.4752 11.9274 13.3499 11.6118 13.3499ZM19.9421 13.3499H16.4374C16.548 12.6134 16.811 11.9081 17.2095 11.2791C17.6081 10.65 18.1334 10.111 18.7521 9.6964L19.8172 8.98237L19.1686 7.99463L18.0975 8.70866C17.201 9.30611 16.4658 10.1156 15.9572 11.0654C15.4486 12.0151 15.1823 13.0758 15.1819 14.1531V18.11C15.1819 18.4257 15.3073 18.7284 15.5305 18.9515C15.7536 19.1747 16.0563 19.3001 16.372 19.3001H19.9421C20.2577 19.3001 20.5604 19.1747 20.7836 18.9515C21.0068 18.7284 21.1322 18.4257 21.1322 18.11V14.5399C21.1322 14.2243 21.0068 13.9216 20.7836 13.6984C20.5604 13.4752 20.2577 13.3499 19.9421 13.3499Z"
                            fill="white"
                        />
                    </svg>
                </ToolbarButton>

                {/* Horizontal Rule */}
                <ToolbarButton
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    title="Horizontal Rule"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"></path>
                    </svg>
                </ToolbarButton>
            </div>

            {/* Editor Content Area */}
            <EditorContent
                editor={editor}
                className="text-gray-200 px-2 border-0"
                style={{
                    minHeight: '200px',
                }}
            />
            <style>{`
        .ProseMirror ul, .ProseMirror ol {
          margin-left: 1.5em;
          padding-left: 1.5em;
        }
        .ProseMirror ul {
          list-style-type: disc;
        }
        .ProseMirror ol {
          list-style-type: decimal;
        }
        .ProseMirror li {
          margin-bottom: 0.25em;
        }
      `}</style>
        </div>
    );
};

export default RichTextEditor;
