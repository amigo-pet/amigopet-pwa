n// import * as emotion from "@emotion/react";
import { AmigoPetTheme } from "../global/theme";

// declare namespace emotion {
declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AmigoPetTheme {}
}
// }
