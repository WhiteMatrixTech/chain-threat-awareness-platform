/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable prettier/prettier */
import cn from "classnames";
import { useEffect, useState } from "react";

import dataScreen_graph from "@/assets/dataScreen_graph.png";
import dataScreen_icon_data from "@/assets/dataScreen_icon_data.png";
import dataScreen_icon_dot from "@/assets/dataScreen_icon_dot.png";
import dataScreen_icon_type from "@/assets/dataScreen_icon_type.png";
import dataScreen_icon1 from "@/assets/dataScreen_icon1.png";
import dataScreen_icon2 from "@/assets/dataScreen_icon2.png";
import dataScreen_icon3 from "@/assets/dataScreen_icon3.png";
import dataScreen_icon4 from "@/assets/dataScreen_icon4.png";
import dataScreen_icon5 from "@/assets/dataScreen_icon5.png";
import dataScreen_icon6 from "@/assets/dataScreen_icon6.png";
import { ChartLine } from "@/components/chartLine";
import { ChartLineAddress } from "@/components/chartLineAddress";
import { DataScreenTitle } from "@/components/DataScreenTitle";
import { dataScreenService } from "@/services/detection";

import { EarthCommon } from "./EarthCommon";

interface dataScreensProps {
  className?: string;
}

export function DataScreens(props: dataScreensProps) {
  const [date, setDate] = useState("2024年9月10日");
  const [ChartLineData, setChartLineData] = useState([]) as any;
  const [ChartLineAddressData, setChartLineAddressData] = useState([]) as any;
  const maxNum = 8;
  const reg = /(?!^)(?=(\d{3})+$)/g;
  const [leftTopList, setleftTopList] = useState([
    {
      title: "疑似钓鱼诈骗地址",
      dataIndex: "fishing_address",
      icon: dataScreen_icon1,
      value: "5918"
    },
    {
      title: "交易所地址",
      icon: dataScreen_icon2,
      dataIndex: "exchange",
      value: "374"
    },
    {
      title: "区块链项目",
      icon: dataScreen_icon3,
      dataIndex: "blockchain_projects",
      value: "54,646"
    },
    {
      title: "已存储区块链数据",
      dataIndex: "blockchain_data",
      icon: dataScreen_icon4,
      value: "100,002,989"
    },
    {
      title: "接入智能合约数量",
      dataIndex: "contract",
      icon: dataScreen_icon5,
      value: "164,065"
    },
    {
      title: "平台性能开销占区块链全节点开销",
      dataIndex: "property",
      icon: dataScreen_icon6,
      value: "3%"
    }
  ]) as any;
  const [leftBottomList, setleftBottomList] = useState([
    {
      title: "断言失败漏洞",
      value: "7.12%",
      color: "#FF3335"
    },
    {
      title: "任意存储位置存取漏洞",
      value: "17.88%",
      color: "#60B82E"
    },
    {
      title: "区块参数依赖漏洞",
      value: "1.08%",
      color: "#FF6629"
    },
    {
      title: "整数溢出漏洞",
      value: "15.28%",
      color: "#14CC8F"
    },
    {
      title: "以太币泄露漏洞",
      value: "8.88%",
      color: "#FFB60A"
    },
    {
      title: "以太币锁定漏洞",
      value: "5.43%",
      color: "#008CFF"
    },
    {
      title: "可重入漏洞",
      value: "14.12%",
      color: "#FAD905"
    },
    {
      title: "交易顺序依赖漏洞",
      value: "7.12%",
      color: "#2555F4"
    },
    {
      title: "未检查返回值漏洞",
      value: "9.00%",
      color: "#A7CC22"
    },
    {
      title: "无保护自毁漏洞",
      value: "2.82%",
      color: "#6025F4"
    },
    {
      title: "不安全委托调用漏洞",
      value: "11.27%",
      color: "#FA7305"
    }
  ]);
  const [middleBottomList, setmiddleBottomList] = useState([
    {
      title: "地址标签",
      dataIndex: "address_label",
      value: 71612,
      max: 71612
    },
    {
      title: "标签类型",
      dataIndex: "label_type",
      value: 350,
      max: 350
    },
    {
      title: "监控地址",
      dataIndex: "monitor_address",
      value: 0,
      max: 3500
    }
  ]);
  const getDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // 月份从0开始，需要加1并补零
    const day = String(currentDate.getDate()).padStart(2, "0"); // 补零
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const formattedDate = `${year}年${month}月${day}日${hours}:${minutes}:${seconds}`;
    setDate(formattedDate);
  };
  const writeData = (data: any) => {
    // 标签等数据
    const newmiddleBottomList = middleBottomList.map((item: any) => {
      const targetData = data.filter((i: any) => i.name === item.dataIndex)[0];
      if (!targetData) {
        return {
          ...item
        };
      } else {
        return {
          ...item,
          value: targetData.value
        };
      }
    });
    setmiddleBottomList(newmiddleBottomList);

    // 现有数据部分
    const newleftTopList = leftTopList.map((item: any) => {
      const targetData = data.filter((i: any) => i.name === item.dataIndex)[0];
      if (!targetData) {
        if (item.dataIndex === "property") {
          const randomData = ["3%", "4%", "5%", "6%", "7%", "8%"];
          const index = Math.floor(Math.random() * 6);
          console.log("index>>>", index);
          return {
            ...item,
            value: randomData[index]
          };
        } else {
          return {
            ...item
          };
        }
      } else {
        return {
          ...item,
          value: targetData.value
        };
      }
    });
    setleftTopList(newleftTopList);

    // 右侧
    const realtime_tx = data.filter((i: any) => i.name === "realtime_tx")[0];
    setChartLineData(realtime_tx.lineDataList);
    const detect_address = data.filter(
      (i: any) => i.name === "detect_address"
    )[0];
    setChartLineAddressData(detect_address.lineDataList);
  };
  const listenTime = () => {
    getDate();
    requestAnimationFrame(listenTime);
  };

  useEffect(() => {
    listenTime();
    const timer = setInterval(async () => {
      const response = await dataScreenService();
      console.log("repose>>>", response);
      writeData(response.data);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      id="dataScreenContainer"
      className={cn(
        `w-full h-full fadeIn flex flex-col justify-between screen`,
        "scale-[95%] 3xl:scale-100"
      )}
    >
      <div className=" w-full h-[94px]  flex justify-center items-center">
        <div
          className={cn(
            ` w-[1373px] h-full flex justify-center items-center`,
            `bg-[url('./assets/dataScreen_header_bg2.png')] bg-cover bg-center relative`
          )}
        >
          {/* background: linear-gradient(180deg, #FFFFFF 0%, #97CDFF 100%); */}
          <div>
            {/* <span className="text-[36px] bg-gradient-to-b from-[#FFFFFF] to-[#97CDFF] bg-clip-text text-transparent"> */}
            <span className="text-[36px] text-[#FFFFFF]">
              {date}
            </span>
          </div>
        </div>
      </div>
      <div className=" w-full h-[calc(100%_-_100px)] flex justify-between items-center">
        <div className=" w-[439px] h-full  flex flex-col justify-between ">
          <div
            className={cn(" w-full h-[300px] flex flex-col justify-between")}
          >
            <div className={cn("title w-full h-[40px]")}>
              <DataScreenTitle title="现有数据展示" imgSrc={dataScreen_icon_data} />
            </div>
            <div
              className={cn(
                ` w-full h-[calc(100%_-_44px)] px-[16px] py-[16px] flex flex-col justify-between items-center`,
                ` bg-[#061B5A] bg-opacity-30`
              )}
            >
              {leftTopList.map((item: any, index: number) =>
                <div
                  key={index}
                  className={cn(
                    `w-full h-[24px] flex justify-between items-center`
                  )}
                >
                  <div className="left w-[calc(70%)] h-full flex justify-start items-center">
                    <div className="index w-[16px] h-[16px] flex justify-center items-center">
                      <span className="text-[16px] text-[#FFFFFF99]">
                        {"0" + (index + 1)}
                      </span>
                    </div>
                    <div
                      className={cn(
                        "ml-[6px] w-[1px] h-[10px] bg-[#00FFD1]"
                        // `border-l-solid border-l-[1px] border-l-[#00FFD1]`
                      )}
                    />

                    {/* <div className="img">
                      <img src={item.icon} alt="" width={16} height={16} />
                    </div> */}
                    <div className={cn("ml-[6px] pl-[6px]")}>
                      <span className="text-[16px] text-[#ffffff]">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <div className="right w-[calc(30%)] h-full flex items-center justify-end">
                    <span className="text-[24px] text-[#FFFFFF]">
                      {item.value}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className={cn(
              ` w-full h-[calc(100%_-_310px)] 3x:h-[calc(100%_-_270px)] flex flex-col justify-between`
            )}
          >
            <div className={cn("title w-full h-[40px]")}>
              <DataScreenTitle
                title="监测漏洞类型 11种"
                imgSrc={dataScreen_icon_type}
              />
            </div>
            <div
              className={cn(
                "w-full h-[calc(100%_-_44px)] pt-[10px] py-[5px] 4xl:pt-10 flex flex-col justify-between items-center",
                ` bg-[#061B5A] bg-opacity-30 `,
                `overflow-scroll`
              )}
            >
              <div className="graph w-full h-[153px] flex justify-center items-center">
                <img src={dataScreen_graph} alt="" width={154} height={153} />
              </div>
              <div className="content w-full h-[calc(100%_-_173px)] px-[20px] 4xl:pt-10">
                <div className="w-full flex justify-start flex-wrap gap-y-2">
                  {leftBottomList.map((item: any, index: number) =>
                    <div
                      className="w-[calc(49%)] h-[52px] flex justify-start items-center"
                      key={index}
                    >
                      <div className="dot w-[24px] h-full pt-[8px] pl-[8px]">
                        <div
                          className="w-[8px] h-[8px] rounded-[4px]"
                          style={{ backgroundColor: `${item.color}` }}
                        />
                      </div>
                      <div className="dot w-[160px] h-full">
                        <div className="w-full">
                          <span className="text-[16px] text-[#ffffff]">
                            {item.title}
                          </span>
                        </div>
                        <div className="w-full">
                          <span className="text-[18px] text-[#BFE7F9]">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  w-[calc(100%_-_859px)] 3xl:w-[calc(100%_-_903px)] h-full flex justify-between flex-col items-center">
          <div className="earthContainer w-full h-[calc(100%_-_150px)]  flex justify-center items-center  ">
            <EarthCommon />
          </div>
          <div
            className={cn(
              " w-full h-[140px] flex justify-around items-center px-[20px] py-[20px]",
              "bg-[#02004D4D]"
            )}
          >
            <div className="w-full h-full  flex justify-between items-center">
              {middleBottomList.map((item: any, index: number) =>
                <div
                  key={index}
                  className={cn(
                    "w-[33%] h-[80px] 3xl:h-full  flex flex-col items-center justify-between ",
                    index !== 2
                      ? "border-solid  border-[#09AFB9] border-0 border-r-[2px]"
                      : ""
                  )}
                >
                  <span className="text-[31px] text-[#BFE7F9]  w-[105px] h-full flex justify-center items-center">
                    {String(item.value).replace(reg, ",").length > maxNum
                      ? String(item.value).replace(reg, ",").slice(0, maxNum) +
                        "..."
                      : String(item.value).replace(reg, ",")}
                  </span>
                  <span className="w-[88px] text-[22px] text-[#00FFE0]">
                    {item.title}
                  </span>
                </div>
              )}
              {/* {middleBottomList.map((item: any, index: number) =>
              <div
                key={index}
                className={cn(
                  " w-[140px] 3xl:w-[270px] h-[127px] 3xl:h-[180px] flex justify-center items-center relative",
                  `bg-[url('./assets/dataScreen_num_bg.png')] bg-cover bg-center`
                )}
              >
                <span className="text-[31px] text-[#BFE7F9]  w-[105px] h-full flex justify-center items-center">
                  {String(item.value).replace(reg, ",").length > maxNum
                    ? String(item.value).replace(reg, ",").slice(0, maxNum) +
                      "..."
                    : String(item.value).replace(reg, ",")}
                </span>
                <span className="w-[88px] text-[22px] text-[#00FFE0] absolute bottom-0 left-[calc(50%_-_44px)]">
                  {item.title}
                </span>
              </div>
            )} */}
            </div>
          </div>
        </div>
        <div className=" w-[404px] h-full overflow-scroll">
          <div className="  w-full h-[400px]">
            <div
              className={cn(
                " title w-full h-[40px] py-[7.5px] pl-[20px] pr-[18.5px] flex justify-between items-center",
                ` bg-[#061B5A] bg-opacity-30 `,
                `border-l-[6px] border-l-solid border-l-[#00FFD1]`
              )}
            >
              <div className="w-[calc(80%)] h-full flex justify-start items-center">
                <span className="text-[#EFF4FF] text-[20px]">近24小时实时交易</span>
              </div>
              <div className="w-[calc(20%)] h-full flex justify-end items-center">
                <img src={dataScreen_icon_dot} alt="" width={4} height={3} />
              </div>
            </div>
            <div
              className={cn(
                " 折线图 w-full h-[342px] px-3 py-3 mt-[8px] 3xl:mt-[12px]",
                ` bg-[#061B5A] bg-opacity-30 `
              )}
            >
              <ChartLine data={ChartLineData} />
            </div>
          </div>
          <div className=" w-full h-[400px] ">
            <div
              className={cn(
                "title w-full h-[40px]  py-[7.5px] pl-[20px] pr-[18.5px] flex justify-between items-center",
                ` bg-[#061B5A] bg-opacity-30 `,
                `border-l-[6px] border-l-solid border-l-[#00FFD1]`
                // `mt-[8px] 3xl:mt-[12px]`
              )}
            >
              <div className="w-[calc(80%)] h-full flex justify-start items-center">
                <span className="text-[#EFF4FF] text-[20px]">已分析地址数量</span>
              </div>
              <div className="w-[calc(20%)] h-full flex justify-end items-center">
                <img src={dataScreen_icon_dot} alt="" width={4} height={3} />
              </div>
            </div>

            <div
              className={cn(
                "折线图2 w-full h-[342px]  px-3 py-3",
                ` bg-[#061B5A] bg-opacity-30 `,
                `mt-[8px] 3xl:mt-[12px]`
              )}
            >
              <ChartLineAddress data={ChartLineAddressData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
