import { ViewStyle, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 12,
  justifyContent: "center",
  alignItems: "center",
  margin: spacing[2],
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW, backgroundColor: color.palette.black } as ViewStyle,
  secondary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.white,
    borderColor: color.palette.grey80,
    borderWidth: 1,
  } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: {
    ...BASE_TEXT,
    fontSize: 15,
    color: color.palette.white,
    fontFamily: typography.primary,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[2],
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.text,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
  secondary: {
    ...BASE_TEXT,
    fontSize: 15,
    color: color.palette.black,
    fontFamily: typography.primary,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[2],
  },
}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
