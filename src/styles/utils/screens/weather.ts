import { StyleSheet } from "react-native";

export const weatherStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#50bff2",
    shadowOffset: {
      width: -3,
      height: -0.1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    width: 50,
    height: 50,
    borderRadius: 99,
    backgroundColor: "black",
    borderWidth: 0.4,
    borderColor: "#50bff2",
  },

  buttonShadow: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 25,
  },
  container: {
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  gradientShadow: {
    width: 220,
    height: 120,
    borderRadius: 12,

    position: "absolute",
  },
  box: {
    width: 220,
    height: 120,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  lottieShadow: {
    shadowColor: "#a3a3a3",
    shadowOffset: {
      width: 10,
      height: 100,
    },

    shadowOpacity: 4,
    shadowRadius: 100,
  },
  card: {
    shadowColor: "#a3a3a3",
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  chevron: {
    shadowColor: "#50bff2",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.98,
    shadowRadius: 1.25,
    elevation: 2,
  },
});
