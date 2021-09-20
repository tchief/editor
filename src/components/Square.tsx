import styled from "styled-components/macro";
import { ShapeProps, ShapeStyled } from "./Shape";

interface SquareProps extends ShapeProps {
  side: number;
}

export const SquareComponent = styled(ShapeStyled)<SquareProps>((props) => ({
  width: props.side,
  height: props.side,
  borderRadius: "5%",
}));
