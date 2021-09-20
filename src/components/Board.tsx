import styled from "@emotion/styled";
import { Shape, ShapeId } from "../types";
import { ShapeFactory } from "./ShapeFactory";

const Container = styled.div`
  height: 80vh;
`;

interface BoardProps {
  items: Shape[];
  selectedId: ShapeId | undefined;
  toggleSelect: (id: ShapeId | undefined) => void;
}

const Board = ({ items, selectedId, toggleSelect }: BoardProps) => {
  return (
    <Container onMouseDown={(e) => toggleSelect(undefined)}>
      {items.map((item) => {
        return (
          <ShapeFactory
            key={item.id}
            item={item}
            isSelected={item.id === selectedId}
            toggleSelect={toggleSelect}
            {...item}
          />
        );
      })}
    </Container>
  );
};

export default Board;
