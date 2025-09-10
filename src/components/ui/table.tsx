"use client";

import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import { tableStyles } from "./table-styles";

interface TableColumn {
    key: string;
    label: string;
}

interface TableData {
    [key: string]: string | number | boolean | string[] | number[] | undefined | null | any;
}

interface DynamicTableProps {
    columns: TableColumn[];
    data: TableData[];
    theme?: "dark" | "light";
    onRowClick?: (row: TableData) => void;
    onColumnClick?: (row: TableData, columnKey: string) => void;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
    columns,
    data,
    theme = "dark",
    onRowClick,
    onColumnClick,
}) => {
    return (
        <div
            className="flex flex-col overflow-y-auto"
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}
        >
            <div className="p-4">
                <div
                    className="overflow-x-auto"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <table className={tableStyles({ theme })}>
                        <thead>
                            <tr className="border-b border-gray-700">
                                {columns.map((column) => (
                                    <th key={column.key} className="p-3 overflow-x-auto whitespace-nowrap text-left">
                                        {column.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            {data.map((row, index) => (
                                <motion.tr
                                    key={index}
                                    className={`border-b border-gray-700 ${onRowClick ? "cursor-pointer hover:bg-gray-800" : ""
                                        }`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => onRowClick?.(row)}
                                >
                                    {columns.map((column) => (
                                        <td
                                            key={column.key}
                                            className={`p-3 ${onColumnClick ? "cursor-pointer" : ""
                                                }`}
                                            onClick={() => onColumnClick?.(row, column.key)}
                                        >
                                            <Tooltip.Provider>
                                                <Tooltip.Root>
                                                    <Tooltip.Trigger asChild>
                                                        <span>{String(row[column.key])}</span>
                                                    </Tooltip.Trigger>
                                                    <Tooltip.Portal>
                                                        <Tooltip.Content className="bg-gray-800 text-white p-2 rounded shadow-lg">
                                                            {String(row[column.key])}
                                                            <Tooltip.Arrow className="fill-gray-800" />
                                                        </Tooltip.Content>
                                                    </Tooltip.Portal>
                                                </Tooltip.Root>
                                            </Tooltip.Provider>
                                        </td>
                                    ))}
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DynamicTable;