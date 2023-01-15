import * as React from "react"
import { StyleProp, View, ViewStyle } from "react-native"
import { color, spacing } from "../../theme"

export interface dividerProps {
    isVertical?: boolean
    size?: string
    removeMargin?: boolean
}

export function Divider(props: dividerProps) {

    const { isVertical = false, size = 'auto', removeMargin = false } = props

    console.log(isVertical && !removeMargin)

    return (
        <View style={{
            marginHorizontal: isVertical || !removeMargin ? spacing[4] : 0,
            marginVertical: isVertical || removeMargin ? 0 : spacing[4],
            width: isVertical ? 1 : size,
            height: isVertical ? size : 1,
            backgroundColor: color.lightGrey
        }} />

    )
}
