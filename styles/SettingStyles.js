import { StyleSheet } from "react-native";

var styles = StyleSheet.create({
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },

  gear: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 30,
    height: 50,
    width: 50
  },

  gearButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 30,
    height: 30
  },

  alertContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },

  alertText: {
    padding: 10
  },

  alert: {
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default styles;
