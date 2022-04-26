import icon_file from '../assets/images/icon-file.svg';
import icon_image_file from '../assets/images/icon-image-file.svg';
import icon_pdf_file from '../assets/images/icon-pdf-file.svg';
import icon_empty_file from '../assets/images/icon-empty-file.svg';
import icon_sheets_file from '../assets/images/icon-sheets-file.svg';
import icon_msword_file from '../assets/images/icon-msword-file.svg';


function getFileIcon (type:string) {
    console.log(type)
    switch (type) {
        case "image/png":
            return icon_image_file;
            break;
        case "image/jpeg":
            return icon_image_file;
            break;
        case "application/pdf":
            return icon_pdf_file;
            break;
        case "application/pdf":
            return icon_image_file;
            break;
        case "inode/x-empty":
            return icon_empty_file;
            break;
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            return icon_sheets_file;
            break;
        case "application/msword":
            return icon_msword_file;
            break;

        default:
            return icon_file;
            break;
    }
}
export { getFileIcon };
