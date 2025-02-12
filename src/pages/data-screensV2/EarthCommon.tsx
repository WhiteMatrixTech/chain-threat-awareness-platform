/*
 * @Description: 老版本改造
 * @Author: didadida262
 * @Date: 2024-09-14 10:32:18
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-20 14:38:15
 */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import Earth from "3d-earth";
import cn from "classnames";
import { config } from "process";
import { useEffect, useState } from "react";

// import './index.css'

export function EarthCommon() {
  useEffect(() => {
    // 城市列表（来自业务系统）
    const cityList = {
      北京: { name: "北京", longitude: 116.3, latitude: 39.9 },
      上海: { name: "上海", longitude: 121.0, latitude: 31.0 },
      西安: { name: "西安", longitude: 108.0, latitude: 34.0 },
      成都: { name: "成都", longitude: 103.0, latitude: 31.0 },
      乌鲁木齐: { name: "乌鲁木齐", longitude: 87.0, latitude: 43.0 },
      拉萨: { name: "拉萨", longitude: 91.06, latitude: 29.36 },
      广州: { name: "广州", longitude: 113.0, latitude: 23.06 },
      哈尔滨: { name: "哈尔滨", longitude: 127.0, latitude: 45.5 },
      沈阳: { name: "沈阳", longitude: 123.43, latitude: 41.8 },
      武汉: { name: "武汉", longitude: 114.0, latitude: 30.0 },
      海口: { name: "海口", longitude: 110.0, latitude: 20.03 },
      纽约: { name: "纽约", longitude: -74.5, latitude: 40.5 },
      伦敦: { name: "伦敦", longitude: 0.1, latitude: 51.3 },
      巴黎: { name: "巴黎", longitude: 2.2, latitude: 48.5 },
      开普敦: { name: "开普敦", longitude: 18.25, latitude: -33.5 },
      悉尼: { name: "悉尼", longitude: 151.1, latitude: -33.51 },
      东京: { name: "东京", longitude: 139.69, latitude: 35.69 },
      里约热内卢: { name: "里约热内卢", longitude: -43.11, latitude: -22.54 }
    };

    // 城市之间的连线，可以定义颜色（数据来自业务系统）
    const bizLines = [
      {
        from: "北京",
        to: [
          "上海",
          "西安",
          "成都",
          "乌鲁木齐",
          "拉萨",
          "广州",
          "哈尔滨",
          "沈阳",
          "武汉",
          "海口",
          "纽约",
          "伦敦",
          "巴黎",
          "开普敦",
          "悉尼",
          "东京",
          "里约热内卢"
        ],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "上海",
        to: [
          "北京",
          "上海",
          "西安",
          "成都",
          "乌鲁木齐",
          "拉萨",
          "广州",
          "哈尔滨",
          "沈阳",
          "武汉",
          "海口",
          "纽约",
          "伦敦",
          "巴黎",
          "开普敦",
          "悉尼",
          "东京",
          "里约热内卢"
        ],
        color: `rgba(246, 250, 5, 1)`
      },
      {
        from: "西安",
        to: ["北京", "上海", "成都", "广州", "乌鲁木齐", "海口"],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "成都",
        to: ["北京", "上海", "广州", "武汉", "海口", "纽约", "悉尼"],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "乌鲁木齐",
        to: ["北京", "上海", "西安"],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "广州",
        to: [
          "北京",
          "上海",
          "成都",
          "拉萨",
          "武汉",
          "海口",
          "纽约",
          "伦敦",
          "巴黎",
          "悉尼",
          "东京",
          "里约热内卢"
        ],
        color: `rgba(56, 246, 255, 1)`
      },
      { from: "哈尔滨", to: ["北京", "沈阳"], color: `rgba(56, 246, 255, 1)` },
      { from: "沈阳", to: ["北京", "哈尔滨"], color: `rgba(56, 246, 255, 1)` },
      {
        from: "海口",
        to: ["北京", "上海", "成都", "广州"],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "纽约",
        to: ["北京", "上海", "成都", "广州"],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "伦敦",
        to: ["北京", "上海", "广州"],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "巴黎",
        to: ["北京", "上海", "广州"],
        color: `rgba(56, 246, 255, 1)`
      },
      { from: "开普敦", to: ["北京", "上海"], color: `rgba(56, 246, 255, 1)` },
      {
        from: "悉尼",
        to: ["北京", "上海", "成都", "广州"],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "东京",
        to: ["北京", "上海", "广州"],
        color: `rgba(56, 246, 255, 1)`
      },
      {
        from: "里约热内卢",
        to: ["北京", "上海", "广州"],
        color: `rgba(56, 246, 255, 1)`
      }
    ];

    const container = document.getElementById('container')
    const width = container?.clientWidth
    const height = container?.clientHeight
    console.log(width)
    console.log(height)
    const config = {
      earthRadius: 14,
      autoRotate: true,
      zoomChina: false,
      starBackground: false,
      orbitControlConfig: {
        enableRotate: true,
        enableZoom: true
      }
    };
    const earth: any = new Earth("container", cityList, bizLines, config);
    earth.load();
  }, []);
  return (
    <div className="earth-container h-full w-full">
      <div id="container" className="w-full h-full relative" />
    </div>
  );
}
