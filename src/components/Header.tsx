import '../style/header.css';

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <div className="header-div">
      <h1 className="header-h1">Markdown Previewer</h1>
      <button className="header-button" onClick={onToggleGuide}>Toggle Guide</button>
    </div>
  );
};

export default Header;