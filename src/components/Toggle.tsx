export const Toggle = (props: { checked: boolean; label: string; onChange: (event: any) => void }) => {
  return (
    <label>
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      {props.label}
    </label>
  );
};
