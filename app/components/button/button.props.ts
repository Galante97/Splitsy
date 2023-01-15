import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"
import { ButtonPresetNames } from "./button.presets"
import { TxKeyPath } from "../../i18n"

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  preset?: ButtonPresetNames
  children?: React.ReactNode
}
