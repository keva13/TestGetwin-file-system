import React, {useEffect, useState} from 'react';
import { getFolders } from '../services/folders.service';
import icon_folder from '../assets/images/icon-folder.svg';
import './FolderList.scss';
import { useNavigate } from 'react-router';

interface props {
    folders: {};
}
const FolderList: React.FC<props> = ({folders}) => {
    const history = useNavigate ();

    return (
        <div className='folderList'>
            {Object.keys(folders).map((folder)=>{
                return (
                    <div  onClick={()=>{history("/TestGetwin-file-system/"+folder)}} key={folder} className='fileOrFolder folder'>
                        <img src={icon_folder} alt="" />
                        <div className="name">{folder}</div>
                    </div>
                )
            })

            }
        </div>
    );
};

export default FolderList;