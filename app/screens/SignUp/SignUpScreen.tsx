import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Header, Screen,  } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"
import { HEADER, HEADER_TITLE } from "../../theme/component-styles/header-style"
import { CONTAINER, FULL } from "../../theme/component-styles/screen-styles"
import { SIGN_UP_CONTAINER } from "../../theme/component-styles/sign-up-options-styles"

export const SignUpScreen: FC<StackScreenProps<NavigatorParamList, "signUp">> = observer(
  function SignUpScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()

    return (
      <View testID="SignUpScreen" style={FULL}>
        <Screen style={CONTAINER}>
          <Header
            headerText="Sign Up"
            leftIcon="back"
            onLeftPress={goBack}
            style={HEADER}
            titleStyle={HEADER_TITLE}
          />
        </Screen>
        <View style={SIGN_UP_CONTAINER}>
          <Button preset="secondary" text="Skip for now" />
          <Button text="Sign Up With Google" />
          <Button text="Sign Up With Apple" />
        </View>
      </View>
    )
  },
)
