import React, {useEffect, useState} from 'react';
import { getFolders } from '../services/folders.service';
import icon_folder from '../assets/images/icon-folder.svg';
import './FileList.scss';
import { useNavigate, useParams } from 'react-router';
import { getFileIcon } from '../utils/getFileIcon';
import Filters from './Filters';
import { FileTypes_sort_field, sort_direction } from '../types/sortTypes';


interface fileType {
    name:string,
    type: string,
    size:number,
    atime:number,
    mtime:number,
    dev:number,
}
interface foldersType {
    [key: string]: fileType[];
}
interface props {
    folders: {};
}
const FilseList: React.FC<props> = ({folders}) => {
    const history = useNavigate ();
    let { folder } = useParams();
    let [files, setFiles] = useState<fileType[]>()
    let [sortDirection, setDirection] = useState(sort_direction.ASC)
    let [sortField, setField] = useState(FileTypes_sort_field.NAME)

    
    useEffect(()=>{
        if (folders[folder as keyof typeof folders]) {
            let secfiles = folders[folder as keyof typeof folders]
            let sortedFiles = sortFiles(secfiles, sortField, sortDirection)
            setFiles(sortedFiles.slice())
        }
    },[folders,sortField,sortDirection])

    function sortFiles (files:[], key:keyof fileType, direction:string) {
        if (direction == sort_direction.ASC) {
            return files.sort((a, b) => (a[key] > b[key]? 1 : -1 ))
        } else {
            return files.sort((a, b) => (a[key] < b[key]? 1 : -1 ))
        }
    }

    return (
        <div className='fileList'>
            <div className='flex'>
                <button onClick={()=>{history(-1)}} className='buttonBack'>&#10094; Back</button>
                <Filters 
                        field = {sortField} 
                        direction = {sortDirection} 
                        fieldCallback = {setField} 
                        directionCallback = {setDirection}/>
            </div>
            <div className='folderList'>
                {files?.map((file:fileType)=>{
                    return (
                        <div key={file.name} className='fileOrFolder folder'>
                            <img src={getFileIcon(file.type)} alt="" />
                            <div className="name">{file.name}</div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    );
};

export default FilseList;