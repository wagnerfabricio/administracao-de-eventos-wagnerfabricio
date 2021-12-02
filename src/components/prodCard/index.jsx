/* --------------------------- SYSTEM/REACT/REDUX --------------------------- */
// import { useDispatch } from "react-redux";
import { useState } from "react";

/* ----------------------------- PROJECT IMPORTS ---------------------------- */

/* --------------------------------- STYLES --------------------------------- */
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Popover,
} from "@mui/material";

import "./styles.css";
import ProdMenuList from "../ProdMenuList";

const cardStyle = {
  height: "100%",
  marginBottom: "20px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const ProductCard = ({ product, handleButtonRemove, isRemovable = false }) => {
  const { image_url: img, name, first_brewed, description, volume } = product;

  //@mui popover
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = !!anchorEl;
  const id = open ? "simple-popover" : undefined;
  //@mui popover

  return (
    <>
      <Card sx={{ maxWidth: 345 }} elevation={3} style={cardStyle}>
        <CardActionArea aria-describedby={id} onClick={handleClick}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt={name}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-description"
            >
              {description}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-description"
            >
              <em>First brewed: {first_brewed}</em>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-description"
            >
              <strong>Volume: {volume.value} liters.</strong>
            </Typography>
          </CardContent>
        </CardActionArea>

        {isRemovable ? (
          <Button color="secondary" onClick={() => handleButtonRemove(product)}>
            Remover
          </Button>
        ) : (
          <ProdMenuList product={product} />
        )}
      </Card>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="popover">
          <CardMedia
            component="img"
            image={img}
            alt={name}
            height="350px"
            style={{ marginRight: "10px" }}
          />
          <div>
            <Typography
              variant="h6"
              color="text.secondary"
              className="card-description"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              maxWidth="400px"
            >
              {description}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-description"
            >
              <em>First brewed: {first_brewed}</em>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-description"
            >
              <strong>Volume: {volume.value} liters.</strong>
            </Typography>
          </div>
        </div>
        {isRemovable ? (
          <Button color="secondary" onClick={() => handleButtonRemove(product)}>
            Remover
          </Button>
        ) : (
          <ProdMenuList product={product} />
        )}
      </Popover>
    </>
  );
};

export default ProductCard;
