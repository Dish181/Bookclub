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
  commentInput: {
    height: 200,
    borderRadius: 5,
    width: 300,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 10,
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

  // Update profile

  updateProfileContainer: {
    flex: 1,
    paddingBottom: 60,
    margin: 20,
    flexDirection: "column",
  },

  updateProfileHeader: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  favBook: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  inputProfileForm: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  updateFavButton: {
    marginTop: 10,
  },
  addBook: {
    marginTop: 10,
    backgroundColor: "#138496",
    border: "1px solid #138496",
    padding: 6,
    borderRadius: 6,
    width: 100,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
  updateProfileBtn: {
    marginTop: 10,
    backgroundColor: "#5EC271",
    border: "1px solid #5EC271",
    borderRadius: 10,
    width: 140,
    padding: 10,
    color: "#fff",
    fontSize: 18,
  },
  backProfileBtn: {
    backgroundColor: "grey",
    padding: 10,
    width: 140,
    borderRadius: 10,
    fontSize: 16,
    color: "#fff",
  },
  updateProfileBtnWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
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
  button: {
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#F7C17A",
    borderRadius: 10,
  },
  buttonText: {
    color: "#424B54",
    
  },
});
