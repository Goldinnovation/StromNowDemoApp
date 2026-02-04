import { setNavLoadingAction } from "@/store/actions/navLoadingAction";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const useIndexNavHook = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const dispatch = useDispatch();
    const router = useRouter();
    const isNavigating = useRef(false);
   
    const handleLoginNavigation = () => {
        if (isNavigating.current) return;
        isNavigating.current = true;
        dispatch(setNavLoadingAction(true));
        router.replace('/(tabs)/Map');

        setTimeout(() => {
            isNavigating.current = false;
            dispatch(setNavLoadingAction(false));
        }, 3000);
    }

    return {
        handleLoginNavigation
    }
}

export default useIndexNavHook;