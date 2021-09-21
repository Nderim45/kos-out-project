import { Button, Card, Typography } from "@mui/material";
import { color } from "@mui/system";

export default function CardItem(props) {
  function chooseCololor(statusi){
    if(statusi === 'New'){
      return(
      <div class="status-div" style={{ backgroundColor: '#90EE90' }}>
        <Typography color='#fff'>{props.status}</Typography>
      </div>
      )
    } else if (statusi === 'Fix'){
      return(
      <div class="status-div" style={{ backgroundColor: '#35baf6' }}>
        <Typography color='#fff'>{props.status}</Typography>
      </div>
      )
    }else{
      return(
      <div class="status-div" style={{ backgroundColor: '#d2a0f9' }}>
        <Typography color='#fff'>{props.status}</Typography>
      </div>
      )
    }
  }
  
  return (
    <div class="card">
      <div>
        <Typography variant="h6">{props.version}</Typography>
      </div>
      <div class='card-div' style={{}}>
      { chooseCololor(props.status) }
        <img
          class="image"
          src={props.image}
          alt="img"
          style={{ display: "inline-block" }}
        />
        <Typography variant='h6' style={{marginLeft: 20, marginTop: 20}}>{props.name}</Typography>
      </div>
      <div className="flex items-center">
        <Typography className="font-semibold" color="textSecondary">
          {props.description}
        </Typography>
      </div>
      <Button class='btn'>
        Download
      </Button>
    </div>
  );
}
