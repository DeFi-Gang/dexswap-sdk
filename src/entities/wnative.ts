import { ChainId } from "../constants/chainIds";
import { Token } from './Token';

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WNATIVE: { [chainId: number]: Token } = {
  [ChainId.BSCTestnet]: new Token(
    ChainId.BSCTestnet,
    '0x094616f0bdfb0b526bd735bf66eca0ad254ca81f',
    18,
    'WBNB',
    'WRAPPED BNB'
  ),
};
