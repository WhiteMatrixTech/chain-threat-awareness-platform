/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import cn from 'classnames';
import * as GIO from 'giojs';
import { useEffect } from 'react';
import CountUp from 'react-countup';

import data from '../../utils/json/sampleData.json';
import styles from './index.module.less';

interface dataScreensProps {
  className?: string;
}

export function DataScreens(props: dataScreensProps) {
  const { className } = props;

  const screenData1 = [
    {
      tab: '地址标签',
      number: 128.7,
      unit: 'M'
    },
    {
      tab: '已溯源分析地址',
      number: 91.8,
      unit: 'K'
    },
    {
      tab: '金额阈值监控',
      number: 81.8,
      unit: 'M'
    },
    {
      tab: '交易所地址监控',
      number: 31.8,
      unit: 'K'
    },
    {
      tab: '地址标签类型',
      number: 8.7,
      unit: 'K'
    },
    {
      tab: '已监控地址',
      number: 18.7,
      unit: 'K'
    },
    {
      tab: '转出监控',
      number: 2.81,
      unit: 'M'
    },
    {
      tab: '清零交易',
      number: 23566,
      unit: ''
    }
  ];

  const screenData2 = [
    {
      tab: '已审计智能合约',
      number: 280,
      unit: 'M'
    },
    {
      tab: '可监测漏洞类型',
      number: 28,
      unit: ''
    },
    {
      tab: '接入智能合约',
      number: 81.8,
      unit: 'M'
    },
    {
      tab: '开发者',
      number: 300,
      unit: 'K'
    },
    {
      tab: '已发现漏洞合约',
      number: 150,
      unit: 'K'
    },
    {
      tab: '合约漏洞库',
      number: 80,
      unit: 'K'
    },
    {
      tab: '区块链项目',
      number: 250,
      unit: 'K'
    }
  ];

  const lookupData = {
    France: 'FR',
    'United States': 'US',
    China: 'CN',
    Russia: 'RU'
  };

  const importData = [
    {
      name: 'France',
      y: 1000000,
      sliced: false,
      selected: false
    },
    {
      name: 'United States',
      y: 1100000,
      sliced: false,
      selected: false
    },
    {
      name: 'China',
      y: 1000000,
      sliced: true,
      selected: true
    },
    {
      name: 'Russia',
      y: 3000000,
      sliced: false,
      selected: false
    }
  ];

  const exportData = [
    {
      name: 'France',
      y: 1000000,
      sliced: false,
      selected: false
    },
    {
      name: 'United States',
      y: 1000000,
      sliced: false,
      selected: false
    },
    {
      name: 'China',
      y: 3100000,
      sliced: true,
      selected: true
    },
    {
      name: 'Russia',
      y: 1000000,
      sliced: false,
      selected: false
    }
  ];

  useEffect(() => {
    const container = document.getElementById('screen');

    const controller = new GIO.Controller(container);

    controller.configure({
      color: {
        surface: 0x1890ff,
        selected: '#FF6868',
        related: '#FF686899',
        // in: '#FF686899',
        // out: '#FF686899',
        halo: '#FF686899'
      }
    });

    controller.addData(data);
    // controller.setSurfaceColor('#FF0000');
    controller.adjustOceanBrightness(0.9);
    // controller.setTransparentBackground(true);
    controller.setAutoRotation(true, 1);
    controller.init();
    // console.log('gio', controller);
  }, []);

  return (
    <div className={cn(styles.dataScreens, className)}>
      <div className="flex justify-between">
        <div className="shadow-[0_4px_12px_rgba(163, 174, 191, 0.2)] flex w-[49%] flex-wrap rounded-[4px] bg-[#FFFFFF] p-[11px] px-[22px]">
          {screenData1.map((item, index) => (
            <div key={index} className="my-[11px] w-[25%]">
              <div className="text-[24px] font-[1000] leading-[24px] text-[#166CDD]">
                <CountUp end={item.number} duration={3} />
                <span className="ml-1 text-[14px] leading-[19px]">
                  {item.unit}
                </span>
              </div>
              <div className="text-[14px] text-[#303133B2]">{item.tab}</div>
            </div>
          ))}
        </div>
        <div className="flex w-[49%] flex-wrap  ">
          {screenData2.map((item, index) => (
            <div
              key={index}
              className={cn(
                'shadow-[0_4px_12px_rgba(163, 174, 191, 0.2)] mr-[8px] mb-[8px] w-[22%] rounded-[4px] bg-[#FFFFFF] px-[22px] py-[15px]',
                index > 3 && 'mb-0'
              )}
            >
              <div className="text-[24px] font-[1000] leading-[24px] text-[#303133]">
                <CountUp end={item.number} duration={3} />
                <span className="ml-1 text-[14px] leading-[19px]">
                  {item.unit}
                </span>
              </div>
              <div className="text-[14px] text-[#303133B2]">{item.tab}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="screen" className="mt-[20px] h-[1000px] w-[100%]"></div>
    </div>
  );
}
