import { Options as ParserOptions } from 'json-schema-ref-parser';
import { PushStateBehavior } from '../types';

export interface ConfigInterface {
  schemaID?: string;
  show?: ShowConfig;
  expand?: ExpandConfig;
  showErrors?: boolean;
  parserOptions?: ParserOptions;
  pushStateBehavior?: PushStateBehavior;
}

export interface ShowConfig {
  info?: boolean;
  channels?: boolean;
  servers?: boolean;
  messages?: boolean;
  schemas?: boolean;
}

export interface ExpandNestedConfig {
  root?: boolean;
  elements?: boolean;
}

export interface ExpandConfig {
  channels?: ExpandNestedConfig;
  servers?: ExpandNestedConfig;
  messages?: ExpandNestedConfig;
  schemas?: ExpandNestedConfig;
}
