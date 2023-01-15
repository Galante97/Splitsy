import * as React from "react"
import { useState } from "react"
import { View, ImageStyle, StyleProp, ViewStyle, TouchableOpacity, TextStyle } from "react-native"
import { Text } from "../text/text"

export interface NameChipProps {
  name: string
  color?: string
  size?: number | string
  autoSize?: boolean
}

const chipStyle: ViewStyle = {
  width: 50,
  height: 50,
  borderRadius: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "black",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.4,
  shadowRadius: 3,
}

const initialsStyle: TextStyle = {
  color: "white",
  fontSize: 25,
  textShadowColor: 'rgba(0, 0, 0, 0.4)',
  textShadowOffset: { width: 0, height: 3 },
  textShadowRadius: 7
}

export function NameChip(props: NameChipProps) {
  var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")

  const { name, color, size = 50 } = props
  const intials = name.split(" ").map((n) => n[0]).join("");
  const [chipSize, setChipSize] = useState(0)


  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setChipSize(width);
    console.log('chipSize', chipSize)
  }

  return (
    <TouchableOpacity onLayout={onLayout} style={{ ...chipStyle, width: size, height: size, backgroundColor: color ?? randomColor, borderRadius: 10000 }}>
      <Text style={{ ...initialsStyle, fontSize: chipSize / 2.5, fontWeight: "600" }}>{intials}</Text>
    </TouchableOpacity>
  )
}
