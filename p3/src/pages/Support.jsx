import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia
} from "@mui/material";

const contacts = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+0987654321",
    image: "https://via.placeholder.com/150"
  }
  // Add more contacts here
];

function Support() {
  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "20px"
      }}
    >
      <Grid container spacing={3}>
        {contacts.map((contact) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={contact.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={contact.image}
                alt={contact.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {contact.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {contact.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {contact.phone}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Support;
