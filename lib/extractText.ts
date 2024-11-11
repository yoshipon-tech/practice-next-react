import { convert } from "html-to-text";

type ExtractTextProps = {
  html: string;
  length?: number;
  more?: string;
};

export function extranctText({
  html,
  length = 80,
  more = "...",
}: ExtractTextProps) {
  const text = convert(html, {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "a", options: { ignoreHref: true } },
    ],
  });
  return text.slice(0, length) + more;
}
