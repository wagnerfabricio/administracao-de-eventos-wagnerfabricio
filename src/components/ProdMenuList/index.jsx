import { useEffect, useRef, useState } from "react";
import { useCasamento } from "../../providers/Casamento";
import { useConfraternizacao } from "../../providers/Confraternizacao";
import { useFormatura } from "../../providers/Formatura";
import AddBoxIcon from "@mui/icons-material/AddBox";

//STYLE COMPONENTS
import {
  Button,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  ClickAwayListener,
} from "@mui/material";

const ProdMenuList = ({ product, ...rest }) => {
  const { addToFormatura } = useFormatura();
  const { addToCasamento } = useCasamento();
  const { addToConfraternizacao } = useConfraternizacao();

  const handleFormaturaNav = () => {
    addToFormatura(product);
    setOpenCardMenu(false);
  };

  const handleCasamentoNav = () => {
    addToCasamento(product);
    setOpenCardMenu(false);
  };

  const handleConfraternizacaoNav = () => {
    addToConfraternizacao(product);
    setOpenCardMenu(false);
  };

  //mui menuList
  const [openCardMenu, setOpenCardMenu] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpenCardMenu((prevOpen) => !prevOpen);
  };

  const handleCloseNav = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenCardMenu(false);
  };

  const prevOpen = useRef(openCardMenu);

  useEffect(() => {
    if (prevOpen.current === true && openCardMenu === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openCardMenu;
  }, [openCardMenu]);

  //mui menuList

  return (
    <Stack direction="row" spacing={2} {...rest}>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={openCardMenu ? "composition-menu" : undefined}
        aria-expanded={openCardMenu ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <AddBoxIcon fontSize="large" color="secondary" />
      </Button>
      <Popper
        open={openCardMenu}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        style={{ margin: 0 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseNav}>
                <MenuList
                  autoFocusItem={openCardMenu}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  <MenuItem onClick={handleFormaturaNav}>Formatura</MenuItem>
                  <MenuItem onClick={handleCasamentoNav}>Casamento</MenuItem>
                  <MenuItem onClick={handleConfraternizacaoNav}>
                    Confraternização
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

export default ProdMenuList;
