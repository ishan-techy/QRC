import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    input: {
        display: 'none',
    },
}));

const UploadMediaPage = () => {
    const classes = useStyles();
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const newFiles = Array.from(event.target.files);
        setFiles([...files, ...newFiles]);
    };

    const handleDelete = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="upload-file"
                multiple
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor="upload-file">
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>
            {files.length > 0 && (
                <div>
                    <Typography variant="h6">Uploaded Files:</Typography>
                    <List>
                        {files.map((file, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={file.name} />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" onClick={() => handleDelete(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            )}
        </div>
    );
};

export default UploadMediaPage;
