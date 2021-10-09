import { useEffect } from "react";
import { useCommon } from "./store/common/useCommon";

import { ReactComponent as IconFolder } from "./assets/icons/folder.svg";
import { ReactComponent as IconZip } from "./assets/icons/zip.svg";
import { ReactComponent as IconJpg } from "./assets/icons/jpg.svg";
import { ReactComponent as IconEpub } from "./assets/icons/epub.svg";

import styles from "./App.module.scss";
import "./index.css";

interface IChildren {
  id: number;
  title: string;
  children: IChildren[];
}

function App() {
  const { content, setContent, deleteContent } = useCommon();

  const handleToggleChildren = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    dirId: number
  ) => {
    e.stopPropagation();
    let { dataset } = e.target as HTMLElement;
    if (dataset.state === "close") {
      setContent(dirId);
      dataset.state = "open";
    } else if (dataset.state === "open") {
      deleteContent(dirId);
      dataset.state = "close";
    }
  };

  const choiseImg = (format: string) => {
    switch (format) {
      case "zip":
        return <IconZip className={styles.icon} />;
      case "jpg":
        return <IconJpg className={styles.icon} />;
      case "epub":
        return <IconEpub className={styles.icon} />;
      default:
        return <IconFolder className={styles.icon} />;
    }
  };

  const mapChildren = (parent: IChildren[]) =>
    parent.map((child: IChildren) => {
      const { id, title, children } = child;
      return (
        <div key={id} className={styles.box}>
          <div
            data-state={children ? "close" : "empty"}
            className={styles.child}
            onClick={(e) => {
              children && handleToggleChildren(e, id);
            }}
          >
            {choiseImg(title.split(".")[1] || "folder")}
            {title}
          </div>
          {children?.length > 0 ? mapChildren(children) : null}
        </div>
      );
    });

  useEffect(() => {
    setContent(0);
  }, []); // eslint-disable-line

  const { children } = content;

  return (
    <div className={styles.app}>
      <div className={styles.mainBox}>{children && mapChildren(children)}</div>
    </div>
  );
}

export default App;
