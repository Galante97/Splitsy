import { TextStyle } from "react-native"
import { spacing } from "../spacing"

export const BOLD: TextStyle = { fontWeight: "bold" }
export const DEMO_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}

export const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[3],
  paddingHorizontal: 0,
}
export const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
export const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}