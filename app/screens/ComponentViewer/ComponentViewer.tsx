/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Header, Screen } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"
import { HEADER, HEADER_TITLE } from "../../theme/component-styles/header-style"
import { CONTAINER, FULL } from "../../theme/component-styles/screen-styles"
import { NameChip } from "../../components/name-chip/name-chip"

export const ComponentViewerScreen: FC<StackScreenProps<NavigatorParamList, "ComponentViewer">> =
  observer(function ComponentViewerScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()

    return (
      <View testID="ComponentViewerScreen" style={FULL}>
        <Screen style={CONTAINER}>
          <Header
            headerText="Components"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 20
            }}
          >
            <NameChip initials="AM" size={45} />
            <NameChip initials="JG" size={55} />
            <NameChip initials="CV" size={65} />
            <NameChip initials="RH" size={75}/>
          </View>
        </Screen>
      </View>
    )
  })
