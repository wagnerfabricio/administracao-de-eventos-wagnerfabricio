// import { Button, Container, Grid } from "@mui/material";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router";
import ProductCard from "../../components/prodCard";
import { useConfraternizacao } from "../../providers/Confraternizacao";
import { ContainerBox } from "./styles";
// import { Content } from "./styles";

const Confraternizacao = () => {
  const {
    confraternizacaoList,
    removeFromConfraternizacao,
    clearConfraternizacao,
  } = useConfraternizacao();

  const history = useHistory();

  const showDrinks = confraternizacaoList.map((product) => (
    <Grid item xs={12} sm={4} md={3} key={product.id}>
      <ProductCard
        product={product}
        isRemovable
        handleButtonRemove={removeFromConfraternizacao}
      />
    </Grid>
  ));

  return confraternizacaoList.length > 0 ? (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item xs={3} p={2}>
          <Typography variant="h5" color="secondary">
            Confraternização
          </Typography>
        </Grid>
        <Grid item xs={3} p={2}>
          <Button
            color="secondary"
            variant="outlined"
            onClick={clearConfraternizacao}
          >
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
            Confraternização
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

export default Confraternizacao;
