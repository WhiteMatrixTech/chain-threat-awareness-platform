/* eslint-disable prettier/prettier */
/*
 * @Description: datastore模块涉及的请求
 * @Author: didadida262
 * @Date: 2024-08-28 14:03:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-05 11:04:16
 */
import { getData, postData } from "./request";

export interface loginRequestType {
  userId: string;
  password: string;
}
export interface dataStoreRequestType {
  currentPage: number;
  pageSize: number;
}
export interface detectPrivacyRequestType {
  address: string;
  chain: string;
}
export interface detectFishRequestType {
  address: string;
  chain: string;
}
export interface detectIdentityRequestType {
  address: string;
  chain: string;
}
export interface detectCrossChainRequestType {
  tx: string;
  chain: string;
}
export interface detectBitcoinmixedcoinRequestType {
  tx: string;
  chain: string;
}
export interface detectMaliciousRequestType {
  tx: string;
  chain: string;
}
// 钓鱼模块
export async function detectPrivacyService(params: detectPrivacyRequestType) {
  return await getData<detectPrivacyRequestType, any>(
    `/chainthreat/v1/detection/phishing`,
    params
  );
}

// 钓鱼模块
export async function detectFishService(params: detectFishRequestType) {
  return await getData<detectFishRequestType, any>(
    `/chainthreat/v1/detection/phishing`,
    params
  );
}
// 身份推断
export async function detectIdentityService(params: detectIdentityRequestType) {
  return await getData<detectFishRequestType, any>(
    `/chainthreat/v1/detection/i2gt`,
    params
  );
}
// 跨链
export async function detectCrossChainService(
  params: detectCrossChainRequestType
) {
  return await getData<detectCrossChainRequestType, any>(
    `/chainthreat/v1/detection/cross-chain`,
    params
  );
}
// 混币
export async function detectBitcoinmixedcoinService(
  params: detectBitcoinmixedcoinRequestType
) {
  return await getData<detectBitcoinmixedcoinRequestType, any>(
    `/chainthreat/v1/detection/mix-coin`,
    params
  );
}
// 非法交易
export async function detectMaliciousService(
  params: detectMaliciousRequestType
) {
  return await getData<detectMaliciousRequestType, any>(
    `/chainthreat/v1/detection/illicit`,
    params
  );
}
//

export async function getDataStoreList(params: dataStoreRequestType) {
  return await getData<dataStoreRequestType, any>(
    `/chainthreat/v1/user/profile`,
    params
  );
}
