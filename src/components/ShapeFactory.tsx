import { useDrag } from "../hooks/useDrag";
import { Shape, Square, Circle, ShapeId } from "../types";
import { ShapeProps } from "./Shape";
import { SquareComponent } from "./Square";
import { CircleComponent } from "./Circle";

const NotSupportedComponent = <div>This shape is not yet supported.</div>;

export interface ShapeFactoryProps {
  id: ShapeId;
  toggleSelect: (id: ShapeId) => void;
  item: Shape;
}

export const ShapeFactory = (props: ShapeProps & ShapeFactoryProps) => {
  const { ref } = useDrag();
  const handleMouseDown = (e: any) => {
    props.toggleSelect(props.id);
    e.stopPropagation();
  };

  switch (true) {
    case props.item instanceof Square:
      return <SquareComponent ref={ref} onMouseDown={handleMouseDown} {...(props.item as Square)} {...props} />;
    case props.item instanceof Circle:
      return <CircleComponent ref={ref} onMouseDown={handleMouseDown} {...(props.item as Circle)} {...props} />;
    default:
      return NotSupportedComponent;
  }
};
