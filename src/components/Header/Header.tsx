/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-08-30 11:15:05
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-25 16:30:18
 */
/* eslint-disable prettier/prettier */
import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Input, Layout, Menu } from 'antd';
import cn from 'classnames';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import store from 'store2';

import ArrowPng from '@/assets/arrow.png';
import LogoBlock from '@/assets/logo_block.png';
import MessagesPng from '@/assets/messages.png';
import UserPng from '@/assets/userPng.png';
import { DropDownCommon } from '@/components/DropDownCommon';
import { UserContext } from '@/services/context';
import { emitter, EmitterEvent } from '@/services/event';
import pattern from '@/styles/pattern';
import { ellipsisAddress } from '@/utils/common';

import styles from './Header.module.less';
import { Nav } from './Nav';

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: 'rgba(48, 49, 51, 0.4)'
    }}
  />
);

export function Header() {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  const handleLogout = ({ key }: { key: string }) => {
    if (key === 'loginOut') {
      emitter.emit(EmitterEvent.logout);

      store.clearAll();
      navigate('/login');
    }
  };

  return (
    <div
      className={cn(`${pattern.flexStart}  z-[1] h-[64px] w-full px-[31px] `)}
    >
      <div
        className={`text-[34px] font-[900] text-[#303133] ${pattern.flexCenter}`}
      >
        <div className="">
          <img className="mr-[8px]" src={LogoBlock} width={40} height={40} />
        </div>

        <span className="text-[27px] font-[500] text-[#00A0E9]">
          多链通用威胁感知与取证示范平台 V1.0
        </span>
      </div>
      <Nav />
      {/* <div className="markBorderG ml-[36px]">
        <Input placeholder="Search" prefix={prefix} className={styles.search} />
      </div> */}
      <div className=" absolute right-[40px] ">
        <div className="flex items-center">
          {/* <div className=" mr-[10px] cursor-pointer text-[#30313399] hover:text-[#40a9ff] ">
            <img className="" src={MessagesPng} width={32} height={32} />
          </div> */}
          <DropDownCommon
            className="h-[32px] border-[0px] bg-[#02004D4D]"
            handleEvent={() => {
              handleLogout({ key: 'loginOut' });
            }}
          >
            <div
              className="flex items-center gap-x-[8px]"
              onClick={(e) => e.preventDefault()}
            >
              <img className="" src={UserPng} width={17} height={17} />
              <span className="text-[13px] text-[#FFFFFF]">
                {ellipsisAddress(userInfo?.userId || '')
                  ? ellipsisAddress(userInfo?.userId || '')
                  : 'user001'}
              </span>
            </div>
          </DropDownCommon>
        </div>
      </div>
    </div>
  );
}
