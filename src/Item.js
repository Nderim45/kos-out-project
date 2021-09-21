import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Item({ title, description, image } = this.props) {
  return (
    <div class="div-1">
      <div class="div-2">
        <img class='img' src={image} alt='logo' />
      </div>
      <div class="div-3">
        <Typography variant="h5" style={{ marginBottom: 10 }}>
          {title}
        </Typography>
        <Typography color="#808080">{description}</Typography>
      </div>
    </div>
  );
}
