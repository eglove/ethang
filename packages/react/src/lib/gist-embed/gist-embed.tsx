import { useEffect, useRef } from 'react';

interface ReactGistProperties {
  file?: string;
  id: string;
}

export const GistEmbed = ({ id, file }: ReactGistProperties): JSX.Element => {
  const iframeNode = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const defineUrl = (): string => {
      const fileArgument = typeof file === 'undefined' ? '' : `?file=${file}`;
      return `https://gist.github.com/${id}.js${fileArgument}`;
    };

    if (iframeNode?.current !== null && iframeNode.current.contentDocument) {
      const document = iframeNode.current.contentDocument;

      const gistLink = defineUrl();
      const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
      const styles = '<style>*{font-size:14px;}</style>';
      const elementId =
        typeof file === 'undefined' ? `gist-${id}` : `gist-${id}-${file}`;
      const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
      const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;

      document.open();
      document.writeln(iframeHtml);
      document.close();
    }
  }, [file, id]);

  return (
    // eslint-disable-next-line react/iframe-missing-sandbox
    <iframe
      id={typeof file === 'undefined' ? `gist-${id}` : `gist-${id}-${file}`}
      ref={iframeNode}
      style={{ border: 'none' }}
      title="Gist"
      width="100%"
    />
  );
};
