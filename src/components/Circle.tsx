import styled from "styled-components/macro";
import { ShapeProps, ShapeStyled } from "./Shape";

interface CircleProps extends ShapeProps {
  radius: number;
}

export const CircleComponent = styled(ShapeStyled)<CircleProps>((props) => ({
  width: props.radius * 2,
  height: props.radius * 2,
  borderRadius: "50%",
}));
