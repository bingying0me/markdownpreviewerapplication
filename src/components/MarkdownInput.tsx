import "../style/markdowninput.css";

interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <div className="markdowninput-div">
      <textarea 
        className="markdowninput-textarea"
        value={value}
        onChange={onChange}
        placeholder="Type your Markdown here..."
      />
    </div>
  );
};

export default MarkdownInput;