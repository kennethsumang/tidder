import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  content: string;
  className: string;
}

/**
 * PostBodyMarkdown component
 * @author Kenneth Sumang
 */
export default function PostBodyMarkdown({ content, className }: Props) {
  // https://github.com/nethzsumang/tidder/issues/1
  const formattedContent = content.replaceAll('&amp;#x200B;', '');

  return (
    <Markdown remarkPlugins={[remarkGfm]} className={`post-markdown-cont ${className}`}>
      { formattedContent }
    </Markdown>
  )
}