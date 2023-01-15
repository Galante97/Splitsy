import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.primaryText,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  default: BASE,
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,
  header: { ...BASE, fontSize: 24, fontWeight: "bold" } as TextStyle,
  fieldLabel: { ...BASE, fontSize: 13, color: color.primaryText } as TextStyle,
  secondary: { ...BASE, fontSize: 9, color: color.primaryText } as TextStyle,
  medium: {...BASE, fontSize: 20,  fontWeight: "500" } as TextStyle,
  smallMedium: {...BASE, fontSize: 18,  fontWeight: "500" } as TextStyle,
  small: {...BASE, fontSize: 15,  fontWeight: "500" } as TextStyle,
  smaller: {...BASE, fontSize: 14,  fontWeight: "500" } as TextStyle,
}

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets
