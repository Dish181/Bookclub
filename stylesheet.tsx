import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  book: {
    borderWidth: 5,
    borderBlockColor: "blue",
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  bookContainer: {
    flexDirection: "column",
    borderWidth: 1,
    flex: 1,
    justifyContent: "space-evenly",
  },
  input: {
    height: 48,
    borderRadius: 5,
    width: 300,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  basicImage: {
    height: 400,
    width: 400,
  },
  basicContainer: {
    flex: 1,
    padding: 10,
  },
  giantText: {
    fontSize: 100,
  },
  searchResultsContainer: {
    height: 300,
    borderRadius: 5,
    borderBottomColor: "black",
    borderWidth: 1,
    margin: 4,
  },
  searchResults: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    paddingBottom: 4,
    paddingTop: 4,
  },
  searchResultText: {
    flex: 1,
    gap: 5,
    flexBasis: 70,
  },
  searchAddBookButton: {
    flex: 1,
  },
});
