// import { Button, Container, Grid } from "@mui/material";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router";
import ProductCard from "../../components/prodCard";
import { useCasamento } from "../../providers/Casamento";
import { ContainerBox } from "./styles";
// import { Content } from "./styles";

const Casamento = () => {
  const { casamentoList, removeFromCasamento, clearCasamento } = useCasamento();
  const history = useHistory();

  const showDrinks = casamentoList.map((product) => (
    <Grid item xs={12} sm={4} md={3} key={product.id}>
      <ProductCard
        product={product}
        isRemovable
        handleButtonRemove={removeFromCasamento}
      />
    </Grid>
  ));

  return casamentoList.length > 0 ? (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item xs={3} p={2}>
          <Typography variant="h5" color="secondary">
            Casamento
          </Typography>
        </Grid>
        <Grid item xs={3} p={2}>
          <Button color="secondary" variant="outlined" onClick={clearCasamento}>
            Limpar Lista
          </Button>
        </Grid>
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
  ) : (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item xs={3} p={2}>
          <Typography variant="h5" color="secondary">
            Casamento
          </Typography>
        </Grid>
        <Grid item xs={3} p={2}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => history.push("/")}
          >
            Voltar para Home
          </Button>
        </Grid>
      </Grid>
      <ContainerBox>
        <Typography variant="h5" color="secondary">
          Sua lista está vazia :'(...
        </Typography>
      </ContainerBox>
    </Container>
  );
};

export default Casamento;
