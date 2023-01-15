import { ColorValue, StyleProp, ViewStyle } from "react-native"

export interface IconProps {
  /**
   * The name of the icon
   */
  name: string

  /**
   * size of icon
   */
  size?: number

  /**
   * color of icon
   */
  color?: ColorValue

  /**
   * Style overrides for the icon container
   */

  containerStyle?: StyleProp<ViewStyle>

  onPress?: () => void
}
