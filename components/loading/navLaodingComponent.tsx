import { RootState } from "@/store/store";
import { View } from "react-native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";

const NavLoadingComponent = () => {
  const isLoading = useSelector(
    (state: RootState) => state.navLoading.isLoading
  );
  // const [isLoading, setIsLoading] = useState(true);

  if (!isLoading) return null;

  return (
    <View
      testID="global-loading-screen"
      className="absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-gray-500 z-50 justify-center gap-y-4 items-center"
    >
      <Progress.CircleSnail size={60} animating={true} color="#48cd8c" />
    </View>
  );
};

export default NavLoadingComponent;
