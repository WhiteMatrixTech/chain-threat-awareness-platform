/* eslint-disable prettier/prettier */
/*
 * @Description: datastore模块涉及的请求
 * @Author: didadida262
 * @Date: 2024-08-28 14:03:48
 * @LastEditors: didadida262
 * @LastEditTime: 2024-09-05 17:57:55
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
export interface detectChainCodeRequestType {
  name: string;
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
export interface detectFewSamplesRequestType {
  address: string;
  samples: string;
  chain: string;
}

// 少样本
export async function detectFewSamplesService(
  params: detectFewSamplesRequestType
) {
  return await getData<detectFewSamplesRequestType, any>(
    `/chainthreat/v1/detection/fsl`,
    params
  );
}

// 链码
export async function detectChainCodeService(
  params: detectChainCodeRequestType
) {
  return await getData<detectChainCodeRequestType, any>(
    `/chainthreat/v1/detection/chaincode`,
    params
  );
}
// 攻击模块
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
  return await getData<detectIdentityRequestType, any>(
    `/chainthreat/v1/detection/i2gt`,
    params
  );
}
export interface getTransactionsRequestType {
  address: string;
  limit: number;
}
// 查询交易数据接口
export async function getTransactionsService(
  params: getTransactionsRequestType
) {
  return await getData<getTransactionsRequestType, any>(
    `/chainthreat/v1/data-house/eth/transactions/second`,
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
