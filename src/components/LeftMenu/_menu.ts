/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-08-30 11:15:05
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-14 16:13:45
 */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { MenuProps } from 'antd';
import { cloneDeep } from 'lodash';

import NabLogo1 from '@/assets/navlogo30_1.png';
import NabLogo2 from '@/assets/navlogo30_2.png';
import NabLogo3 from '@/assets/navlogo30_3.png';
import NabLogo4 from '@/assets/navlogo30_4.png';
import { flatTreeData, ITree } from '@/utils/common';

// eslint-disable-next-line @typescript-eslint/no-type-alias
type MenuItem = Required<MenuProps>['items'][number];

export const MenuList: any[] = [
  {
    label: '数据仓库',
    key: '/data-store',
    src: NabLogo1
  },
  {
    label: 'split',
    key: ''
  },
  {
    label: '威胁感知',
    key: '/threat-detection',
    src: NabLogo2,

    children: [
      {
        label: '智能合约漏洞检测',
        key: '/threat-detection/contract-detection'
      },
      {
        label: '自私挖矿检测',
        key: '/threat-detection/detection-privacy'
      },
      {
        label: '抢跑攻击检测',
        key: '/threat-detection/detection-attack'
      },
      {
        label: '钓鱼地址检测',
        key: '/threat-detection/detection-fish'
      }
      // {
      //   label: '查看报表',
      //   key: '/threat-detection/detection-chart'
      // }
    ]
  },
  {
    label: 'split',
    key: ''
  },
  {
    label: '威胁取证',
    key: '/threat-evidence',
    src: NabLogo3,

    children: [
      // {
      //   label: '地址分析',
      //   key: '/threat-evidence/address-analysis'
      // },
      {
        label: '交易图谱',
        key: '/threat-evidence/transaction-graph'
      },
      {
        label: '匿名环境下的精准身份溯源',
        key: '/threat-evidence/identity-inference'
      },
      {
        label: '复杂环境下的高效资产追踪',
        key: '/threat-evidence/malicious-transaction-copied'
      },
      {
        label: '区块链攻击溯源模型',
        key: '/threat-evidence/bitcoinmixedcoin-detection-copied'
      },
      {
        label: '网络取证-交易网络少样本身份推断',
        key: '/threat-evidence/fewidentity-inference'
      },
      {
        label: '链内取证-比特币非法交易检测',
        key: '/threat-evidence/malicious-transaction'
      },
      {
        label: '跨链取证-跨链查询取证',
        key: '/threat-evidence/cross-chain'
      },
      {
        label: '计算机取证-链码漏洞检测',
        key: '/threat-evidence/chaincodevulnerability-detection'
      },
      {
        label: '重现取证-比特币混币交易检测',
        key: '/threat-evidence/bitcoinmixedcoin-detection'
      }
    ]
  },
  {
    label: 'split',
    key: ''
  },
  {
    label: '数据大屏',
    key: '/data-screens',
    src: NabLogo4
  }
];

export const flatMenuList = flatTreeData(cloneDeep(MenuList) as ITree[]);
