import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xLarge,
    width: '90%',
    height:200,
    alignSelf: 'center',
    shadowColor: COLORS.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  logoContainer: {
    width: 40,  // Reduced width
    height: 40, // Reduced height
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium, // Smaller radius for squarer look
    marginBottom: SIZES.small, // Reduced margin
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  logoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft:325
  },
  contentContainer: {
    alignItems: "center",
    width: '100%',
    paddingHorizontal: SIZES.small, // Added horizontal padding
  },
  jobTitle: {
    fontSize: SIZES.large, // Slightly reduced
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: "center",
    marginBottom: SIZES.small / 2, // Reduced margin
    lineHeight: 24, // Reduced line height
  },
  jobDetailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: SIZES.small / 2, // Reduced margin
  },
  jobDetailBadge: {
    backgroundColor: COLORS.lightPrimary,
    paddingVertical: 3, // Reduced padding
    paddingHorizontal: SIZES.small - 2, // Reduced padding
    borderRadius: SIZES.large,
    marginHorizontal: 3, // Reduced margin
    marginBottom: SIZES.small / 3, // Reduced margin
  },
  jobDetailText: {
    fontSize: SIZES.small - 1, // Slightly smaller
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  companyInfoContainer: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: SIZES.small / 2, // Reduced margin
    flexWrap: 'wrap',
  },
  companyName: {
    fontSize: SIZES.medium - 2, // Slightly smaller
    color: COLORS.gray,
    fontFamily: FONT.semiBold,
    maxWidth: '100%',
    textAlign: 'center',
    marginBottom: 2, // Minimal margin
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: 'right',
    alignItems: "right",
    width: '20%',
  },
  locationImage: {
    width: 12, // Smaller icon
    height: 12,
    tintColor: COLORS.gray,
    marginLeft:700
  },
  locationName: {
    fontSize: SIZES.medium - 2, // Slightly smaller
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft:700
  },
});

export default styles;