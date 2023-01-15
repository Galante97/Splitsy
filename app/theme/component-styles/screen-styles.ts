import { TextStyle, ViewStyle } from "react-native"
import { color } from "../color"
import { spacing } from "../spacing"

export const FULL: ViewStyle = { flex: 1, backgroundColor: color.lightGrey }

export const CONTAINER: ViewStyle = {
  backgroundColor: color.background,
  paddingHorizontal: spacing[4],
}


