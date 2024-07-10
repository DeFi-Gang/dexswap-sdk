import JSBI from 'jsbi';
import { InitialPoolFee } from "../types/InitialPoolFee";
export declare abstract class SwapMath {
    /**
     * Cannot be constructed.
     */
    static computeSwapStep(sqrtRatioCurrentX96: JSBI, sqrtRatioTargetX96: JSBI, liquidity: JSBI, amountRemaining: JSBI, feePips: InitialPoolFee): [JSBI, JSBI, JSBI, JSBI];
}
