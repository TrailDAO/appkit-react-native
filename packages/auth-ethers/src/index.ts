import { AppKitFrameProvider, type AppKitFrameTypes } from '@traildao/appkit-wallet-react-native';
import { ConstantsUtil, PresetsUtil } from '@traildao/appkit-common-react-native';
interface AuthProviderProps {
  projectId: string;
  metadata: AppKitFrameTypes.Metadata;
}

export class AuthProvider extends AppKitFrameProvider {
  readonly id = ConstantsUtil.AUTH_CONNECTOR_ID;
  readonly name = PresetsUtil.ConnectorNamesMap[ConstantsUtil.AUTH_CONNECTOR_ID]!;

  constructor(props: AuthProviderProps) {
    super(props.projectId, props.metadata);
  }
}
