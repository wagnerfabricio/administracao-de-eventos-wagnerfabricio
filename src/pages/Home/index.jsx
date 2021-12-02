import { Button, Container, Grid } from "@mui/material";
import ProductCard from "../../components/prodCard";
import { useDrinks } from "../../providers/Drinks";
import { Content } from "./styles";

const Home = () => {
  const { drinks, page, nextPage, previousPage } = useDrinks();

  const showDrinks = drinks.map((product) => (
    <Grid item xs={12} sm={4} md={3} key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 4, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        p={2}
      >
        {showDrinks}
      </Grid>
      <Content>
        {page > 1 && (
          <Button color="secondary" onClick={() => previousPage(1)}>
            Voltar
          </Button>
        )}
        <Button color="secondary" onClick={() => nextPage(1)}>
          Avançar
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
