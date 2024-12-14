import {
  Container,
  Link as ChakraLink,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
const Homepage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // console.log("products", products);

  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient="linear(to-l, cyan.400, blue.500)"
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Product 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize={"x1"}
            fontWeight={"bold"}
            textAlign={"center"}
            color={"grey.500"}
          >
            No Product Found 😞
            <ChakraLink as={ReactRouterLink} to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create Product
              </Text>
            </ChakraLink>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Homepage;
