import styled from "@emotion/styled";
import { DEFAULT_COLOR, Point } from "../types";

export interface ShapeProps {
  color?: string;
  selectedColor?: string;
  isSelected?: boolean;
  center: Point;
}

export const ShapeStyled = styled.div<ShapeProps>((props) => ({
  backgroundColor: props.color,
  border: props.isSelected ? `0.2rem solid ${props.selectedColor}` : undefined,
  zIndex: props.isSelected ? 2 : 1,
  position: "absolute",
  top: props.center.y,
  left: props.center.x
}));

ShapeStyled.defaultProps = {
  color: DEFAULT_COLOR,
  selectedColor: "violet",
};
