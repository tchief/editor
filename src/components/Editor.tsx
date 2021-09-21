import { useState } from "react";
import styled from "@emotion/styled";
import {
  Circle,
  Shape,
  ShapeId,
  Square,
  getRandomColor,
  getRandomPosition,
  getRandomSize,
  DEFAULT_COLOR,
  SQUARE_SIDE,
  CIRCLE_RADIUS,
} from "./../types";
import Board from "./Board";
import { TwitterPicker } from "react-color";
import { useHotkeys } from "react-hotkeys-hook";
import { Toggle } from "./Toggle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

const ColumnContainer = styled(Container)`
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

const Button = styled.button`
  margin: 0.25em;
  padding: 0.5em;
  flex: 1;
  min-width: 10em;
`;

const Switch = styled(Toggle)`
  margin: 2em;
  padding: 0.5em;
`;

export const Editor = () => {
  const [items, setItems] = useState<Shape[]>([]);
  const [selectedId, setSelectedId] = useState<ShapeId>();
  const [color, setColor] = useState<string>(DEFAULT_COLOR);
  const [isRandomSize, setIsRandomSize] = useState(false);
  const [isRandomColor, setIsRandomColor] = useState(false);

  const handleAdd = (shape: Shape) => setItems([shape, ...items]);
  const handleRemove = () => selectedId && setItems(items.filter((i) => i.id !== selectedId));

  const cleanScreen = () => setItems([]);
  const addSquare = () => handleAdd(new Square(getColor(), getRandomPosition(), randomSize(SQUARE_SIDE)));
  const addCircle = () => handleAdd(new Circle(getColor(), getRandomPosition(), randomSize(CIRCLE_RADIUS)));
  const getColor = () => {
    if (isRandomColor) setColor(getRandomColor());
    return color;
  };
  const randomSize = (size: number) => (isRandomSize ? getRandomSize() : size);
  const toggleRandomSize = () => setIsRandomSize(!isRandomSize);
  const toggleRandomColor = () => setIsRandomColor(!isRandomColor);

  const deps = [color, items, isRandomSize, isRandomColor];
  useHotkeys("s", addSquare, deps);
  useHotkeys("c", addCircle, deps);
  useHotkeys("q", toggleRandomColor, deps);
  useHotkeys("w", toggleRandomSize, deps);
  useHotkeys("z", cleanScreen, deps);
  useHotkeys("x", () => { handleRemove(); }, deps);

  return (
    <>
      <Container>
        <ColumnContainer>
          <Button onClick={addSquare}>Add square</Button>
          <Button onClick={addCircle}>Add circle</Button>
        </ColumnContainer>
        <ColumnContainer>
          <Button onClick={handleRemove}>Remove node</Button>
          <Button onClick={cleanScreen}>Remove all</Button>
        </ColumnContainer>
        <TwitterPicker color={color} onChangeComplete={(c) => setColor(c.hex)} />
        <ColumnContainer>
          <Switch checked={isRandomSize} onChange={toggleRandomSize} label="Random size" />
          <Switch checked={isRandomColor} onChange={toggleRandomColor} label="Random color" />
        </ColumnContainer>
      </Container>
      <Board items={items} selectedId={selectedId} toggleSelect={setSelectedId}></Board>
    </>
  );
};
