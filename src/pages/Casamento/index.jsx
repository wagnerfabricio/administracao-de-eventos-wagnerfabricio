// import { Button, Container, Grid } from "@mui/material";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "../../components/prodCard";
import { useCasamento } from "../../providers/Casamento";
// import { Content } from "./styles";

const Casamento = () => {
  const { casamentoList, removeFromCasamento, cleanCasamento } = useCasamento();

  const showDrinks = casamentoList.map((product) => (
    <Grid item xs={12} sm={4} md={3} key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ));

  return (
    <Container>
      <Grid item xs={12} p={2}>
        <Typography variant="h5" color="secondary">
          Casamento
        </Typography>
      </Grid>
      <Grid
        container
        spacing={{ xs: 4, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        p={2}
      >
        {showDrinks}
      </Grid>
    </Container>
  );
};

export default Casamento;
