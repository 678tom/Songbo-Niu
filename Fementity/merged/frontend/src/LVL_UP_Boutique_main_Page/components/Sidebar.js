import Button from './Button';
const Sidebar = () => {
  return (
    <div className="Sidebar_component" style={{ background: '#FDF8F1' }}>
      <h2>Style</h2>
      <div className="Style_Sidebar">
        <Button title={'Object1'} />
        <Button title={'Object2'} />
        <Button title={'Object3'} />
      </div>
      <div className="Colour_Sidebar">
        <h2>Colour</h2>
        <Button title={'colour1'} />
        <Button title={'colour2'} />
        <Button title={'colour3'} />
      </div>
    </div>
  );
};

export default Sidebar;
