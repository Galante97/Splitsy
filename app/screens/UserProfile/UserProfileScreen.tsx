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
import { SIGN_UP_CONTAINER } from "../../theme/component-styles/sign-up-options-styles"
import { NameChip } from "../../components/name-chip/name-chip"

export const UserProfileScreen: FC<StackScreenProps<NavigatorParamList, "UserProfile">> = observer(
  function UserProfileScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()

    return (
      <View testID="UserProfileScreen" style={FULL}>
        <Screen style={CONTAINER}>
          <Header
            headerText="User Profile"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
          <NameChip></NameChip>
        </Screen>
      </View>
    )
  },
)
