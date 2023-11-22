import '../style/markdownguide.css';

const MarkdownGuide: React.FC = () => {
  return (
    <div className="guidecontainer-div">
      <h2>Markdown Syntax Guide</h2>
      <ul className="guidecontainer-ul">
        <li className="guidecontainer-li">
          <code># Heading 1</code>
        </li>
        <li className="guidecontainer-li">
          <code>## Heading 2</code>
        </li>
        <li className="guidecontainer-li">
          <code>### Heading 3</code>
        </li>
        <li className="guidecontainer-li">
          <code>*Italic*</code> or <code>_Italic_</code>
        </li>
        <li className="guidecontainer-li">
          <code>**Bold**</code> or <code>__Bold__</code>
        </li>
        <li className="guidecontainer-li">
          <code>[Link](http://a.com)</code>
        </li>
        <li className="guidecontainer-li">
          <code>`inline code`</code>
        </li>
        <li className="guidecontainer-li">
          <code>```block code```</code>
        </li>
        <li className="guidecontainer-li">
          <code>- list item</code>
        </li>
      </ul>
    </div>
  );
};

export default MarkdownGuide;