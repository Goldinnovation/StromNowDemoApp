import { useRouter } from 'expo-router';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";


export function useIndexNavHook() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();



  const handleLoginNavigation = () => {
  };

  return {
    handleLoginNavigation,
  };
}
