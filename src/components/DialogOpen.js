import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

function DialogOpen(props) {
  const { title, content, openPopup, onClose, contentList } = props;
  return (
    <Dialog
    // sx={{ width: '100%', maxHeight: '100%' }}
    sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "800px",  // Set your width here
        },
      },
    }}
      PaperProps={{
        style: {
          backgroundColor: "#f4f7f9",
          boxShadow: "none",
          height: '350px',
        },
      }}
      open={openPopup}
      onClose={onClose}
    >
      <DialogTitle>
        <Typography variant="h6" style={{ color: "#00b894" }}>
          {title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'flex-start'}}>
        
        <div style={{color:'black'}}>{content}</div>
        
        <div style={{ padding: "0px 30px" }}>
          {contentList == undefined
            ? ""
            : contentList.map((list, id) => {
                return (
                  <div>
                    <ul>
                      <li key={id}>{list}</li>
                    </ul>
                  </div>
                );
              })}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogOpen;
