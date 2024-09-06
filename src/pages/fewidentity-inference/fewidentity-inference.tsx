/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-08-29 10:18:39
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-06 00:29:45
 */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable prettier/prettier */

import { notification } from "antd";
import cn from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { ButtonCommonCyber } from "@/components/ButtonCommonCyber";
import { GraphinData } from "@antv/graphin";
import { ButtonCommonV2, EButtonType } from "@/components/ButtonCommonV2";
import { InputCommonV2 } from "@/components/InputCommonV2";
import { TableCommonV4 } from "@/components/TableCommonV4";
import { TagComponent } from "@/components/TagComponent";
import { detectionSampleColumns, modelColumns } from "@/services/columns";
import { modelListFewIdentityMock } from "@/services/mockData/commonList";
import pattern from "@/styles/pattern";

export function FewidentityInference() {
  const navigate = useNavigate();
  const [modelList, setModelList] = useState(modelListFewIdentityMock);
  const [detectionSampleList, setdetectionSampleList] = useState([]);

  const [address, setAddress] = useState<any>(null);
  const [sampleData, setSampleData] = useState<any>({
    sample1: "",
    sample2: "",
    sample3: "",
    sample4: "",
    sample5: ""
  });

  const startSearch = () => {
    // 开始查询
    if (!address) {
      notification.warning({ message: `请输入信息！！！` });
      return;
    }
    const samArr = Object.values(sampleData);
    const t = samArr.filter((item: any) => item.length === 0);
    console.log("addre>>", address);
    console.log("t>>", t);
    if (t.length) {
      notification.warning({ message: `请输入信息！！！` });
    } else {
      navigate(
        `/threat-evidence/fewidentity-inference/result/${address}/${samArr.join(
          ","
        )}`
      );
    }
  };

  return (
    <div className={cn(" w-full h-full pt-[0px] fadeIn", `${pattern.flexbet}`)}>
      <div
        className={cn(
          `w-full h-full flex flex-col gap-y-20 justify-between  items-center `
        )}
      >
        <div className={cn(` w-[1068px] h-[484px] relative `)}>
          <div
            className={cn(
              `absolute top-0 left-0 w-full h-[54px] bg-[url('./assets/FewidentityDialogTitle.png')] bg-cover bg-center`
            )}
          />
          <div
            className={cn(
              `pt-8 px-14 pb-10 absolute top-[54px] left-0 w-full h-[calc(100%_-_54px)] `,
              "bg-[#003F7A4D]",
              "border-solid border-[1px] border-[#D3EAFF] border-t-0 border-r-0 border-l-0",
              `${pattern.flexbet}`
            )}
          >
            <div
              className={cn(
                `w-[450px] h-full `,
                "flex flex-col justify-between items-start"
              )}
            >
              <span className="text-[#ffffff] text-[18px]">
                提供5个样本用于推断待测地址是否是该身份
              </span>
              <InputCommonV2
                placeholder="样本地址"
                onInput={(val: any) => {
                  setSampleData({
                    ...sampleData,
                    sample1: val
                  });
                }}
                className="w-full h-[36px]"
              />
              <InputCommonV2
                placeholder="样本地址"
                onInput={(val: any) => {
                  setSampleData({
                    ...sampleData,
                    sample2: val
                  });
                }}
                className="w-full h-[36px] "
              />
              <InputCommonV2
                placeholder="样本地址"
                onInput={(val: any) => {
                  setSampleData({
                    ...sampleData,
                    sample3: val
                  });
                }}
                className="w-full h-[36px] "
              />
              <InputCommonV2
                placeholder="样本地址"
                onInput={(val: any) => {
                  setSampleData({
                    ...sampleData,
                    sample4: val
                  });
                }}
                className="w-full h-[36px] "
              />
              <InputCommonV2
                placeholder="样本地址"
                onInput={(val: any) => {
                  setSampleData({
                    ...sampleData,
                    sample5: val
                  });
                }}
                className="w-full h-[36px] "
              />
            </div>
            <div
              className={cn(
                `w-[1px] h-full border-[#00A0E9] border-[1px] border-solid`
              )}
            />
            <div
              className={cn(`w-[450px] h-full flex flex-col gap-y-4 items-end`)}
            >
              <div
                className={`w-full h-[24px] flex items-center justify-start`}
              >
                <span className="text-[#ffffff] text-[18px]">待测地址</span>
              </div>
              <InputCommonV2
                placeholder="输入待测地址"
                onInput={(val: any) => {
                  setAddress(val);
                }}
                className="w-full h-[36px] "
              />

              {/* <ButtonCommonV2
                onClick={() => {
                  startSearch();
                }}
              >
                <span className="text-[#FFFFFF] text-[16px]">查询</span>
              </ButtonCommonV2> */}
              <ButtonCommonCyber
                onClick={() => {
                  startSearch();
                }}
                className="w-[450px] h-[36px] "
              >
                <span className="text-[#FFFFFF] text-[16px]">查询</span>
              </ButtonCommonCyber>
            </div>
          </div>
        </div>
        <div className={cn(`w-full h-[370px] flex justify-between`)}>
          <div className="w-[calc(50%_-_10px)] h-full flex flex-col">
            <div className="w-[120px] h-[36px]">
              <TagComponent title="模型信息" className="w-[120px] h-[36px]" />
            </div>

            <div className={cn(` w-full flex-1 mt-4`)}>
              <TableCommonV4
                className="w-full h-full"
                data={modelList}
                columns={modelColumns}
              />
            </div>
          </div>
          <div className="w-[calc(50%_-_10px)] h-full flex flex-col">
            <div className="w-[120px] h-[36px]">
              <TagComponent title="检测样例" className="w-[120px] h-[36px]" />
            </div>
            <div className={cn(` w-full mt-4 flex-1`)}>
              <TableCommonV4
                className="w-full h-full"
                data={detectionSampleList}
                columns={detectionSampleColumns}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
