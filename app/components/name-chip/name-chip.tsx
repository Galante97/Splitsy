import * as React from "react"
import { View, ViewStyle, TouchableOpacity, TextStyle } from "react-native"
import { Text } from "../text/text"

export interface NameChipProps {
  initials?: string
  color?: string
  size?: number
  // TODO: add onClick() prop
}

const getRandomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16)
}

export function NameChip(props: NameChipProps) {
  const { initials = "JG", color = `#${getRandomColor()}`, size = 72 } = props

  const chipStyle: ViewStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
  }

  const initialsStyle: TextStyle = {
    color: "white",
    fontSize: size / 2.5,
    fontFamily: "InterSemiBold",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
  }

  return (
    <View>
      <TouchableOpacity style={chipStyle}>
        <Text style={initialsStyle}>{initials}</Text>
      </TouchableOpacity>
    </View>
  )
}
