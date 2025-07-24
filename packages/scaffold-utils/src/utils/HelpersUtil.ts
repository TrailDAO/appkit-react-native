import type { Tokens } from '@traildao/appkit-scaffold-react-native';
import { ConstantsUtil } from '@traildao/appkit-common-react-native';

export const HelpersUtil = {
  getCaipTokens(tokens?: Tokens) {
    if (!tokens) {
      return undefined;
    }

    const caipTokens: Tokens = {};
    Object.entries(tokens).forEach(([id, token]) => {
      caipTokens[`${ConstantsUtil.EIP155}:${id}`] = token;
    });

    return caipTokens;
  }
};
