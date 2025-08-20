import { useState } from "react";
import { folderList } from "./FolderList";
import "./index.css";
const FolderStructure = ({node}) => {
  const [open, setOpen] = useState<boolean>(false);

  const isFolder = node.type === "folder";
  const hasChildren = isFolder && node.children && node.children.length > 0;

  return (
    <div style={{marginTop:'2em'}} >
      {isFolder ? (
        <>
          <span className="folder" onClick={()=>setOpen((o)=>!o)}>{node.name}</span>
          {open && hasChildren && (
            <div style={{marginLeft:'2em',marginTop:'2em'}}>
              {node.children.map((item) => <FolderStructure node={item} />
              )}
            </div>
          )}
        </>
      ) : (
        <span className="folder">{node.name}</span>
      )}
    </div>
  );
};

const FolderTree = () => {
  return (
    <div>
      {folderList.map((item) => (
        <FolderStructure key={item.id} node={item} />
      ))}
    </div>
  );
};

export default FolderTree;
