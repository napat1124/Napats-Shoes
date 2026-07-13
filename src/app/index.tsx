import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shoe Store</Text>

      <View style={styles.card}>
        <Image
          source={require("../../assets/images/Nikke.jpg")}
          style={styles.image}
        />
        <Text style={styles.name}>Nike Air Force 1</Text>
        <Text style={styles.price}>$120</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../../assets/images/Samba.jpg")}
          style={styles.image}
        />
        <Text style={styles.name}>Adidas Samba</Text>
        <Text style={styles.price}>$110</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../../assets/images/Nb550.jpg")}
          style={styles.image}
        />
        <Text style={styles.name}>New Balance 550</Text>
        <Text style={styles.price}>$130</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 20,
  backgroundColor: "#f5f5f5",
},
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
  width: 280,
  backgroundColor: "#f5f5f5",
  padding: 15,
  marginBottom: 20,
  borderRadius: 15,
  alignSelf: "center",
  alignItems: "center",

  elevation: 4,

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
},
 image: {
  width: 220,
  height: 150,
  borderRadius: 10,
  resizeMode: "cover",
},
  name: {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 10,
  marginBottom: 5,
},
  price: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#0a8f08",
},
});