import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { Button, Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { useNavigation } from "@react-navigation/native"
import { CONTAINER, FULL } from "../../theme/component-styles/screen-styles"
import { NameChip } from "../../components/name-chip/name-chip"
import { HEADER } from "../../theme/component-styles/header-style"
import { spacing } from "../../theme"
import { Divider } from "../../components/divider/divider"
import { TransactionListItem } from "../../components/TransactionListItem/TransactionListItem"
import { useTransactionsByUserKeyQuery } from "../../services/hooks/useQueries"




export const UserProfileScreen: FC<StackScreenProps<NavigatorParamList, "UserProfile">> = observer(
  function UserProfileScreen() {

    // Pull in navigation via hook
    const navigation = useNavigation()
    const goBack = () => navigation.goBack()


    // TODO: Mock Query Data
    const username = "Galante97"
    const name = "James Galante"
    const freindCount = "105"
    const totalBillsSplit = "1595.19"

    const { data, isLoading, isSuccess, isError,  } = useTransactionsByUserKeyQuery("123412345145");
     console.log({ data });

    // TODO
    // if (isError) console.log('transactions fetch error');

    return (
      <View testID="UserProfileScreen" style={FULL}>
        <Screen style={CONTAINER}>
          <Header
            rightIcon="back"
            onRightPress={goBack}
            style={HEADER}
          // titleStyle={HEADER_TITLE}
          />
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: spacing[4] }}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
              <Text text={`@${username}`} preset="medium" />
              <Text text={name} preset="small" />
            </View>

            <Divider isVertical size="80%" />

            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: spacing[4] }}>
              <Text text={freindCount} preset="medium" />
              <Text text="Friends" preset="small" />
            </View>
            <NameChip name={name} size={75} />

          </View>
          <Divider />
          <Button text="Split New Bill" preset="primaryBlue" />
          <View style={{ display: 'flex', flexDirection: 'column', marginTop: spacing[3] }}>

            <Text text="Bills" preset="smallMedium" />
            <Divider />
          </View>
          <View>

            <FlatList
              data={isLoading ? [] : data.transactions}
              renderItem={({ item }) => <TransactionListItem transaction={item} />}
            />


          </View>
        </Screen>
      </View>
    )
  },
)
