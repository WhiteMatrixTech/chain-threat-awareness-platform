/* eslint-disable @typescript-eslint/restrict-plus-operands */
/*
 * @Description: 无限列表版
 * @Author: didadida262
 * @Date: 2024-08-29 13:47:01
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-06 15:31:23
 */
/* eslint-disable prettier/prettier */

/* eslint-disable @typescript-eslint/no-unsafe-call */
import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";

import pattern from "@/styles/pattern";

interface IProps {
  columns: any[];
  data: any[];
  className?: string;
}

export function TableCommonV2(props: IProps) {
  const { data, columns, className } = props;
  const maxNum = 10;

  return (
    <div
      className={cn(
        "h-full w-full px-5 py-5 bg-[#02004D4D]",
        className,
        `border-[2px] border-solid border-[#0D53B7]`
      )}
    >
      <div
        className={cn(
          `header flex bg-[#0095FF66] h-[40px] items-center w-full `
        )}
      >
        {columns &&
          columns.map((col: any, colkey: number) =>
            <div
              className={cn("px-[16px] ")}
              style={col.width ? { width: col.width } : { flexGrow: 1 }}
              key={colkey}
            >
              <span className={cn("text-[15px] text-[#ffffff]")}>
                {col.title}
              </span>
            </div>
          )}
      </div>
      {data &&
        data.length &&
        <div className="content w-full h-[calc(100%_-_40px)] overflow-scroll">
          {data &&
            data.map((item: any, index: number) =>
              <div
                className={cn(
                  `w-full h-[40px] flex`,
                  "hover:bg-[#00D2D51A]",
                  ` border-solid border-[0px] border-b-[1px] border-[#0095FF66]`
                )}
                key={index}
              >
                {columns &&
                  columns.map((col: any, colkey: number) =>
                    <div
                      className={cn("px-[16px]  flex items-center ")}
                      style={col.width ? { width: col.width } : { flexGrow: 1 }}
                      key={colkey}
                    >
                      <span className={cn("text-[15px] text-[#ffffff]")}>
                        {/* {col.dataIndex ? item[col.dataIndex] : index + 1} */}
                        {col.dataIndex
                          ? item[col.dataIndex] &&
                            item[col.dataIndex].length > maxNum
                            ? item[col.dataIndex].slice(0, maxNum) + "..."
                            : item[col.dataIndex]
                          : index + 1}
                      </span>
                    </div>
                  )}
              </div>
            )}
        </div>}
    </div>
  );
}
